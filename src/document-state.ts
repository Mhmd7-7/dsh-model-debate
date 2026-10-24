import { z } from 'zod';

// Deliberately browser-safe: no Buffer, filesystem, parser, or Node imports here.
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const canonicalBase64 = (value: string): boolean => {
  if (value.length > 14 * 1024 * 1024 || value.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(value)) return false;
  if (value.endsWith('==')) return (alphabet.indexOf(value.at(-3)!) & 15) === 0;
  if (value.endsWith('=')) return (alphabet.indexOf(value.at(-2)!) & 3) === 0;
  return true;
};
export const encodedDocumentSchema = z.object({
  name: z.string().min(1).max(255),
  data: z.string().min(4).max(14 * 1024 * 1024).refine(canonicalBase64, 'Invalid canonical document base64 encoding'),
  mediaType: z.string().max(150).optional(),
}).strict();
export const documentSchema = z.object({
  id: z.string().min(1).max(200), name: z.string().min(1).max(255), bytes: z.number().int().positive(), mediaType: z.string().min(1).max(150),
  sections: z.array(z.object({ reference: z.string().min(1).max(300), text: z.string().max(1000000) }).strict()).min(1).max(10000),
  warnings: z.array(z.string().max(1000)).max(100),
}).strict().refine(value => value.sections.reduce((n, section) => n + section.text.length, 0) <= 1000000, 'Extracted document exceeds the storage character limit');
export type EncodedDocument = z.infer<typeof encodedDocumentSchema>;
export type DocumentAttachment = z.infer<typeof documentSchema>;
export interface DocumentPolicy {
  maxFiles: number;
  maxFileBytes: number;
  maxTotalBytes: number;
  maxConversationFiles: number;
  maxExtractedChars: number;
  extensions: string[];
}
