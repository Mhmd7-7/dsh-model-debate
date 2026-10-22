import { encodedImageSchema, imageMediaTypes, imageRefSchema, type EncodedImage, type ImagePolicy, type ImageRef, type ModelInfo, type Settings } from './state.js';

export interface AttachmentContext {
  imageLimits: { maxImageBytes: number; maxImagesPerMessage: number; maxMessageImageBytes: number; mediaTypes: readonly string[] };
  admitPromptContent(content: readonly { type: 'image'; mediaType: EncodedImage['mediaType']; data: string; name?: string }[]): Promise<readonly { type: string; attachment?: unknown }[]>;
  readImage(ref: ImageRef, signal?: AbortSignal): Promise<{ ref: ImageRef; data: Uint8Array }>;
}
export interface ImageGateway {
  policy(): ImagePolicy;
  admit(images: readonly EncodedImage[]): Promise<ImageRef[]>;
  verify(images: readonly ImageRef[], signal?: AbortSignal): Promise<void>;
  read(image: ImageRef, signal?: AbortSignal): Promise<{ mediaType: ImageRef['mediaType']; data: string }>;
}
export class ImageInputError extends Error { constructor(message: string) { super(message); this.name = 'ImageInputError'; } }
const LIMITS = { maxImages: 4, maxImageBytes: 10 * 1024 * 1024, maxTotalBytes: 20 * 1024 * 1024 };
const encoded = /^[A-Za-z0-9+/]*={0,2}$/;
export const noImages: ImageGateway = {
  policy: () => ({ available: false, ...LIMITS, mediaTypes: imageMediaTypes }),
  admit: async images => { if (images.length) throw new ImageInputError('Image attachments are unavailable in this DSH profile.'); return []; },
  verify: async images => { if (images.length) throw new ImageInputError('Image attachments are unavailable in this DSH profile.'); },
  read: async () => { throw new ImageInputError('Image attachments are unavailable in this DSH profile.'); },
};
function positive(value: number, cap: number): number { return Number.isFinite(value) && value > 0 ? Math.min(Math.floor(value), cap) : 0; }
function errorMessage(error: unknown): string {
  const code = error && typeof error === 'object' && 'code' in error ? String(error.code) : '';
  const messages: Record<string, string> = {
    TOO_MANY_IMAGES: 'Too many images for the configured DSH image limit.', IMAGES_TOO_LARGE: 'The image batch exceeds the configured DSH byte limit.',
    UNSUPPORTED_IMAGE_TYPE: 'Unsupported image format. Use PNG, JPEG, WebP or GIF.', INVALID_IMAGE_BASE64: 'Invalid image encoding. Please choose the image again.',
    INVALID_IMAGE: 'Image could not be fully decoded. Choose a valid raster image.', IMAGE_TYPE_MISMATCH: 'Image bytes do not match the declared image type.',
    IMAGE_TOO_LARGE: 'Image exceeds the configured DSH byte limit.', IMAGE_TOO_MANY_PIXELS: 'Image exceeds the configured DSH pixel limit.', IMAGE_DIMENSION_TOO_LARGE: 'Image exceeds the configured DSH dimension limit.',
    ATTACHMENT_NOT_FOUND: 'A saved image is unavailable in this DSH attachment store.', ATTACHMENT_CORRUPT: 'A saved image failed its integrity check.', INVALID_ATTACHMENT_REF: 'A saved image reference is invalid.',
  };
  return messages[code] ?? 'DSH could not save or read the image. No image was silently omitted.';
}
export class DshImages implements ImageGateway {
  constructor(private store?: AttachmentContext) {}
  policy(): ImagePolicy {
    if (!this.store) return noImages.policy();
    const limits = this.store.imageLimits;
    return { available: true, maxImages: positive(limits.maxImagesPerMessage, LIMITS.maxImages), maxImageBytes: positive(limits.maxImageBytes, LIMITS.maxImageBytes), maxTotalBytes: positive(limits.maxMessageImageBytes, LIMITS.maxTotalBytes), mediaTypes: imageMediaTypes.filter(type => limits.mediaTypes.includes(type)) };
  }
  async admit(input: readonly EncodedImage[]): Promise<ImageRef[]> {
    if (!input.length) return [];
    if (!this.store) throw new ImageInputError('Image attachments are unavailable in this DSH profile.');
    const policy = this.policy();
    if (input.length > policy.maxImages) throw new ImageInputError(`Too many images. The current limit is ${policy.maxImages}.`);
    let total = 0;
    const images = input.map(value => {
      const image = encodedImageSchema.parse(value);
      if (!policy.mediaTypes.includes(image.mediaType)) throw new ImageInputError('Unsupported image format. Use an allowed PNG, JPEG, WebP or GIF image.');
      if (image.data.length % 4 !== 0 || !encoded.test(image.data)) throw new ImageInputError('Invalid image base64 encoding.');
      const bytes = Buffer.from(image.data, 'base64');
      if (!bytes.length || bytes.toString('base64') !== image.data) throw new ImageInputError('Invalid image base64 encoding.');
      if (bytes.length > policy.maxImageBytes) throw new ImageInputError(`Image exceeds the ${policy.maxImageBytes} byte input limit.`);
      total += bytes.length;
      return { ...image, name: image.name?.split(/[\\/]/).at(-1)?.replace(/[\x00-\x1f\x7f]/g, '').slice(0, 255) };
    });
    if (total > policy.maxTotalBytes) throw new ImageInputError(`Images exceed the ${policy.maxTotalBytes} byte total input limit.`);
    try {
      // DSH validates every member (including raster decoding) before committing the batch.
      const result = await this.store.admitPromptContent(images.map(image => ({ type: 'image' as const, ...image })));
      if (result.length !== images.length || result.some(part => part.type !== 'image')) throw new Error('Invalid admission result');
      return result.map(part => imageRefSchema.parse(part.attachment));
    } catch (error) { throw new ImageInputError(errorMessage(error)); }
  }
  async verify(images: readonly ImageRef[], signal?: AbortSignal): Promise<void> {
    if (!images.length) return;
    if (!this.store) throw new ImageInputError('Image attachments are unavailable in this DSH profile.');
    for (const image of images) { try { await this.store.readImage(imageRefSchema.parse(image), signal); } catch (e) { if (signal?.aborted) throw signal.reason; throw new ImageInputError(errorMessage(e)); } }
  }
  async read(image: ImageRef, signal?: AbortSignal): Promise<{ mediaType: ImageRef['mediaType']; data: string }> {
    if (!this.store) throw new ImageInputError('Image attachments are unavailable in this DSH profile.');
    try { const value = await this.store.readImage(imageRefSchema.parse(image), signal); return { mediaType: value.ref.mediaType, data: Buffer.from(value.data).toString('base64') }; }
    catch (e) { if (signal?.aborted) throw signal.reason; throw new ImageInputError(errorMessage(e)); }
  }
}
export function validateImageModels(settings: Settings, models: readonly ModelInfo[], count: number): void {
  if (!count) return;
  if (settings.tokenBudget !== null) throw new ImageInputError('Token-budgeted image debates are unavailable: this DSH SDK exposes no reliable pre-request image-token accounting. Clear the token budget or remove the images.');
  const participants = settings.participants.filter(p => p.enabled), reviewer = settings.reviewer ?? participants[0];
  for (const p of [...participants, reviewer]) {
    const model = models.find(m => m.provider === p.provider && m.model === p.model);
    if (model?.imageSupport !== 'supported') throw new ImageInputError(`Image input ${model?.imageSupport === 'unsupported' ? 'unsupported' : 'not confirmed'} for ${p.provider}/${p.model}. Select an image-capable model; no image was dropped or model substituted.`);
  }
}
