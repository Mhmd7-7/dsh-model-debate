"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/zod/v4/classic/external.js
  var external_exports = {};
  __export(external_exports, {
    $brand: () => $brand,
    $input: () => $input,
    $output: () => $output,
    NEVER: () => NEVER,
    TimePrecision: () => TimePrecision,
    ZodAny: () => ZodAny,
    ZodArray: () => ZodArray,
    ZodBase64: () => ZodBase64,
    ZodBase64URL: () => ZodBase64URL,
    ZodBigInt: () => ZodBigInt,
    ZodBigIntFormat: () => ZodBigIntFormat,
    ZodBoolean: () => ZodBoolean,
    ZodCIDRv4: () => ZodCIDRv4,
    ZodCIDRv6: () => ZodCIDRv6,
    ZodCUID: () => ZodCUID,
    ZodCUID2: () => ZodCUID2,
    ZodCatch: () => ZodCatch,
    ZodCodec: () => ZodCodec,
    ZodCustom: () => ZodCustom,
    ZodCustomStringFormat: () => ZodCustomStringFormat,
    ZodDate: () => ZodDate,
    ZodDefault: () => ZodDefault,
    ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
    ZodE164: () => ZodE164,
    ZodEmail: () => ZodEmail,
    ZodEmoji: () => ZodEmoji,
    ZodEnum: () => ZodEnum,
    ZodError: () => ZodError,
    ZodExactOptional: () => ZodExactOptional,
    ZodFile: () => ZodFile,
    ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
    ZodFunction: () => ZodFunction,
    ZodGUID: () => ZodGUID,
    ZodIPv4: () => ZodIPv4,
    ZodIPv6: () => ZodIPv6,
    ZodISODate: () => ZodISODate,
    ZodISODateTime: () => ZodISODateTime,
    ZodISODuration: () => ZodISODuration,
    ZodISOTime: () => ZodISOTime,
    ZodIntersection: () => ZodIntersection,
    ZodIssueCode: () => ZodIssueCode,
    ZodJWT: () => ZodJWT,
    ZodKSUID: () => ZodKSUID,
    ZodLazy: () => ZodLazy,
    ZodLiteral: () => ZodLiteral,
    ZodMAC: () => ZodMAC,
    ZodMap: () => ZodMap,
    ZodNaN: () => ZodNaN,
    ZodNanoID: () => ZodNanoID,
    ZodNever: () => ZodNever,
    ZodNonOptional: () => ZodNonOptional,
    ZodNull: () => ZodNull,
    ZodNullable: () => ZodNullable,
    ZodNumber: () => ZodNumber,
    ZodNumberFormat: () => ZodNumberFormat,
    ZodObject: () => ZodObject,
    ZodOptional: () => ZodOptional,
    ZodPipe: () => ZodPipe,
    ZodPrefault: () => ZodPrefault,
    ZodPreprocess: () => ZodPreprocess,
    ZodPromise: () => ZodPromise,
    ZodReadonly: () => ZodReadonly,
    ZodRealError: () => ZodRealError,
    ZodRecord: () => ZodRecord,
    ZodSet: () => ZodSet,
    ZodString: () => ZodString,
    ZodStringFormat: () => ZodStringFormat,
    ZodSuccess: () => ZodSuccess,
    ZodSymbol: () => ZodSymbol,
    ZodTemplateLiteral: () => ZodTemplateLiteral,
    ZodTransform: () => ZodTransform,
    ZodTuple: () => ZodTuple,
    ZodType: () => ZodType,
    ZodULID: () => ZodULID,
    ZodURL: () => ZodURL,
    ZodUUID: () => ZodUUID,
    ZodUndefined: () => ZodUndefined,
    ZodUnion: () => ZodUnion,
    ZodUnknown: () => ZodUnknown,
    ZodVoid: () => ZodVoid,
    ZodXID: () => ZodXID,
    ZodXor: () => ZodXor,
    _ZodString: () => _ZodString,
    _default: () => _default2,
    _function: () => _function,
    any: () => any,
    array: () => array,
    base64: () => base642,
    base64url: () => base64url2,
    bigint: () => bigint2,
    boolean: () => boolean2,
    catch: () => _catch2,
    check: () => check,
    cidrv4: () => cidrv42,
    cidrv6: () => cidrv62,
    clone: () => clone,
    codec: () => codec,
    coerce: () => coerce_exports,
    config: () => config,
    core: () => core_exports2,
    cuid: () => cuid3,
    cuid2: () => cuid22,
    custom: () => custom,
    date: () => date3,
    decode: () => decode2,
    decodeAsync: () => decodeAsync2,
    describe: () => describe2,
    discriminatedUnion: () => discriminatedUnion,
    e164: () => e1642,
    email: () => email2,
    emoji: () => emoji2,
    encode: () => encode2,
    encodeAsync: () => encodeAsync2,
    endsWith: () => _endsWith,
    enum: () => _enum2,
    exactOptional: () => exactOptional,
    file: () => file,
    flattenError: () => flattenError,
    float32: () => float32,
    float64: () => float64,
    formatError: () => formatError,
    fromJSONSchema: () => fromJSONSchema,
    function: () => _function,
    getErrorMap: () => getErrorMap,
    globalRegistry: () => globalRegistry,
    gt: () => _gt,
    gte: () => _gte,
    guid: () => guid2,
    hash: () => hash,
    hex: () => hex2,
    hostname: () => hostname2,
    httpUrl: () => httpUrl,
    includes: () => _includes,
    instanceof: () => _instanceof,
    int: () => int,
    int32: () => int32,
    int64: () => int64,
    intersection: () => intersection,
    invertCodec: () => invertCodec,
    ipv4: () => ipv42,
    ipv6: () => ipv62,
    iso: () => iso_exports,
    json: () => json,
    jwt: () => jwt,
    keyof: () => keyof,
    ksuid: () => ksuid2,
    lazy: () => lazy,
    length: () => _length,
    literal: () => literal,
    locales: () => locales_exports,
    looseObject: () => looseObject,
    looseRecord: () => looseRecord,
    lowercase: () => _lowercase,
    lt: () => _lt,
    lte: () => _lte,
    mac: () => mac2,
    map: () => map,
    maxLength: () => _maxLength,
    maxSize: () => _maxSize,
    meta: () => meta2,
    mime: () => _mime,
    minLength: () => _minLength,
    minSize: () => _minSize,
    multipleOf: () => _multipleOf,
    nan: () => nan,
    nanoid: () => nanoid2,
    nativeEnum: () => nativeEnum,
    negative: () => _negative,
    never: () => never,
    nonnegative: () => _nonnegative,
    nonoptional: () => nonoptional,
    nonpositive: () => _nonpositive,
    normalize: () => _normalize,
    null: () => _null3,
    nullable: () => nullable,
    nullish: () => nullish2,
    number: () => number2,
    object: () => object,
    optional: () => optional,
    overwrite: () => _overwrite,
    parse: () => parse2,
    parseAsync: () => parseAsync2,
    partialRecord: () => partialRecord,
    pipe: () => pipe,
    positive: () => _positive,
    prefault: () => prefault,
    preprocess: () => preprocess,
    prettifyError: () => prettifyError,
    promise: () => promise,
    property: () => _property,
    readonly: () => readonly,
    record: () => record,
    refine: () => refine,
    regex: () => _regex,
    regexes: () => regexes_exports,
    registry: () => registry,
    safeDecode: () => safeDecode2,
    safeDecodeAsync: () => safeDecodeAsync2,
    safeEncode: () => safeEncode2,
    safeEncodeAsync: () => safeEncodeAsync2,
    safeParse: () => safeParse2,
    safeParseAsync: () => safeParseAsync2,
    set: () => set,
    setErrorMap: () => setErrorMap,
    size: () => _size,
    slugify: () => _slugify,
    startsWith: () => _startsWith,
    strictObject: () => strictObject,
    string: () => string2,
    stringFormat: () => stringFormat,
    stringbool: () => stringbool,
    success: () => success,
    superRefine: () => superRefine,
    symbol: () => symbol,
    templateLiteral: () => templateLiteral,
    toJSONSchema: () => toJSONSchema,
    toLowerCase: () => _toLowerCase,
    toUpperCase: () => _toUpperCase,
    transform: () => transform,
    treeifyError: () => treeifyError,
    trim: () => _trim,
    tuple: () => tuple,
    uint32: () => uint32,
    uint64: () => uint64,
    ulid: () => ulid2,
    undefined: () => _undefined3,
    union: () => union,
    unknown: () => unknown,
    uppercase: () => _uppercase,
    url: () => url,
    util: () => util_exports,
    uuid: () => uuid2,
    uuidv4: () => uuidv4,
    uuidv6: () => uuidv6,
    uuidv7: () => uuidv7,
    void: () => _void2,
    xid: () => xid2,
    xor: () => xor
  });

  // node_modules/zod/v4/core/index.js
  var core_exports2 = {};
  __export(core_exports2, {
    $ZodAny: () => $ZodAny,
    $ZodArray: () => $ZodArray,
    $ZodAsyncError: () => $ZodAsyncError,
    $ZodBase64: () => $ZodBase64,
    $ZodBase64URL: () => $ZodBase64URL,
    $ZodBigInt: () => $ZodBigInt,
    $ZodBigIntFormat: () => $ZodBigIntFormat,
    $ZodBoolean: () => $ZodBoolean,
    $ZodCIDRv4: () => $ZodCIDRv4,
    $ZodCIDRv6: () => $ZodCIDRv6,
    $ZodCUID: () => $ZodCUID,
    $ZodCUID2: () => $ZodCUID2,
    $ZodCatch: () => $ZodCatch,
    $ZodCheck: () => $ZodCheck,
    $ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
    $ZodCheckEndsWith: () => $ZodCheckEndsWith,
    $ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
    $ZodCheckIncludes: () => $ZodCheckIncludes,
    $ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
    $ZodCheckLessThan: () => $ZodCheckLessThan,
    $ZodCheckLowerCase: () => $ZodCheckLowerCase,
    $ZodCheckMaxLength: () => $ZodCheckMaxLength,
    $ZodCheckMaxSize: () => $ZodCheckMaxSize,
    $ZodCheckMimeType: () => $ZodCheckMimeType,
    $ZodCheckMinLength: () => $ZodCheckMinLength,
    $ZodCheckMinSize: () => $ZodCheckMinSize,
    $ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
    $ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
    $ZodCheckOverwrite: () => $ZodCheckOverwrite,
    $ZodCheckProperty: () => $ZodCheckProperty,
    $ZodCheckRegex: () => $ZodCheckRegex,
    $ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
    $ZodCheckStartsWith: () => $ZodCheckStartsWith,
    $ZodCheckStringFormat: () => $ZodCheckStringFormat,
    $ZodCheckUpperCase: () => $ZodCheckUpperCase,
    $ZodCodec: () => $ZodCodec,
    $ZodCustom: () => $ZodCustom,
    $ZodCustomStringFormat: () => $ZodCustomStringFormat,
    $ZodDate: () => $ZodDate,
    $ZodDefault: () => $ZodDefault,
    $ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
    $ZodE164: () => $ZodE164,
    $ZodEmail: () => $ZodEmail,
    $ZodEmoji: () => $ZodEmoji,
    $ZodEncodeError: () => $ZodEncodeError,
    $ZodEnum: () => $ZodEnum,
    $ZodError: () => $ZodError,
    $ZodExactOptional: () => $ZodExactOptional,
    $ZodFile: () => $ZodFile,
    $ZodFunction: () => $ZodFunction,
    $ZodGUID: () => $ZodGUID,
    $ZodIPv4: () => $ZodIPv4,
    $ZodIPv6: () => $ZodIPv6,
    $ZodISODate: () => $ZodISODate,
    $ZodISODateTime: () => $ZodISODateTime,
    $ZodISODuration: () => $ZodISODuration,
    $ZodISOTime: () => $ZodISOTime,
    $ZodIntersection: () => $ZodIntersection,
    $ZodJWT: () => $ZodJWT,
    $ZodKSUID: () => $ZodKSUID,
    $ZodLazy: () => $ZodLazy,
    $ZodLiteral: () => $ZodLiteral,
    $ZodMAC: () => $ZodMAC,
    $ZodMap: () => $ZodMap,
    $ZodNaN: () => $ZodNaN,
    $ZodNanoID: () => $ZodNanoID,
    $ZodNever: () => $ZodNever,
    $ZodNonOptional: () => $ZodNonOptional,
    $ZodNull: () => $ZodNull,
    $ZodNullable: () => $ZodNullable,
    $ZodNumber: () => $ZodNumber,
    $ZodNumberFormat: () => $ZodNumberFormat,
    $ZodObject: () => $ZodObject,
    $ZodObjectJIT: () => $ZodObjectJIT,
    $ZodOptional: () => $ZodOptional,
    $ZodPipe: () => $ZodPipe,
    $ZodPrefault: () => $ZodPrefault,
    $ZodPreprocess: () => $ZodPreprocess,
    $ZodPromise: () => $ZodPromise,
    $ZodReadonly: () => $ZodReadonly,
    $ZodRealError: () => $ZodRealError,
    $ZodRecord: () => $ZodRecord,
    $ZodRegistry: () => $ZodRegistry,
    $ZodSet: () => $ZodSet,
    $ZodString: () => $ZodString,
    $ZodStringFormat: () => $ZodStringFormat,
    $ZodSuccess: () => $ZodSuccess,
    $ZodSymbol: () => $ZodSymbol,
    $ZodTemplateLiteral: () => $ZodTemplateLiteral,
    $ZodTransform: () => $ZodTransform,
    $ZodTuple: () => $ZodTuple,
    $ZodType: () => $ZodType,
    $ZodULID: () => $ZodULID,
    $ZodURL: () => $ZodURL,
    $ZodUUID: () => $ZodUUID,
    $ZodUndefined: () => $ZodUndefined,
    $ZodUnion: () => $ZodUnion,
    $ZodUnknown: () => $ZodUnknown,
    $ZodVoid: () => $ZodVoid,
    $ZodXID: () => $ZodXID,
    $ZodXor: () => $ZodXor,
    $brand: () => $brand,
    $constructor: () => $constructor,
    $input: () => $input,
    $output: () => $output,
    Doc: () => Doc,
    JSONSchema: () => json_schema_exports,
    JSONSchemaGenerator: () => JSONSchemaGenerator,
    NEVER: () => NEVER,
    TimePrecision: () => TimePrecision,
    _any: () => _any,
    _array: () => _array,
    _base64: () => _base64,
    _base64url: () => _base64url,
    _bigint: () => _bigint,
    _boolean: () => _boolean,
    _catch: () => _catch,
    _check: () => _check,
    _cidrv4: () => _cidrv4,
    _cidrv6: () => _cidrv6,
    _coercedBigint: () => _coercedBigint,
    _coercedBoolean: () => _coercedBoolean,
    _coercedDate: () => _coercedDate,
    _coercedNumber: () => _coercedNumber,
    _coercedString: () => _coercedString,
    _cuid: () => _cuid,
    _cuid2: () => _cuid2,
    _custom: () => _custom,
    _date: () => _date,
    _decode: () => _decode,
    _decodeAsync: () => _decodeAsync,
    _default: () => _default,
    _discriminatedUnion: () => _discriminatedUnion,
    _e164: () => _e164,
    _email: () => _email,
    _emoji: () => _emoji2,
    _encode: () => _encode,
    _encodeAsync: () => _encodeAsync,
    _endsWith: () => _endsWith,
    _enum: () => _enum,
    _file: () => _file,
    _float32: () => _float32,
    _float64: () => _float64,
    _gt: () => _gt,
    _gte: () => _gte,
    _guid: () => _guid,
    _includes: () => _includes,
    _int: () => _int,
    _int32: () => _int32,
    _int64: () => _int64,
    _intersection: () => _intersection,
    _ipv4: () => _ipv4,
    _ipv6: () => _ipv6,
    _isoDate: () => _isoDate,
    _isoDateTime: () => _isoDateTime,
    _isoDuration: () => _isoDuration,
    _isoTime: () => _isoTime,
    _jwt: () => _jwt,
    _ksuid: () => _ksuid,
    _lazy: () => _lazy,
    _length: () => _length,
    _literal: () => _literal,
    _lowercase: () => _lowercase,
    _lt: () => _lt,
    _lte: () => _lte,
    _mac: () => _mac,
    _map: () => _map,
    _max: () => _lte,
    _maxLength: () => _maxLength,
    _maxSize: () => _maxSize,
    _mime: () => _mime,
    _min: () => _gte,
    _minLength: () => _minLength,
    _minSize: () => _minSize,
    _multipleOf: () => _multipleOf,
    _nan: () => _nan,
    _nanoid: () => _nanoid,
    _nativeEnum: () => _nativeEnum,
    _negative: () => _negative,
    _never: () => _never,
    _nonnegative: () => _nonnegative,
    _nonoptional: () => _nonoptional,
    _nonpositive: () => _nonpositive,
    _normalize: () => _normalize,
    _null: () => _null2,
    _nullable: () => _nullable,
    _number: () => _number,
    _optional: () => _optional,
    _overwrite: () => _overwrite,
    _parse: () => _parse,
    _parseAsync: () => _parseAsync,
    _pipe: () => _pipe,
    _positive: () => _positive,
    _promise: () => _promise,
    _property: () => _property,
    _readonly: () => _readonly,
    _record: () => _record,
    _refine: () => _refine,
    _regex: () => _regex,
    _safeDecode: () => _safeDecode,
    _safeDecodeAsync: () => _safeDecodeAsync,
    _safeEncode: () => _safeEncode,
    _safeEncodeAsync: () => _safeEncodeAsync,
    _safeParse: () => _safeParse,
    _safeParseAsync: () => _safeParseAsync,
    _set: () => _set,
    _size: () => _size,
    _slugify: () => _slugify,
    _startsWith: () => _startsWith,
    _string: () => _string,
    _stringFormat: () => _stringFormat,
    _stringbool: () => _stringbool,
    _success: () => _success,
    _superRefine: () => _superRefine,
    _symbol: () => _symbol,
    _templateLiteral: () => _templateLiteral,
    _toLowerCase: () => _toLowerCase,
    _toUpperCase: () => _toUpperCase,
    _transform: () => _transform,
    _trim: () => _trim,
    _tuple: () => _tuple,
    _uint32: () => _uint32,
    _uint64: () => _uint64,
    _ulid: () => _ulid,
    _undefined: () => _undefined2,
    _union: () => _union,
    _unknown: () => _unknown,
    _uppercase: () => _uppercase,
    _url: () => _url,
    _uuid: () => _uuid,
    _uuidv4: () => _uuidv4,
    _uuidv6: () => _uuidv6,
    _uuidv7: () => _uuidv7,
    _void: () => _void,
    _xid: () => _xid,
    _xor: () => _xor,
    clone: () => clone,
    config: () => config,
    createStandardJSONSchemaMethod: () => createStandardJSONSchemaMethod,
    createToJSONSchemaMethod: () => createToJSONSchemaMethod,
    decode: () => decode,
    decodeAsync: () => decodeAsync,
    describe: () => describe,
    encode: () => encode,
    encodeAsync: () => encodeAsync,
    extractDefs: () => extractDefs,
    finalize: () => finalize,
    flattenError: () => flattenError,
    formatError: () => formatError,
    globalConfig: () => globalConfig,
    globalRegistry: () => globalRegistry,
    initializeContext: () => initializeContext,
    isValidBase64: () => isValidBase64,
    isValidBase64URL: () => isValidBase64URL,
    isValidJWT: () => isValidJWT,
    locales: () => locales_exports,
    meta: () => meta,
    parse: () => parse,
    parseAsync: () => parseAsync,
    prettifyError: () => prettifyError,
    process: () => process,
    regexes: () => regexes_exports,
    registry: () => registry,
    safeDecode: () => safeDecode,
    safeDecodeAsync: () => safeDecodeAsync,
    safeEncode: () => safeEncode,
    safeEncodeAsync: () => safeEncodeAsync,
    safeParse: () => safeParse,
    safeParseAsync: () => safeParseAsync,
    toDotPath: () => toDotPath,
    toJSONSchema: () => toJSONSchema,
    treeifyError: () => treeifyError,
    util: () => util_exports,
    version: () => version
  });

  // node_modules/zod/v4/core/core.js
  var _a;
  var NEVER = /* @__PURE__ */ Object.freeze({
    status: "aborted"
  });
  // @__NO_SIDE_EFFECTS__
  function $constructor(name, initializer3, params) {
    function init(inst, def) {
      if (!inst._zod) {
        Object.defineProperty(inst, "_zod", {
          value: {
            def,
            constr: _,
            traits: /* @__PURE__ */ new Set()
          },
          enumerable: false
        });
      }
      if (inst._zod.traits.has(name)) {
        return;
      }
      inst._zod.traits.add(name);
      initializer3(inst, def);
      const proto = _.prototype;
      const keys = Object.keys(proto);
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (!(k in inst)) {
          inst[k] = proto[k].bind(inst);
        }
      }
    }
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", { value: name });
    function _(def) {
      var _a3;
      const inst = params?.Parent ? new Definition() : this;
      init(inst, def);
      (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
      for (const fn of inst._zod.deferred) {
        fn();
      }
      return inst;
    }
    Object.defineProperty(_, "init", { value: init });
    Object.defineProperty(_, Symbol.hasInstance, {
      value: (inst) => {
        if (params?.Parent && inst instanceof params.Parent)
          return true;
        return inst?._zod?.traits?.has(name);
      }
    });
    Object.defineProperty(_, "name", { value: name });
    return _;
  }
  var $brand = Symbol("zod_brand");
  var $ZodAsyncError = class extends Error {
    constructor() {
      super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
  };
  var $ZodEncodeError = class extends Error {
    constructor(name) {
      super(`Encountered unidirectional transform during encode: ${name}`);
      this.name = "ZodEncodeError";
    }
  };
  (_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
  var globalConfig = globalThis.__zod_globalConfig;
  function config(newConfig) {
    if (newConfig)
      Object.assign(globalConfig, newConfig);
    return globalConfig;
  }

  // node_modules/zod/v4/core/util.js
  var util_exports = {};
  __export(util_exports, {
    BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
    Class: () => Class,
    NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
    aborted: () => aborted,
    allowsEval: () => allowsEval,
    assert: () => assert,
    assertEqual: () => assertEqual,
    assertIs: () => assertIs,
    assertNever: () => assertNever,
    assertNotEqual: () => assertNotEqual,
    assignProp: () => assignProp,
    base64ToUint8Array: () => base64ToUint8Array,
    base64urlToUint8Array: () => base64urlToUint8Array,
    cached: () => cached,
    captureStackTrace: () => captureStackTrace,
    cleanEnum: () => cleanEnum,
    cleanRegex: () => cleanRegex,
    clone: () => clone,
    cloneDef: () => cloneDef,
    createTransparentProxy: () => createTransparentProxy,
    defineLazy: () => defineLazy,
    esc: () => esc,
    escapeRegex: () => escapeRegex,
    explicitlyAborted: () => explicitlyAborted,
    extend: () => extend,
    finalizeIssue: () => finalizeIssue,
    floatSafeRemainder: () => floatSafeRemainder,
    getElementAtPath: () => getElementAtPath,
    getEnumValues: () => getEnumValues,
    getLengthableOrigin: () => getLengthableOrigin,
    getParsedType: () => getParsedType,
    getSizableOrigin: () => getSizableOrigin,
    hexToUint8Array: () => hexToUint8Array,
    isObject: () => isObject,
    isPlainObject: () => isPlainObject,
    issue: () => issue,
    joinValues: () => joinValues,
    jsonStringifyReplacer: () => jsonStringifyReplacer,
    merge: () => merge,
    mergeDefs: () => mergeDefs,
    normalizeParams: () => normalizeParams,
    nullish: () => nullish,
    numKeys: () => numKeys,
    objectClone: () => objectClone,
    omit: () => omit,
    optionalKeys: () => optionalKeys,
    parsedType: () => parsedType,
    partial: () => partial,
    pick: () => pick,
    prefixIssues: () => prefixIssues,
    primitiveTypes: () => primitiveTypes,
    promiseAllObject: () => promiseAllObject,
    propertyKeyTypes: () => propertyKeyTypes,
    randomString: () => randomString,
    required: () => required,
    safeExtend: () => safeExtend,
    shallowClone: () => shallowClone,
    slugify: () => slugify,
    stringifyPrimitive: () => stringifyPrimitive,
    uint8ArrayToBase64: () => uint8ArrayToBase64,
    uint8ArrayToBase64url: () => uint8ArrayToBase64url,
    uint8ArrayToHex: () => uint8ArrayToHex,
    unwrapMessage: () => unwrapMessage
  });
  function assertEqual(val) {
    return val;
  }
  function assertNotEqual(val) {
    return val;
  }
  function assertIs(_arg) {
  }
  function assertNever(_x) {
    throw new Error("Unexpected value in exhaustive check");
  }
  function assert(_) {
  }
  function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v) => typeof v === "number");
    const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
    return values;
  }
  function joinValues(array2, separator = "|") {
    return array2.map((val) => stringifyPrimitive(val)).join(separator);
  }
  function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint")
      return value.toString();
    return value;
  }
  function cached(getter) {
    const set2 = false;
    return {
      get value() {
        if (!set2) {
          const value = getter();
          Object.defineProperty(this, "value", { value });
          return value;
        }
        throw new Error("cached value already set");
      }
    };
  }
  function nullish(input) {
    return input === null || input === void 0;
  }
  function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
  }
  function floatSafeRemainder(val, step) {
    const ratio = val / step;
    const roundedRatio = Math.round(ratio);
    const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
    if (Math.abs(ratio - roundedRatio) < tolerance)
      return 0;
    return ratio - roundedRatio;
  }
  var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
  function defineLazy(object2, key, getter) {
    let value = void 0;
    Object.defineProperty(object2, key, {
      get() {
        if (value === EVALUATING) {
          return void 0;
        }
        if (value === void 0) {
          value = EVALUATING;
          value = getter();
        }
        return value;
      },
      set(v) {
        Object.defineProperty(object2, key, {
          value: v
          // configurable: true,
        });
      },
      configurable: true
    });
  }
  function objectClone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
  }
  function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
      value,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  function mergeDefs(...defs) {
    const mergedDescriptors = {};
    for (const def of defs) {
      const descriptors = Object.getOwnPropertyDescriptors(def);
      Object.assign(mergedDescriptors, descriptors);
    }
    return Object.defineProperties({}, mergedDescriptors);
  }
  function cloneDef(schema) {
    return mergeDefs(schema._zod.def);
  }
  function getElementAtPath(obj, path) {
    if (!path)
      return obj;
    return path.reduce((acc, key) => acc?.[key], obj);
  }
  function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key) => promisesObj[key]);
    return Promise.all(promises).then((results) => {
      const resolvedObj = {};
      for (let i = 0; i < keys.length; i++) {
        resolvedObj[keys[i]] = results[i];
      }
      return resolvedObj;
    });
  }
  function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str2 = "";
    for (let i = 0; i < length; i++) {
      str2 += chars[Math.floor(Math.random() * chars.length)];
    }
    return str2;
  }
  function esc(str2) {
    return JSON.stringify(str2);
  }
  function slugify(input) {
    return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
  };
  function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
  }
  var allowsEval = /* @__PURE__ */ cached(() => {
    if (globalConfig.jitless) {
      return false;
    }
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
      return false;
    }
    try {
      const F = Function;
      new F("");
      return true;
    } catch (_) {
      return false;
    }
  });
  function isPlainObject(o) {
    if (isObject(o) === false)
      return false;
    const ctor = o.constructor;
    if (ctor === void 0)
      return true;
    if (typeof ctor !== "function")
      return true;
    const prot = ctor.prototype;
    if (isObject(prot) === false)
      return false;
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
      return false;
    }
    return true;
  }
  function shallowClone(o) {
    if (isPlainObject(o))
      return { ...o };
    if (Array.isArray(o))
      return [...o];
    if (o instanceof Map)
      return new Map(o);
    if (o instanceof Set)
      return new Set(o);
    return o;
  }
  function numKeys(data) {
    let keyCount = 0;
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        keyCount++;
      }
    }
    return keyCount;
  }
  var getParsedType = (data) => {
    const t = typeof data;
    switch (t) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(data) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        if (Array.isArray(data)) {
          return "array";
        }
        if (data === null) {
          return "null";
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return "promise";
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return "map";
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return "set";
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return "date";
        }
        if (typeof File !== "undefined" && data instanceof File) {
          return "file";
        }
        return "object";
      default:
        throw new Error(`Unknown data type: ${t}`);
    }
  };
  var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
  var primitiveTypes = /* @__PURE__ */ new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
  ]);
  function escapeRegex(str2) {
    return str2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function clone(inst, def, params) {
    const cl = new inst._zod.constr(def ?? inst._zod.def);
    if (!def || params?.parent)
      cl._zod.parent = inst;
    return cl;
  }
  function normalizeParams(_params) {
    const params = _params;
    if (!params)
      return {};
    if (typeof params === "string")
      return { error: () => params };
    if (params?.message !== void 0) {
      if (params?.error !== void 0)
        throw new Error("Cannot specify both `message` and `error` params");
      params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string")
      return { ...params, error: () => params.error };
    return params;
  }
  function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
      get(_, prop, receiver) {
        target ?? (target = getter());
        return Reflect.get(target, prop, receiver);
      },
      set(_, prop, value, receiver) {
        target ?? (target = getter());
        return Reflect.set(target, prop, value, receiver);
      },
      has(_, prop) {
        target ?? (target = getter());
        return Reflect.has(target, prop);
      },
      deleteProperty(_, prop) {
        target ?? (target = getter());
        return Reflect.deleteProperty(target, prop);
      },
      ownKeys(_) {
        target ?? (target = getter());
        return Reflect.ownKeys(target);
      },
      getOwnPropertyDescriptor(_, prop) {
        target ?? (target = getter());
        return Reflect.getOwnPropertyDescriptor(target, prop);
      },
      defineProperty(_, prop, descriptor) {
        target ?? (target = getter());
        return Reflect.defineProperty(target, prop, descriptor);
      }
    });
  }
  function stringifyPrimitive(value) {
    if (typeof value === "bigint")
      return value.toString() + "n";
    if (typeof value === "string")
      return `"${value}"`;
    return `${value}`;
  }
  function optionalKeys(shape) {
    return Object.keys(shape).filter((k) => {
      return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
    });
  }
  var NUMBER_FORMAT_RANGES = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
  };
  var BIGINT_FORMAT_RANGES = {
    int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
    uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
  };
  function pick(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
      throw new Error(".pick() cannot be used on object schemas containing refinements");
    }
    const def = mergeDefs(schema._zod.def, {
      get shape() {
        const newShape = {};
        for (const key in mask) {
          if (!(key in currDef.shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          newShape[key] = currDef.shape[key];
        }
        assignProp(this, "shape", newShape);
        return newShape;
      },
      checks: []
    });
    return clone(schema, def);
  }
  function omit(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
      throw new Error(".omit() cannot be used on object schemas containing refinements");
    }
    const def = mergeDefs(schema._zod.def, {
      get shape() {
        const newShape = { ...schema._zod.def.shape };
        for (const key in mask) {
          if (!(key in currDef.shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          delete newShape[key];
        }
        assignProp(this, "shape", newShape);
        return newShape;
      },
      checks: []
    });
    return clone(schema, def);
  }
  function extend(schema, shape) {
    if (!isPlainObject(shape)) {
      throw new Error("Invalid input to extend: expected a plain object");
    }
    const checks = schema._zod.def.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
      const existingShape = schema._zod.def.shape;
      for (const key in shape) {
        if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) {
          throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
        }
      }
    }
    const def = mergeDefs(schema._zod.def, {
      get shape() {
        const _shape = { ...schema._zod.def.shape, ...shape };
        assignProp(this, "shape", _shape);
        return _shape;
      }
    });
    return clone(schema, def);
  }
  function safeExtend(schema, shape) {
    if (!isPlainObject(shape)) {
      throw new Error("Invalid input to safeExtend: expected a plain object");
    }
    const def = mergeDefs(schema._zod.def, {
      get shape() {
        const _shape = { ...schema._zod.def.shape, ...shape };
        assignProp(this, "shape", _shape);
        return _shape;
      }
    });
    return clone(schema, def);
  }
  function merge(a, b) {
    if (a._zod.def.checks?.length) {
      throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    }
    const def = mergeDefs(a._zod.def, {
      get shape() {
        const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
        assignProp(this, "shape", _shape);
        return _shape;
      },
      get catchall() {
        return b._zod.def.catchall;
      },
      checks: b._zod.def.checks ?? []
    });
    return clone(a, def);
  }
  function partial(Class2, schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
      throw new Error(".partial() cannot be used on object schemas containing refinements");
    }
    const def = mergeDefs(schema._zod.def, {
      get shape() {
        const oldShape = schema._zod.def.shape;
        const shape = { ...oldShape };
        if (mask) {
          for (const key in mask) {
            if (!(key in oldShape)) {
              throw new Error(`Unrecognized key: "${key}"`);
            }
            if (!mask[key])
              continue;
            shape[key] = Class2 ? new Class2({
              type: "optional",
              innerType: oldShape[key]
            }) : oldShape[key];
          }
        } else {
          for (const key in oldShape) {
            shape[key] = Class2 ? new Class2({
              type: "optional",
              innerType: oldShape[key]
            }) : oldShape[key];
          }
        }
        assignProp(this, "shape", shape);
        return shape;
      },
      checks: []
    });
    return clone(schema, def);
  }
  function required(Class2, schema, mask) {
    const def = mergeDefs(schema._zod.def, {
      get shape() {
        const oldShape = schema._zod.def.shape;
        const shape = { ...oldShape };
        if (mask) {
          for (const key in mask) {
            if (!(key in shape)) {
              throw new Error(`Unrecognized key: "${key}"`);
            }
            if (!mask[key])
              continue;
            shape[key] = new Class2({
              type: "nonoptional",
              innerType: oldShape[key]
            });
          }
        } else {
          for (const key in oldShape) {
            shape[key] = new Class2({
              type: "nonoptional",
              innerType: oldShape[key]
            });
          }
        }
        assignProp(this, "shape", shape);
        return shape;
      }
    });
    return clone(schema, def);
  }
  function aborted(x, startIndex = 0) {
    if (x.aborted === true)
      return true;
    for (let i = startIndex; i < x.issues.length; i++) {
      if (x.issues[i]?.continue !== true) {
        return true;
      }
    }
    return false;
  }
  function explicitlyAborted(x, startIndex = 0) {
    if (x.aborted === true)
      return true;
    for (let i = startIndex; i < x.issues.length; i++) {
      if (x.issues[i]?.continue === false) {
        return true;
      }
    }
    return false;
  }
  function prefixIssues(path, issues) {
    return issues.map((iss) => {
      var _a3;
      (_a3 = iss).path ?? (_a3.path = []);
      iss.path.unshift(path);
      return iss;
    });
  }
  function unwrapMessage(message) {
    return typeof message === "string" ? message : message?.message;
  }
  function finalizeIssue(iss, ctx, config2) {
    const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
    const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
    rest.path ?? (rest.path = []);
    rest.message = message;
    if (ctx?.reportInput) {
      rest.input = _input;
    }
    return rest;
  }
  function getSizableOrigin(input) {
    if (input instanceof Set)
      return "set";
    if (input instanceof Map)
      return "map";
    if (input instanceof File)
      return "file";
    return "unknown";
  }
  function getLengthableOrigin(input) {
    if (Array.isArray(input))
      return "array";
    if (typeof input === "string")
      return "string";
    return "unknown";
  }
  function parsedType(data) {
    const t = typeof data;
    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "nan" : "number";
      }
      case "object": {
        if (data === null) {
          return "null";
        }
        if (Array.isArray(data)) {
          return "array";
        }
        const obj = data;
        if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
          return obj.constructor.name;
        }
      }
    }
    return t;
  }
  function issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
      return {
        message: iss,
        code: "custom",
        input,
        inst
      };
    }
    return { ...iss };
  }
  function cleanEnum(obj) {
    return Object.entries(obj).filter(([k, _]) => {
      return Number.isNaN(Number.parseInt(k, 10));
    }).map((el) => el[1]);
  }
  function base64ToUint8Array(base643) {
    const binaryString = atob(base643);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
  function uint8ArrayToBase64(bytes) {
    let binaryString = "";
    for (let i = 0; i < bytes.length; i++) {
      binaryString += String.fromCharCode(bytes[i]);
    }
    return btoa(binaryString);
  }
  function base64urlToUint8Array(base64url3) {
    const base643 = base64url3.replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - base643.length % 4) % 4);
    return base64ToUint8Array(base643 + padding);
  }
  function uint8ArrayToBase64url(bytes) {
    return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  function hexToUint8Array(hex3) {
    const cleanHex = hex3.replace(/^0x/, "");
    if (cleanHex.length % 2 !== 0) {
      throw new Error("Invalid hex string length");
    }
    const bytes = new Uint8Array(cleanHex.length / 2);
    for (let i = 0; i < cleanHex.length; i += 2) {
      bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
    }
    return bytes;
  }
  function uint8ArrayToHex(bytes) {
    return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  var Class = class {
    constructor(..._args) {
    }
  };

  // node_modules/zod/v4/core/errors.js
  var initializer = (inst, def) => {
    inst.name = "$ZodError";
    Object.defineProperty(inst, "_zod", {
      value: inst._zod,
      enumerable: false
    });
    Object.defineProperty(inst, "issues", {
      value: def,
      enumerable: false
    });
    inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
    Object.defineProperty(inst, "toString", {
      value: () => inst.message,
      enumerable: false
    });
  };
  var $ZodError = $constructor("$ZodError", initializer);
  var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
  function flattenError(error51, mapper = (issue2) => issue2.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error51.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  function formatError(error51, mapper = (issue2) => issue2.message) {
    const fieldErrors = { _errors: [] };
    const processError = (error52, path = []) => {
      for (const issue2 of error52.issues) {
        if (issue2.code === "invalid_union" && issue2.errors.length) {
          issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
        } else if (issue2.code === "invalid_key") {
          processError({ issues: issue2.issues }, [...path, ...issue2.path]);
        } else if (issue2.code === "invalid_element") {
          processError({ issues: issue2.issues }, [...path, ...issue2.path]);
        } else {
          const fullpath = [...path, ...issue2.path];
          if (fullpath.length === 0) {
            fieldErrors._errors.push(mapper(issue2));
          } else {
            let curr = fieldErrors;
            let i = 0;
            while (i < fullpath.length) {
              const el = fullpath[i];
              const terminal = i === fullpath.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue2));
              }
              curr = curr[el];
              i++;
            }
          }
        }
      }
    };
    processError(error51);
    return fieldErrors;
  }
  function treeifyError(error51, mapper = (issue2) => issue2.message) {
    const result = { errors: [] };
    const processError = (error52, path = []) => {
      var _a3, _b;
      for (const issue2 of error52.issues) {
        if (issue2.code === "invalid_union" && issue2.errors.length) {
          issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
        } else if (issue2.code === "invalid_key") {
          processError({ issues: issue2.issues }, [...path, ...issue2.path]);
        } else if (issue2.code === "invalid_element") {
          processError({ issues: issue2.issues }, [...path, ...issue2.path]);
        } else {
          const fullpath = [...path, ...issue2.path];
          if (fullpath.length === 0) {
            result.errors.push(mapper(issue2));
            continue;
          }
          let curr = result;
          let i = 0;
          while (i < fullpath.length) {
            const el = fullpath[i];
            const terminal = i === fullpath.length - 1;
            if (typeof el === "string") {
              curr.properties ?? (curr.properties = {});
              (_a3 = curr.properties)[el] ?? (_a3[el] = { errors: [] });
              curr = curr.properties[el];
            } else {
              curr.items ?? (curr.items = []);
              (_b = curr.items)[el] ?? (_b[el] = { errors: [] });
              curr = curr.items[el];
            }
            if (terminal) {
              curr.errors.push(mapper(issue2));
            }
            i++;
          }
        }
      }
    };
    processError(error51);
    return result;
  }
  function toDotPath(_path) {
    const segs = [];
    const path = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
    for (const seg of path) {
      if (typeof seg === "number")
        segs.push(`[${seg}]`);
      else if (typeof seg === "symbol")
        segs.push(`[${JSON.stringify(String(seg))}]`);
      else if (/[^\w$]/.test(seg))
        segs.push(`[${JSON.stringify(seg)}]`);
      else {
        if (segs.length)
          segs.push(".");
        segs.push(seg);
      }
    }
    return segs.join("");
  }
  function prettifyError(error51) {
    const lines = [];
    const issues = [...error51.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
    for (const issue2 of issues) {
      lines.push(`\u2716 ${issue2.message}`);
      if (issue2.path?.length)
        lines.push(`  \u2192 at ${toDotPath(issue2.path)}`);
    }
    return lines.join("\n");
  }

  // node_modules/zod/v4/core/parse.js
  var _parse = (_Err) => (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError();
    }
    if (result.issues.length) {
      const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, _params?.callee);
      throw e;
    }
    return result.value;
  };
  var parse = /* @__PURE__ */ _parse($ZodRealError);
  var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, params?.callee);
      throw e;
    }
    return result.value;
  };
  var parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
  var _safeParse = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError();
    }
    return result.issues.length ? {
      success: false,
      error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    } : { success: true, data: result.value };
  };
  var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
  var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    return result.issues.length ? {
      success: false,
      error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    } : { success: true, data: result.value };
  };
  var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
  var _encode = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return _parse(_Err)(schema, value, ctx);
  };
  var encode = /* @__PURE__ */ _encode($ZodRealError);
  var _decode = (_Err) => (schema, value, _ctx) => {
    return _parse(_Err)(schema, value, _ctx);
  };
  var decode = /* @__PURE__ */ _decode($ZodRealError);
  var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return _parseAsync(_Err)(schema, value, ctx);
  };
  var encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError);
  var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
    return _parseAsync(_Err)(schema, value, _ctx);
  };
  var decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError);
  var _safeEncode = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return _safeParse(_Err)(schema, value, ctx);
  };
  var safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError);
  var _safeDecode = (_Err) => (schema, value, _ctx) => {
    return _safeParse(_Err)(schema, value, _ctx);
  };
  var safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError);
  var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return _safeParseAsync(_Err)(schema, value, ctx);
  };
  var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
  var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
    return _safeParseAsync(_Err)(schema, value, _ctx);
  };
  var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);

  // node_modules/zod/v4/core/regexes.js
  var regexes_exports = {};
  __export(regexes_exports, {
    base64: () => base64,
    base64url: () => base64url,
    bigint: () => bigint,
    boolean: () => boolean,
    browserEmail: () => browserEmail,
    cidrv4: () => cidrv4,
    cidrv6: () => cidrv6,
    cuid: () => cuid,
    cuid2: () => cuid2,
    date: () => date,
    datetime: () => datetime,
    domain: () => domain,
    duration: () => duration,
    e164: () => e164,
    email: () => email,
    emoji: () => emoji,
    extendedDuration: () => extendedDuration,
    guid: () => guid,
    hex: () => hex,
    hostname: () => hostname,
    html5Email: () => html5Email,
    httpProtocol: () => httpProtocol,
    idnEmail: () => idnEmail,
    integer: () => integer,
    ipv4: () => ipv4,
    ipv6: () => ipv6,
    ksuid: () => ksuid,
    lowercase: () => lowercase,
    mac: () => mac,
    md5_base64: () => md5_base64,
    md5_base64url: () => md5_base64url,
    md5_hex: () => md5_hex,
    nanoid: () => nanoid,
    null: () => _null,
    number: () => number,
    rfc5322Email: () => rfc5322Email,
    sha1_base64: () => sha1_base64,
    sha1_base64url: () => sha1_base64url,
    sha1_hex: () => sha1_hex,
    sha256_base64: () => sha256_base64,
    sha256_base64url: () => sha256_base64url,
    sha256_hex: () => sha256_hex,
    sha384_base64: () => sha384_base64,
    sha384_base64url: () => sha384_base64url,
    sha384_hex: () => sha384_hex,
    sha512_base64: () => sha512_base64,
    sha512_base64url: () => sha512_base64url,
    sha512_hex: () => sha512_hex,
    string: () => string,
    time: () => time,
    ulid: () => ulid,
    undefined: () => _undefined,
    unicodeEmail: () => unicodeEmail,
    uppercase: () => uppercase,
    uuid: () => uuid,
    uuid4: () => uuid4,
    uuid6: () => uuid6,
    uuid7: () => uuid7,
    xid: () => xid
  });
  var cuid = /^[cC][0-9a-z]{6,}$/;
  var cuid2 = /^[0-9a-z]+$/;
  var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
  var xid = /^[0-9a-vA-V]{20}$/;
  var ksuid = /^[A-Za-z0-9]{27}$/;
  var nanoid = /^[a-zA-Z0-9_-]{21}$/;
  var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
  var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
  var uuid = (version2) => {
    if (!version2)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
  };
  var uuid4 = /* @__PURE__ */ uuid(4);
  var uuid6 = /* @__PURE__ */ uuid(6);
  var uuid7 = /* @__PURE__ */ uuid(7);
  var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
  var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
  var idnEmail = unicodeEmail;
  var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  var _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  function emoji() {
    return new RegExp(_emoji, "u");
  }
  var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
  var mac = (delimiter) => {
    const escapedDelim = escapeRegex(delimiter ?? ":");
    return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
  };
  var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
  var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
  var base64url = /^[A-Za-z0-9_-]*$/;
  var hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
  var domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  var httpProtocol = /^https?$/;
  var e164 = /^\+[1-9]\d{6,14}$/;
  var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
  var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
  function timeSource(args) {
    const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
    const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    return regex;
  }
  function time(args) {
    return new RegExp(`^${timeSource(args)}$`);
  }
  function datetime(args) {
    const time3 = timeSource({ precision: args.precision });
    const opts = ["Z"];
    if (args.local)
      opts.push("");
    if (args.offset)
      opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
    const timeRegex = `${time3}(?:${opts.join("|")})`;
    return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
  }
  var string = (params) => {
    const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
    return new RegExp(`^${regex}$`);
  };
  var bigint = /^-?\d+n?$/;
  var integer = /^-?\d+$/;
  var number = /^-?\d+(?:\.\d+)?$/;
  var boolean = /^(?:true|false)$/i;
  var _null = /^null$/i;
  var _undefined = /^undefined$/i;
  var lowercase = /^[^A-Z]*$/;
  var uppercase = /^[^a-z]*$/;
  var hex = /^[0-9a-fA-F]*$/;
  function fixedBase64(bodyLength, padding) {
    return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
  }
  function fixedBase64url(length) {
    return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
  }
  var md5_hex = /^[0-9a-fA-F]{32}$/;
  var md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
  var md5_base64url = /* @__PURE__ */ fixedBase64url(22);
  var sha1_hex = /^[0-9a-fA-F]{40}$/;
  var sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
  var sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
  var sha256_hex = /^[0-9a-fA-F]{64}$/;
  var sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
  var sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
  var sha384_hex = /^[0-9a-fA-F]{96}$/;
  var sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
  var sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
  var sha512_hex = /^[0-9a-fA-F]{128}$/;
  var sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
  var sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

  // node_modules/zod/v4/core/checks.js
  var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
    var _a3;
    inst._zod ?? (inst._zod = {});
    inst._zod.def = def;
    (_a3 = inst._zod).onattach ?? (_a3.onattach = []);
  });
  var numericOriginMap = {
    number: "number",
    bigint: "bigint",
    object: "date"
  };
  var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      if (def.value < curr) {
        if (def.inclusive)
          bag.maximum = def.value;
        else
          bag.exclusiveMaximum = def.value;
      }
    });
    inst._zod.check = (payload) => {
      if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
        return;
      }
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
        input: payload.value,
        inclusive: def.inclusive,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      if (def.value > curr) {
        if (def.inclusive)
          bag.minimum = def.value;
        else
          bag.exclusiveMinimum = def.value;
      }
    });
    inst._zod.check = (payload) => {
      if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
        return;
      }
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
        input: payload.value,
        inclusive: def.inclusive,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      var _a3;
      (_a3 = inst2._zod.bag).multipleOf ?? (_a3.multipleOf = def.value);
    });
    inst._zod.check = (payload) => {
      if (typeof payload.value !== typeof def.value)
        throw new Error("Cannot mix number and bigint in multiple_of check.");
      const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
      if (isMultiple)
        return;
      payload.issues.push({
        origin: typeof payload.value,
        code: "not_multiple_of",
        divisor: def.value,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
    $ZodCheck.init(inst, def);
    def.format = def.format || "float64";
    const isInt = def.format?.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = def.format;
      bag.minimum = minimum;
      bag.maximum = maximum;
      if (isInt)
        bag.pattern = integer;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      if (isInt) {
        if (!Number.isInteger(input)) {
          payload.issues.push({
            expected: origin,
            format: def.format,
            code: "invalid_type",
            continue: false,
            input,
            inst
          });
          return;
        }
        if (!Number.isSafeInteger(input)) {
          if (input > 0) {
            payload.issues.push({
              input,
              code: "too_big",
              maximum: Number.MAX_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst,
              origin,
              inclusive: true,
              continue: !def.abort
            });
          } else {
            payload.issues.push({
              input,
              code: "too_small",
              minimum: Number.MIN_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst,
              origin,
              inclusive: true,
              continue: !def.abort
            });
          }
          return;
        }
      }
      if (input < minimum) {
        payload.issues.push({
          origin: "number",
          input,
          code: "too_small",
          minimum,
          inclusive: true,
          inst,
          continue: !def.abort
        });
      }
      if (input > maximum) {
        payload.issues.push({
          origin: "number",
          input,
          code: "too_big",
          maximum,
          inclusive: true,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  var $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
    $ZodCheck.init(inst, def);
    const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = def.format;
      bag.minimum = minimum;
      bag.maximum = maximum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      if (input < minimum) {
        payload.issues.push({
          origin: "bigint",
          input,
          code: "too_small",
          minimum,
          inclusive: true,
          inst,
          continue: !def.abort
        });
      }
      if (input > maximum) {
        payload.issues.push({
          origin: "bigint",
          input,
          code: "too_big",
          maximum,
          inclusive: true,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  var $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
    var _a3;
    $ZodCheck.init(inst, def);
    (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.size !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      if (def.maximum < curr)
        inst2._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const size = input.size;
      if (size <= def.maximum)
        return;
      payload.issues.push({
        origin: getSizableOrigin(input),
        code: "too_big",
        maximum: def.maximum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
    var _a3;
    $ZodCheck.init(inst, def);
    (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.size !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      if (def.minimum > curr)
        inst2._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const size = input.size;
      if (size >= def.minimum)
        return;
      payload.issues.push({
        origin: getSizableOrigin(input),
        code: "too_small",
        minimum: def.minimum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
    var _a3;
    $ZodCheck.init(inst, def);
    (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.size !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.minimum = def.size;
      bag.maximum = def.size;
      bag.size = def.size;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const size = input.size;
      if (size === def.size)
        return;
      const tooBig = size > def.size;
      payload.issues.push({
        origin: getSizableOrigin(input),
        ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
        inclusive: true,
        exact: true,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
    var _a3;
    $ZodCheck.init(inst, def);
    (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      if (def.maximum < curr)
        inst2._zod.bag.maximum = def.maximum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length <= def.maximum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: def.maximum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
    var _a3;
    $ZodCheck.init(inst, def);
    (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      if (def.minimum > curr)
        inst2._zod.bag.minimum = def.minimum;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length >= def.minimum)
        return;
      const origin = getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: def.minimum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
    var _a3;
    $ZodCheck.init(inst, def);
    (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
      const val = payload.value;
      return !nullish(val) && val.length !== void 0;
    });
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.minimum = def.length;
      bag.maximum = def.length;
      bag.length = def.length;
    });
    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length === def.length)
        return;
      const origin = getLengthableOrigin(input);
      const tooBig = length > def.length;
      payload.issues.push({
        origin,
        ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
        inclusive: true,
        exact: true,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
    var _a3, _b;
    $ZodCheck.init(inst, def);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.format = def.format;
      if (def.pattern) {
        bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
        bag.patterns.add(def.pattern);
      }
    });
    if (def.pattern)
      (_a3 = inst._zod).check ?? (_a3.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: def.format,
          input: payload.value,
          ...def.pattern ? { pattern: def.pattern.toString() } : {},
          inst,
          continue: !def.abort
        });
      });
    else
      (_b = inst._zod).check ?? (_b.check = () => {
      });
  });
  var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: payload.value,
        pattern: def.pattern.toString(),
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
    def.pattern ?? (def.pattern = lowercase);
    $ZodCheckStringFormat.init(inst, def);
  });
  var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
    def.pattern ?? (def.pattern = uppercase);
    $ZodCheckStringFormat.init(inst, def);
  });
  var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
    $ZodCheck.init(inst, def);
    const escapedRegex = escapeRegex(def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.includes(def.includes, def.position))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: def.includes,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.startsWith(def.prefix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: def.prefix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
    $ZodCheck.init(inst, def);
    const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
    def.pattern ?? (def.pattern = pattern);
    inst._zod.onattach.push((inst2) => {
      const bag = inst2._zod.bag;
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(pattern);
    });
    inst._zod.check = (payload) => {
      if (payload.value.endsWith(def.suffix))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: def.suffix,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  function handleCheckPropertyResult(result, payload, property) {
    if (result.issues.length) {
      payload.issues.push(...prefixIssues(property, result.issues));
    }
  }
  var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
      const result = def.schema._zod.run({
        value: payload.value[def.property],
        issues: []
      }, {});
      if (result instanceof Promise) {
        return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
      }
      handleCheckPropertyResult(result, payload, def.property);
      return;
    };
  });
  var $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
    $ZodCheck.init(inst, def);
    const mimeSet = new Set(def.mime);
    inst._zod.onattach.push((inst2) => {
      inst2._zod.bag.mime = def.mime;
    });
    inst._zod.check = (payload) => {
      if (mimeSet.has(payload.value.type))
        return;
      payload.issues.push({
        code: "invalid_value",
        values: def.mime,
        input: payload.value.type,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
    $ZodCheck.init(inst, def);
    inst._zod.check = (payload) => {
      payload.value = def.tx(payload.value);
    };
  });

  // node_modules/zod/v4/core/doc.js
  var Doc = class {
    constructor(args = []) {
      this.content = [];
      this.indent = 0;
      if (this)
        this.args = args;
    }
    indented(fn) {
      this.indent += 1;
      fn(this);
      this.indent -= 1;
    }
    write(arg) {
      if (typeof arg === "function") {
        arg(this, { execution: "sync" });
        arg(this, { execution: "async" });
        return;
      }
      const content = arg;
      const lines = content.split("\n").filter((x) => x);
      const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
      const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
      for (const line of dedented) {
        this.content.push(line);
      }
    }
    compile() {
      const F = Function;
      const args = this?.args;
      const content = this?.content ?? [``];
      const lines = [...content.map((x) => `  ${x}`)];
      return new F(...args, lines.join("\n"));
    }
  };

  // node_modules/zod/v4/core/versions.js
  var version = {
    major: 4,
    minor: 4,
    patch: 3
  };

  // node_modules/zod/v4/core/schemas.js
  var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
    var _a3;
    inst ?? (inst = {});
    inst._zod.def = def;
    inst._zod.bag = inst._zod.bag || {};
    inst._zod.version = version;
    const checks = [...inst._zod.def.checks ?? []];
    if (inst._zod.traits.has("$ZodCheck")) {
      checks.unshift(inst);
    }
    for (const ch of checks) {
      for (const fn of ch._zod.onattach) {
        fn(inst);
      }
    }
    if (checks.length === 0) {
      (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
      inst._zod.deferred?.push(() => {
        inst._zod.run = inst._zod.parse;
      });
    } else {
      const runChecks = (payload, checks2, ctx) => {
        let isAborted = aborted(payload);
        let asyncResult;
        for (const ch of checks2) {
          if (ch._zod.def.when) {
            if (explicitlyAborted(payload))
              continue;
            const shouldRun = ch._zod.def.when(payload);
            if (!shouldRun)
              continue;
          } else if (isAborted) {
            continue;
          }
          const currLen = payload.issues.length;
          const _ = ch._zod.check(payload);
          if (_ instanceof Promise && ctx?.async === false) {
            throw new $ZodAsyncError();
          }
          if (asyncResult || _ instanceof Promise) {
            asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
              await _;
              const nextLen = payload.issues.length;
              if (nextLen === currLen)
                return;
              if (!isAborted)
                isAborted = aborted(payload, currLen);
            });
          } else {
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              continue;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          }
        }
        if (asyncResult) {
          return asyncResult.then(() => {
            return payload;
          });
        }
        return payload;
      };
      const handleCanaryResult = (canary, payload, ctx) => {
        if (aborted(canary)) {
          canary.aborted = true;
          return canary;
        }
        const checkResult = runChecks(payload, checks, ctx);
        if (checkResult instanceof Promise) {
          if (ctx.async === false)
            throw new $ZodAsyncError();
          return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
        }
        return inst._zod.parse(checkResult, ctx);
      };
      inst._zod.run = (payload, ctx) => {
        if (ctx.skipChecks) {
          return inst._zod.parse(payload, ctx);
        }
        if (ctx.direction === "backward") {
          const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
          if (canary instanceof Promise) {
            return canary.then((canary2) => {
              return handleCanaryResult(canary2, payload, ctx);
            });
          }
          return handleCanaryResult(canary, payload, ctx);
        }
        const result = inst._zod.parse(payload, ctx);
        if (result instanceof Promise) {
          if (ctx.async === false)
            throw new $ZodAsyncError();
          return result.then((result2) => runChecks(result2, checks, ctx));
        }
        return runChecks(result, checks, ctx);
      };
    }
    defineLazy(inst, "~standard", () => ({
      validate: (value) => {
        try {
          const r = safeParse(inst, value);
          return r.success ? { value: r.data } : { issues: r.error?.issues };
        } catch (_) {
          return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
        }
      },
      vendor: "zod",
      version: 1
    }));
  });
  var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
    inst._zod.parse = (payload, _) => {
      if (def.coerce)
        try {
          payload.value = String(payload.value);
        } catch (_2) {
        }
      if (typeof payload.value === "string")
        return payload;
      payload.issues.push({
        expected: "string",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);
    $ZodString.init(inst, def);
  });
  var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
    def.pattern ?? (def.pattern = guid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
    if (def.version) {
      const versionMap = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      };
      const v = versionMap[def.version];
      if (v === void 0)
        throw new Error(`Invalid UUID version: "${def.version}"`);
      def.pattern ?? (def.pattern = uuid(v));
    } else
      def.pattern ?? (def.pattern = uuid());
    $ZodStringFormat.init(inst, def);
  });
  var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
    def.pattern ?? (def.pattern = email);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      try {
        const trimmed = payload.value.trim();
        if (!def.normalize && def.protocol?.source === httpProtocol.source) {
          if (!/^https?:\/\//i.test(trimmed)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid URL format",
              input: payload.value,
              inst,
              continue: !def.abort
            });
            return;
          }
        }
        const url2 = new URL(trimmed);
        if (def.hostname) {
          def.hostname.lastIndex = 0;
          if (!def.hostname.test(url2.hostname)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid hostname",
              pattern: def.hostname.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
          }
        }
        if (def.protocol) {
          def.protocol.lastIndex = 0;
          if (!def.protocol.test(url2.protocol.endsWith(":") ? url2.protocol.slice(0, -1) : url2.protocol)) {
            payload.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid protocol",
              pattern: def.protocol.source,
              input: payload.value,
              inst,
              continue: !def.abort
            });
          }
        }
        if (def.normalize) {
          payload.value = url2.href;
        } else {
          payload.value = trimmed;
        }
        return;
      } catch (_) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
    def.pattern ?? (def.pattern = emoji());
    $ZodStringFormat.init(inst, def);
  });
  var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
    def.pattern ?? (def.pattern = nanoid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
    def.pattern ?? (def.pattern = cuid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
    def.pattern ?? (def.pattern = cuid2);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
    def.pattern ?? (def.pattern = ulid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
    def.pattern ?? (def.pattern = xid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
    def.pattern ?? (def.pattern = ksuid);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
    def.pattern ?? (def.pattern = datetime(def));
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
    def.pattern ?? (def.pattern = date);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
    def.pattern ?? (def.pattern = time(def));
    $ZodStringFormat.init(inst, def);
  });
  var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
    def.pattern ?? (def.pattern = duration);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
    def.pattern ?? (def.pattern = ipv4);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `ipv4`;
  });
  var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
    def.pattern ?? (def.pattern = ipv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `ipv6`;
    inst._zod.check = (payload) => {
      try {
        new URL(`http://[${payload.value}]`);
      } catch {
        payload.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  var $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
    def.pattern ?? (def.pattern = mac(def.delimiter));
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.format = `mac`;
  });
  var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv4);
    $ZodStringFormat.init(inst, def);
  });
  var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
    def.pattern ?? (def.pattern = cidrv6);
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      const parts = payload.value.split("/");
      try {
        if (parts.length !== 2)
          throw new Error();
        const [address, prefix] = parts;
        if (!prefix)
          throw new Error();
        const prefixNum = Number(prefix);
        if (`${prefixNum}` !== prefix)
          throw new Error();
        if (prefixNum < 0 || prefixNum > 128)
          throw new Error();
        new URL(`http://[${address}]`);
      } catch {
        payload.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
    };
  });
  function isValidBase64(data) {
    if (data === "")
      return true;
    if (/\s/.test(data))
      return false;
    if (data.length % 4 !== 0)
      return false;
    try {
      atob(data);
      return true;
    } catch {
      return false;
    }
  }
  var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
    def.pattern ?? (def.pattern = base64);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.contentEncoding = "base64";
    inst._zod.check = (payload) => {
      if (isValidBase64(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  function isValidBase64URL(data) {
    if (!base64url.test(data))
      return false;
    const base643 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
    const padded = base643.padEnd(Math.ceil(base643.length / 4) * 4, "=");
    return isValidBase64(padded);
  }
  var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
    def.pattern ?? (def.pattern = base64url);
    $ZodStringFormat.init(inst, def);
    inst._zod.bag.contentEncoding = "base64url";
    inst._zod.check = (payload) => {
      if (isValidBase64URL(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
    def.pattern ?? (def.pattern = e164);
    $ZodStringFormat.init(inst, def);
  });
  function isValidJWT(token, algorithm = null) {
    try {
      const tokensParts = token.split(".");
      if (tokensParts.length !== 3)
        return false;
      const [header] = tokensParts;
      if (!header)
        return false;
      const parsedHeader = JSON.parse(atob(header));
      if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
        return false;
      if (!parsedHeader.alg)
        return false;
      if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
        return false;
      return true;
    } catch {
      return false;
    }
  }
  var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      if (isValidJWT(payload.value, def.alg))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    inst._zod.check = (payload) => {
      if (def.fn(payload.value))
        return;
      payload.issues.push({
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        inst,
        continue: !def.abort
      });
    };
  });
  var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = inst._zod.bag.pattern ?? number;
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce)
        try {
          payload.value = Number(payload.value);
        } catch (_) {
        }
      const input = payload.value;
      if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
        return payload;
      }
      const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
      payload.issues.push({
        expected: "number",
        code: "invalid_type",
        input,
        inst,
        ...received ? { received } : {}
      });
      return payload;
    };
  });
  var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
    $ZodCheckNumberFormat.init(inst, def);
    $ZodNumber.init(inst, def);
  });
  var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = boolean;
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce)
        try {
          payload.value = Boolean(payload.value);
        } catch (_) {
        }
      const input = payload.value;
      if (typeof input === "boolean")
        return payload;
      payload.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = bigint;
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce)
        try {
          payload.value = BigInt(payload.value);
        } catch (_) {
        }
      if (typeof payload.value === "bigint")
        return payload;
      payload.issues.push({
        expected: "bigint",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  var $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
    $ZodCheckBigIntFormat.init(inst, def);
    $ZodBigInt.init(inst, def);
  });
  var $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (typeof input === "symbol")
        return payload;
      payload.issues.push({
        expected: "symbol",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = _undefined;
    inst._zod.values = /* @__PURE__ */ new Set([void 0]);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (typeof input === "undefined")
        return payload;
      payload.issues.push({
        expected: "undefined",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.pattern = _null;
    inst._zod.values = /* @__PURE__ */ new Set([null]);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (input === null)
        return payload;
      payload.issues.push({
        expected: "null",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
  });
  var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload) => payload;
  });
  var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      payload.issues.push({
        expected: "never",
        code: "invalid_type",
        input: payload.value,
        inst
      });
      return payload;
    };
  });
  var $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (typeof input === "undefined")
        return payload;
      payload.issues.push({
        expected: "void",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      if (def.coerce) {
        try {
          payload.value = new Date(payload.value);
        } catch (_err) {
        }
      }
      const input = payload.value;
      const isDate = input instanceof Date;
      const isValidDate = isDate && !Number.isNaN(input.getTime());
      if (isValidDate)
        return payload;
      payload.issues.push({
        expected: "date",
        code: "invalid_type",
        input,
        ...isDate ? { received: "Invalid Date" } : {},
        inst
      });
      return payload;
    };
  });
  function handleArrayResult(result, final, index) {
    if (result.issues.length) {
      final.issues.push(...prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
  }
  var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!Array.isArray(input)) {
        payload.issues.push({
          expected: "array",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      payload.value = Array(input.length);
      const proms = [];
      for (let i = 0; i < input.length; i++) {
        const item = input[i];
        const result = def.element._zod.run({
          value: item,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
        } else {
          handleArrayResult(result, payload, i);
        }
      }
      if (proms.length) {
        return Promise.all(proms).then(() => payload);
      }
      return payload;
    };
  });
  function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
    const isPresent = key in input;
    if (result.issues.length) {
      if (isOptionalIn && isOptionalOut && !isPresent) {
        return;
      }
      final.issues.push(...prefixIssues(key, result.issues));
    }
    if (!isPresent && !isOptionalIn) {
      if (!result.issues.length) {
        final.issues.push({
          code: "invalid_type",
          expected: "nonoptional",
          input: void 0,
          path: [key]
        });
      }
      return;
    }
    if (result.value === void 0) {
      if (isPresent) {
        final.value[key] = void 0;
      }
    } else {
      final.value[key] = result.value;
    }
  }
  function normalizeDef(def) {
    const keys = Object.keys(def.shape);
    for (const k of keys) {
      if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
        throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
      }
    }
    const okeys = optionalKeys(def.shape);
    return {
      ...def,
      keys,
      keySet: new Set(keys),
      numKeys: keys.length,
      optionalKeys: new Set(okeys)
    };
  }
  function handleCatchall(proms, input, payload, ctx, def, inst) {
    const unrecognized = [];
    const keySet = def.keySet;
    const _catchall = def.catchall._zod;
    const t = _catchall.def.type;
    const isOptionalIn = _catchall.optin === "optional";
    const isOptionalOut = _catchall.optout === "optional";
    for (const key in input) {
      if (key === "__proto__")
        continue;
      if (keySet.has(key))
        continue;
      if (t === "never") {
        unrecognized.push(key);
        continue;
      }
      const r = _catchall.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut)));
      } else {
        handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
      }
    }
    if (unrecognized.length) {
      payload.issues.push({
        code: "unrecognized_keys",
        keys: unrecognized,
        input,
        inst
      });
    }
    if (!proms.length)
      return payload;
    return Promise.all(proms).then(() => {
      return payload;
    });
  }
  var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
    $ZodType.init(inst, def);
    const desc = Object.getOwnPropertyDescriptor(def, "shape");
    if (!desc?.get) {
      const sh = def.shape;
      Object.defineProperty(def, "shape", {
        get: () => {
          const newSh = { ...sh };
          Object.defineProperty(def, "shape", {
            value: newSh
          });
          return newSh;
        }
      });
    }
    const _normalized = cached(() => normalizeDef(def));
    defineLazy(inst._zod, "propValues", () => {
      const shape = def.shape;
      const propValues = {};
      for (const key in shape) {
        const field = shape[key]._zod;
        if (field.values) {
          propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
          for (const v of field.values)
            propValues[key].add(v);
        }
      }
      return propValues;
    });
    const isObject2 = isObject;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
      value ?? (value = _normalized.value);
      const input = payload.value;
      if (!isObject2(input)) {
        payload.issues.push({
          expected: "object",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      payload.value = {};
      const proms = [];
      const shape = value.shape;
      for (const key of value.keys) {
        const el = shape[key];
        const isOptionalIn = el._zod.optin === "optional";
        const isOptionalOut = el._zod.optout === "optional";
        const r = el._zod.run({ value: input[key], issues: [] }, ctx);
        if (r instanceof Promise) {
          proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut)));
        } else {
          handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
        }
      }
      if (!catchall) {
        return proms.length ? Promise.all(proms).then(() => payload) : payload;
      }
      return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
    };
  });
  var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
    $ZodObject.init(inst, def);
    const superParse = inst._zod.parse;
    const _normalized = cached(() => normalizeDef(def));
    const generateFastpass = (shape) => {
      const doc = new Doc(["shape", "payload", "ctx"]);
      const normalized = _normalized.value;
      const parseStr = (key) => {
        const k = esc(key);
        return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
      };
      doc.write(`const input = payload.value;`);
      const ids = /* @__PURE__ */ Object.create(null);
      let counter = 0;
      for (const key of normalized.keys) {
        ids[key] = `key_${counter++}`;
      }
      doc.write(`const newResult = {};`);
      for (const key of normalized.keys) {
        const id = ids[key];
        const k = esc(key);
        const schema = shape[key];
        const isOptionalIn = schema?._zod?.optin === "optional";
        const isOptionalOut = schema?._zod?.optout === "optional";
        doc.write(`const ${id} = ${parseStr(key)};`);
        if (isOptionalIn && isOptionalOut) {
          doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
        } else if (!isOptionalIn) {
          doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
        } else {
          doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
        }
      }
      doc.write(`payload.value = newResult;`);
      doc.write(`return payload;`);
      const fn = doc.compile();
      return (payload, ctx) => fn(shape, payload, ctx);
    };
    let fastpass;
    const isObject2 = isObject;
    const jit = !globalConfig.jitless;
    const allowsEval2 = allowsEval;
    const fastEnabled = jit && allowsEval2.value;
    const catchall = def.catchall;
    let value;
    inst._zod.parse = (payload, ctx) => {
      value ?? (value = _normalized.value);
      const input = payload.value;
      if (!isObject2(input)) {
        payload.issues.push({
          expected: "object",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
        if (!fastpass)
          fastpass = generateFastpass(def.shape);
        payload = fastpass(payload, ctx);
        if (!catchall)
          return payload;
        return handleCatchall([], input, payload, ctx, value, inst);
      }
      return superParse(payload, ctx);
    };
  });
  function handleUnionResults(results, final, inst, ctx) {
    for (const result of results) {
      if (result.issues.length === 0) {
        final.value = result.value;
        return final;
      }
    }
    const nonaborted = results.filter((r) => !aborted(r));
    if (nonaborted.length === 1) {
      final.value = nonaborted[0].value;
      return nonaborted[0];
    }
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
    return final;
  }
  var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
    defineLazy(inst._zod, "values", () => {
      if (def.options.every((o) => o._zod.values)) {
        return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
      }
      return void 0;
    });
    defineLazy(inst._zod, "pattern", () => {
      if (def.options.every((o) => o._zod.pattern)) {
        const patterns = def.options.map((o) => o._zod.pattern);
        return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
      }
      return void 0;
    });
    const first = def.options.length === 1 ? def.options[0]._zod.run : null;
    inst._zod.parse = (payload, ctx) => {
      if (first) {
        return first(payload, ctx);
      }
      let async = false;
      const results = [];
      for (const option of def.options) {
        const result = option._zod.run({
          value: payload.value,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          results.push(result);
          async = true;
        } else {
          if (result.issues.length === 0)
            return result;
          results.push(result);
        }
      }
      if (!async)
        return handleUnionResults(results, payload, inst, ctx);
      return Promise.all(results).then((results2) => {
        return handleUnionResults(results2, payload, inst, ctx);
      });
    };
  });
  function handleExclusiveUnionResults(results, final, inst, ctx) {
    const successes = results.filter((r) => r.issues.length === 0);
    if (successes.length === 1) {
      final.value = successes[0].value;
      return final;
    }
    if (successes.length === 0) {
      final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
      });
    } else {
      final.issues.push({
        code: "invalid_union",
        input: final.value,
        inst,
        errors: [],
        inclusive: false
      });
    }
    return final;
  }
  var $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
    $ZodUnion.init(inst, def);
    def.inclusive = false;
    const first = def.options.length === 1 ? def.options[0]._zod.run : null;
    inst._zod.parse = (payload, ctx) => {
      if (first) {
        return first(payload, ctx);
      }
      let async = false;
      const results = [];
      for (const option of def.options) {
        const result = option._zod.run({
          value: payload.value,
          issues: []
        }, ctx);
        if (result instanceof Promise) {
          results.push(result);
          async = true;
        } else {
          results.push(result);
        }
      }
      if (!async)
        return handleExclusiveUnionResults(results, payload, inst, ctx);
      return Promise.all(results).then((results2) => {
        return handleExclusiveUnionResults(results2, payload, inst, ctx);
      });
    };
  });
  var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
    def.inclusive = false;
    $ZodUnion.init(inst, def);
    const _super = inst._zod.parse;
    defineLazy(inst._zod, "propValues", () => {
      const propValues = {};
      for (const option of def.options) {
        const pv = option._zod.propValues;
        if (!pv || Object.keys(pv).length === 0)
          throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
        for (const [k, v] of Object.entries(pv)) {
          if (!propValues[k])
            propValues[k] = /* @__PURE__ */ new Set();
          for (const val of v) {
            propValues[k].add(val);
          }
        }
      }
      return propValues;
    });
    const disc = cached(() => {
      const opts = def.options;
      const map2 = /* @__PURE__ */ new Map();
      for (const o of opts) {
        const values = o._zod.propValues?.[def.discriminator];
        if (!values || values.size === 0)
          throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
        for (const v of values) {
          if (map2.has(v)) {
            throw new Error(`Duplicate discriminator value "${String(v)}"`);
          }
          map2.set(v, o);
        }
      }
      return map2;
    });
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!isObject(input)) {
        payload.issues.push({
          code: "invalid_type",
          expected: "object",
          input,
          inst
        });
        return payload;
      }
      const opt = disc.value.get(input?.[def.discriminator]);
      if (opt) {
        return opt._zod.run(payload, ctx);
      }
      if (def.unionFallback || ctx.direction === "backward") {
        return _super(payload, ctx);
      }
      payload.issues.push({
        code: "invalid_union",
        errors: [],
        note: "No matching discriminator",
        discriminator: def.discriminator,
        options: Array.from(disc.value.keys()),
        input,
        path: [def.discriminator],
        inst
      });
      return payload;
    };
  });
  var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      const left = def.left._zod.run({ value: input, issues: [] }, ctx);
      const right = def.right._zod.run({ value: input, issues: [] }, ctx);
      const async = left instanceof Promise || right instanceof Promise;
      if (async) {
        return Promise.all([left, right]).then(([left2, right2]) => {
          return handleIntersectionResults(payload, left2, right2);
        });
      }
      return handleIntersectionResults(payload, left, right);
    };
  });
  function mergeValues(a, b) {
    if (a === b) {
      return { valid: true, data: a };
    }
    if (a instanceof Date && b instanceof Date && +a === +b) {
      return { valid: true, data: a };
    }
    if (isPlainObject(a) && isPlainObject(b)) {
      const bKeys = Object.keys(b);
      const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a, ...b };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a[key], b[key]);
        if (!sharedValue.valid) {
          return {
            valid: false,
            mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
          };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) {
        return { valid: false, mergeErrorPath: [] };
      }
      const newArray = [];
      for (let index = 0; index < a.length; index++) {
        const itemA = a[index];
        const itemB = b[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return {
            valid: false,
            mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
          };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    }
    return { valid: false, mergeErrorPath: [] };
  }
  function handleIntersectionResults(result, left, right) {
    const unrecKeys = /* @__PURE__ */ new Map();
    let unrecIssue;
    for (const iss of left.issues) {
      if (iss.code === "unrecognized_keys") {
        unrecIssue ?? (unrecIssue = iss);
        for (const k of iss.keys) {
          if (!unrecKeys.has(k))
            unrecKeys.set(k, {});
          unrecKeys.get(k).l = true;
        }
      } else {
        result.issues.push(iss);
      }
    }
    for (const iss of right.issues) {
      if (iss.code === "unrecognized_keys") {
        for (const k of iss.keys) {
          if (!unrecKeys.has(k))
            unrecKeys.set(k, {});
          unrecKeys.get(k).r = true;
        }
      } else {
        result.issues.push(iss);
      }
    }
    const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
    if (bothKeys.length && unrecIssue) {
      result.issues.push({ ...unrecIssue, keys: bothKeys });
    }
    if (aborted(result))
      return result;
    const merged = mergeValues(left.value, right.value);
    if (!merged.valid) {
      throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
    }
    result.value = merged.data;
    return result;
  }
  var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
    $ZodType.init(inst, def);
    const items = def.items;
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!Array.isArray(input)) {
        payload.issues.push({
          input,
          inst,
          expected: "tuple",
          code: "invalid_type"
        });
        return payload;
      }
      payload.value = [];
      const proms = [];
      const optinStart = getTupleOptStart(items, "optin");
      const optoutStart = getTupleOptStart(items, "optout");
      if (!def.rest) {
        if (input.length < optinStart) {
          payload.issues.push({
            code: "too_small",
            minimum: optinStart,
            inclusive: true,
            input,
            inst,
            origin: "array"
          });
          return payload;
        }
        if (input.length > items.length) {
          payload.issues.push({
            code: "too_big",
            maximum: items.length,
            inclusive: true,
            input,
            inst,
            origin: "array"
          });
        }
      }
      const itemResults = new Array(items.length);
      for (let i = 0; i < items.length; i++) {
        const r = items[i]._zod.run({ value: input[i], issues: [] }, ctx);
        if (r instanceof Promise) {
          proms.push(r.then((rr) => {
            itemResults[i] = rr;
          }));
        } else {
          itemResults[i] = r;
        }
      }
      if (def.rest) {
        let i = items.length - 1;
        const rest = input.slice(items.length);
        for (const el of rest) {
          i++;
          const result = def.rest._zod.run({ value: el, issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((r) => handleTupleResult(r, payload, i)));
          } else {
            handleTupleResult(result, payload, i);
          }
        }
      }
      if (proms.length) {
        return Promise.all(proms).then(() => handleTupleResults(itemResults, payload, items, input, optoutStart));
      }
      return handleTupleResults(itemResults, payload, items, input, optoutStart);
    };
  });
  function getTupleOptStart(items, key) {
    for (let i = items.length - 1; i >= 0; i--) {
      if (items[i]._zod[key] !== "optional")
        return i + 1;
    }
    return 0;
  }
  function handleTupleResult(result, final, index) {
    if (result.issues.length) {
      final.issues.push(...prefixIssues(index, result.issues));
    }
    final.value[index] = result.value;
  }
  function handleTupleResults(itemResults, final, items, input, optoutStart) {
    for (let i = 0; i < items.length; i++) {
      const r = itemResults[i];
      const isPresent = i < input.length;
      if (r.issues.length) {
        if (!isPresent && i >= optoutStart) {
          final.value.length = i;
          break;
        }
        final.issues.push(...prefixIssues(i, r.issues));
      }
      final.value[i] = r.value;
    }
    for (let i = final.value.length - 1; i >= input.length; i--) {
      if (items[i]._zod.optout === "optional" && final.value[i] === void 0) {
        final.value.length = i;
      } else {
        break;
      }
    }
    return final;
  }
  var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!isPlainObject(input)) {
        payload.issues.push({
          expected: "record",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      const proms = [];
      const values = def.keyType._zod.values;
      if (values) {
        payload.value = {};
        const recordKeys = /* @__PURE__ */ new Set();
        for (const key of values) {
          if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
            recordKeys.add(typeof key === "number" ? key.toString() : key);
            const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
            if (keyResult instanceof Promise) {
              throw new Error("Async schemas not supported in object keys currently");
            }
            if (keyResult.issues.length) {
              payload.issues.push({
                code: "invalid_key",
                origin: "record",
                issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
                input: key,
                path: [key],
                inst
              });
              continue;
            }
            const outKey = keyResult.value;
            const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
            if (result instanceof Promise) {
              proms.push(result.then((result2) => {
                if (result2.issues.length) {
                  payload.issues.push(...prefixIssues(key, result2.issues));
                }
                payload.value[outKey] = result2.value;
              }));
            } else {
              if (result.issues.length) {
                payload.issues.push(...prefixIssues(key, result.issues));
              }
              payload.value[outKey] = result.value;
            }
          }
        }
        let unrecognized;
        for (const key in input) {
          if (!recordKeys.has(key)) {
            unrecognized = unrecognized ?? [];
            unrecognized.push(key);
          }
        }
        if (unrecognized && unrecognized.length > 0) {
          payload.issues.push({
            code: "unrecognized_keys",
            input,
            inst,
            keys: unrecognized
          });
        }
      } else {
        payload.value = {};
        for (const key of Reflect.ownKeys(input)) {
          if (key === "__proto__")
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(input, key))
            continue;
          let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          if (keyResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length;
          if (checkNumericKey) {
            const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
            if (retryResult instanceof Promise) {
              throw new Error("Async schemas not supported in object keys currently");
            }
            if (retryResult.issues.length === 0) {
              keyResult = retryResult;
            }
          }
          if (keyResult.issues.length) {
            if (def.mode === "loose") {
              payload.value[key] = input[key];
            } else {
              payload.issues.push({
                code: "invalid_key",
                origin: "record",
                issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
                input: key,
                path: [key],
                inst
              });
            }
            continue;
          }
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[keyResult.value] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[keyResult.value] = result.value;
          }
        }
      }
      if (proms.length) {
        return Promise.all(proms).then(() => payload);
      }
      return payload;
    };
  });
  var $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!(input instanceof Map)) {
        payload.issues.push({
          expected: "map",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      }
      const proms = [];
      payload.value = /* @__PURE__ */ new Map();
      for (const [key, value] of input) {
        const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
        if (keyResult instanceof Promise || valueResult instanceof Promise) {
          proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
            handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
          }));
        } else {
          handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
        }
      }
      if (proms.length)
        return Promise.all(proms).then(() => payload);
      return payload;
    };
  });
  function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
    if (keyResult.issues.length) {
      if (propertyKeyTypes.has(typeof key)) {
        final.issues.push(...prefixIssues(key, keyResult.issues));
      } else {
        final.issues.push({
          code: "invalid_key",
          origin: "map",
          input,
          inst,
          issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        });
      }
    }
    if (valueResult.issues.length) {
      if (propertyKeyTypes.has(typeof key)) {
        final.issues.push(...prefixIssues(key, valueResult.issues));
      } else {
        final.issues.push({
          origin: "map",
          code: "invalid_element",
          input,
          inst,
          key,
          issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        });
      }
    }
    final.value.set(keyResult.value, valueResult.value);
  }
  var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      const input = payload.value;
      if (!(input instanceof Set)) {
        payload.issues.push({
          input,
          inst,
          expected: "set",
          code: "invalid_type"
        });
        return payload;
      }
      const proms = [];
      payload.value = /* @__PURE__ */ new Set();
      for (const item of input) {
        const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => handleSetResult(result2, payload)));
        } else
          handleSetResult(result, payload);
      }
      if (proms.length)
        return Promise.all(proms).then(() => payload);
      return payload;
    };
  });
  function handleSetResult(result, final) {
    if (result.issues.length) {
      final.issues.push(...result.issues);
    }
    final.value.add(result.value);
  }
  var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
    $ZodType.init(inst, def);
    const values = getEnumValues(def.entries);
    const valuesSet = new Set(values);
    inst._zod.values = valuesSet;
    inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (valuesSet.has(input)) {
        return payload;
      }
      payload.issues.push({
        code: "invalid_value",
        values,
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
    $ZodType.init(inst, def);
    if (def.values.length === 0) {
      throw new Error("Cannot create literal schema with no valid values");
    }
    const values = new Set(def.values);
    inst._zod.values = values;
    inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (values.has(input)) {
        return payload;
      }
      payload.issues.push({
        code: "invalid_value",
        values: def.values,
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      const input = payload.value;
      if (input instanceof File)
        return payload;
      payload.issues.push({
        expected: "file",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    };
  });
  var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        throw new $ZodEncodeError(inst.constructor.name);
      }
      const _out = def.transform(payload.value, payload);
      if (ctx.async) {
        const output = _out instanceof Promise ? _out : Promise.resolve(_out);
        return output.then((output2) => {
          payload.value = output2;
          payload.fallback = true;
          return payload;
        });
      }
      if (_out instanceof Promise) {
        throw new $ZodAsyncError();
      }
      payload.value = _out;
      payload.fallback = true;
      return payload;
    };
  });
  function handleOptionalResult(result, input) {
    if (input === void 0 && (result.issues.length || result.fallback)) {
      return { issues: [], value: void 0 };
    }
    return result;
  }
  var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    inst._zod.optout = "optional";
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
    });
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      if (def.innerType._zod.optin === "optional") {
        const input = payload.value;
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise)
          return result.then((r) => handleOptionalResult(r, input));
        return handleOptionalResult(result, input);
      }
      if (payload.value === void 0) {
        return payload;
      }
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
    $ZodOptional.init(inst, def);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
    inst._zod.parse = (payload, ctx) => {
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "pattern", () => {
      const pattern = def.innerType._zod.pattern;
      return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
    });
    defineLazy(inst._zod, "values", () => {
      return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      if (payload.value === null)
        return payload;
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        return def.innerType._zod.run(payload, ctx);
      }
      if (payload.value === void 0) {
        payload.value = def.defaultValue;
        return payload;
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => handleDefaultResult(result2, def));
      }
      return handleDefaultResult(result, def);
    };
  });
  function handleDefaultResult(payload, def) {
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return payload;
  }
  var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        return def.innerType._zod.run(payload, ctx);
      }
      if (payload.value === void 0) {
        payload.value = def.defaultValue;
      }
      return def.innerType._zod.run(payload, ctx);
    };
  });
  var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => {
      const v = def.innerType._zod.values;
      return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
    });
    inst._zod.parse = (payload, ctx) => {
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => handleNonOptionalResult(result2, inst));
      }
      return handleNonOptionalResult(result, inst);
    };
  });
  function handleNonOptionalResult(payload, inst) {
    if (!payload.issues.length && payload.value === void 0) {
      payload.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: payload.value,
        inst
      });
    }
    return payload;
  }
  var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        throw new $ZodEncodeError("ZodSuccess");
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => {
          payload.value = result2.issues.length === 0;
          return payload;
        });
      }
      payload.value = result.issues.length === 0;
      return payload;
    };
  });
  var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.optin = "optional";
    defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        return def.innerType._zod.run(payload, ctx);
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then((result2) => {
          payload.value = result2.value;
          if (result2.issues.length) {
            payload.value = def.catchValue({
              ...payload,
              error: {
                issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
              },
              input: payload.value
            });
            payload.issues = [];
            payload.fallback = true;
          }
          return payload;
        });
      }
      payload.value = result.value;
      if (result.issues.length) {
        payload.value = def.catchValue({
          ...payload,
          error: {
            issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
          },
          input: payload.value
        });
        payload.issues = [];
        payload.fallback = true;
      }
      return payload;
    };
  });
  var $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _ctx) => {
      if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
        payload.issues.push({
          input: payload.value,
          inst,
          expected: "nan",
          code: "invalid_type"
        });
        return payload;
      }
      return payload;
    };
  });
  var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => def.in._zod.values);
    defineLazy(inst._zod, "optin", () => def.in._zod.optin);
    defineLazy(inst._zod, "optout", () => def.out._zod.optout);
    defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        const right = def.out._zod.run(payload, ctx);
        if (right instanceof Promise) {
          return right.then((right2) => handlePipeResult(right2, def.in, ctx));
        }
        return handlePipeResult(right, def.in, ctx);
      }
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise) {
        return left.then((left2) => handlePipeResult(left2, def.out, ctx));
      }
      return handlePipeResult(left, def.out, ctx);
    };
  });
  function handlePipeResult(left, next, ctx) {
    if (left.issues.length) {
      left.aborted = true;
      return left;
    }
    return next._zod.run({ value: left.value, issues: left.issues, fallback: left.fallback }, ctx);
  }
  var $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "values", () => def.in._zod.values);
    defineLazy(inst._zod, "optin", () => def.in._zod.optin);
    defineLazy(inst._zod, "optout", () => def.out._zod.optout);
    defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
    inst._zod.parse = (payload, ctx) => {
      const direction = ctx.direction || "forward";
      if (direction === "forward") {
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
          return left.then((left2) => handleCodecAResult(left2, def, ctx));
        }
        return handleCodecAResult(left, def, ctx);
      } else {
        const right = def.out._zod.run(payload, ctx);
        if (right instanceof Promise) {
          return right.then((right2) => handleCodecAResult(right2, def, ctx));
        }
        return handleCodecAResult(right, def, ctx);
      }
    };
  });
  function handleCodecAResult(result, def, ctx) {
    if (result.issues.length) {
      result.aborted = true;
      return result;
    }
    const direction = ctx.direction || "forward";
    if (direction === "forward") {
      const transformed = def.transform(result.value, result);
      if (transformed instanceof Promise) {
        return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
      }
      return handleCodecTxResult(result, transformed, def.out, ctx);
    } else {
      const transformed = def.reverseTransform(result.value, result);
      if (transformed instanceof Promise) {
        return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
      }
      return handleCodecTxResult(result, transformed, def.in, ctx);
    }
  }
  function handleCodecTxResult(left, value, nextSchema, ctx) {
    if (left.issues.length) {
      left.aborted = true;
      return left;
    }
    return nextSchema._zod.run({ value, issues: left.issues }, ctx);
  }
  var $ZodPreprocess = /* @__PURE__ */ $constructor("$ZodPreprocess", (inst, def) => {
    $ZodPipe.init(inst, def);
  });
  var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
    defineLazy(inst._zod, "values", () => def.innerType._zod.values);
    defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
    defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
    inst._zod.parse = (payload, ctx) => {
      if (ctx.direction === "backward") {
        return def.innerType._zod.run(payload, ctx);
      }
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise) {
        return result.then(handleReadonlyResult);
      }
      return handleReadonlyResult(result);
    };
  });
  function handleReadonlyResult(payload) {
    payload.value = Object.freeze(payload.value);
    return payload;
  }
  var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
    $ZodType.init(inst, def);
    const regexParts = [];
    for (const part of def.parts) {
      if (typeof part === "object" && part !== null) {
        if (!part._zod.pattern) {
          throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
        }
        const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
        if (!source)
          throw new Error(`Invalid template literal part: ${part._zod.traits}`);
        const start = source.startsWith("^") ? 1 : 0;
        const end = source.endsWith("$") ? source.length - 1 : source.length;
        regexParts.push(source.slice(start, end));
      } else if (part === null || primitiveTypes.has(typeof part)) {
        regexParts.push(escapeRegex(`${part}`));
      } else {
        throw new Error(`Invalid template literal part: ${part}`);
      }
    }
    inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
    inst._zod.parse = (payload, _ctx) => {
      if (typeof payload.value !== "string") {
        payload.issues.push({
          input: payload.value,
          inst,
          expected: "string",
          code: "invalid_type"
        });
        return payload;
      }
      inst._zod.pattern.lastIndex = 0;
      if (!inst._zod.pattern.test(payload.value)) {
        payload.issues.push({
          input: payload.value,
          inst,
          code: "invalid_format",
          format: def.format ?? "template_literal",
          pattern: inst._zod.pattern.source
        });
        return payload;
      }
      return payload;
    };
  });
  var $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
    $ZodType.init(inst, def);
    inst._def = def;
    inst._zod.def = def;
    inst.implement = (func) => {
      if (typeof func !== "function") {
        throw new Error("implement() must be called with a function");
      }
      return function(...args) {
        const parsedArgs = inst._def.input ? parse(inst._def.input, args) : args;
        const result = Reflect.apply(func, this, parsedArgs);
        if (inst._def.output) {
          return parse(inst._def.output, result);
        }
        return result;
      };
    };
    inst.implementAsync = (func) => {
      if (typeof func !== "function") {
        throw new Error("implementAsync() must be called with a function");
      }
      return async function(...args) {
        const parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args;
        const result = await Reflect.apply(func, this, parsedArgs);
        if (inst._def.output) {
          return await parseAsync(inst._def.output, result);
        }
        return result;
      };
    };
    inst._zod.parse = (payload, _ctx) => {
      if (typeof payload.value !== "function") {
        payload.issues.push({
          code: "invalid_type",
          expected: "function",
          input: payload.value,
          inst
        });
        return payload;
      }
      const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
      if (hasPromiseOutput) {
        payload.value = inst.implementAsync(payload.value);
      } else {
        payload.value = inst.implement(payload.value);
      }
      return payload;
    };
    inst.input = (...args) => {
      const F = inst.constructor;
      if (Array.isArray(args[0])) {
        return new F({
          type: "function",
          input: new $ZodTuple({
            type: "tuple",
            items: args[0],
            rest: args[1]
          }),
          output: inst._def.output
        });
      }
      return new F({
        type: "function",
        input: args[0],
        output: inst._def.output
      });
    };
    inst.output = (output) => {
      const F = inst.constructor;
      return new F({
        type: "function",
        input: inst._def.input,
        output
      });
    };
    return inst;
  });
  var $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, ctx) => {
      return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
    };
  });
  var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
    $ZodType.init(inst, def);
    defineLazy(inst._zod, "innerType", () => {
      const d = def;
      if (!d._cachedInner)
        d._cachedInner = def.getter();
      return d._cachedInner;
    });
    defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
    defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
    defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? void 0);
    defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? void 0);
    inst._zod.parse = (payload, ctx) => {
      const inner = inst._zod.innerType;
      return inner._zod.run(payload, ctx);
    };
  });
  var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
    $ZodCheck.init(inst, def);
    $ZodType.init(inst, def);
    inst._zod.parse = (payload, _) => {
      return payload;
    };
    inst._zod.check = (payload) => {
      const input = payload.value;
      const r = def.fn(input);
      if (r instanceof Promise) {
        return r.then((r2) => handleRefineResult(r2, payload, input, inst));
      }
      handleRefineResult(r, payload, input, inst);
      return;
    };
  });
  function handleRefineResult(result, payload, input, inst) {
    if (!result) {
      const _iss = {
        code: "custom",
        input,
        inst,
        // incorporates params.error into issue reporting
        path: [...inst._zod.def.path ?? []],
        // incorporates params.error into issue reporting
        continue: !inst._zod.def.abort
        // params: inst._zod.def.params,
      };
      if (inst._zod.def.params)
        _iss.params = inst._zod.def.params;
      payload.issues.push(issue(_iss));
    }
  }

  // node_modules/zod/v4/locales/index.js
  var locales_exports = {};
  __export(locales_exports, {
    ar: () => ar_default,
    az: () => az_default,
    be: () => be_default,
    bg: () => bg_default,
    ca: () => ca_default,
    cs: () => cs_default,
    da: () => da_default,
    de: () => de_default,
    el: () => el_default,
    en: () => en_default,
    eo: () => eo_default,
    es: () => es_default,
    fa: () => fa_default,
    fi: () => fi_default,
    fr: () => fr_default,
    frCA: () => fr_CA_default,
    he: () => he_default,
    hr: () => hr_default,
    hu: () => hu_default,
    hy: () => hy_default,
    id: () => id_default,
    is: () => is_default,
    it: () => it_default,
    ja: () => ja_default,
    ka: () => ka_default,
    kh: () => kh_default,
    km: () => km_default,
    ko: () => ko_default,
    lt: () => lt_default,
    mk: () => mk_default,
    ms: () => ms_default,
    nl: () => nl_default,
    no: () => no_default,
    ota: () => ota_default,
    pl: () => pl_default,
    ps: () => ps_default,
    pt: () => pt_default,
    ro: () => ro_default,
    ru: () => ru_default,
    sl: () => sl_default,
    sv: () => sv_default,
    ta: () => ta_default,
    th: () => th_default,
    tr: () => tr_default,
    ua: () => ua_default,
    uk: () => uk_default,
    ur: () => ur_default,
    uz: () => uz_default,
    vi: () => vi_default,
    yo: () => yo_default,
    zhCN: () => zh_CN_default,
    zhTW: () => zh_TW_default
  });

  // node_modules/zod/v4/locales/ar.js
  var error = () => {
    const Sizable = {
      string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
      file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
      array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
      set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0645\u062F\u062E\u0644",
      email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
      url: "\u0631\u0627\u0628\u0637",
      emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
      ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
      ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
      cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
      cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
      base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
      base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
      json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
      e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
      jwt: "JWT",
      template_literal: "\u0645\u062F\u062E\u0644"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${issue2.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
          }
          return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${stringifyPrimitive(issue2.values[0])}`;
          return `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"}`;
          return `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${issue2.prefix}"`;
          if (_issue.format === "ends_with")
            return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${_issue.pattern}`;
          return `${FormatDictionary[_issue.format] ?? issue2.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
        }
        case "not_multiple_of":
          return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${issue2.divisor}`;
        case "unrecognized_keys":
          return `\u0645\u0639\u0631\u0641${issue2.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${issue2.keys.length > 1 ? "\u0629" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
        case "invalid_key":
          return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
        case "invalid_union":
          return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
        case "invalid_element":
          return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
        default:
          return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      }
    };
  };
  function ar_default() {
    return {
      localeError: error()
    };
  }

  // node_modules/zod/v4/locales/az.js
  var error2 = () => {
    const Sizable = {
      string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
      file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
      array: { unit: "element", verb: "olmal\u0131d\u0131r" },
      set: { unit: "element", verb: "olmal\u0131d\u0131r" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${issue2.expected}, daxil olan ${received}`;
          }
          return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${expected}, daxil olan ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${stringifyPrimitive(issue2.values[0])}`;
          return `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
          return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Yanl\u0131\u015F m\u0259tn: "${_issue.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`;
          if (_issue.format === "ends_with")
            return `Yanl\u0131\u015F m\u0259tn: "${_issue.suffix}" il\u0259 bitm\u0259lidir`;
          if (_issue.format === "includes")
            return `Yanl\u0131\u015F m\u0259tn: "${_issue.includes}" daxil olmal\u0131d\u0131r`;
          if (_issue.format === "regex")
            return `Yanl\u0131\u015F m\u0259tn: ${_issue.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`;
          return `Yanl\u0131\u015F ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Yanl\u0131\u015F \u0259d\u0259d: ${issue2.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan a\xE7ar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
        case "invalid_union":
          return "Yanl\u0131\u015F d\u0259y\u0259r";
        case "invalid_element":
          return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
        default:
          return `Yanl\u0131\u015F d\u0259y\u0259r`;
      }
    };
  };
  function az_default() {
    return {
      localeError: error2()
    };
  }

  // node_modules/zod/v4/locales/be.js
  function getBelarusianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return many;
    }
    if (lastDigit === 1) {
      return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return few;
    }
    return many;
  }
  var error3 = () => {
    const Sizable = {
      string: {
        unit: {
          one: "\u0441\u0456\u043C\u0432\u0430\u043B",
          few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
          many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E"
        },
        verb: "\u043C\u0435\u0446\u044C"
      },
      array: {
        unit: {
          one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
          few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
          many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
        },
        verb: "\u043C\u0435\u0446\u044C"
      },
      set: {
        unit: {
          one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
          few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
          many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
        },
        verb: "\u043C\u0435\u0446\u044C"
      },
      file: {
        unit: {
          one: "\u0431\u0430\u0439\u0442",
          few: "\u0431\u0430\u0439\u0442\u044B",
          many: "\u0431\u0430\u0439\u0442\u0430\u045E"
        },
        verb: "\u043C\u0435\u0446\u044C"
      }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0443\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0430\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0447\u0430\u0441",
      duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
      cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
      base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
      base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
      json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
      e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0443\u0432\u043E\u0434"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u043B\u0456\u043A",
      array: "\u043C\u0430\u0441\u0456\u045E"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${issue2.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
          }
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${stringifyPrimitive(issue2.values[0])}`;
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            const maxValue = Number(issue2.maximum);
            const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.maximum.toString()} ${unit}`;
          }
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            const minValue = Number(issue2.minimum);
            const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.minimum.toString()} ${unit}`;
          }
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${issue2.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
        case "invalid_union":
          return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
        case "invalid_element":
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${issue2.origin}`;
        default:
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434`;
      }
    };
  };
  function be_default() {
    return {
      localeError: error3()
    };
  }

  // node_modules/zod/v4/locales/bg.js
  var error4 = () => {
    const Sizable = {
      string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
      file: { unit: "\u0431\u0430\u0439\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
      array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
      set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0432\u0445\u043E\u0434",
      email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0432\u0440\u0435\u043C\u0435",
      duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
      cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
      base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
      json_string: "JSON \u043D\u0438\u0437",
      e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
      jwt: "JWT",
      template_literal: "\u0432\u0445\u043E\u0434"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0447\u0438\u0441\u043B\u043E",
      array: "\u043C\u0430\u0441\u0438\u0432"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
          }
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${stringifyPrimitive(issue2.values[0])}`;
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`;
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${_issue.pattern}`;
          let invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
          if (_issue.format === "emoji")
            invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
          if (_issue.format === "datetime")
            invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
          if (_issue.format === "date")
            invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
          if (_issue.format === "time")
            invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
          if (_issue.format === "duration")
            invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
          return `${invalid_adj} ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${issue2.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${issue2.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
        case "invalid_union":
          return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
        case "invalid_element":
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${issue2.origin}`;
        default:
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434`;
      }
    };
  };
  function bg_default() {
    return {
      localeError: error4()
    };
  }

  // node_modules/zod/v4/locales/ca.js
  var error5 = () => {
    const Sizable = {
      string: { unit: "car\xE0cters", verb: "contenir" },
      file: { unit: "bytes", verb: "contenir" },
      array: { unit: "elements", verb: "contenir" },
      set: { unit: "elements", verb: "contenir" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "entrada",
      email: "adre\xE7a electr\xF2nica",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "durada ISO",
      ipv4: "adre\xE7a IPv4",
      ipv6: "adre\xE7a IPv6",
      cidrv4: "rang IPv4",
      cidrv6: "rang IPv6",
      base64: "cadena codificada en base64",
      base64url: "cadena codificada en base64url",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Tipus inv\xE0lid: s'esperava instanceof ${issue2.expected}, s'ha rebut ${received}`;
          }
          return `Tipus inv\xE0lid: s'esperava ${expected}, s'ha rebut ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Valor inv\xE0lid: s'esperava ${stringifyPrimitive(issue2.values[0])}`;
          return `Opci\xF3 inv\xE0lida: s'esperava una de ${joinValues(issue2.values, " o ")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "com a m\xE0xim" : "menys de";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} contingu\xE9s ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
          return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} fos ${adj} ${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? "com a m\xEDnim" : "m\xE9s de";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Massa petit: s'esperava que ${issue2.origin} contingu\xE9s ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Massa petit: s'esperava que ${issue2.origin} fos ${adj} ${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `Format inv\xE0lid: ha de comen\xE7ar amb "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `Format inv\xE0lid: ha d'acabar amb "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Format inv\xE0lid: ha d'incloure "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${_issue.pattern}`;
          return `Format inv\xE0lid per a ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Clau${issue2.keys.length > 1 ? "s" : ""} no reconeguda${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Clau inv\xE0lida a ${issue2.origin}`;
        case "invalid_union":
          return "Entrada inv\xE0lida";
        // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
        case "invalid_element":
          return `Element inv\xE0lid a ${issue2.origin}`;
        default:
          return `Entrada inv\xE0lida`;
      }
    };
  };
  function ca_default() {
    return {
      localeError: error5()
    };
  }

  // node_modules/zod/v4/locales/cs.js
  var error6 = () => {
    const Sizable = {
      string: { unit: "znak\u016F", verb: "m\xEDt" },
      file: { unit: "bajt\u016F", verb: "m\xEDt" },
      array: { unit: "prvk\u016F", verb: "m\xEDt" },
      set: { unit: "prvk\u016F", verb: "m\xEDt" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "regul\xE1rn\xED v\xFDraz",
      email: "e-mailov\xE1 adresa",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "datum a \u010Das ve form\xE1tu ISO",
      date: "datum ve form\xE1tu ISO",
      time: "\u010Das ve form\xE1tu ISO",
      duration: "doba trv\xE1n\xED ISO",
      ipv4: "IPv4 adresa",
      ipv6: "IPv6 adresa",
      cidrv4: "rozsah IPv4",
      cidrv6: "rozsah IPv6",
      base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
      base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
      json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
      e164: "\u010D\xEDslo E.164",
      jwt: "JWT",
      template_literal: "vstup"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u010D\xEDslo",
      string: "\u0159et\u011Bzec",
      function: "funkce",
      array: "pole"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${issue2.expected}, obdr\u017Eeno ${received}`;
          }
          return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${expected}, obdr\u017Eeno ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${stringifyPrimitive(issue2.values[0])}`;
          return `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
          }
          return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
          }
          return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${_issue.pattern}`;
          return `Neplatn\xFD form\xE1t ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Nezn\xE1m\xE9 kl\xED\u010De: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Neplatn\xFD kl\xED\u010D v ${issue2.origin}`;
        case "invalid_union":
          return "Neplatn\xFD vstup";
        case "invalid_element":
          return `Neplatn\xE1 hodnota v ${issue2.origin}`;
        default:
          return `Neplatn\xFD vstup`;
      }
    };
  };
  function cs_default() {
    return {
      localeError: error6()
    };
  }

  // node_modules/zod/v4/locales/da.js
  var error7 = () => {
    const Sizable = {
      string: { unit: "tegn", verb: "havde" },
      file: { unit: "bytes", verb: "havde" },
      array: { unit: "elementer", verb: "indeholdt" },
      set: { unit: "elementer", verb: "indeholdt" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "input",
      email: "e-mailadresse",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dato- og klokkesl\xE6t",
      date: "ISO-dato",
      time: "ISO-klokkesl\xE6t",
      duration: "ISO-varighed",
      ipv4: "IPv4-omr\xE5de",
      ipv6: "IPv6-omr\xE5de",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodet streng",
      base64url: "base64url-kodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input"
    };
    const TypeDictionary = {
      nan: "NaN",
      string: "streng",
      number: "tal",
      boolean: "boolean",
      array: "liste",
      object: "objekt",
      set: "s\xE6t",
      file: "fil"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Ugyldigt input: forventede instanceof ${issue2.expected}, fik ${received}`;
          }
          return `Ugyldigt input: forventede ${expected}, fik ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Ugyldig v\xE6rdi: forventede ${stringifyPrimitive(issue2.values[0])}`;
          return `Ugyldigt valg: forventede en af f\xF8lgende ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
          if (sizing)
            return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
          return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
          if (sizing) {
            return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `For lille: forventede ${origin} havde ${adj} ${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Ugyldig streng: skal matche m\xF8nsteret ${_issue.pattern}`;
          return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Ugyldigt tal: skal v\xE6re deleligt med ${issue2.divisor}`;
        case "unrecognized_keys":
          return `${issue2.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Ugyldig n\xF8gle i ${issue2.origin}`;
        case "invalid_union":
          return "Ugyldigt input: matcher ingen af de tilladte typer";
        case "invalid_element":
          return `Ugyldig v\xE6rdi i ${issue2.origin}`;
        default:
          return `Ugyldigt input`;
      }
    };
  };
  function da_default() {
    return {
      localeError: error7()
    };
  }

  // node_modules/zod/v4/locales/de.js
  var error8 = () => {
    const Sizable = {
      string: { unit: "Zeichen", verb: "zu haben" },
      file: { unit: "Bytes", verb: "zu haben" },
      array: { unit: "Elemente", verb: "zu haben" },
      set: { unit: "Elemente", verb: "zu haben" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "Eingabe",
      email: "E-Mail-Adresse",
      url: "URL",
      emoji: "Emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-Datum und -Uhrzeit",
      date: "ISO-Datum",
      time: "ISO-Uhrzeit",
      duration: "ISO-Dauer",
      ipv4: "IPv4-Adresse",
      ipv6: "IPv6-Adresse",
      cidrv4: "IPv4-Bereich",
      cidrv6: "IPv6-Bereich",
      base64: "Base64-codierter String",
      base64url: "Base64-URL-codierter String",
      json_string: "JSON-String",
      e164: "E.164-Nummer",
      jwt: "JWT",
      template_literal: "Eingabe"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "Zahl",
      array: "Array"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Ung\xFCltige Eingabe: erwartet instanceof ${issue2.expected}, erhalten ${received}`;
          }
          return `Ung\xFCltige Eingabe: erwartet ${expected}, erhalten ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Ung\xFCltige Eingabe: erwartet ${stringifyPrimitive(issue2.values[0])}`;
          return `Ung\xFCltige Option: erwartet eine von ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
          return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ist`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} hat`;
          }
          return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ist`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Ung\xFCltiger String: muss mit "${_issue.prefix}" beginnen`;
          if (_issue.format === "ends_with")
            return `Ung\xFCltiger String: muss mit "${_issue.suffix}" enden`;
          if (_issue.format === "includes")
            return `Ung\xFCltiger String: muss "${_issue.includes}" enthalten`;
          if (_issue.format === "regex")
            return `Ung\xFCltiger String: muss dem Muster ${_issue.pattern} entsprechen`;
          return `Ung\xFCltig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Ung\xFCltige Zahl: muss ein Vielfaches von ${issue2.divisor} sein`;
        case "unrecognized_keys":
          return `${issue2.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Ung\xFCltiger Schl\xFCssel in ${issue2.origin}`;
        case "invalid_union":
          return "Ung\xFCltige Eingabe";
        case "invalid_element":
          return `Ung\xFCltiger Wert in ${issue2.origin}`;
        default:
          return `Ung\xFCltige Eingabe`;
      }
    };
  };
  function de_default() {
    return {
      localeError: error8()
    };
  }

  // node_modules/zod/v4/locales/el.js
  var error9 = () => {
    const Sizable = {
      string: { unit: "\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
      file: { unit: "bytes", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
      array: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
      set: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
      map: { unit: "\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
      email: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1",
      date: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
      time: "ISO \u03CE\u03C1\u03B1",
      duration: "ISO \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1",
      ipv4: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv4",
      ipv6: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv6",
      mac: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 MAC",
      cidrv4: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv4",
      cidrv6: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv6",
      base64: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64",
      base64url: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64url",
      json_string: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC JSON",
      e164: "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 E.164",
      jwt: "JWT",
      template_literal: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (typeof issue2.expected === "string" && /^[A-Z]/.test(issue2.expected)) {
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD instanceof ${issue2.expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${received}`;
          }
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${stringifyPrimitive(issue2.values[0])}`;
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD \u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1"}`;
          return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD\u03B5\u03B9 \u03BC\u03B5 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03BC\u03BF\u03C4\u03AF\u03B2\u03BF ${_issue.pattern}`;
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF: ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 ${issue2.divisor}`;
        case "unrecognized_keys":
          return `\u0386\u03B3\u03BD\u03C9\u03C3\u03C4${issue2.keys.length > 1 ? "\u03B1" : "\u03BF"} \u03BA\u03BB\u03B5\u03B9\u03B4${issue2.keys.length > 1 ? "\u03B9\u03AC" : "\u03AF"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03C4\u03BF ${issue2.origin}`;
        case "invalid_union":
          return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
        case "invalid_element":
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03C3\u03C4\u03BF ${issue2.origin}`;
        default:
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2`;
      }
    };
  };
  function el_default() {
    return {
      localeError: error9()
    };
  }

  // node_modules/zod/v4/locales/en.js
  var error10 = () => {
    const Sizable = {
      string: { unit: "characters", verb: "to have" },
      file: { unit: "bytes", verb: "to have" },
      array: { unit: "items", verb: "to have" },
      set: { unit: "items", verb: "to have" },
      map: { unit: "entries", verb: "to have" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      mac: "MAC address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      jwt: "JWT",
      template_literal: "input"
    };
    const TypeDictionary = {
      // Compatibility: "nan" -> "NaN" for display
      nan: "NaN"
      // All other type names omitted - they fall back to raw values via ?? operator
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          return `Invalid input: expected ${expected}, received ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
          return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
          return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `Invalid string: must start with "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `Invalid string: must end with "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Invalid string: must include "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Invalid string: must match pattern ${_issue.pattern}`;
          return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${issue2.origin}`;
        case "invalid_union":
          if (issue2.options && Array.isArray(issue2.options) && issue2.options.length > 0) {
            const opts = issue2.options.map((o) => `'${o}'`).join(" | ");
            return `Invalid discriminator value. Expected ${opts}`;
          }
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${issue2.origin}`;
        default:
          return `Invalid input`;
      }
    };
  };
  function en_default() {
    return {
      localeError: error10()
    };
  }

  // node_modules/zod/v4/locales/eo.js
  var error11 = () => {
    const Sizable = {
      string: { unit: "karaktrojn", verb: "havi" },
      file: { unit: "bajtojn", verb: "havi" },
      array: { unit: "elementojn", verb: "havi" },
      set: { unit: "elementojn", verb: "havi" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "enigo",
      email: "retadreso",
      url: "URL",
      emoji: "emo\u011Dio",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datotempo",
      date: "ISO-dato",
      time: "ISO-tempo",
      duration: "ISO-da\u016Dro",
      ipv4: "IPv4-adreso",
      ipv6: "IPv6-adreso",
      cidrv4: "IPv4-rango",
      cidrv6: "IPv6-rango",
      base64: "64-ume kodita karaktraro",
      base64url: "URL-64-ume kodita karaktraro",
      json_string: "JSON-karaktraro",
      e164: "E.164-nombro",
      jwt: "JWT",
      template_literal: "enigo"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "nombro",
      array: "tabelo",
      null: "senvalora"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Nevalida enigo: atendi\u011Dis instanceof ${issue2.expected}, ricevi\u011Dis ${received}`;
          }
          return `Nevalida enigo: atendi\u011Dis ${expected}, ricevi\u011Dis ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Nevalida enigo: atendi\u011Dis ${stringifyPrimitive(issue2.values[0])}`;
          return `Nevalida opcio: atendi\u011Dis unu el ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
          return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} havu ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} estu ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Nevalida karaktraro: devas komenci\u011Di per "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Nevalida karaktraro: devas fini\u011Di per "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
          return `Nevalida ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Nevalida nombro: devas esti oblo de ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Nekonata${issue2.keys.length > 1 ? "j" : ""} \u015Dlosilo${issue2.keys.length > 1 ? "j" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Nevalida \u015Dlosilo en ${issue2.origin}`;
        case "invalid_union":
          return "Nevalida enigo";
        case "invalid_element":
          return `Nevalida valoro en ${issue2.origin}`;
        default:
          return `Nevalida enigo`;
      }
    };
  };
  function eo_default() {
    return {
      localeError: error11()
    };
  }

  // node_modules/zod/v4/locales/es.js
  var error12 = () => {
    const Sizable = {
      string: { unit: "caracteres", verb: "tener" },
      file: { unit: "bytes", verb: "tener" },
      array: { unit: "elementos", verb: "tener" },
      set: { unit: "elementos", verb: "tener" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "entrada",
      email: "direcci\xF3n de correo electr\xF3nico",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "fecha y hora ISO",
      date: "fecha ISO",
      time: "hora ISO",
      duration: "duraci\xF3n ISO",
      ipv4: "direcci\xF3n IPv4",
      ipv6: "direcci\xF3n IPv6",
      cidrv4: "rango IPv4",
      cidrv6: "rango IPv6",
      base64: "cadena codificada en base64",
      base64url: "URL codificada en base64",
      json_string: "cadena JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada"
    };
    const TypeDictionary = {
      nan: "NaN",
      string: "texto",
      number: "n\xFAmero",
      boolean: "booleano",
      array: "arreglo",
      object: "objeto",
      set: "conjunto",
      file: "archivo",
      date: "fecha",
      bigint: "n\xFAmero grande",
      symbol: "s\xEDmbolo",
      undefined: "indefinido",
      null: "nulo",
      function: "funci\xF3n",
      map: "mapa",
      record: "registro",
      tuple: "tupla",
      enum: "enumeraci\xF3n",
      union: "uni\xF3n",
      literal: "literal",
      promise: "promesa",
      void: "vac\xEDo",
      never: "nunca",
      unknown: "desconocido",
      any: "cualquiera"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Entrada inv\xE1lida: se esperaba instanceof ${issue2.expected}, recibido ${received}`;
          }
          return `Entrada inv\xE1lida: se esperaba ${expected}, recibido ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Entrada inv\xE1lida: se esperaba ${stringifyPrimitive(issue2.values[0])}`;
          return `Opci\xF3n inv\xE1lida: se esperaba una de ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
          if (sizing)
            return `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
          return `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
          if (sizing) {
            return `Demasiado peque\xF1o: se esperaba que ${origin} tuviera ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Demasiado peque\xF1o: se esperaba que ${origin} fuera ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Cadena inv\xE1lida: debe comenzar con "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Cadena inv\xE1lida: debe terminar en "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Cadena inv\xE1lida: debe incluir "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${_issue.pattern}`;
          return `Inv\xE1lido ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Llave${issue2.keys.length > 1 ? "s" : ""} desconocida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Llave inv\xE1lida en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
        case "invalid_union":
          return "Entrada inv\xE1lida";
        case "invalid_element":
          return `Valor inv\xE1lido en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
        default:
          return `Entrada inv\xE1lida`;
      }
    };
  };
  function es_default() {
    return {
      localeError: error12()
    };
  }

  // node_modules/zod/v4/locales/fa.js
  var error13 = () => {
    const Sizable = {
      string: { unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
      file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
      array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
      set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0648\u0631\u0648\u062F\u06CC",
      email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
      url: "URL",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
      time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
      ipv4: "IPv4 \u0622\u062F\u0631\u0633",
      ipv6: "IPv6 \u0622\u062F\u0631\u0633",
      cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
      cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
      base64: "base64-encoded \u0631\u0634\u062A\u0647",
      base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
      json_string: "JSON \u0631\u0634\u062A\u0647",
      e164: "E.164 \u0639\u062F\u062F",
      jwt: "JWT",
      template_literal: "\u0648\u0631\u0648\u062F\u06CC"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0639\u062F\u062F",
      array: "\u0622\u0631\u0627\u06CC\u0647"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${issue2.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
          }
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
        }
        case "invalid_value":
          if (issue2.values.length === 1) {
            return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${stringifyPrimitive(issue2.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`;
          }
          return `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${joinValues(issue2.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`;
          }
          return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0628\u0627\u0634\u062F`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0628\u0627\u0634\u062F`;
          }
          return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0628\u0627\u0634\u062F`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`;
          }
          if (_issue.format === "ends_with") {
            return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`;
          }
          if (_issue.format === "includes") {
            return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${_issue.includes}" \u0628\u0627\u0634\u062F`;
          }
          if (_issue.format === "regex") {
            return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${_issue.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`;
          }
          return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
        }
        case "not_multiple_of":
          return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${issue2.divisor} \u0628\u0627\u0634\u062F`;
        case "unrecognized_keys":
          return `\u06A9\u0644\u06CC\u062F${issue2.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${issue2.origin}`;
        case "invalid_union":
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
        case "invalid_element":
          return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${issue2.origin}`;
        default:
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
    };
  };
  function fa_default() {
    return {
      localeError: error13()
    };
  }

  // node_modules/zod/v4/locales/fi.js
  var error14 = () => {
    const Sizable = {
      string: { unit: "merkki\xE4", subject: "merkkijonon" },
      file: { unit: "tavua", subject: "tiedoston" },
      array: { unit: "alkiota", subject: "listan" },
      set: { unit: "alkiota", subject: "joukon" },
      number: { unit: "", subject: "luvun" },
      bigint: { unit: "", subject: "suuren kokonaisluvun" },
      int: { unit: "", subject: "kokonaisluvun" },
      date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "s\xE4\xE4nn\xF6llinen lauseke",
      email: "s\xE4hk\xF6postiosoite",
      url: "URL-osoite",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-aikaleima",
      date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
      time: "ISO-aika",
      duration: "ISO-kesto",
      ipv4: "IPv4-osoite",
      ipv6: "IPv6-osoite",
      cidrv4: "IPv4-alue",
      cidrv6: "IPv6-alue",
      base64: "base64-koodattu merkkijono",
      base64url: "base64url-koodattu merkkijono",
      json_string: "JSON-merkkijono",
      e164: "E.164-luku",
      jwt: "JWT",
      template_literal: "templaattimerkkijono"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Virheellinen tyyppi: odotettiin instanceof ${issue2.expected}, oli ${received}`;
          }
          return `Virheellinen tyyppi: odotettiin ${expected}, oli ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Virheellinen sy\xF6te: t\xE4ytyy olla ${stringifyPrimitive(issue2.values[0])}`;
          return `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Liian suuri: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.maximum.toString()} ${sizing.unit}`.trim();
          }
          return `Liian suuri: arvon t\xE4ytyy olla ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Liian pieni: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.minimum.toString()} ${sizing.unit}`.trim();
          }
          return `Liian pieni: arvon t\xE4ytyy olla ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Virheellinen sy\xF6te: t\xE4ytyy loppua "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${_issue.includes}"`;
          if (_issue.format === "regex") {
            return `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${_issue.pattern}`;
          }
          return `Virheellinen ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Virheellinen luku: t\xE4ytyy olla luvun ${issue2.divisor} monikerta`;
        case "unrecognized_keys":
          return `${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return "Virheellinen avain tietueessa";
        case "invalid_union":
          return "Virheellinen unioni";
        case "invalid_element":
          return "Virheellinen arvo joukossa";
        default:
          return `Virheellinen sy\xF6te`;
      }
    };
  };
  function fi_default() {
    return {
      localeError: error14()
    };
  }

  // node_modules/zod/v4/locales/fr.js
  var error15 = () => {
    const Sizable = {
      string: { unit: "caract\xE8res", verb: "avoir" },
      file: { unit: "octets", verb: "avoir" },
      array: { unit: "\xE9l\xE9ments", verb: "avoir" },
      set: { unit: "\xE9l\xE9ments", verb: "avoir" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "entr\xE9e",
      email: "adresse e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date et heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e"
    };
    const TypeDictionary = {
      string: "cha\xEEne",
      number: "nombre",
      int: "entier",
      boolean: "bool\xE9en",
      bigint: "grand entier",
      symbol: "symbole",
      undefined: "ind\xE9fini",
      null: "null",
      never: "jamais",
      void: "vide",
      date: "date",
      array: "tableau",
      object: "objet",
      tuple: "tuple",
      record: "enregistrement",
      map: "carte",
      set: "ensemble",
      file: "fichier",
      nonoptional: "non-optionnel",
      nan: "NaN",
      function: "fonction"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Entr\xE9e invalide : instanceof ${issue2.expected} attendu, ${received} re\xE7u`;
          }
          return `Entr\xE9e invalide : ${expected} attendu, ${received} re\xE7u`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Entr\xE9e invalide : ${stringifyPrimitive(issue2.values[0])} attendu`;
          return `Option invalide : une valeur parmi ${joinValues(issue2.values, "|")} attendue`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Trop grand : ${TypeDictionary[issue2.origin] ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xE9l\xE9ment(s)"}`;
          return `Trop grand : ${TypeDictionary[issue2.origin] ?? "valeur"} doit \xEAtre ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Trop petit : ${TypeDictionary[issue2.origin] ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          return `Trop petit : ${TypeDictionary[issue2.origin] ?? "valeur"} doit \xEAtre ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Cha\xEEne invalide : doit correspondre au mod\xE8le ${_issue.pattern}`;
          return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
        }
        case "not_multiple_of":
          return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Cl\xE9 invalide dans ${issue2.origin}`;
        case "invalid_union":
          return "Entr\xE9e invalide";
        case "invalid_element":
          return `Valeur invalide dans ${issue2.origin}`;
        default:
          return `Entr\xE9e invalide`;
      }
    };
  };
  function fr_default() {
    return {
      localeError: error15()
    };
  }

  // node_modules/zod/v4/locales/fr-CA.js
  var error16 = () => {
    const Sizable = {
      string: { unit: "caract\xE8res", verb: "avoir" },
      file: { unit: "octets", verb: "avoir" },
      array: { unit: "\xE9l\xE9ments", verb: "avoir" },
      set: { unit: "\xE9l\xE9ments", verb: "avoir" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "entr\xE9e",
      email: "adresse courriel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "date-heure ISO",
      date: "date ISO",
      time: "heure ISO",
      duration: "dur\xE9e ISO",
      ipv4: "adresse IPv4",
      ipv6: "adresse IPv6",
      cidrv4: "plage IPv4",
      cidrv6: "plage IPv6",
      base64: "cha\xEEne encod\xE9e en base64",
      base64url: "cha\xEEne encod\xE9e en base64url",
      json_string: "cha\xEEne JSON",
      e164: "num\xE9ro E.164",
      jwt: "JWT",
      template_literal: "entr\xE9e"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Entr\xE9e invalide : attendu instanceof ${issue2.expected}, re\xE7u ${received}`;
          }
          return `Entr\xE9e invalide : attendu ${expected}, re\xE7u ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Entr\xE9e invalide : attendu ${stringifyPrimitive(issue2.values[0])}`;
          return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "\u2264" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} ait ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
          return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} soit ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? "\u2265" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Trop petit : attendu que ${issue2.origin} ait ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Trop petit : attendu que ${issue2.origin} soit ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Cha\xEEne invalide : doit correspondre au motif ${_issue.pattern}`;
          return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
        }
        case "not_multiple_of":
          return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Cl\xE9 invalide dans ${issue2.origin}`;
        case "invalid_union":
          return "Entr\xE9e invalide";
        case "invalid_element":
          return `Valeur invalide dans ${issue2.origin}`;
        default:
          return `Entr\xE9e invalide`;
      }
    };
  };
  function fr_CA_default() {
    return {
      localeError: error16()
    };
  }

  // node_modules/zod/v4/locales/he.js
  var error17 = () => {
    const TypeNames = {
      string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" },
      number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
      boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" },
      bigint: { label: "BigInt", gender: "m" },
      date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
      array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
      object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" },
      null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" },
      undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" },
      symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" },
      function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" },
      map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
      set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" },
      file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
      promise: { label: "Promise", gender: "m" },
      NaN: { label: "NaN", gender: "m" },
      unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" },
      value: { label: "\u05E2\u05E8\u05DA", gender: "m" }
    };
    const Sizable = {
      string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" },
      file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
      array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
      set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
      number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }
      // no unit
    };
    const typeEntry = (t) => t ? TypeNames[t] : void 0;
    const typeLabel = (t) => {
      const e = typeEntry(t);
      if (e)
        return e.label;
      return t ?? TypeNames.unknown.label;
    };
    const withDefinite = (t) => `\u05D4${typeLabel(t)}`;
    const verbFor = (t) => {
      const e = typeEntry(t);
      const gender = e?.gender ?? "m";
      return gender === "f" ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
    };
    const getSizing = (origin) => {
      if (!origin)
        return null;
      return Sizable[origin] ?? null;
    };
    const FormatDictionary = {
      regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" },
      url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" },
      emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" },
      uuid: { label: "UUID", gender: "m" },
      nanoid: { label: "nanoid", gender: "m" },
      guid: { label: "GUID", gender: "m" },
      cuid: { label: "cuid", gender: "m" },
      cuid2: { label: "cuid2", gender: "m" },
      ulid: { label: "ULID", gender: "m" },
      xid: { label: "XID", gender: "m" },
      ksuid: { label: "KSUID", gender: "m" },
      datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" },
      date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" },
      time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
      duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" },
      ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" },
      ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" },
      cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
      cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
      base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" },
      base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" },
      json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" },
      e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
      jwt: { label: "JWT", gender: "m" },
      ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
      uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expectedKey = issue2.expected;
          const expected = TypeDictionary[expectedKey ?? ""] ?? typeLabel(expectedKey);
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? TypeNames[receivedType]?.label ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${issue2.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
          }
          return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
        }
        case "invalid_value": {
          if (issue2.values.length === 1) {
            return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${stringifyPrimitive(issue2.values[0])}`;
          }
          const stringified = issue2.values.map((v) => stringifyPrimitive(v));
          if (issue2.values.length === 2) {
            return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${stringified[0]} \u05D0\u05D5 ${stringified[1]}`;
          }
          const lastValue = stringified[stringified.length - 1];
          const restValues = stringified.slice(0, -1).join(", ");
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${restValues} \u05D0\u05D5 ${lastValue}`;
        }
        case "too_big": {
          const sizing = getSizing(issue2.origin);
          const subject = withDefinite(issue2.origin ?? "value");
          if (issue2.origin === "string") {
            return `${sizing?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.maximum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
          }
          if (issue2.origin === "number") {
            const comparison = issue2.inclusive ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.maximum}` : `\u05E7\u05D8\u05DF \u05DE-${issue2.maximum}`;
            return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
          }
          if (issue2.origin === "array" || issue2.origin === "set") {
            const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
            const comparison = issue2.inclusive ? `${issue2.maximum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA` : `\u05E4\u05D7\u05D5\u05EA \u05DE-${issue2.maximum} ${sizing?.unit ?? ""}`;
            return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
          }
          const adj = issue2.inclusive ? "<=" : "<";
          const be = verbFor(issue2.origin ?? "value");
          if (sizing?.unit) {
            return `${sizing.longLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
          }
          return `${sizing?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const sizing = getSizing(issue2.origin);
          const subject = withDefinite(issue2.origin ?? "value");
          if (issue2.origin === "string") {
            return `${sizing?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.minimum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
          }
          if (issue2.origin === "number") {
            const comparison = issue2.inclusive ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.minimum}` : `\u05D2\u05D3\u05D5\u05DC \u05DE-${issue2.minimum}`;
            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
          }
          if (issue2.origin === "array" || issue2.origin === "set") {
            const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
            if (issue2.minimum === 1 && issue2.inclusive) {
              const singularPhrase = issue2.origin === "set" ? "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3" : "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3";
              return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${singularPhrase}`;
            }
            const comparison = issue2.inclusive ? `${issue2.minimum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8` : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${issue2.minimum} ${sizing?.unit ?? ""}`;
            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
          }
          const adj = issue2.inclusive ? ">=" : ">";
          const be = verbFor(issue2.origin ?? "value");
          if (sizing?.unit) {
            return `${sizing.shortLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `${sizing?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${_issue.pattern}`;
          const nounEntry = FormatDictionary[_issue.format];
          const noun = nounEntry?.label ?? _issue.format;
          const gender = nounEntry?.gender ?? "m";
          const adjective = gender === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
          return `${noun} \u05DC\u05D0 ${adjective}`;
        }
        case "not_multiple_of":
          return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${issue2.divisor}`;
        case "unrecognized_keys":
          return `\u05DE\u05E4\u05EA\u05D7${issue2.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${issue2.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key": {
          return `\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8`;
        }
        case "invalid_union":
          return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
        case "invalid_element": {
          const place = withDefinite(issue2.origin ?? "array");
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${place}`;
        }
        default:
          return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
      }
    };
  };
  function he_default() {
    return {
      localeError: error17()
    };
  }

  // node_modules/zod/v4/locales/hr.js
  var error18 = () => {
    const Sizable = {
      string: { unit: "znakova", verb: "imati" },
      file: { unit: "bajtova", verb: "imati" },
      array: { unit: "stavki", verb: "imati" },
      set: { unit: "stavki", verb: "imati" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "unos",
      email: "email adresa",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum i vrijeme",
      date: "ISO datum",
      time: "ISO vrijeme",
      duration: "ISO trajanje",
      ipv4: "IPv4 adresa",
      ipv6: "IPv6 adresa",
      cidrv4: "IPv4 raspon",
      cidrv6: "IPv6 raspon",
      base64: "base64 kodirani tekst",
      base64url: "base64url kodirani tekst",
      json_string: "JSON tekst",
      e164: "E.164 broj",
      jwt: "JWT",
      template_literal: "unos"
    };
    const TypeDictionary = {
      nan: "NaN",
      string: "tekst",
      number: "broj",
      boolean: "boolean",
      array: "niz",
      object: "objekt",
      set: "skup",
      file: "datoteka",
      date: "datum",
      bigint: "bigint",
      symbol: "simbol",
      undefined: "undefined",
      null: "null",
      function: "funkcija",
      map: "mapa"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Neispravan unos: o\u010Dekuje se instanceof ${issue2.expected}, a primljeno je ${received}`;
          }
          return `Neispravan unos: o\u010Dekuje se ${expected}, a primljeno je ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Neispravna vrijednost: o\u010Dekivano ${stringifyPrimitive(issue2.values[0])}`;
          return `Neispravna opcija: o\u010Dekivano jedno od ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
          if (sizing)
            return `Preveliko: o\u010Dekivano da ${origin ?? "vrijednost"} ima ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemenata"}`;
          return `Preveliko: o\u010Dekivano da ${origin ?? "vrijednost"} bude ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
          if (sizing) {
            return `Premalo: o\u010Dekivano da ${origin} ima ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Premalo: o\u010Dekivano da ${origin} bude ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Neispravan tekst: mora zapo\u010Dinjati s "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Neispravan tekst: mora zavr\u0161avati s "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Neispravan tekst: mora sadr\u017Eavati "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Neispravan tekst: mora odgovarati uzorku ${_issue.pattern}`;
          return `Neispravna ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Neispravan broj: mora biti vi\u0161ekratnik od ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Neprepoznat${issue2.keys.length > 1 ? "i klju\u010Devi" : " klju\u010D"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Neispravan klju\u010D u ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
        case "invalid_union":
          return "Neispravan unos";
        case "invalid_element":
          return `Neispravna vrijednost u ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
        default:
          return `Neispravan unos`;
      }
    };
  };
  function hr_default() {
    return {
      localeError: error18()
    };
  }

  // node_modules/zod/v4/locales/hu.js
  var error19 = () => {
    const Sizable = {
      string: { unit: "karakter", verb: "legyen" },
      file: { unit: "byte", verb: "legyen" },
      array: { unit: "elem", verb: "legyen" },
      set: { unit: "elem", verb: "legyen" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "bemenet",
      email: "email c\xEDm",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO id\u0151b\xE9lyeg",
      date: "ISO d\xE1tum",
      time: "ISO id\u0151",
      duration: "ISO id\u0151intervallum",
      ipv4: "IPv4 c\xEDm",
      ipv6: "IPv6 c\xEDm",
      cidrv4: "IPv4 tartom\xE1ny",
      cidrv6: "IPv6 tartom\xE1ny",
      base64: "base64-k\xF3dolt string",
      base64url: "base64url-k\xF3dolt string",
      json_string: "JSON string",
      e164: "E.164 sz\xE1m",
      jwt: "JWT",
      template_literal: "bemenet"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "sz\xE1m",
      array: "t\xF6mb"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${issue2.expected}, a kapott \xE9rt\xE9k ${received}`;
          }
          return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${expected}, a kapott \xE9rt\xE9k ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${stringifyPrimitive(issue2.values[0])}`;
          return `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `T\xFAl nagy: ${issue2.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elem"}`;
          return `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${issue2.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} m\xE9rete t\xFAl kicsi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} t\xFAl kicsi ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\xC9rv\xE9nytelen string: "${_issue.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`;
          if (_issue.format === "ends_with")
            return `\xC9rv\xE9nytelen string: "${_issue.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`;
          if (_issue.format === "includes")
            return `\xC9rv\xE9nytelen string: "${_issue.includes}" \xE9rt\xE9ket kell tartalmaznia`;
          if (_issue.format === "regex")
            return `\xC9rv\xE9nytelen string: ${_issue.pattern} mint\xE1nak kell megfelelnie`;
          return `\xC9rv\xE9nytelen ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\xC9rv\xE9nytelen sz\xE1m: ${issue2.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
        case "unrecognized_keys":
          return `Ismeretlen kulcs${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\xC9rv\xE9nytelen kulcs ${issue2.origin}`;
        case "invalid_union":
          return "\xC9rv\xE9nytelen bemenet";
        case "invalid_element":
          return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${issue2.origin}`;
        default:
          return `\xC9rv\xE9nytelen bemenet`;
      }
    };
  };
  function hu_default() {
    return {
      localeError: error19()
    };
  }

  // node_modules/zod/v4/locales/hy.js
  function getArmenianPlural(count, one, many) {
    return Math.abs(count) === 1 ? one : many;
  }
  function withDefiniteArticle(word) {
    if (!word)
      return "";
    const vowels = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
    const lastChar = word[word.length - 1];
    return word + (vowels.includes(lastChar) ? "\u0576" : "\u0568");
  }
  var error20 = () => {
    const Sizable = {
      string: {
        unit: {
          one: "\u0576\u0577\u0561\u0576",
          many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580"
        },
        verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
      },
      file: {
        unit: {
          one: "\u0562\u0561\u0575\u0569",
          many: "\u0562\u0561\u0575\u0569\u0565\u0580"
        },
        verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
      },
      array: {
        unit: {
          one: "\u057F\u0561\u0580\u0580",
          many: "\u057F\u0561\u0580\u0580\u0565\u0580"
        },
        verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
      },
      set: {
        unit: {
          one: "\u057F\u0561\u0580\u0580",
          many: "\u057F\u0561\u0580\u0580\u0565\u0580"
        },
        verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
      }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0574\u0578\u0582\u057F\u0584",
      email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
      url: "URL",
      emoji: "\u0567\u0574\u0578\u057B\u056B",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
      date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
      time: "ISO \u056A\u0561\u0574",
      duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
      ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
      ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
      cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
      cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
      base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
      base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
      json_string: "JSON \u057F\u0578\u0572",
      e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
      jwt: "JWT",
      template_literal: "\u0574\u0578\u0582\u057F\u0584"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0569\u056B\u057E",
      array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${issue2.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
          }
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${stringifyPrimitive(issue2.values[1])}`;
          return `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            const maxValue = Number(issue2.maximum);
            const unit = getArmenianPlural(maxValue, sizing.unit.one, sizing.unit.many);
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.maximum.toString()} ${unit}`;
          }
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            const minValue = Number(issue2.minimum);
            const unit = getArmenianPlural(minValue, sizing.unit.one, sizing.unit.many);
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.minimum.toString()} ${unit}`;
          }
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056C\u056B\u0576\u056B ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${_issue.prefix}"-\u0578\u057E`;
          if (_issue.format === "ends_with")
            return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${_issue.suffix}"-\u0578\u057E`;
          if (_issue.format === "includes")
            return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${_issue.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`;
          return `\u054D\u056D\u0561\u056C ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${issue2.divisor}-\u056B`;
        case "unrecognized_keys":
          return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${issue2.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
        case "invalid_union":
          return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
        case "invalid_element":
          return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
        default:
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574`;
      }
    };
  };
  function hy_default() {
    return {
      localeError: error20()
    };
  }

  // node_modules/zod/v4/locales/id.js
  var error21 = () => {
    const Sizable = {
      string: { unit: "karakter", verb: "memiliki" },
      file: { unit: "byte", verb: "memiliki" },
      array: { unit: "item", verb: "memiliki" },
      set: { unit: "item", verb: "memiliki" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "input",
      email: "alamat email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tanggal dan waktu format ISO",
      date: "tanggal format ISO",
      time: "jam format ISO",
      duration: "durasi format ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "rentang alamat IPv4",
      cidrv6: "rentang alamat IPv6",
      base64: "string dengan enkode base64",
      base64url: "string dengan enkode base64url",
      json_string: "string JSON",
      e164: "angka E.164",
      jwt: "JWT",
      template_literal: "input"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Input tidak valid: diharapkan instanceof ${issue2.expected}, diterima ${received}`;
          }
          return `Input tidak valid: diharapkan ${expected}, diterima ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Input tidak valid: diharapkan ${stringifyPrimitive(issue2.values[0])}`;
          return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} memiliki ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
          return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} menjadi ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Terlalu kecil: diharapkan ${issue2.origin} memiliki ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Terlalu kecil: diharapkan ${issue2.origin} menjadi ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `String tidak valid: harus menyertakan "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
          return `${FormatDictionary[_issue.format] ?? issue2.format} tidak valid`;
        }
        case "not_multiple_of":
          return `Angka tidak valid: harus kelipatan dari ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Kunci tidak dikenali ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Kunci tidak valid di ${issue2.origin}`;
        case "invalid_union":
          return "Input tidak valid";
        case "invalid_element":
          return `Nilai tidak valid di ${issue2.origin}`;
        default:
          return `Input tidak valid`;
      }
    };
  };
  function id_default() {
    return {
      localeError: error21()
    };
  }

  // node_modules/zod/v4/locales/is.js
  var error22 = () => {
    const Sizable = {
      string: { unit: "stafi", verb: "a\xF0 hafa" },
      file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
      array: { unit: "hluti", verb: "a\xF0 hafa" },
      set: { unit: "hluti", verb: "a\xF0 hafa" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "gildi",
      email: "netfang",
      url: "vefsl\xF3\xF0",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dagsetning og t\xEDmi",
      date: "ISO dagsetning",
      time: "ISO t\xEDmi",
      duration: "ISO t\xEDmalengd",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded strengur",
      base64url: "base64url-encoded strengur",
      json_string: "JSON strengur",
      e164: "E.164 t\xF6lugildi",
      jwt: "JWT",
      template_literal: "gildi"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "n\xFAmer",
      array: "fylki"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera instanceof ${issue2.expected}`;
          }
          return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera ${expected}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Rangt gildi: gert r\xE1\xF0 fyrir ${stringifyPrimitive(issue2.values[0])}`;
          return `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} hafi ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "hluti"}`;
          return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} s\xE9 ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} hafi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} s\xE9 ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${_issue.pattern}`;
          return `Rangt ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${issue2.divisor}`;
        case "unrecognized_keys":
          return `\xD3\xFEekkt ${issue2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Rangur lykill \xED ${issue2.origin}`;
        case "invalid_union":
          return "Rangt gildi";
        case "invalid_element":
          return `Rangt gildi \xED ${issue2.origin}`;
        default:
          return `Rangt gildi`;
      }
    };
  };
  function is_default() {
    return {
      localeError: error22()
    };
  }

  // node_modules/zod/v4/locales/it.js
  var error23 = () => {
    const Sizable = {
      string: { unit: "caratteri", verb: "avere" },
      file: { unit: "byte", verb: "avere" },
      array: { unit: "elementi", verb: "avere" },
      set: { unit: "elementi", verb: "avere" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "input",
      email: "indirizzo email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e ora ISO",
      date: "data ISO",
      time: "ora ISO",
      duration: "durata ISO",
      ipv4: "indirizzo IPv4",
      ipv6: "indirizzo IPv6",
      cidrv4: "intervallo IPv4",
      cidrv6: "intervallo IPv6",
      base64: "stringa codificata in base64",
      base64url: "URL codificata in base64",
      json_string: "stringa JSON",
      e164: "numero E.164",
      jwt: "JWT",
      template_literal: "input"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "numero",
      array: "vettore"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Input non valido: atteso instanceof ${issue2.expected}, ricevuto ${received}`;
          }
          return `Input non valido: atteso ${expected}, ricevuto ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Input non valido: atteso ${stringifyPrimitive(issue2.values[0])}`;
          return `Opzione non valida: atteso uno tra ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Troppo grande: ${issue2.origin ?? "valore"} deve avere ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementi"}`;
          return `Troppo grande: ${issue2.origin ?? "valore"} deve essere ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Troppo piccolo: ${issue2.origin} deve avere ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Troppo piccolo: ${issue2.origin} deve essere ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Stringa non valida: deve includere "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
          return `Input non valido: ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Numero non valido: deve essere un multiplo di ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Chiav${issue2.keys.length > 1 ? "i" : "e"} non riconosciut${issue2.keys.length > 1 ? "e" : "a"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Chiave non valida in ${issue2.origin}`;
        case "invalid_union":
          return "Input non valido";
        case "invalid_element":
          return `Valore non valido in ${issue2.origin}`;
        default:
          return `Input non valido`;
      }
    };
  };
  function it_default() {
    return {
      localeError: error23()
    };
  }

  // node_modules/zod/v4/locales/ja.js
  var error24 = () => {
    const Sizable = {
      string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
      file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
      array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
      set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u5165\u529B\u5024",
      email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
      url: "URL",
      emoji: "\u7D75\u6587\u5B57",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u6642",
      date: "ISO\u65E5\u4ED8",
      time: "ISO\u6642\u523B",
      duration: "ISO\u671F\u9593",
      ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
      ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
      cidrv4: "IPv4\u7BC4\u56F2",
      cidrv6: "IPv6\u7BC4\u56F2",
      base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
      json_string: "JSON\u6587\u5B57\u5217",
      e164: "E.164\u756A\u53F7",
      jwt: "JWT",
      template_literal: "\u5165\u529B\u5024"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u6570\u5024",
      array: "\u914D\u5217"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u7121\u52B9\u306A\u5165\u529B: instanceof ${issue2.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
          }
          return `\u7121\u52B9\u306A\u5165\u529B: ${expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u7121\u52B9\u306A\u5165\u529B: ${stringifyPrimitive(issue2.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`;
          return `\u7121\u52B9\u306A\u9078\u629E: ${joinValues(issue2.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        case "too_big": {
          const adj = issue2.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${sizing.unit ?? "\u8981\u7D20"}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${sizing.unit}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          if (_issue.format === "ends_with")
            return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          if (_issue.format === "includes")
            return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          if (_issue.format === "regex")
            return `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${_issue.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          return `\u7121\u52B9\u306A${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u7121\u52B9\u306A\u6570\u5024: ${issue2.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        case "unrecognized_keys":
          return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${issue2.keys.length > 1 ? "\u7FA4" : ""}: ${joinValues(issue2.keys, "\u3001")}`;
        case "invalid_key":
          return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
        case "invalid_union":
          return "\u7121\u52B9\u306A\u5165\u529B";
        case "invalid_element":
          return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
        default:
          return `\u7121\u52B9\u306A\u5165\u529B`;
      }
    };
  };
  function ja_default() {
    return {
      localeError: error24()
    };
  }

  // node_modules/zod/v4/locales/ka.js
  var error25 = () => {
    const Sizable = {
      string: { unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
      file: { unit: "\u10D1\u10D0\u10D8\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
      array: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
      set: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
      email: "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
      url: "URL",
      emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
      date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
      time: "\u10D3\u10E0\u10DD",
      duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
      ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
      ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
      cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
      cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
      base64: "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
      base64url: "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
      json_string: "JSON \u10D5\u10D4\u10DA\u10D8",
      e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
      jwt: "JWT",
      template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
      string: "\u10D5\u10D4\u10DA\u10D8",
      boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
      function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
      array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${issue2.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
          }
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${stringifyPrimitive(issue2.values[0])}`;
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${joinValues(issue2.values, "|")}-\u10D3\u10D0\u10DC`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.prefix}"-\u10D8\u10D7`;
          }
          if (_issue.format === "ends_with")
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.suffix}"-\u10D8\u10D7`;
          if (_issue.format === "includes")
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${_issue.includes}"-\u10E1`;
          if (_issue.format === "regex")
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${_issue.pattern}`;
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${issue2.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
        case "unrecognized_keys":
          return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${issue2.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${issue2.origin}-\u10E8\u10D8`;
        case "invalid_union":
          return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
        case "invalid_element":
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${issue2.origin}-\u10E8\u10D8`;
        default:
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0`;
      }
    };
  };
  function ka_default() {
    return {
      localeError: error25()
    };
  }

  // node_modules/zod/v4/locales/km.js
  var error26 = () => {
    const Sizable = {
      string: { unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
      file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
      array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
      set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
      email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
      url: "URL",
      emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
      date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
      time: "\u1798\u17C9\u17C4\u1784 ISO",
      duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
      ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
      cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
      base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
      base64url: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
      json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
      e164: "\u179B\u17C1\u1781 E.164",
      jwt: "JWT",
      template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u179B\u17C1\u1781",
      array: "\u17A2\u17B6\u179A\u17C1 (Array)",
      null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${issue2.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
          }
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${stringifyPrimitive(issue2.values[0])}`;
          return `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u1792\u17B6\u178F\u17BB"}`;
          return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${_issue.pattern}`;
          return `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${issue2.divisor}`;
        case "unrecognized_keys":
          return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
        case "invalid_union":
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
        case "invalid_element":
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
        default:
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
      }
    };
  };
  function km_default() {
    return {
      localeError: error26()
    };
  }

  // node_modules/zod/v4/locales/kh.js
  function kh_default() {
    return km_default();
  }

  // node_modules/zod/v4/locales/ko.js
  var error27 = () => {
    const Sizable = {
      string: { unit: "\uBB38\uC790", verb: "to have" },
      file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
      array: { unit: "\uAC1C", verb: "to have" },
      set: { unit: "\uAC1C", verb: "to have" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\uC785\uB825",
      email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
      url: "URL",
      emoji: "\uC774\uBAA8\uC9C0",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
      date: "ISO \uB0A0\uC9DC",
      time: "ISO \uC2DC\uAC04",
      duration: "ISO \uAE30\uAC04",
      ipv4: "IPv4 \uC8FC\uC18C",
      ipv6: "IPv6 \uC8FC\uC18C",
      cidrv4: "IPv4 \uBC94\uC704",
      cidrv6: "IPv6 \uBC94\uC704",
      base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
      json_string: "JSON \uBB38\uC790\uC5F4",
      e164: "E.164 \uBC88\uD638",
      jwt: "JWT",
      template_literal: "\uC785\uB825"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${issue2.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
          }
          return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${stringifyPrimitive(issue2.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`;
          return `\uC798\uBABB\uB41C \uC635\uC158: ${joinValues(issue2.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
        case "too_big": {
          const adj = issue2.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC";
          const suffix = adj === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
          const sizing = getSizing(issue2.origin);
          const unit = sizing?.unit ?? "\uC694\uC18C";
          if (sizing)
            return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()}${unit} ${adj}${suffix}`;
          return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()} ${adj}${suffix}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC";
          const suffix = adj === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
          const sizing = getSizing(issue2.origin);
          const unit = sizing?.unit ?? "\uC694\uC18C";
          if (sizing) {
            return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()}${unit} ${adj}${suffix}`;
          }
          return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()} ${adj}${suffix}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`;
          }
          if (_issue.format === "ends_with")
            return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`;
          if (_issue.format === "includes")
            return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`;
          if (_issue.format === "regex")
            return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${_issue.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`;
          return `\uC798\uBABB\uB41C ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\uC798\uBABB\uB41C \uC22B\uC790: ${issue2.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
        case "unrecognized_keys":
          return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\uC798\uBABB\uB41C \uD0A4: ${issue2.origin}`;
        case "invalid_union":
          return `\uC798\uBABB\uB41C \uC785\uB825`;
        case "invalid_element":
          return `\uC798\uBABB\uB41C \uAC12: ${issue2.origin}`;
        default:
          return `\uC798\uBABB\uB41C \uC785\uB825`;
      }
    };
  };
  function ko_default() {
    return {
      localeError: error27()
    };
  }

  // node_modules/zod/v4/locales/lt.js
  var capitalizeFirstCharacter = (text2) => {
    return text2.charAt(0).toUpperCase() + text2.slice(1);
  };
  function getUnitTypeFromNumber(number4) {
    const abs = Math.abs(number4);
    const last = abs % 10;
    const last2 = abs % 100;
    if (last2 >= 11 && last2 <= 19 || last === 0)
      return "many";
    if (last === 1)
      return "one";
    return "few";
  }
  var error28 = () => {
    const Sizable = {
      string: {
        unit: {
          one: "simbolis",
          few: "simboliai",
          many: "simboli\u0173"
        },
        verb: {
          smaller: {
            inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
            notInclusive: "turi b\u016Bti trumpesn\u0117 kaip"
          },
          bigger: {
            inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
            notInclusive: "turi b\u016Bti ilgesn\u0117 kaip"
          }
        }
      },
      file: {
        unit: {
          one: "baitas",
          few: "baitai",
          many: "bait\u0173"
        },
        verb: {
          smaller: {
            inclusive: "turi b\u016Bti ne didesnis kaip",
            notInclusive: "turi b\u016Bti ma\u017Eesnis kaip"
          },
          bigger: {
            inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
            notInclusive: "turi b\u016Bti didesnis kaip"
          }
        }
      },
      array: {
        unit: {
          one: "element\u0105",
          few: "elementus",
          many: "element\u0173"
        },
        verb: {
          smaller: {
            inclusive: "turi tur\u0117ti ne daugiau kaip",
            notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
          },
          bigger: {
            inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
            notInclusive: "turi tur\u0117ti daugiau kaip"
          }
        }
      },
      set: {
        unit: {
          one: "element\u0105",
          few: "elementus",
          many: "element\u0173"
        },
        verb: {
          smaller: {
            inclusive: "turi tur\u0117ti ne daugiau kaip",
            notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
          },
          bigger: {
            inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
            notInclusive: "turi tur\u0117ti daugiau kaip"
          }
        }
      }
    };
    function getSizing(origin, unitType, inclusive, targetShouldBe) {
      const result = Sizable[origin] ?? null;
      if (result === null)
        return result;
      return {
        unit: result.unit[unitType],
        verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
      };
    }
    const FormatDictionary = {
      regex: "\u012Fvestis",
      email: "el. pa\u0161to adresas",
      url: "URL",
      emoji: "jaustukas",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO data ir laikas",
      date: "ISO data",
      time: "ISO laikas",
      duration: "ISO trukm\u0117",
      ipv4: "IPv4 adresas",
      ipv6: "IPv6 adresas",
      cidrv4: "IPv4 tinklo prefiksas (CIDR)",
      cidrv6: "IPv6 tinklo prefiksas (CIDR)",
      base64: "base64 u\u017Ekoduota eilut\u0117",
      base64url: "base64url u\u017Ekoduota eilut\u0117",
      json_string: "JSON eilut\u0117",
      e164: "E.164 numeris",
      jwt: "JWT",
      template_literal: "\u012Fvestis"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "skai\u010Dius",
      bigint: "sveikasis skai\u010Dius",
      string: "eilut\u0117",
      boolean: "login\u0117 reik\u0161m\u0117",
      undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
      function: "funkcija",
      symbol: "simbolis",
      array: "masyvas",
      object: "objektas",
      null: "nulin\u0117 reik\u0161m\u0117"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Gautas tipas ${received}, o tik\u0117tasi - instanceof ${issue2.expected}`;
          }
          return `Gautas tipas ${received}, o tik\u0117tasi - ${expected}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Privalo b\u016Bti ${stringifyPrimitive(issue2.values[0])}`;
          return `Privalo b\u016Bti vienas i\u0161 ${joinValues(issue2.values, "|")} pasirinkim\u0173`;
        case "too_big": {
          const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
          const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? false, "smaller");
          if (sizing?.verb)
            return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.maximum.toString()} ${sizing.unit ?? "element\u0173"}`;
          const adj = issue2.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.maximum.toString()} ${sizing?.unit}`;
        }
        case "too_small": {
          const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
          const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? false, "bigger");
          if (sizing?.verb)
            return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.minimum.toString()} ${sizing.unit ?? "element\u0173"}`;
          const adj = issue2.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.minimum.toString()} ${sizing?.unit}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `Eilut\u0117 privalo prasid\u0117ti "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `Eilut\u0117 privalo pasibaigti "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Eilut\u0117 privalo \u012Ftraukti "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Eilut\u0117 privalo atitikti ${_issue.pattern}`;
          return `Neteisingas ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Skai\u010Dius privalo b\u016Bti ${issue2.divisor} kartotinis.`;
        case "unrecognized_keys":
          return `Neatpa\u017Eint${issue2.keys.length > 1 ? "i" : "as"} rakt${issue2.keys.length > 1 ? "ai" : "as"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return "Rastas klaidingas raktas";
        case "invalid_union":
          return "Klaidinga \u012Fvestis";
        case "invalid_element": {
          const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
        }
        default:
          return "Klaidinga \u012Fvestis";
      }
    };
  };
  function lt_default() {
    return {
      localeError: error28()
    };
  }

  // node_modules/zod/v4/locales/mk.js
  var error29 = () => {
    const Sizable = {
      string: { unit: "\u0437\u043D\u0430\u0446\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
      file: { unit: "\u0431\u0430\u0458\u0442\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
      array: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
      set: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0432\u043D\u0435\u0441",
      email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u045F\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
      date: "ISO \u0434\u0430\u0442\u0443\u043C",
      time: "ISO \u0432\u0440\u0435\u043C\u0435",
      duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
      cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
      cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
      base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
      json_string: "JSON \u043D\u0438\u0437\u0430",
      e164: "E.164 \u0431\u0440\u043E\u0458",
      jwt: "JWT",
      template_literal: "\u0432\u043D\u0435\u0441"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0431\u0440\u043E\u0458",
      array: "\u043D\u0438\u0437\u0430"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${issue2.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
          }
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
          return `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`;
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${_issue.pattern}`;
          return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${issue2.divisor}`;
        case "unrecognized_keys":
          return `${issue2.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${issue2.origin}`;
        case "invalid_union":
          return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
        case "invalid_element":
          return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${issue2.origin}`;
        default:
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441`;
      }
    };
  };
  function mk_default() {
    return {
      localeError: error29()
    };
  }

  // node_modules/zod/v4/locales/ms.js
  var error30 = () => {
    const Sizable = {
      string: { unit: "aksara", verb: "mempunyai" },
      file: { unit: "bait", verb: "mempunyai" },
      array: { unit: "elemen", verb: "mempunyai" },
      set: { unit: "elemen", verb: "mempunyai" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "input",
      email: "alamat e-mel",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "tarikh masa ISO",
      date: "tarikh ISO",
      time: "masa ISO",
      duration: "tempoh ISO",
      ipv4: "alamat IPv4",
      ipv6: "alamat IPv6",
      cidrv4: "julat IPv4",
      cidrv6: "julat IPv6",
      base64: "string dikodkan base64",
      base64url: "string dikodkan base64url",
      json_string: "string JSON",
      e164: "nombor E.164",
      jwt: "JWT",
      template_literal: "input"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "nombor"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Input tidak sah: dijangka instanceof ${issue2.expected}, diterima ${received}`;
          }
          return `Input tidak sah: dijangka ${expected}, diterima ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Input tidak sah: dijangka ${stringifyPrimitive(issue2.values[0])}`;
          return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
          return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} adalah ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Terlalu kecil: dijangka ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Terlalu kecil: dijangka ${issue2.origin} adalah ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
          return `${FormatDictionary[_issue.format] ?? issue2.format} tidak sah`;
        }
        case "not_multiple_of":
          return `Nombor tidak sah: perlu gandaan ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Kunci tidak dikenali: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Kunci tidak sah dalam ${issue2.origin}`;
        case "invalid_union":
          return "Input tidak sah";
        case "invalid_element":
          return `Nilai tidak sah dalam ${issue2.origin}`;
        default:
          return `Input tidak sah`;
      }
    };
  };
  function ms_default() {
    return {
      localeError: error30()
    };
  }

  // node_modules/zod/v4/locales/nl.js
  var error31 = () => {
    const Sizable = {
      string: { unit: "tekens", verb: "heeft" },
      file: { unit: "bytes", verb: "heeft" },
      array: { unit: "elementen", verb: "heeft" },
      set: { unit: "elementen", verb: "heeft" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "invoer",
      email: "emailadres",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum en tijd",
      date: "ISO datum",
      time: "ISO tijd",
      duration: "ISO duur",
      ipv4: "IPv4-adres",
      ipv6: "IPv6-adres",
      cidrv4: "IPv4-bereik",
      cidrv6: "IPv6-bereik",
      base64: "base64-gecodeerde tekst",
      base64url: "base64 URL-gecodeerde tekst",
      json_string: "JSON string",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "invoer"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "getal"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Ongeldige invoer: verwacht instanceof ${issue2.expected}, ontving ${received}`;
          }
          return `Ongeldige invoer: verwacht ${expected}, ontving ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue2.values[0])}`;
          return `Ongeldige optie: verwacht \xE9\xE9n van ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          const longName = issue2.origin === "date" ? "laat" : issue2.origin === "string" ? "lang" : "groot";
          if (sizing)
            return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementen"} ${sizing.verb}`;
          return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} is`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          const shortName = issue2.origin === "date" ? "vroeg" : issue2.origin === "string" ? "kort" : "klein";
          if (sizing) {
            return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
          }
          return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} is`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
          }
          if (_issue.format === "ends_with")
            return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
          if (_issue.format === "includes")
            return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
          if (_issue.format === "regex")
            return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
          return `Ongeldig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Ongeldig getal: moet een veelvoud van ${issue2.divisor} zijn`;
        case "unrecognized_keys":
          return `Onbekende key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Ongeldige key in ${issue2.origin}`;
        case "invalid_union":
          return "Ongeldige invoer";
        case "invalid_element":
          return `Ongeldige waarde in ${issue2.origin}`;
        default:
          return `Ongeldige invoer`;
      }
    };
  };
  function nl_default() {
    return {
      localeError: error31()
    };
  }

  // node_modules/zod/v4/locales/no.js
  var error32 = () => {
    const Sizable = {
      string: { unit: "tegn", verb: "\xE5 ha" },
      file: { unit: "bytes", verb: "\xE5 ha" },
      array: { unit: "elementer", verb: "\xE5 inneholde" },
      set: { unit: "elementer", verb: "\xE5 inneholde" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "input",
      email: "e-postadresse",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO dato- og klokkeslett",
      date: "ISO-dato",
      time: "ISO-klokkeslett",
      duration: "ISO-varighet",
      ipv4: "IPv4-omr\xE5de",
      ipv6: "IPv6-omr\xE5de",
      cidrv4: "IPv4-spekter",
      cidrv6: "IPv6-spekter",
      base64: "base64-enkodet streng",
      base64url: "base64url-enkodet streng",
      json_string: "JSON-streng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "input"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "tall",
      array: "liste"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Ugyldig input: forventet instanceof ${issue2.expected}, fikk ${received}`;
          }
          return `Ugyldig input: forventet ${expected}, fikk ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Ugyldig verdi: forventet ${stringifyPrimitive(issue2.values[0])}`;
          return `Ugyldig valg: forventet en av ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
          return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Ugyldig streng: m\xE5 starte med "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Ugyldig streng: m\xE5 ende med "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Ugyldig streng: m\xE5 inneholde "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Ugyldig streng: m\xE5 matche m\xF8nsteret ${_issue.pattern}`;
          return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${issue2.divisor}`;
        case "unrecognized_keys":
          return `${issue2.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Ugyldig n\xF8kkel i ${issue2.origin}`;
        case "invalid_union":
          return "Ugyldig input";
        case "invalid_element":
          return `Ugyldig verdi i ${issue2.origin}`;
        default:
          return `Ugyldig input`;
      }
    };
  };
  function no_default() {
    return {
      localeError: error32()
    };
  }

  // node_modules/zod/v4/locales/ota.js
  var error33 = () => {
    const Sizable = {
      string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
      file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
      array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
      set: { unit: "unsur", verb: "olmal\u0131d\u0131r" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "giren",
      email: "epostag\xE2h",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO heng\xE2m\u0131",
      date: "ISO tarihi",
      time: "ISO zaman\u0131",
      duration: "ISO m\xFCddeti",
      ipv4: "IPv4 ni\u015F\xE2n\u0131",
      ipv6: "IPv6 ni\u015F\xE2n\u0131",
      cidrv4: "IPv4 menzili",
      cidrv6: "IPv6 menzili",
      base64: "base64-\u015Fifreli metin",
      base64url: "base64url-\u015Fifreli metin",
      json_string: "JSON metin",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "giren"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "numara",
      array: "saf",
      null: "gayb"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `F\xE2sit giren: umulan instanceof ${issue2.expected}, al\u0131nan ${received}`;
          }
          return `F\xE2sit giren: umulan ${expected}, al\u0131nan ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `F\xE2sit giren: umulan ${stringifyPrimitive(issue2.values[0])}`;
          return `F\xE2sit tercih: m\xFBteberler ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmal\u0131yd\u0131.`;
          return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} olmal\u0131yd\u0131.`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} ${sizing.unit} sahip olmal\u0131yd\u0131.`;
          }
          return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} olmal\u0131yd\u0131.`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `F\xE2sit metin: "${_issue.prefix}" ile ba\u015Flamal\u0131.`;
          if (_issue.format === "ends_with")
            return `F\xE2sit metin: "${_issue.suffix}" ile bitmeli.`;
          if (_issue.format === "includes")
            return `F\xE2sit metin: "${_issue.includes}" ihtiv\xE2 etmeli.`;
          if (_issue.format === "regex")
            return `F\xE2sit metin: ${_issue.pattern} nak\u015F\u0131na uymal\u0131.`;
          return `F\xE2sit ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `F\xE2sit say\u0131: ${issue2.divisor} kat\u0131 olmal\u0131yd\u0131.`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `${issue2.origin} i\xE7in tan\u0131nmayan anahtar var.`;
        case "invalid_union":
          return "Giren tan\u0131namad\u0131.";
        case "invalid_element":
          return `${issue2.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
        default:
          return `K\u0131ymet tan\u0131namad\u0131.`;
      }
    };
  };
  function ota_default() {
    return {
      localeError: error33()
    };
  }

  // node_modules/zod/v4/locales/ps.js
  var error34 = () => {
    const Sizable = {
      string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
      file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" },
      array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
      set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0648\u0631\u0648\u062F\u064A",
      email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
      url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
      date: "\u0646\u06D0\u067C\u0647",
      time: "\u0648\u062E\u062A",
      duration: "\u0645\u0648\u062F\u0647",
      ipv4: "\u062F IPv4 \u067E\u062A\u0647",
      ipv6: "\u062F IPv6 \u067E\u062A\u0647",
      cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
      cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
      base64: "base64-encoded \u0645\u062A\u0646",
      base64url: "base64url-encoded \u0645\u062A\u0646",
      json_string: "JSON \u0645\u062A\u0646",
      e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
      jwt: "JWT",
      template_literal: "\u0648\u0631\u0648\u062F\u064A"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0639\u062F\u062F",
      array: "\u0627\u0631\u06D0"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${issue2.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
          }
          return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
        }
        case "invalid_value":
          if (issue2.values.length === 1) {
            return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${stringifyPrimitive(issue2.values[0])} \u0648\u0627\u06CC`;
          }
          return `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${joinValues(issue2.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`;
          }
          return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0648\u064A`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0648\u0644\u0631\u064A`;
          }
          return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0648\u064A`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`;
          }
          if (_issue.format === "ends_with") {
            return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`;
          }
          if (_issue.format === "includes") {
            return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${_issue.includes}" \u0648\u0644\u0631\u064A`;
          }
          if (_issue.format === "regex") {
            return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${_issue.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`;
          }
          return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
        }
        case "not_multiple_of":
          return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${issue2.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
        case "unrecognized_keys":
          return `\u0646\u0627\u0633\u0645 ${issue2.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
        case "invalid_union":
          return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
        case "invalid_element":
          return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
        default:
          return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
      }
    };
  };
  function ps_default() {
    return {
      localeError: error34()
    };
  }

  // node_modules/zod/v4/locales/pl.js
  var error35 = () => {
    const Sizable = {
      string: { unit: "znak\xF3w", verb: "mie\u0107" },
      file: { unit: "bajt\xF3w", verb: "mie\u0107" },
      array: { unit: "element\xF3w", verb: "mie\u0107" },
      set: { unit: "element\xF3w", verb: "mie\u0107" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "wyra\u017Cenie",
      email: "adres email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data i godzina w formacie ISO",
      date: "data w formacie ISO",
      time: "godzina w formacie ISO",
      duration: "czas trwania ISO",
      ipv4: "adres IPv4",
      ipv6: "adres IPv6",
      cidrv4: "zakres IPv4",
      cidrv6: "zakres IPv6",
      base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
      base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
      json_string: "ci\u0105g znak\xF3w w formacie JSON",
      e164: "liczba E.164",
      jwt: "JWT",
      template_literal: "wej\u015Bcie"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "liczba",
      array: "tablica"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${issue2.expected}, otrzymano ${received}`;
          }
          return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${expected}, otrzymano ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${stringifyPrimitive(issue2.values[0])}`;
          return `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element\xF3w"}`;
          }
          return `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "element\xF3w"}`;
          }
          return `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${_issue.pattern}`;
          return `Nieprawid\u0142ow(y/a/e) ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Nierozpoznane klucze${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Nieprawid\u0142owy klucz w ${issue2.origin}`;
        case "invalid_union":
          return "Nieprawid\u0142owe dane wej\u015Bciowe";
        case "invalid_element":
          return `Nieprawid\u0142owa warto\u015B\u0107 w ${issue2.origin}`;
        default:
          return `Nieprawid\u0142owe dane wej\u015Bciowe`;
      }
    };
  };
  function pl_default() {
    return {
      localeError: error35()
    };
  }

  // node_modules/zod/v4/locales/pt.js
  var error36 = () => {
    const Sizable = {
      string: { unit: "caracteres", verb: "ter" },
      file: { unit: "bytes", verb: "ter" },
      array: { unit: "itens", verb: "ter" },
      set: { unit: "itens", verb: "ter" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "padr\xE3o",
      email: "endere\xE7o de e-mail",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "data e hora ISO",
      date: "data ISO",
      time: "hora ISO",
      duration: "dura\xE7\xE3o ISO",
      ipv4: "endere\xE7o IPv4",
      ipv6: "endere\xE7o IPv6",
      cidrv4: "faixa de IPv4",
      cidrv6: "faixa de IPv6",
      base64: "texto codificado em base64",
      base64url: "URL codificada em base64",
      json_string: "texto JSON",
      e164: "n\xFAmero E.164",
      jwt: "JWT",
      template_literal: "entrada"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "n\xFAmero",
      null: "nulo"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Tipo inv\xE1lido: esperado instanceof ${issue2.expected}, recebido ${received}`;
          }
          return `Tipo inv\xE1lido: esperado ${expected}, recebido ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Entrada inv\xE1lida: esperado ${stringifyPrimitive(issue2.values[0])}`;
          return `Op\xE7\xE3o inv\xE1lida: esperada uma das ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Muito grande: esperado que ${issue2.origin ?? "valor"} tivesse ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
          return `Muito grande: esperado que ${issue2.origin ?? "valor"} fosse ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Muito pequeno: esperado que ${issue2.origin} tivesse ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Muito pequeno: esperado que ${issue2.origin} fosse ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Texto inv\xE1lido: deve come\xE7ar com "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Texto inv\xE1lido: deve terminar com "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Texto inv\xE1lido: deve incluir "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${_issue.pattern}`;
          return `${FormatDictionary[_issue.format] ?? issue2.format} inv\xE1lido`;
        }
        case "not_multiple_of":
          return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Chave${issue2.keys.length > 1 ? "s" : ""} desconhecida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Chave inv\xE1lida em ${issue2.origin}`;
        case "invalid_union":
          return "Entrada inv\xE1lida";
        case "invalid_element":
          return `Valor inv\xE1lido em ${issue2.origin}`;
        default:
          return `Campo inv\xE1lido`;
      }
    };
  };
  function pt_default() {
    return {
      localeError: error36()
    };
  }

  // node_modules/zod/v4/locales/ro.js
  var error37 = () => {
    const Sizable = {
      string: { unit: "caractere", verb: "s\u0103 aib\u0103" },
      file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" },
      array: { unit: "elemente", verb: "s\u0103 aib\u0103" },
      set: { unit: "elemente", verb: "s\u0103 aib\u0103" },
      map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "intrare",
      email: "adres\u0103 de email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "dat\u0103 \u0219i or\u0103 ISO",
      date: "dat\u0103 ISO",
      time: "or\u0103 ISO",
      duration: "durat\u0103 ISO",
      ipv4: "adres\u0103 IPv4",
      ipv6: "adres\u0103 IPv6",
      mac: "adres\u0103 MAC",
      cidrv4: "interval IPv4",
      cidrv6: "interval IPv6",
      base64: "\u0219ir codat base64",
      base64url: "\u0219ir codat base64url",
      json_string: "\u0219ir JSON",
      e164: "num\u0103r E.164",
      jwt: "JWT",
      template_literal: "intrare"
    };
    const TypeDictionary = {
      nan: "NaN",
      string: "\u0219ir",
      number: "num\u0103r",
      boolean: "boolean",
      function: "func\u021Bie",
      array: "matrice",
      object: "obiect",
      undefined: "nedefinit",
      symbol: "simbol",
      bigint: "num\u0103r mare",
      void: "void",
      never: "never",
      map: "hart\u0103",
      set: "set"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          return `Intrare invalid\u0103: a\u0219teptat ${expected}, primit ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Intrare invalid\u0103: a\u0219teptat ${stringifyPrimitive(issue2.values[0])}`;
          return `Op\u021Biune invalid\u0103: a\u0219teptat una dintre ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Prea mare: a\u0219teptat ca ${issue2.origin ?? "valoarea"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemente"}`;
          return `Prea mare: a\u0219teptat ca ${issue2.origin ?? "valoarea"} s\u0103 fie ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Prea mic: a\u0219teptat ca ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Prea mic: a\u0219teptat ca ${issue2.origin} s\u0103 fie ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u0218ir invalid: trebuie s\u0103 \xEEnceap\u0103 cu "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `\u0218ir invalid: trebuie s\u0103 se termine cu "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u0218ir invalid: trebuie s\u0103 includ\u0103 "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul ${_issue.pattern}`;
          return `Format invalid: ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Num\u0103r invalid: trebuie s\u0103 fie multiplu de ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Chei nerecunoscute: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Cheie invalid\u0103 \xEEn ${issue2.origin}`;
        case "invalid_union":
          return "Intrare invalid\u0103";
        case "invalid_element":
          return `Valoare invalid\u0103 \xEEn ${issue2.origin}`;
        default:
          return `Intrare invalid\u0103`;
      }
    };
  };
  function ro_default() {
    return {
      localeError: error37()
    };
  }

  // node_modules/zod/v4/locales/ru.js
  function getRussianPlural(count, one, few, many) {
    const absCount = Math.abs(count);
    const lastDigit = absCount % 10;
    const lastTwoDigits = absCount % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return many;
    }
    if (lastDigit === 1) {
      return one;
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return few;
    }
    return many;
  }
  var error38 = () => {
    const Sizable = {
      string: {
        unit: {
          one: "\u0441\u0438\u043C\u0432\u043E\u043B",
          few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
          many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
        },
        verb: "\u0438\u043C\u0435\u0442\u044C"
      },
      file: {
        unit: {
          one: "\u0431\u0430\u0439\u0442",
          few: "\u0431\u0430\u0439\u0442\u0430",
          many: "\u0431\u0430\u0439\u0442"
        },
        verb: "\u0438\u043C\u0435\u0442\u044C"
      },
      array: {
        unit: {
          one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
          few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
          many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
        },
        verb: "\u0438\u043C\u0435\u0442\u044C"
      },
      set: {
        unit: {
          one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
          few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
          many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
        },
        verb: "\u0438\u043C\u0435\u0442\u044C"
      }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0432\u0432\u043E\u0434",
      email: "email \u0430\u0434\u0440\u0435\u0441",
      url: "URL",
      emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
      date: "ISO \u0434\u0430\u0442\u0430",
      time: "ISO \u0432\u0440\u0435\u043C\u044F",
      duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
      ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
      ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
      cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
      base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
      base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
      json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0432\u0432\u043E\u0434"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0447\u0438\u0441\u043B\u043E",
      array: "\u043C\u0430\u0441\u0441\u0438\u0432"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
          }
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${stringifyPrimitive(issue2.values[0])}`;
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            const maxValue = Number(issue2.maximum);
            const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.maximum.toString()} ${unit}`;
          }
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            const minValue = Number(issue2.minimum);
            const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.minimum.toString()} ${unit}`;
          }
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${issue2.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0438" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
        case "invalid_union":
          return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
        case "invalid_element":
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${issue2.origin}`;
        default:
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435`;
      }
    };
  };
  function ru_default() {
    return {
      localeError: error38()
    };
  }

  // node_modules/zod/v4/locales/sl.js
  var error39 = () => {
    const Sizable = {
      string: { unit: "znakov", verb: "imeti" },
      file: { unit: "bajtov", verb: "imeti" },
      array: { unit: "elementov", verb: "imeti" },
      set: { unit: "elementov", verb: "imeti" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "vnos",
      email: "e-po\u0161tni naslov",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datum in \u010Das",
      date: "ISO datum",
      time: "ISO \u010Das",
      duration: "ISO trajanje",
      ipv4: "IPv4 naslov",
      ipv6: "IPv6 naslov",
      cidrv4: "obseg IPv4",
      cidrv6: "obseg IPv6",
      base64: "base64 kodiran niz",
      base64url: "base64url kodiran niz",
      json_string: "JSON niz",
      e164: "E.164 \u0161tevilka",
      jwt: "JWT",
      template_literal: "vnos"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0161tevilo",
      array: "tabela"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Neveljaven vnos: pri\u010Dakovano instanceof ${issue2.expected}, prejeto ${received}`;
          }
          return `Neveljaven vnos: pri\u010Dakovano ${expected}, prejeto ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Neveljaven vnos: pri\u010Dakovano ${stringifyPrimitive(issue2.values[0])}`;
          return `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} imelo ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementov"}`;
          return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} imelo ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `Neveljaven niz: mora se za\u010Deti z "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `Neveljaven niz: mora se kon\u010Dati z "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
          return `Neveljaven ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Neprepoznan${issue2.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Neveljaven klju\u010D v ${issue2.origin}`;
        case "invalid_union":
          return "Neveljaven vnos";
        case "invalid_element":
          return `Neveljavna vrednost v ${issue2.origin}`;
        default:
          return "Neveljaven vnos";
      }
    };
  };
  function sl_default() {
    return {
      localeError: error39()
    };
  }

  // node_modules/zod/v4/locales/sv.js
  var error40 = () => {
    const Sizable = {
      string: { unit: "tecken", verb: "att ha" },
      file: { unit: "bytes", verb: "att ha" },
      array: { unit: "objekt", verb: "att inneh\xE5lla" },
      set: { unit: "objekt", verb: "att inneh\xE5lla" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "regulj\xE4rt uttryck",
      email: "e-postadress",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO-datum och tid",
      date: "ISO-datum",
      time: "ISO-tid",
      duration: "ISO-varaktighet",
      ipv4: "IPv4-intervall",
      ipv6: "IPv6-intervall",
      cidrv4: "IPv4-spektrum",
      cidrv6: "IPv6-spektrum",
      base64: "base64-kodad str\xE4ng",
      base64url: "base64url-kodad str\xE4ng",
      json_string: "JSON-str\xE4ng",
      e164: "E.164-nummer",
      jwt: "JWT",
      template_literal: "mall-literal"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "antal",
      array: "lista"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${issue2.expected}, fick ${received}`;
          }
          return `Ogiltig inmatning: f\xF6rv\xE4ntat ${expected}, fick ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Ogiltig inmatning: f\xF6rv\xE4ntat ${stringifyPrimitive(issue2.values[0])}`;
          return `Ogiltigt val: f\xF6rv\xE4ntade en av ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `F\xF6r stor(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
          }
          return `F\xF6r stor(t): f\xF6rv\xE4ntat ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `Ogiltig str\xE4ng: m\xE5ste sluta med "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${_issue.pattern}"`;
          return `Ogiltig(t) ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Ogiltigt tal: m\xE5ste vara en multipel av ${issue2.divisor}`;
        case "unrecognized_keys":
          return `${issue2.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Ogiltig nyckel i ${issue2.origin ?? "v\xE4rdet"}`;
        case "invalid_union":
          return "Ogiltig input";
        case "invalid_element":
          return `Ogiltigt v\xE4rde i ${issue2.origin ?? "v\xE4rdet"}`;
        default:
          return `Ogiltig input`;
      }
    };
  };
  function sv_default() {
    return {
      localeError: error40()
    };
  }

  // node_modules/zod/v4/locales/ta.js
  var error41 = () => {
    const Sizable = {
      string: { unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
      file: { unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
      array: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
      set: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
      email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
      time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
      ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
      cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
      base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
      json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
      e164: "E.164 \u0B8E\u0BA3\u0BCD",
      jwt: "JWT",
      template_literal: "input"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0B8E\u0BA3\u0BCD",
      array: "\u0B85\u0BA3\u0BBF",
      null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${issue2.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}`;
          }
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${stringifyPrimitive(issue2.values[0])}`;
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${joinValues(issue2.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          }
          return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          }
          return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          if (_issue.format === "ends_with")
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          if (_issue.format === "includes")
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          if (_issue.format === "regex")
            return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${_issue.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${issue2.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        case "unrecognized_keys":
          return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${issue2.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
        case "invalid_union":
          return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
        case "invalid_element":
          return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
        default:
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1`;
      }
    };
  };
  function ta_default() {
    return {
      localeError: error41()
    };
  }

  // node_modules/zod/v4/locales/th.js
  var error42 = () => {
    const Sizable = {
      string: { unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
      file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
      array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
      set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
      email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
      url: "URL",
      emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
      time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
      ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
      ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
      cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
      cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
      base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
      base64url: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
      json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
      e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
      jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
      template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
      array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
      null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${issue2.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}`;
          }
          return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${stringifyPrimitive(issue2.values[0])}`;
          return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19" : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`;
          return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22" : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${_issue.prefix}"`;
          }
          if (_issue.format === "ends_with")
            return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${_issue.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`;
          if (_issue.format === "regex")
            return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${_issue.pattern}`;
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${issue2.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
        case "unrecognized_keys":
          return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
        case "invalid_union":
          return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
        case "invalid_element":
          return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
        default:
          return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07`;
      }
    };
  };
  function th_default() {
    return {
      localeError: error42()
    };
  }

  // node_modules/zod/v4/locales/tr.js
  var error43 = () => {
    const Sizable = {
      string: { unit: "karakter", verb: "olmal\u0131" },
      file: { unit: "bayt", verb: "olmal\u0131" },
      array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
      set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "girdi",
      email: "e-posta adresi",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO tarih ve saat",
      date: "ISO tarih",
      time: "ISO saat",
      duration: "ISO s\xFCre",
      ipv4: "IPv4 adresi",
      ipv6: "IPv6 adresi",
      cidrv4: "IPv4 aral\u0131\u011F\u0131",
      cidrv6: "IPv6 aral\u0131\u011F\u0131",
      base64: "base64 ile \u015Fifrelenmi\u015F metin",
      base64url: "base64url ile \u015Fifrelenmi\u015F metin",
      json_string: "JSON dizesi",
      e164: "E.164 say\u0131s\u0131",
      jwt: "JWT",
      template_literal: "\u015Eablon dizesi"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${issue2.expected}, al\u0131nan ${received}`;
          }
          return `Ge\xE7ersiz de\u011Fer: beklenen ${expected}, al\u0131nan ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Ge\xE7ersiz de\u011Fer: beklenen ${stringifyPrimitive(issue2.values[0])}`;
          return `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xF6\u011Fe"}`;
          return `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          return `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Ge\xE7ersiz metin: "${_issue.prefix}" ile ba\u015Flamal\u0131`;
          if (_issue.format === "ends_with")
            return `Ge\xE7ersiz metin: "${_issue.suffix}" ile bitmeli`;
          if (_issue.format === "includes")
            return `Ge\xE7ersiz metin: "${_issue.includes}" i\xE7ermeli`;
          if (_issue.format === "regex")
            return `Ge\xE7ersiz metin: ${_issue.pattern} desenine uymal\u0131`;
          return `Ge\xE7ersiz ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Ge\xE7ersiz say\u0131: ${issue2.divisor} ile tam b\xF6l\xFCnebilmeli`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `${issue2.origin} i\xE7inde ge\xE7ersiz anahtar`;
        case "invalid_union":
          return "Ge\xE7ersiz de\u011Fer";
        case "invalid_element":
          return `${issue2.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
        default:
          return `Ge\xE7ersiz de\u011Fer`;
      }
    };
  };
  function tr_default() {
    return {
      localeError: error43()
    };
  }

  // node_modules/zod/v4/locales/uk.js
  var error44 = () => {
    const Sizable = {
      string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
      file: { unit: "\u0431\u0430\u0439\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
      array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
      set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
      email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
      url: "URL",
      emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
      date: "\u0434\u0430\u0442\u0430 ISO",
      time: "\u0447\u0430\u0441 ISO",
      duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
      ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
      ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
      cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
      cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
      base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
      base64url: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
      json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
      e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
      jwt: "JWT",
      template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0447\u0438\u0441\u043B\u043E",
      array: "\u043C\u0430\u0441\u0438\u0432"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${issue2.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}`;
          }
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${stringifyPrimitive(issue2.values[0])}`;
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`;
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} \u0431\u0443\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${issue2.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0456" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
        case "invalid_union":
          return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
        case "invalid_element":
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${issue2.origin}`;
        default:
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456`;
      }
    };
  };
  function uk_default() {
    return {
      localeError: error44()
    };
  }

  // node_modules/zod/v4/locales/ua.js
  function ua_default() {
    return uk_default();
  }

  // node_modules/zod/v4/locales/ur.js
  var error45 = () => {
    const Sizable = {
      string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
      file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
      array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
      set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0627\u0646 \u067E\u0679",
      email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
      emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
      uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
      uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
      nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
      ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
      xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
      ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
      datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
      date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
      time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
      duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
      ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
      cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
      cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
      base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      base64url: "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
      json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
      e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
      jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
      template_literal: "\u0627\u0646 \u067E\u0679"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u0646\u0645\u0628\u0631",
      array: "\u0622\u0631\u06D2",
      null: "\u0646\u0644"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${issue2.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
          }
          return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${stringifyPrimitive(issue2.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
          return `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${joinValues(issue2.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
          return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${adj}${issue2.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u06D2 ${adj}${issue2.minimum.toString()} ${sizing.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
          }
          return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u0627 ${adj}${issue2.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          }
          if (_issue.format === "ends_with")
            return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          if (_issue.format === "includes")
            return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          if (_issue.format === "regex")
            return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${_issue.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          return `\u063A\u0644\u0637 ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${issue2.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        case "unrecognized_keys":
          return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${issue2.keys.length > 1 ? "\u0632" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
        case "invalid_key":
          return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
        case "invalid_union":
          return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
        case "invalid_element":
          return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
        default:
          return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679`;
      }
    };
  };
  function ur_default() {
    return {
      localeError: error45()
    };
  }

  // node_modules/zod/v4/locales/uz.js
  var error46 = () => {
    const Sizable = {
      string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
      file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
      array: { unit: "element", verb: "bo\u2018lishi kerak" },
      set: { unit: "element", verb: "bo\u2018lishi kerak" },
      map: { unit: "yozuv", verb: "bo\u2018lishi kerak" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "kirish",
      email: "elektron pochta manzili",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO sana va vaqti",
      date: "ISO sana",
      time: "ISO vaqt",
      duration: "ISO davomiylik",
      ipv4: "IPv4 manzil",
      ipv6: "IPv6 manzil",
      mac: "MAC manzil",
      cidrv4: "IPv4 diapazon",
      cidrv6: "IPv6 diapazon",
      base64: "base64 kodlangan satr",
      base64url: "base64url kodlangan satr",
      json_string: "JSON satr",
      e164: "E.164 raqam",
      jwt: "JWT",
      template_literal: "kirish"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "raqam",
      array: "massiv"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${issue2.expected}, qabul qilingan ${received}`;
          }
          return `Noto\u2018g\u2018ri kirish: kutilgan ${expected}, qabul qilingan ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `Noto\u2018g\u2018ri kirish: kutilgan ${stringifyPrimitive(issue2.values[0])}`;
          return `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()} ${sizing.unit} ${sizing.verb}`;
          return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
          }
          return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Noto\u2018g\u2018ri satr: "${_issue.prefix}" bilan boshlanishi kerak`;
          if (_issue.format === "ends_with")
            return `Noto\u2018g\u2018ri satr: "${_issue.suffix}" bilan tugashi kerak`;
          if (_issue.format === "includes")
            return `Noto\u2018g\u2018ri satr: "${_issue.includes}" ni o\u2018z ichiga olishi kerak`;
          if (_issue.format === "regex")
            return `Noto\u2018g\u2018ri satr: ${_issue.pattern} shabloniga mos kelishi kerak`;
          return `Noto\u2018g\u2018ri ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `Noto\u2018g\u2018ri raqam: ${issue2.divisor} ning karralisi bo\u2018lishi kerak`;
        case "unrecognized_keys":
          return `Noma\u2019lum kalit${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `${issue2.origin} dagi kalit noto\u2018g\u2018ri`;
        case "invalid_union":
          return "Noto\u2018g\u2018ri kirish";
        case "invalid_element":
          return `${issue2.origin} da noto\u2018g\u2018ri qiymat`;
        default:
          return `Noto\u2018g\u2018ri kirish`;
      }
    };
  };
  function uz_default() {
    return {
      localeError: error46()
    };
  }

  // node_modules/zod/v4/locales/vi.js
  var error47 = () => {
    const Sizable = {
      string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
      file: { unit: "byte", verb: "c\xF3" },
      array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
      set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u0111\u1EA7u v\xE0o",
      email: "\u0111\u1ECBa ch\u1EC9 email",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ng\xE0y gi\u1EDD ISO",
      date: "ng\xE0y ISO",
      time: "gi\u1EDD ISO",
      duration: "kho\u1EA3ng th\u1EDDi gian ISO",
      ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
      ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
      cidrv4: "d\u1EA3i IPv4",
      cidrv6: "d\u1EA3i IPv6",
      base64: "chu\u1ED7i m\xE3 h\xF3a base64",
      base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
      json_string: "chu\u1ED7i JSON",
      e164: "s\u1ED1 E.164",
      jwt: "JWT",
      template_literal: "\u0111\u1EA7u v\xE0o"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "s\u1ED1",
      array: "m\u1EA3ng"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${issue2.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}`;
          }
          return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${stringifyPrimitive(issue2.values[0])}`;
          return `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "ph\u1EA7n t\u1EED"}`;
          return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${_issue.pattern}`;
          return `${FormatDictionary[_issue.format] ?? issue2.format} kh\xF4ng h\u1EE3p l\u1EC7`;
        }
        case "not_multiple_of":
          return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${issue2.divisor}`;
        case "unrecognized_keys":
          return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
        case "invalid_union":
          return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
        case "invalid_element":
          return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
        default:
          return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7`;
      }
    };
  };
  function vi_default() {
    return {
      localeError: error47()
    };
  }

  // node_modules/zod/v4/locales/zh-CN.js
  var error48 = () => {
    const Sizable = {
      string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
      file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
      array: { unit: "\u9879", verb: "\u5305\u542B" },
      set: { unit: "\u9879", verb: "\u5305\u542B" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u8F93\u5165",
      email: "\u7535\u5B50\u90AE\u4EF6",
      url: "URL",
      emoji: "\u8868\u60C5\u7B26\u53F7",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO\u65E5\u671F\u65F6\u95F4",
      date: "ISO\u65E5\u671F",
      time: "ISO\u65F6\u95F4",
      duration: "ISO\u65F6\u957F",
      ipv4: "IPv4\u5730\u5740",
      ipv6: "IPv6\u5730\u5740",
      cidrv4: "IPv4\u7F51\u6BB5",
      cidrv6: "IPv6\u7F51\u6BB5",
      base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
      base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
      json_string: "JSON\u5B57\u7B26\u4E32",
      e164: "E.164\u53F7\u7801",
      jwt: "JWT",
      template_literal: "\u8F93\u5165"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "\u6570\u5B57",
      array: "\u6570\u7EC4",
      null: "\u7A7A\u503C(null)"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${issue2.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}`;
          }
          return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${stringifyPrimitive(issue2.values[0])}`;
          return `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u4E2A\u5143\u7D20"}`;
          return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.prefix}" \u5F00\u5934`;
          if (_issue.format === "ends_with")
            return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.suffix}" \u7ED3\u5C3E`;
          if (_issue.format === "includes")
            return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${_issue.pattern}`;
          return `\u65E0\u6548${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${issue2.divisor} \u7684\u500D\u6570`;
        case "unrecognized_keys":
          return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `${issue2.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
        case "invalid_union":
          return "\u65E0\u6548\u8F93\u5165";
        case "invalid_element":
          return `${issue2.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
        default:
          return `\u65E0\u6548\u8F93\u5165`;
      }
    };
  };
  function zh_CN_default() {
    return {
      localeError: error48()
    };
  }

  // node_modules/zod/v4/locales/zh-TW.js
  var error49 = () => {
    const Sizable = {
      string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
      file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
      array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
      set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u8F38\u5165",
      email: "\u90F5\u4EF6\u5730\u5740",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO \u65E5\u671F\u6642\u9593",
      date: "ISO \u65E5\u671F",
      time: "ISO \u6642\u9593",
      duration: "ISO \u671F\u9593",
      ipv4: "IPv4 \u4F4D\u5740",
      ipv6: "IPv6 \u4F4D\u5740",
      cidrv4: "IPv4 \u7BC4\u570D",
      cidrv6: "IPv6 \u7BC4\u570D",
      base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
      base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
      json_string: "JSON \u5B57\u4E32",
      e164: "E.164 \u6578\u503C",
      jwt: "JWT",
      template_literal: "\u8F38\u5165"
    };
    const TypeDictionary = {
      nan: "NaN"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${issue2.expected}\uFF0C\u4F46\u6536\u5230 ${received}`;
          }
          return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${expected}\uFF0C\u4F46\u6536\u5230 ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${stringifyPrimitive(issue2.values[0])}`;
          return `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u500B\u5143\u7D20"}`;
          return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing) {
            return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
          }
          return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with") {
            return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.prefix}" \u958B\u982D`;
          }
          if (_issue.format === "ends_with")
            return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.suffix}" \u7D50\u5C3E`;
          if (_issue.format === "includes")
            return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${_issue.pattern}`;
          return `\u7121\u6548\u7684 ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${issue2.divisor} \u7684\u500D\u6578`;
        case "unrecognized_keys":
          return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${issue2.keys.length > 1 ? "\u5011" : ""}\uFF1A${joinValues(issue2.keys, "\u3001")}`;
        case "invalid_key":
          return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
        case "invalid_union":
          return "\u7121\u6548\u7684\u8F38\u5165\u503C";
        case "invalid_element":
          return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
        default:
          return `\u7121\u6548\u7684\u8F38\u5165\u503C`;
      }
    };
  };
  function zh_TW_default() {
    return {
      localeError: error49()
    };
  }

  // node_modules/zod/v4/locales/yo.js
  var error50 = () => {
    const Sizable = {
      string: { unit: "\xE0mi", verb: "n\xED" },
      file: { unit: "bytes", verb: "n\xED" },
      array: { unit: "nkan", verb: "n\xED" },
      set: { unit: "nkan", verb: "n\xED" }
    };
    function getSizing(origin) {
      return Sizable[origin] ?? null;
    }
    const FormatDictionary = {
      regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
      email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "\xE0k\xF3k\xF2 ISO",
      date: "\u1ECDj\u1ECD\u0301 ISO",
      time: "\xE0k\xF3k\xF2 ISO",
      duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
      ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
      ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
      cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
      cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
      base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
      base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
      json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
      e164: "n\u1ECD\u0301mb\xE0 E.164",
      jwt: "JWT",
      template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9"
    };
    const TypeDictionary = {
      nan: "NaN",
      number: "n\u1ECD\u0301mb\xE0",
      array: "akop\u1ECD"
    };
    return (issue2) => {
      switch (issue2.code) {
        case "invalid_type": {
          const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
          const receivedType = parsedType(issue2.input);
          const received = TypeDictionary[receivedType] ?? receivedType;
          if (/^[A-Z]/.test(issue2.expected)) {
            return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${issue2.expected}, \xE0m\u1ECD\u0300 a r\xED ${received}`;
          }
          return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${expected}, \xE0m\u1ECD\u0300 a r\xED ${received}`;
        }
        case "invalid_value":
          if (issue2.values.length === 1)
            return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${stringifyPrimitive(issue2.values[0])}`;
          return `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${joinValues(issue2.values, "|")}`;
        case "too_big": {
          const adj = issue2.inclusive ? "<=" : "<";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin ?? "iye"} ${sizing.verb} ${adj}${issue2.maximum} ${sizing.unit}`;
          return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.maximum}`;
        }
        case "too_small": {
          const adj = issue2.inclusive ? ">=" : ">";
          const sizing = getSizing(issue2.origin);
          if (sizing)
            return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum} ${sizing.unit}`;
          return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.minimum}`;
        }
        case "invalid_format": {
          const _issue = issue2;
          if (_issue.format === "starts_with")
            return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${_issue.prefix}"`;
          if (_issue.format === "ends_with")
            return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${_issue.suffix}"`;
          if (_issue.format === "includes")
            return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${_issue.includes}"`;
          if (_issue.format === "regex")
            return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${_issue.pattern}`;
          return `A\u1E63\xEC\u1E63e: ${FormatDictionary[_issue.format] ?? issue2.format}`;
        }
        case "not_multiple_of":
          return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${issue2.divisor}`;
        case "unrecognized_keys":
          return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${joinValues(issue2.keys, ", ")}`;
        case "invalid_key":
          return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
        case "invalid_union":
          return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
        case "invalid_element":
          return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
        default:
          return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
      }
    };
  };
  function yo_default() {
    return {
      localeError: error50()
    };
  }

  // node_modules/zod/v4/core/registries.js
  var _a2;
  var $output = Symbol("ZodOutput");
  var $input = Symbol("ZodInput");
  var $ZodRegistry = class {
    constructor() {
      this._map = /* @__PURE__ */ new WeakMap();
      this._idmap = /* @__PURE__ */ new Map();
    }
    add(schema, ..._meta) {
      const meta3 = _meta[0];
      this._map.set(schema, meta3);
      if (meta3 && typeof meta3 === "object" && "id" in meta3) {
        this._idmap.set(meta3.id, schema);
      }
      return this;
    }
    clear() {
      this._map = /* @__PURE__ */ new WeakMap();
      this._idmap = /* @__PURE__ */ new Map();
      return this;
    }
    remove(schema) {
      const meta3 = this._map.get(schema);
      if (meta3 && typeof meta3 === "object" && "id" in meta3) {
        this._idmap.delete(meta3.id);
      }
      this._map.delete(schema);
      return this;
    }
    get(schema) {
      const p = schema._zod.parent;
      if (p) {
        const pm = { ...this.get(p) ?? {} };
        delete pm.id;
        const f = { ...pm, ...this._map.get(schema) };
        return Object.keys(f).length ? f : void 0;
      }
      return this._map.get(schema);
    }
    has(schema) {
      return this._map.has(schema);
    }
  };
  function registry() {
    return new $ZodRegistry();
  }
  (_a2 = globalThis).__zod_globalRegistry ?? (_a2.__zod_globalRegistry = registry());
  var globalRegistry = globalThis.__zod_globalRegistry;

  // node_modules/zod/v4/core/api.js
  // @__NO_SIDE_EFFECTS__
  function _string(Class2, params) {
    return new Class2({
      type: "string",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _coercedString(Class2, params) {
    return new Class2({
      type: "string",
      coerce: true,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _email(Class2, params) {
    return new Class2({
      type: "string",
      format: "email",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _guid(Class2, params) {
    return new Class2({
      type: "string",
      format: "guid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _uuid(Class2, params) {
    return new Class2({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _uuidv4(Class2, params) {
    return new Class2({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v4",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _uuidv6(Class2, params) {
    return new Class2({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v6",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _uuidv7(Class2, params) {
    return new Class2({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v7",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _url(Class2, params) {
    return new Class2({
      type: "string",
      format: "url",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _emoji2(Class2, params) {
    return new Class2({
      type: "string",
      format: "emoji",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _nanoid(Class2, params) {
    return new Class2({
      type: "string",
      format: "nanoid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _cuid(Class2, params) {
    return new Class2({
      type: "string",
      format: "cuid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _cuid2(Class2, params) {
    return new Class2({
      type: "string",
      format: "cuid2",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _ulid(Class2, params) {
    return new Class2({
      type: "string",
      format: "ulid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _xid(Class2, params) {
    return new Class2({
      type: "string",
      format: "xid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _ksuid(Class2, params) {
    return new Class2({
      type: "string",
      format: "ksuid",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _ipv4(Class2, params) {
    return new Class2({
      type: "string",
      format: "ipv4",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _ipv6(Class2, params) {
    return new Class2({
      type: "string",
      format: "ipv6",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _mac(Class2, params) {
    return new Class2({
      type: "string",
      format: "mac",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _cidrv4(Class2, params) {
    return new Class2({
      type: "string",
      format: "cidrv4",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _cidrv6(Class2, params) {
    return new Class2({
      type: "string",
      format: "cidrv6",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _base64(Class2, params) {
    return new Class2({
      type: "string",
      format: "base64",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _base64url(Class2, params) {
    return new Class2({
      type: "string",
      format: "base64url",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _e164(Class2, params) {
    return new Class2({
      type: "string",
      format: "e164",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _jwt(Class2, params) {
    return new Class2({
      type: "string",
      format: "jwt",
      check: "string_format",
      abort: false,
      ...normalizeParams(params)
    });
  }
  var TimePrecision = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6
  };
  // @__NO_SIDE_EFFECTS__
  function _isoDateTime(Class2, params) {
    return new Class2({
      type: "string",
      format: "datetime",
      check: "string_format",
      offset: false,
      local: false,
      precision: null,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _isoDate(Class2, params) {
    return new Class2({
      type: "string",
      format: "date",
      check: "string_format",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _isoTime(Class2, params) {
    return new Class2({
      type: "string",
      format: "time",
      check: "string_format",
      precision: null,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _isoDuration(Class2, params) {
    return new Class2({
      type: "string",
      format: "duration",
      check: "string_format",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _number(Class2, params) {
    return new Class2({
      type: "number",
      checks: [],
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _coercedNumber(Class2, params) {
    return new Class2({
      type: "number",
      coerce: true,
      checks: [],
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _int(Class2, params) {
    return new Class2({
      type: "number",
      check: "number_format",
      abort: false,
      format: "safeint",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _float32(Class2, params) {
    return new Class2({
      type: "number",
      check: "number_format",
      abort: false,
      format: "float32",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _float64(Class2, params) {
    return new Class2({
      type: "number",
      check: "number_format",
      abort: false,
      format: "float64",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _int32(Class2, params) {
    return new Class2({
      type: "number",
      check: "number_format",
      abort: false,
      format: "int32",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _uint32(Class2, params) {
    return new Class2({
      type: "number",
      check: "number_format",
      abort: false,
      format: "uint32",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _boolean(Class2, params) {
    return new Class2({
      type: "boolean",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _coercedBoolean(Class2, params) {
    return new Class2({
      type: "boolean",
      coerce: true,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _bigint(Class2, params) {
    return new Class2({
      type: "bigint",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _coercedBigint(Class2, params) {
    return new Class2({
      type: "bigint",
      coerce: true,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _int64(Class2, params) {
    return new Class2({
      type: "bigint",
      check: "bigint_format",
      abort: false,
      format: "int64",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _uint64(Class2, params) {
    return new Class2({
      type: "bigint",
      check: "bigint_format",
      abort: false,
      format: "uint64",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _symbol(Class2, params) {
    return new Class2({
      type: "symbol",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _undefined2(Class2, params) {
    return new Class2({
      type: "undefined",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _null2(Class2, params) {
    return new Class2({
      type: "null",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _any(Class2) {
    return new Class2({
      type: "any"
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _unknown(Class2) {
    return new Class2({
      type: "unknown"
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _never(Class2, params) {
    return new Class2({
      type: "never",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _void(Class2, params) {
    return new Class2({
      type: "void",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _date(Class2, params) {
    return new Class2({
      type: "date",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _coercedDate(Class2, params) {
    return new Class2({
      type: "date",
      coerce: true,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _nan(Class2, params) {
    return new Class2({
      type: "nan",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _lt(value, params) {
    return new $ZodCheckLessThan({
      check: "less_than",
      ...normalizeParams(params),
      value,
      inclusive: false
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _lte(value, params) {
    return new $ZodCheckLessThan({
      check: "less_than",
      ...normalizeParams(params),
      value,
      inclusive: true
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _gt(value, params) {
    return new $ZodCheckGreaterThan({
      check: "greater_than",
      ...normalizeParams(params),
      value,
      inclusive: false
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _gte(value, params) {
    return new $ZodCheckGreaterThan({
      check: "greater_than",
      ...normalizeParams(params),
      value,
      inclusive: true
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _positive(params) {
    return /* @__PURE__ */ _gt(0, params);
  }
  // @__NO_SIDE_EFFECTS__
  function _negative(params) {
    return /* @__PURE__ */ _lt(0, params);
  }
  // @__NO_SIDE_EFFECTS__
  function _nonpositive(params) {
    return /* @__PURE__ */ _lte(0, params);
  }
  // @__NO_SIDE_EFFECTS__
  function _nonnegative(params) {
    return /* @__PURE__ */ _gte(0, params);
  }
  // @__NO_SIDE_EFFECTS__
  function _multipleOf(value, params) {
    return new $ZodCheckMultipleOf({
      check: "multiple_of",
      ...normalizeParams(params),
      value
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _maxSize(maximum, params) {
    return new $ZodCheckMaxSize({
      check: "max_size",
      ...normalizeParams(params),
      maximum
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _minSize(minimum, params) {
    return new $ZodCheckMinSize({
      check: "min_size",
      ...normalizeParams(params),
      minimum
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _size(size, params) {
    return new $ZodCheckSizeEquals({
      check: "size_equals",
      ...normalizeParams(params),
      size
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _maxLength(maximum, params) {
    const ch = new $ZodCheckMaxLength({
      check: "max_length",
      ...normalizeParams(params),
      maximum
    });
    return ch;
  }
  // @__NO_SIDE_EFFECTS__
  function _minLength(minimum, params) {
    return new $ZodCheckMinLength({
      check: "min_length",
      ...normalizeParams(params),
      minimum
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _length(length, params) {
    return new $ZodCheckLengthEquals({
      check: "length_equals",
      ...normalizeParams(params),
      length
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _regex(pattern, params) {
    return new $ZodCheckRegex({
      check: "string_format",
      format: "regex",
      ...normalizeParams(params),
      pattern
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _lowercase(params) {
    return new $ZodCheckLowerCase({
      check: "string_format",
      format: "lowercase",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _uppercase(params) {
    return new $ZodCheckUpperCase({
      check: "string_format",
      format: "uppercase",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _includes(includes, params) {
    return new $ZodCheckIncludes({
      check: "string_format",
      format: "includes",
      ...normalizeParams(params),
      includes
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _startsWith(prefix, params) {
    return new $ZodCheckStartsWith({
      check: "string_format",
      format: "starts_with",
      ...normalizeParams(params),
      prefix
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _endsWith(suffix, params) {
    return new $ZodCheckEndsWith({
      check: "string_format",
      format: "ends_with",
      ...normalizeParams(params),
      suffix
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _property(property, schema, params) {
    return new $ZodCheckProperty({
      check: "property",
      property,
      schema,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _mime(types, params) {
    return new $ZodCheckMimeType({
      check: "mime_type",
      mime: types,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _overwrite(tx) {
    return new $ZodCheckOverwrite({
      check: "overwrite",
      tx
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _normalize(form) {
    return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
  }
  // @__NO_SIDE_EFFECTS__
  function _trim() {
    return /* @__PURE__ */ _overwrite((input) => input.trim());
  }
  // @__NO_SIDE_EFFECTS__
  function _toLowerCase() {
    return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
  }
  // @__NO_SIDE_EFFECTS__
  function _toUpperCase() {
    return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
  }
  // @__NO_SIDE_EFFECTS__
  function _slugify() {
    return /* @__PURE__ */ _overwrite((input) => slugify(input));
  }
  // @__NO_SIDE_EFFECTS__
  function _array(Class2, element, params) {
    return new Class2({
      type: "array",
      element,
      // get element() {
      //   return element;
      // },
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _union(Class2, options, params) {
    return new Class2({
      type: "union",
      options,
      ...normalizeParams(params)
    });
  }
  function _xor(Class2, options, params) {
    return new Class2({
      type: "union",
      options,
      inclusive: false,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _discriminatedUnion(Class2, discriminator, options, params) {
    return new Class2({
      type: "union",
      options,
      discriminator,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _intersection(Class2, left, right) {
    return new Class2({
      type: "intersection",
      left,
      right
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _tuple(Class2, items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof $ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new Class2({
      type: "tuple",
      items,
      rest,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _record(Class2, keyType, valueType, params) {
    return new Class2({
      type: "record",
      keyType,
      valueType,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _map(Class2, keyType, valueType, params) {
    return new Class2({
      type: "map",
      keyType,
      valueType,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _set(Class2, valueType, params) {
    return new Class2({
      type: "set",
      valueType,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _enum(Class2, values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    return new Class2({
      type: "enum",
      entries,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _nativeEnum(Class2, entries, params) {
    return new Class2({
      type: "enum",
      entries,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _literal(Class2, value, params) {
    return new Class2({
      type: "literal",
      values: Array.isArray(value) ? value : [value],
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _file(Class2, params) {
    return new Class2({
      type: "file",
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _transform(Class2, fn) {
    return new Class2({
      type: "transform",
      transform: fn
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _optional(Class2, innerType) {
    return new Class2({
      type: "optional",
      innerType
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _nullable(Class2, innerType) {
    return new Class2({
      type: "nullable",
      innerType
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _default(Class2, innerType, defaultValue) {
    return new Class2({
      type: "default",
      innerType,
      get defaultValue() {
        return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
      }
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _nonoptional(Class2, innerType, params) {
    return new Class2({
      type: "nonoptional",
      innerType,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _success(Class2, innerType) {
    return new Class2({
      type: "success",
      innerType
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _catch(Class2, innerType, catchValue) {
    return new Class2({
      type: "catch",
      innerType,
      catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _pipe(Class2, in_, out) {
    return new Class2({
      type: "pipe",
      in: in_,
      out
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _readonly(Class2, innerType) {
    return new Class2({
      type: "readonly",
      innerType
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _templateLiteral(Class2, parts, params) {
    return new Class2({
      type: "template_literal",
      parts,
      ...normalizeParams(params)
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _lazy(Class2, getter) {
    return new Class2({
      type: "lazy",
      getter
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _promise(Class2, innerType) {
    return new Class2({
      type: "promise",
      innerType
    });
  }
  // @__NO_SIDE_EFFECTS__
  function _custom(Class2, fn, _params) {
    const norm = normalizeParams(_params);
    norm.abort ?? (norm.abort = true);
    const schema = new Class2({
      type: "custom",
      check: "custom",
      fn,
      ...norm
    });
    return schema;
  }
  // @__NO_SIDE_EFFECTS__
  function _refine(Class2, fn, _params) {
    const schema = new Class2({
      type: "custom",
      check: "custom",
      fn,
      ...normalizeParams(_params)
    });
    return schema;
  }
  // @__NO_SIDE_EFFECTS__
  function _superRefine(fn, params) {
    const ch = /* @__PURE__ */ _check((payload) => {
      payload.addIssue = (issue2) => {
        if (typeof issue2 === "string") {
          payload.issues.push(issue(issue2, payload.value, ch._zod.def));
        } else {
          const _issue = issue2;
          if (_issue.fatal)
            _issue.continue = false;
          _issue.code ?? (_issue.code = "custom");
          _issue.input ?? (_issue.input = payload.value);
          _issue.inst ?? (_issue.inst = ch);
          _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
          payload.issues.push(issue(_issue));
        }
      };
      return fn(payload.value, payload);
    }, params);
    return ch;
  }
  // @__NO_SIDE_EFFECTS__
  function _check(fn, params) {
    const ch = new $ZodCheck({
      check: "custom",
      ...normalizeParams(params)
    });
    ch._zod.check = fn;
    return ch;
  }
  // @__NO_SIDE_EFFECTS__
  function describe(description) {
    const ch = new $ZodCheck({ check: "describe" });
    ch._zod.onattach = [
      (inst) => {
        const existing = globalRegistry.get(inst) ?? {};
        globalRegistry.add(inst, { ...existing, description });
      }
    ];
    ch._zod.check = () => {
    };
    return ch;
  }
  // @__NO_SIDE_EFFECTS__
  function meta(metadata) {
    const ch = new $ZodCheck({ check: "meta" });
    ch._zod.onattach = [
      (inst) => {
        const existing = globalRegistry.get(inst) ?? {};
        globalRegistry.add(inst, { ...existing, ...metadata });
      }
    ];
    ch._zod.check = () => {
    };
    return ch;
  }
  // @__NO_SIDE_EFFECTS__
  function _stringbool(Classes, _params) {
    const params = normalizeParams(_params);
    let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
    let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
    if (params.case !== "sensitive") {
      truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
      falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
    }
    const truthySet = new Set(truthyArray);
    const falsySet = new Set(falsyArray);
    const _Codec = Classes.Codec ?? $ZodCodec;
    const _Boolean = Classes.Boolean ?? $ZodBoolean;
    const _String = Classes.String ?? $ZodString;
    const stringSchema = new _String({ type: "string", error: params.error });
    const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
    const codec2 = new _Codec({
      type: "pipe",
      in: stringSchema,
      out: booleanSchema,
      transform: ((input, payload) => {
        let data = input;
        if (params.case !== "sensitive")
          data = data.toLowerCase();
        if (truthySet.has(data)) {
          return true;
        } else if (falsySet.has(data)) {
          return false;
        } else {
          payload.issues.push({
            code: "invalid_value",
            expected: "stringbool",
            values: [...truthySet, ...falsySet],
            input: payload.value,
            inst: codec2,
            continue: false
          });
          return {};
        }
      }),
      reverseTransform: ((input, _payload) => {
        if (input === true) {
          return truthyArray[0] || "true";
        } else {
          return falsyArray[0] || "false";
        }
      }),
      error: params.error
    });
    return codec2;
  }
  // @__NO_SIDE_EFFECTS__
  function _stringFormat(Class2, format, fnOrRegex, _params = {}) {
    const params = normalizeParams(_params);
    const def = {
      ...normalizeParams(_params),
      check: "string_format",
      type: "string",
      format,
      fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
      ...params
    };
    if (fnOrRegex instanceof RegExp) {
      def.pattern = fnOrRegex;
    }
    const inst = new Class2(def);
    return inst;
  }

  // node_modules/zod/v4/core/to-json-schema.js
  function initializeContext(params) {
    let target = params?.target ?? "draft-2020-12";
    if (target === "draft-4")
      target = "draft-04";
    if (target === "draft-7")
      target = "draft-07";
    return {
      processors: params.processors ?? {},
      metadataRegistry: params?.metadata ?? globalRegistry,
      target,
      unrepresentable: params?.unrepresentable ?? "throw",
      override: params?.override ?? (() => {
      }),
      io: params?.io ?? "output",
      counter: 0,
      seen: /* @__PURE__ */ new Map(),
      cycles: params?.cycles ?? "ref",
      reused: params?.reused ?? "inline",
      external: params?.external ?? void 0
    };
  }
  function process(schema, ctx, _params = { path: [], schemaPath: [] }) {
    var _a3;
    const def = schema._zod.def;
    const seen = ctx.seen.get(schema);
    if (seen) {
      seen.count++;
      const isCycle = _params.schemaPath.includes(schema);
      if (isCycle) {
        seen.cycle = _params.path;
      }
      return seen.schema;
    }
    const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
    ctx.seen.set(schema, result);
    const overrideSchema = schema._zod.toJSONSchema?.();
    if (overrideSchema) {
      result.schema = overrideSchema;
    } else {
      const params = {
        ..._params,
        schemaPath: [..._params.schemaPath, schema],
        path: _params.path
      };
      if (schema._zod.processJSONSchema) {
        schema._zod.processJSONSchema(ctx, result.schema, params);
      } else {
        const _json = result.schema;
        const processor = ctx.processors[def.type];
        if (!processor) {
          throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
        }
        processor(schema, ctx, _json, params);
      }
      const parent = schema._zod.parent;
      if (parent) {
        if (!result.ref)
          result.ref = parent;
        process(parent, ctx, params);
        ctx.seen.get(parent).isParent = true;
      }
    }
    const meta3 = ctx.metadataRegistry.get(schema);
    if (meta3)
      Object.assign(result.schema, meta3);
    if (ctx.io === "input" && isTransforming(schema)) {
      delete result.schema.examples;
      delete result.schema.default;
    }
    if (ctx.io === "input" && "_prefault" in result.schema)
      (_a3 = result.schema).default ?? (_a3.default = result.schema._prefault);
    delete result.schema._prefault;
    const _result = ctx.seen.get(schema);
    return _result.schema;
  }
  function extractDefs(ctx, schema) {
    const root = ctx.seen.get(schema);
    if (!root)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const idToSchema = /* @__PURE__ */ new Map();
    for (const entry of ctx.seen.entries()) {
      const id = ctx.metadataRegistry.get(entry[0])?.id;
      if (id) {
        const existing = idToSchema.get(id);
        if (existing && existing !== entry[0]) {
          throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
        }
        idToSchema.set(id, entry[0]);
      }
    }
    const makeURI = (entry) => {
      const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
      if (ctx.external) {
        const externalId = ctx.external.registry.get(entry[0])?.id;
        const uriGenerator = ctx.external.uri ?? ((id2) => id2);
        if (externalId) {
          return { ref: uriGenerator(externalId) };
        }
        const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
        entry[1].defId = id;
        return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
      }
      if (entry[1] === root) {
        return { ref: "#" };
      }
      const uriPrefix = `#`;
      const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
      const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
      return { defId, ref: defUriPrefix + defId };
    };
    const extractToDef = (entry) => {
      if (entry[1].schema.$ref) {
        return;
      }
      const seen = entry[1];
      const { ref, defId } = makeURI(entry);
      seen.def = { ...seen.schema };
      if (defId)
        seen.defId = defId;
      const schema2 = seen.schema;
      for (const key in schema2) {
        delete schema2[key];
      }
      schema2.$ref = ref;
    };
    if (ctx.cycles === "throw") {
      for (const entry of ctx.seen.entries()) {
        const seen = entry[1];
        if (seen.cycle) {
          throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
        }
      }
    }
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (schema === entry[0]) {
        extractToDef(entry);
        continue;
      }
      if (ctx.external) {
        const ext = ctx.external.registry.get(entry[0])?.id;
        if (schema !== entry[0] && ext) {
          extractToDef(entry);
          continue;
        }
      }
      const id = ctx.metadataRegistry.get(entry[0])?.id;
      if (id) {
        extractToDef(entry);
        continue;
      }
      if (seen.cycle) {
        extractToDef(entry);
        continue;
      }
      if (seen.count > 1) {
        if (ctx.reused === "ref") {
          extractToDef(entry);
          continue;
        }
      }
    }
  }
  function finalize(ctx, schema) {
    const root = ctx.seen.get(schema);
    if (!root)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const flattenRef = (zodSchema) => {
      const seen = ctx.seen.get(zodSchema);
      if (seen.ref === null)
        return;
      const schema2 = seen.def ?? seen.schema;
      const _cached = { ...schema2 };
      const ref = seen.ref;
      seen.ref = null;
      if (ref) {
        flattenRef(ref);
        const refSeen = ctx.seen.get(ref);
        const refSchema = refSeen.schema;
        if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
          schema2.allOf = schema2.allOf ?? [];
          schema2.allOf.push(refSchema);
        } else {
          Object.assign(schema2, refSchema);
        }
        Object.assign(schema2, _cached);
        const isParentRef = zodSchema._zod.parent === ref;
        if (isParentRef) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (!(key in _cached)) {
              delete schema2[key];
            }
          }
        }
        if (refSchema.$ref && refSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
      const parent = zodSchema._zod.parent;
      if (parent && parent !== ref) {
        flattenRef(parent);
        const parentSeen = ctx.seen.get(parent);
        if (parentSeen?.schema.$ref) {
          schema2.$ref = parentSeen.schema.$ref;
          if (parentSeen.def) {
            for (const key in schema2) {
              if (key === "$ref" || key === "allOf")
                continue;
              if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
                delete schema2[key];
              }
            }
          }
        }
      }
      ctx.override({
        zodSchema,
        jsonSchema: schema2,
        path: seen.path ?? []
      });
    };
    for (const entry of [...ctx.seen.entries()].reverse()) {
      flattenRef(entry[0]);
    }
    const result = {};
    if (ctx.target === "draft-2020-12") {
      result.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if (ctx.target === "draft-07") {
      result.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (ctx.target === "draft-04") {
      result.$schema = "http://json-schema.org/draft-04/schema#";
    } else if (ctx.target === "openapi-3.0") {
    } else {
    }
    if (ctx.external?.uri) {
      const id = ctx.external.registry.get(schema)?.id;
      if (!id)
        throw new Error("Schema is missing an `id` property");
      result.$id = ctx.external.uri(id);
    }
    Object.assign(result, root.def ?? root.schema);
    const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
    if (rootMetaId !== void 0 && result.id === rootMetaId)
      delete result.id;
    const defs = ctx.external?.defs ?? {};
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.def && seen.defId) {
        if (seen.def.id === seen.defId)
          delete seen.def.id;
        defs[seen.defId] = seen.def;
      }
    }
    if (ctx.external) {
    } else {
      if (Object.keys(defs).length > 0) {
        if (ctx.target === "draft-2020-12") {
          result.$defs = defs;
        } else {
          result.definitions = defs;
        }
      }
    }
    try {
      const finalized = JSON.parse(JSON.stringify(result));
      Object.defineProperty(finalized, "~standard", {
        value: {
          ...schema["~standard"],
          jsonSchema: {
            input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
            output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
          }
        },
        enumerable: false,
        writable: false
      });
      return finalized;
    } catch (_err) {
      throw new Error("Error converting schema to JSON.");
    }
  }
  function isTransforming(_schema, _ctx) {
    const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
    if (ctx.seen.has(_schema))
      return false;
    ctx.seen.add(_schema);
    const def = _schema._zod.def;
    if (def.type === "transform")
      return true;
    if (def.type === "array")
      return isTransforming(def.element, ctx);
    if (def.type === "set")
      return isTransforming(def.valueType, ctx);
    if (def.type === "lazy")
      return isTransforming(def.getter(), ctx);
    if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") {
      return isTransforming(def.innerType, ctx);
    }
    if (def.type === "intersection") {
      return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
    }
    if (def.type === "record" || def.type === "map") {
      return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
    }
    if (def.type === "pipe") {
      if (_schema._zod.traits.has("$ZodCodec"))
        return true;
      return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
    }
    if (def.type === "object") {
      for (const key in def.shape) {
        if (isTransforming(def.shape[key], ctx))
          return true;
      }
      return false;
    }
    if (def.type === "union") {
      for (const option of def.options) {
        if (isTransforming(option, ctx))
          return true;
      }
      return false;
    }
    if (def.type === "tuple") {
      for (const item of def.items) {
        if (isTransforming(item, ctx))
          return true;
      }
      if (def.rest && isTransforming(def.rest, ctx))
        return true;
      return false;
    }
    return false;
  }
  var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
    const ctx = initializeContext({ ...params, processors });
    process(schema, ctx);
    extractDefs(ctx, schema);
    return finalize(ctx, schema);
  };
  var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
    const { libraryOptions, target } = params ?? {};
    const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
    process(schema, ctx);
    extractDefs(ctx, schema);
    return finalize(ctx, schema);
  };

  // node_modules/zod/v4/core/json-schema-processors.js
  var formatMap = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
    // do not set
  };
  var stringProcessor = (schema, ctx, _json, _params) => {
    const json2 = _json;
    json2.type = "string";
    const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
    if (typeof minimum === "number")
      json2.minLength = minimum;
    if (typeof maximum === "number")
      json2.maxLength = maximum;
    if (format) {
      json2.format = formatMap[format] ?? format;
      if (json2.format === "")
        delete json2.format;
      if (format === "time") {
        delete json2.format;
      }
    }
    if (contentEncoding)
      json2.contentEncoding = contentEncoding;
    if (patterns && patterns.size > 0) {
      const regexes = [...patterns];
      if (regexes.length === 1)
        json2.pattern = regexes[0].source;
      else if (regexes.length > 1) {
        json2.allOf = [
          ...regexes.map((regex) => ({
            ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
            pattern: regex.source
          }))
        ];
      }
    }
  };
  var numberProcessor = (schema, ctx, _json, _params) => {
    const json2 = _json;
    const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
    if (typeof format === "string" && format.includes("int"))
      json2.type = "integer";
    else
      json2.type = "number";
    const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
    const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
    const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
    if (exMin) {
      if (legacy) {
        json2.minimum = exclusiveMinimum;
        json2.exclusiveMinimum = true;
      } else {
        json2.exclusiveMinimum = exclusiveMinimum;
      }
    } else if (typeof minimum === "number") {
      json2.minimum = minimum;
    }
    if (exMax) {
      if (legacy) {
        json2.maximum = exclusiveMaximum;
        json2.exclusiveMaximum = true;
      } else {
        json2.exclusiveMaximum = exclusiveMaximum;
      }
    } else if (typeof maximum === "number") {
      json2.maximum = maximum;
    }
    if (typeof multipleOf === "number")
      json2.multipleOf = multipleOf;
  };
  var booleanProcessor = (_schema, _ctx, json2, _params) => {
    json2.type = "boolean";
  };
  var bigintProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("BigInt cannot be represented in JSON Schema");
    }
  };
  var symbolProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("Symbols cannot be represented in JSON Schema");
    }
  };
  var nullProcessor = (_schema, ctx, json2, _params) => {
    if (ctx.target === "openapi-3.0") {
      json2.type = "string";
      json2.nullable = true;
      json2.enum = [null];
    } else {
      json2.type = "null";
    }
  };
  var undefinedProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("Undefined cannot be represented in JSON Schema");
    }
  };
  var voidProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("Void cannot be represented in JSON Schema");
    }
  };
  var neverProcessor = (_schema, _ctx, json2, _params) => {
    json2.not = {};
  };
  var anyProcessor = (_schema, _ctx, _json, _params) => {
  };
  var unknownProcessor = (_schema, _ctx, _json, _params) => {
  };
  var dateProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("Date cannot be represented in JSON Schema");
    }
  };
  var enumProcessor = (schema, _ctx, json2, _params) => {
    const def = schema._zod.def;
    const values = getEnumValues(def.entries);
    if (values.every((v) => typeof v === "number"))
      json2.type = "number";
    if (values.every((v) => typeof v === "string"))
      json2.type = "string";
    json2.enum = values;
  };
  var literalProcessor = (schema, ctx, json2, _params) => {
    const def = schema._zod.def;
    const vals = [];
    for (const val of def.values) {
      if (val === void 0) {
        if (ctx.unrepresentable === "throw") {
          throw new Error("Literal `undefined` cannot be represented in JSON Schema");
        } else {
        }
      } else if (typeof val === "bigint") {
        if (ctx.unrepresentable === "throw") {
          throw new Error("BigInt literals cannot be represented in JSON Schema");
        } else {
          vals.push(Number(val));
        }
      } else {
        vals.push(val);
      }
    }
    if (vals.length === 0) {
    } else if (vals.length === 1) {
      const val = vals[0];
      json2.type = val === null ? "null" : typeof val;
      if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
        json2.enum = [val];
      } else {
        json2.const = val;
      }
    } else {
      if (vals.every((v) => typeof v === "number"))
        json2.type = "number";
      if (vals.every((v) => typeof v === "string"))
        json2.type = "string";
      if (vals.every((v) => typeof v === "boolean"))
        json2.type = "boolean";
      if (vals.every((v) => v === null))
        json2.type = "null";
      json2.enum = vals;
    }
  };
  var nanProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("NaN cannot be represented in JSON Schema");
    }
  };
  var templateLiteralProcessor = (schema, _ctx, json2, _params) => {
    const _json = json2;
    const pattern = schema._zod.pattern;
    if (!pattern)
      throw new Error("Pattern not found in template literal");
    _json.type = "string";
    _json.pattern = pattern.source;
  };
  var fileProcessor = (schema, _ctx, json2, _params) => {
    const _json = json2;
    const file2 = {
      type: "string",
      format: "binary",
      contentEncoding: "binary"
    };
    const { minimum, maximum, mime } = schema._zod.bag;
    if (minimum !== void 0)
      file2.minLength = minimum;
    if (maximum !== void 0)
      file2.maxLength = maximum;
    if (mime) {
      if (mime.length === 1) {
        file2.contentMediaType = mime[0];
        Object.assign(_json, file2);
      } else {
        Object.assign(_json, file2);
        _json.anyOf = mime.map((m) => ({ contentMediaType: m }));
      }
    } else {
      Object.assign(_json, file2);
    }
  };
  var successProcessor = (_schema, _ctx, json2, _params) => {
    json2.type = "boolean";
  };
  var customProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("Custom types cannot be represented in JSON Schema");
    }
  };
  var functionProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("Function types cannot be represented in JSON Schema");
    }
  };
  var transformProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("Transforms cannot be represented in JSON Schema");
    }
  };
  var mapProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("Map cannot be represented in JSON Schema");
    }
  };
  var setProcessor = (_schema, ctx, _json, _params) => {
    if (ctx.unrepresentable === "throw") {
      throw new Error("Set cannot be represented in JSON Schema");
    }
  };
  var arrayProcessor = (schema, ctx, _json, params) => {
    const json2 = _json;
    const def = schema._zod.def;
    const { minimum, maximum } = schema._zod.bag;
    if (typeof minimum === "number")
      json2.minItems = minimum;
    if (typeof maximum === "number")
      json2.maxItems = maximum;
    json2.type = "array";
    json2.items = process(def.element, ctx, {
      ...params,
      path: [...params.path, "items"]
    });
  };
  var objectProcessor = (schema, ctx, _json, params) => {
    const json2 = _json;
    const def = schema._zod.def;
    json2.type = "object";
    json2.properties = {};
    const shape = def.shape;
    for (const key in shape) {
      json2.properties[key] = process(shape[key], ctx, {
        ...params,
        path: [...params.path, "properties", key]
      });
    }
    const allKeys = new Set(Object.keys(shape));
    const requiredKeys = new Set([...allKeys].filter((key) => {
      const v = def.shape[key]._zod;
      if (ctx.io === "input") {
        return v.optin === void 0;
      } else {
        return v.optout === void 0;
      }
    }));
    if (requiredKeys.size > 0) {
      json2.required = Array.from(requiredKeys);
    }
    if (def.catchall?._zod.def.type === "never") {
      json2.additionalProperties = false;
    } else if (!def.catchall) {
      if (ctx.io === "output")
        json2.additionalProperties = false;
    } else if (def.catchall) {
      json2.additionalProperties = process(def.catchall, ctx, {
        ...params,
        path: [...params.path, "additionalProperties"]
      });
    }
  };
  var unionProcessor = (schema, ctx, json2, params) => {
    const def = schema._zod.def;
    const isExclusive = def.inclusive === false;
    const options = def.options.map((x, i) => process(x, ctx, {
      ...params,
      path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
    }));
    if (isExclusive) {
      json2.oneOf = options;
    } else {
      json2.anyOf = options;
    }
  };
  var intersectionProcessor = (schema, ctx, json2, params) => {
    const def = schema._zod.def;
    const a = process(def.left, ctx, {
      ...params,
      path: [...params.path, "allOf", 0]
    });
    const b = process(def.right, ctx, {
      ...params,
      path: [...params.path, "allOf", 1]
    });
    const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
    const allOf = [
      ...isSimpleIntersection(a) ? a.allOf : [a],
      ...isSimpleIntersection(b) ? b.allOf : [b]
    ];
    json2.allOf = allOf;
  };
  var tupleProcessor = (schema, ctx, _json, params) => {
    const json2 = _json;
    const def = schema._zod.def;
    json2.type = "array";
    const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
    const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
    const prefixItems = def.items.map((x, i) => process(x, ctx, {
      ...params,
      path: [...params.path, prefixPath, i]
    }));
    const rest = def.rest ? process(def.rest, ctx, {
      ...params,
      path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
    }) : null;
    if (ctx.target === "draft-2020-12") {
      json2.prefixItems = prefixItems;
      if (rest) {
        json2.items = rest;
      }
    } else if (ctx.target === "openapi-3.0") {
      json2.items = {
        anyOf: prefixItems
      };
      if (rest) {
        json2.items.anyOf.push(rest);
      }
      json2.minItems = prefixItems.length;
      if (!rest) {
        json2.maxItems = prefixItems.length;
      }
    } else {
      json2.items = prefixItems;
      if (rest) {
        json2.additionalItems = rest;
      }
    }
    const { minimum, maximum } = schema._zod.bag;
    if (typeof minimum === "number")
      json2.minItems = minimum;
    if (typeof maximum === "number")
      json2.maxItems = maximum;
  };
  var recordProcessor = (schema, ctx, _json, params) => {
    const json2 = _json;
    const def = schema._zod.def;
    json2.type = "object";
    const keyType = def.keyType;
    const keyBag = keyType._zod.bag;
    const patterns = keyBag?.patterns;
    if (def.mode === "loose" && patterns && patterns.size > 0) {
      const valueSchema = process(def.valueType, ctx, {
        ...params,
        path: [...params.path, "patternProperties", "*"]
      });
      json2.patternProperties = {};
      for (const pattern of patterns) {
        json2.patternProperties[pattern.source] = valueSchema;
      }
    } else {
      if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
        json2.propertyNames = process(def.keyType, ctx, {
          ...params,
          path: [...params.path, "propertyNames"]
        });
      }
      json2.additionalProperties = process(def.valueType, ctx, {
        ...params,
        path: [...params.path, "additionalProperties"]
      });
    }
    const keyValues = keyType._zod.values;
    if (keyValues) {
      const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
      if (validKeyValues.length > 0) {
        json2.required = validKeyValues;
      }
    }
  };
  var nullableProcessor = (schema, ctx, json2, params) => {
    const def = schema._zod.def;
    const inner = process(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    if (ctx.target === "openapi-3.0") {
      seen.ref = def.innerType;
      json2.nullable = true;
    } else {
      json2.anyOf = [inner, { type: "null" }];
    }
  };
  var nonoptionalProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    process(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
  };
  var defaultProcessor = (schema, ctx, json2, params) => {
    const def = schema._zod.def;
    process(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    json2.default = JSON.parse(JSON.stringify(def.defaultValue));
  };
  var prefaultProcessor = (schema, ctx, json2, params) => {
    const def = schema._zod.def;
    process(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    if (ctx.io === "input")
      json2._prefault = JSON.parse(JSON.stringify(def.defaultValue));
  };
  var catchProcessor = (schema, ctx, json2, params) => {
    const def = schema._zod.def;
    process(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    let catchValue;
    try {
      catchValue = def.catchValue(void 0);
    } catch {
      throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    json2.default = catchValue;
  };
  var pipeProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    const inIsTransform = def.in._zod.traits.has("$ZodTransform");
    const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
    process(innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = innerType;
  };
  var readonlyProcessor = (schema, ctx, json2, params) => {
    const def = schema._zod.def;
    process(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    json2.readOnly = true;
  };
  var promiseProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    process(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
  };
  var optionalProcessor = (schema, ctx, _json, params) => {
    const def = schema._zod.def;
    process(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
  };
  var lazyProcessor = (schema, ctx, _json, params) => {
    const innerType = schema._zod.innerType;
    process(innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = innerType;
  };
  var allProcessors = {
    string: stringProcessor,
    number: numberProcessor,
    boolean: booleanProcessor,
    bigint: bigintProcessor,
    symbol: symbolProcessor,
    null: nullProcessor,
    undefined: undefinedProcessor,
    void: voidProcessor,
    never: neverProcessor,
    any: anyProcessor,
    unknown: unknownProcessor,
    date: dateProcessor,
    enum: enumProcessor,
    literal: literalProcessor,
    nan: nanProcessor,
    template_literal: templateLiteralProcessor,
    file: fileProcessor,
    success: successProcessor,
    custom: customProcessor,
    function: functionProcessor,
    transform: transformProcessor,
    map: mapProcessor,
    set: setProcessor,
    array: arrayProcessor,
    object: objectProcessor,
    union: unionProcessor,
    intersection: intersectionProcessor,
    tuple: tupleProcessor,
    record: recordProcessor,
    nullable: nullableProcessor,
    nonoptional: nonoptionalProcessor,
    default: defaultProcessor,
    prefault: prefaultProcessor,
    catch: catchProcessor,
    pipe: pipeProcessor,
    readonly: readonlyProcessor,
    promise: promiseProcessor,
    optional: optionalProcessor,
    lazy: lazyProcessor
  };
  function toJSONSchema(input, params) {
    if ("_idmap" in input) {
      const registry2 = input;
      const ctx2 = initializeContext({ ...params, processors: allProcessors });
      const defs = {};
      for (const entry of registry2._idmap.entries()) {
        const [_, schema] = entry;
        process(schema, ctx2);
      }
      const schemas = {};
      const external = {
        registry: registry2,
        uri: params?.uri,
        defs
      };
      ctx2.external = external;
      for (const entry of registry2._idmap.entries()) {
        const [key, schema] = entry;
        extractDefs(ctx2, schema);
        schemas[key] = finalize(ctx2, schema);
      }
      if (Object.keys(defs).length > 0) {
        const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
        schemas.__shared = {
          [defsSegment]: defs
        };
      }
      return { schemas };
    }
    const ctx = initializeContext({ ...params, processors: allProcessors });
    process(input, ctx);
    extractDefs(ctx, input);
    return finalize(ctx, input);
  }

  // node_modules/zod/v4/core/json-schema-generator.js
  var JSONSchemaGenerator = class {
    /** @deprecated Access via ctx instead */
    get metadataRegistry() {
      return this.ctx.metadataRegistry;
    }
    /** @deprecated Access via ctx instead */
    get target() {
      return this.ctx.target;
    }
    /** @deprecated Access via ctx instead */
    get unrepresentable() {
      return this.ctx.unrepresentable;
    }
    /** @deprecated Access via ctx instead */
    get override() {
      return this.ctx.override;
    }
    /** @deprecated Access via ctx instead */
    get io() {
      return this.ctx.io;
    }
    /** @deprecated Access via ctx instead */
    get counter() {
      return this.ctx.counter;
    }
    set counter(value) {
      this.ctx.counter = value;
    }
    /** @deprecated Access via ctx instead */
    get seen() {
      return this.ctx.seen;
    }
    constructor(params) {
      let normalizedTarget = params?.target ?? "draft-2020-12";
      if (normalizedTarget === "draft-4")
        normalizedTarget = "draft-04";
      if (normalizedTarget === "draft-7")
        normalizedTarget = "draft-07";
      this.ctx = initializeContext({
        processors: allProcessors,
        target: normalizedTarget,
        ...params?.metadata && { metadata: params.metadata },
        ...params?.unrepresentable && { unrepresentable: params.unrepresentable },
        ...params?.override && { override: params.override },
        ...params?.io && { io: params.io }
      });
    }
    /**
     * Process a schema to prepare it for JSON Schema generation.
     * This must be called before emit().
     */
    process(schema, _params = { path: [], schemaPath: [] }) {
      return process(schema, this.ctx, _params);
    }
    /**
     * Emit the final JSON Schema after processing.
     * Must call process() first.
     */
    emit(schema, _params) {
      if (_params) {
        if (_params.cycles)
          this.ctx.cycles = _params.cycles;
        if (_params.reused)
          this.ctx.reused = _params.reused;
        if (_params.external)
          this.ctx.external = _params.external;
      }
      extractDefs(this.ctx, schema);
      const result = finalize(this.ctx, schema);
      const { "~standard": _, ...plainResult } = result;
      return plainResult;
    }
  };

  // node_modules/zod/v4/core/json-schema.js
  var json_schema_exports = {};

  // node_modules/zod/v4/classic/schemas.js
  var schemas_exports2 = {};
  __export(schemas_exports2, {
    ZodAny: () => ZodAny,
    ZodArray: () => ZodArray,
    ZodBase64: () => ZodBase64,
    ZodBase64URL: () => ZodBase64URL,
    ZodBigInt: () => ZodBigInt,
    ZodBigIntFormat: () => ZodBigIntFormat,
    ZodBoolean: () => ZodBoolean,
    ZodCIDRv4: () => ZodCIDRv4,
    ZodCIDRv6: () => ZodCIDRv6,
    ZodCUID: () => ZodCUID,
    ZodCUID2: () => ZodCUID2,
    ZodCatch: () => ZodCatch,
    ZodCodec: () => ZodCodec,
    ZodCustom: () => ZodCustom,
    ZodCustomStringFormat: () => ZodCustomStringFormat,
    ZodDate: () => ZodDate,
    ZodDefault: () => ZodDefault,
    ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
    ZodE164: () => ZodE164,
    ZodEmail: () => ZodEmail,
    ZodEmoji: () => ZodEmoji,
    ZodEnum: () => ZodEnum,
    ZodExactOptional: () => ZodExactOptional,
    ZodFile: () => ZodFile,
    ZodFunction: () => ZodFunction,
    ZodGUID: () => ZodGUID,
    ZodIPv4: () => ZodIPv4,
    ZodIPv6: () => ZodIPv6,
    ZodIntersection: () => ZodIntersection,
    ZodJWT: () => ZodJWT,
    ZodKSUID: () => ZodKSUID,
    ZodLazy: () => ZodLazy,
    ZodLiteral: () => ZodLiteral,
    ZodMAC: () => ZodMAC,
    ZodMap: () => ZodMap,
    ZodNaN: () => ZodNaN,
    ZodNanoID: () => ZodNanoID,
    ZodNever: () => ZodNever,
    ZodNonOptional: () => ZodNonOptional,
    ZodNull: () => ZodNull,
    ZodNullable: () => ZodNullable,
    ZodNumber: () => ZodNumber,
    ZodNumberFormat: () => ZodNumberFormat,
    ZodObject: () => ZodObject,
    ZodOptional: () => ZodOptional,
    ZodPipe: () => ZodPipe,
    ZodPrefault: () => ZodPrefault,
    ZodPreprocess: () => ZodPreprocess,
    ZodPromise: () => ZodPromise,
    ZodReadonly: () => ZodReadonly,
    ZodRecord: () => ZodRecord,
    ZodSet: () => ZodSet,
    ZodString: () => ZodString,
    ZodStringFormat: () => ZodStringFormat,
    ZodSuccess: () => ZodSuccess,
    ZodSymbol: () => ZodSymbol,
    ZodTemplateLiteral: () => ZodTemplateLiteral,
    ZodTransform: () => ZodTransform,
    ZodTuple: () => ZodTuple,
    ZodType: () => ZodType,
    ZodULID: () => ZodULID,
    ZodURL: () => ZodURL,
    ZodUUID: () => ZodUUID,
    ZodUndefined: () => ZodUndefined,
    ZodUnion: () => ZodUnion,
    ZodUnknown: () => ZodUnknown,
    ZodVoid: () => ZodVoid,
    ZodXID: () => ZodXID,
    ZodXor: () => ZodXor,
    _ZodString: () => _ZodString,
    _default: () => _default2,
    _function: () => _function,
    any: () => any,
    array: () => array,
    base64: () => base642,
    base64url: () => base64url2,
    bigint: () => bigint2,
    boolean: () => boolean2,
    catch: () => _catch2,
    check: () => check,
    cidrv4: () => cidrv42,
    cidrv6: () => cidrv62,
    codec: () => codec,
    cuid: () => cuid3,
    cuid2: () => cuid22,
    custom: () => custom,
    date: () => date3,
    describe: () => describe2,
    discriminatedUnion: () => discriminatedUnion,
    e164: () => e1642,
    email: () => email2,
    emoji: () => emoji2,
    enum: () => _enum2,
    exactOptional: () => exactOptional,
    file: () => file,
    float32: () => float32,
    float64: () => float64,
    function: () => _function,
    guid: () => guid2,
    hash: () => hash,
    hex: () => hex2,
    hostname: () => hostname2,
    httpUrl: () => httpUrl,
    instanceof: () => _instanceof,
    int: () => int,
    int32: () => int32,
    int64: () => int64,
    intersection: () => intersection,
    invertCodec: () => invertCodec,
    ipv4: () => ipv42,
    ipv6: () => ipv62,
    json: () => json,
    jwt: () => jwt,
    keyof: () => keyof,
    ksuid: () => ksuid2,
    lazy: () => lazy,
    literal: () => literal,
    looseObject: () => looseObject,
    looseRecord: () => looseRecord,
    mac: () => mac2,
    map: () => map,
    meta: () => meta2,
    nan: () => nan,
    nanoid: () => nanoid2,
    nativeEnum: () => nativeEnum,
    never: () => never,
    nonoptional: () => nonoptional,
    null: () => _null3,
    nullable: () => nullable,
    nullish: () => nullish2,
    number: () => number2,
    object: () => object,
    optional: () => optional,
    partialRecord: () => partialRecord,
    pipe: () => pipe,
    prefault: () => prefault,
    preprocess: () => preprocess,
    promise: () => promise,
    readonly: () => readonly,
    record: () => record,
    refine: () => refine,
    set: () => set,
    strictObject: () => strictObject,
    string: () => string2,
    stringFormat: () => stringFormat,
    stringbool: () => stringbool,
    success: () => success,
    superRefine: () => superRefine,
    symbol: () => symbol,
    templateLiteral: () => templateLiteral,
    transform: () => transform,
    tuple: () => tuple,
    uint32: () => uint32,
    uint64: () => uint64,
    ulid: () => ulid2,
    undefined: () => _undefined3,
    union: () => union,
    unknown: () => unknown,
    url: () => url,
    uuid: () => uuid2,
    uuidv4: () => uuidv4,
    uuidv6: () => uuidv6,
    uuidv7: () => uuidv7,
    void: () => _void2,
    xid: () => xid2,
    xor: () => xor
  });

  // node_modules/zod/v4/classic/checks.js
  var checks_exports2 = {};
  __export(checks_exports2, {
    endsWith: () => _endsWith,
    gt: () => _gt,
    gte: () => _gte,
    includes: () => _includes,
    length: () => _length,
    lowercase: () => _lowercase,
    lt: () => _lt,
    lte: () => _lte,
    maxLength: () => _maxLength,
    maxSize: () => _maxSize,
    mime: () => _mime,
    minLength: () => _minLength,
    minSize: () => _minSize,
    multipleOf: () => _multipleOf,
    negative: () => _negative,
    nonnegative: () => _nonnegative,
    nonpositive: () => _nonpositive,
    normalize: () => _normalize,
    overwrite: () => _overwrite,
    positive: () => _positive,
    property: () => _property,
    regex: () => _regex,
    size: () => _size,
    slugify: () => _slugify,
    startsWith: () => _startsWith,
    toLowerCase: () => _toLowerCase,
    toUpperCase: () => _toUpperCase,
    trim: () => _trim,
    uppercase: () => _uppercase
  });

  // node_modules/zod/v4/classic/iso.js
  var iso_exports = {};
  __export(iso_exports, {
    ZodISODate: () => ZodISODate,
    ZodISODateTime: () => ZodISODateTime,
    ZodISODuration: () => ZodISODuration,
    ZodISOTime: () => ZodISOTime,
    date: () => date2,
    datetime: () => datetime2,
    duration: () => duration2,
    time: () => time2
  });
  var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
    $ZodISODateTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function datetime2(params) {
    return _isoDateTime(ZodISODateTime, params);
  }
  var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
    $ZodISODate.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function date2(params) {
    return _isoDate(ZodISODate, params);
  }
  var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
    $ZodISOTime.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function time2(params) {
    return _isoTime(ZodISOTime, params);
  }
  var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
    $ZodISODuration.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function duration2(params) {
    return _isoDuration(ZodISODuration, params);
  }

  // node_modules/zod/v4/classic/errors.js
  var initializer2 = (inst, issues) => {
    $ZodError.init(inst, issues);
    inst.name = "ZodError";
    Object.defineProperties(inst, {
      format: {
        value: (mapper) => formatError(inst, mapper)
        // enumerable: false,
      },
      flatten: {
        value: (mapper) => flattenError(inst, mapper)
        // enumerable: false,
      },
      addIssue: {
        value: (issue2) => {
          inst.issues.push(issue2);
          inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
        }
        // enumerable: false,
      },
      addIssues: {
        value: (issues2) => {
          inst.issues.push(...issues2);
          inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
        }
        // enumerable: false,
      },
      isEmpty: {
        get() {
          return inst.issues.length === 0;
        }
        // enumerable: false,
      }
    });
  };
  var ZodError = /* @__PURE__ */ $constructor("ZodError", initializer2);
  var ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer2, {
    Parent: Error
  });

  // node_modules/zod/v4/classic/parse.js
  var parse2 = /* @__PURE__ */ _parse(ZodRealError);
  var parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError);
  var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
  var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);
  var encode2 = /* @__PURE__ */ _encode(ZodRealError);
  var decode2 = /* @__PURE__ */ _decode(ZodRealError);
  var encodeAsync2 = /* @__PURE__ */ _encodeAsync(ZodRealError);
  var decodeAsync2 = /* @__PURE__ */ _decodeAsync(ZodRealError);
  var safeEncode2 = /* @__PURE__ */ _safeEncode(ZodRealError);
  var safeDecode2 = /* @__PURE__ */ _safeDecode(ZodRealError);
  var safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
  var safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

  // node_modules/zod/v4/classic/schemas.js
  var _installedGroups = /* @__PURE__ */ new WeakMap();
  function _installLazyMethods(inst, group, methods) {
    const proto = Object.getPrototypeOf(inst);
    let installed = _installedGroups.get(proto);
    if (!installed) {
      installed = /* @__PURE__ */ new Set();
      _installedGroups.set(proto, installed);
    }
    if (installed.has(group))
      return;
    installed.add(group);
    for (const key in methods) {
      const fn = methods[key];
      Object.defineProperty(proto, key, {
        configurable: true,
        enumerable: false,
        get() {
          const bound = fn.bind(this);
          Object.defineProperty(this, key, {
            configurable: true,
            writable: true,
            enumerable: true,
            value: bound
          });
          return bound;
        },
        set(v) {
          Object.defineProperty(this, key, {
            configurable: true,
            writable: true,
            enumerable: true,
            value: v
          });
        }
      });
    }
  }
  var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
    $ZodType.init(inst, def);
    Object.assign(inst["~standard"], {
      jsonSchema: {
        input: createStandardJSONSchemaMethod(inst, "input"),
        output: createStandardJSONSchemaMethod(inst, "output")
      }
    });
    inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
    inst.def = def;
    inst.type = def.type;
    Object.defineProperty(inst, "_def", { value: def });
    inst.parse = (data, params) => parse2(inst, data, params, { callee: inst.parse });
    inst.safeParse = (data, params) => safeParse2(inst, data, params);
    inst.parseAsync = async (data, params) => parseAsync2(inst, data, params, { callee: inst.parseAsync });
    inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
    inst.spa = inst.safeParseAsync;
    inst.encode = (data, params) => encode2(inst, data, params);
    inst.decode = (data, params) => decode2(inst, data, params);
    inst.encodeAsync = async (data, params) => encodeAsync2(inst, data, params);
    inst.decodeAsync = async (data, params) => decodeAsync2(inst, data, params);
    inst.safeEncode = (data, params) => safeEncode2(inst, data, params);
    inst.safeDecode = (data, params) => safeDecode2(inst, data, params);
    inst.safeEncodeAsync = async (data, params) => safeEncodeAsync2(inst, data, params);
    inst.safeDecodeAsync = async (data, params) => safeDecodeAsync2(inst, data, params);
    _installLazyMethods(inst, "ZodType", {
      check(...chks) {
        const def2 = this.def;
        return this.clone(util_exports.mergeDefs(def2, {
          checks: [
            ...def2.checks ?? [],
            ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
          ]
        }), { parent: true });
      },
      with(...chks) {
        return this.check(...chks);
      },
      clone(def2, params) {
        return clone(this, def2, params);
      },
      brand() {
        return this;
      },
      register(reg, meta3) {
        reg.add(this, meta3);
        return this;
      },
      refine(check2, params) {
        return this.check(refine(check2, params));
      },
      superRefine(refinement, params) {
        return this.check(superRefine(refinement, params));
      },
      overwrite(fn) {
        return this.check(_overwrite(fn));
      },
      optional() {
        return optional(this);
      },
      exactOptional() {
        return exactOptional(this);
      },
      nullable() {
        return nullable(this);
      },
      nullish() {
        return optional(nullable(this));
      },
      nonoptional(params) {
        return nonoptional(this, params);
      },
      array() {
        return array(this);
      },
      or(arg) {
        return union([this, arg]);
      },
      and(arg) {
        return intersection(this, arg);
      },
      transform(tx) {
        return pipe(this, transform(tx));
      },
      default(d) {
        return _default2(this, d);
      },
      prefault(d) {
        return prefault(this, d);
      },
      catch(params) {
        return _catch2(this, params);
      },
      pipe(target) {
        return pipe(this, target);
      },
      readonly() {
        return readonly(this);
      },
      describe(description) {
        const cl = this.clone();
        globalRegistry.add(cl, { description });
        return cl;
      },
      meta(...args) {
        if (args.length === 0)
          return globalRegistry.get(this);
        const cl = this.clone();
        globalRegistry.add(cl, args[0]);
        return cl;
      },
      isOptional() {
        return this.safeParse(void 0).success;
      },
      isNullable() {
        return this.safeParse(null).success;
      },
      apply(fn) {
        return fn(this);
      }
    });
    Object.defineProperty(inst, "description", {
      get() {
        return globalRegistry.get(inst)?.description;
      },
      configurable: true
    });
    return inst;
  });
  var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => stringProcessor(inst, ctx, json2, params);
    const bag = inst._zod.bag;
    inst.format = bag.format ?? null;
    inst.minLength = bag.minimum ?? null;
    inst.maxLength = bag.maximum ?? null;
    _installLazyMethods(inst, "_ZodString", {
      regex(...args) {
        return this.check(_regex(...args));
      },
      includes(...args) {
        return this.check(_includes(...args));
      },
      startsWith(...args) {
        return this.check(_startsWith(...args));
      },
      endsWith(...args) {
        return this.check(_endsWith(...args));
      },
      min(...args) {
        return this.check(_minLength(...args));
      },
      max(...args) {
        return this.check(_maxLength(...args));
      },
      length(...args) {
        return this.check(_length(...args));
      },
      nonempty(...args) {
        return this.check(_minLength(1, ...args));
      },
      lowercase(params) {
        return this.check(_lowercase(params));
      },
      uppercase(params) {
        return this.check(_uppercase(params));
      },
      trim() {
        return this.check(_trim());
      },
      normalize(...args) {
        return this.check(_normalize(...args));
      },
      toLowerCase() {
        return this.check(_toLowerCase());
      },
      toUpperCase() {
        return this.check(_toUpperCase());
      },
      slugify() {
        return this.check(_slugify());
      }
    });
  });
  var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
    $ZodString.init(inst, def);
    _ZodString.init(inst, def);
    inst.email = (params) => inst.check(_email(ZodEmail, params));
    inst.url = (params) => inst.check(_url(ZodURL, params));
    inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
    inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params));
    inst.guid = (params) => inst.check(_guid(ZodGUID, params));
    inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
    inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
    inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
    inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
    inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
    inst.guid = (params) => inst.check(_guid(ZodGUID, params));
    inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
    inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
    inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
    inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
    inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
    inst.xid = (params) => inst.check(_xid(ZodXID, params));
    inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
    inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
    inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
    inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
    inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
    inst.e164 = (params) => inst.check(_e164(ZodE164, params));
    inst.datetime = (params) => inst.check(datetime2(params));
    inst.date = (params) => inst.check(date2(params));
    inst.time = (params) => inst.check(time2(params));
    inst.duration = (params) => inst.check(duration2(params));
  });
  function string2(params) {
    return _string(ZodString, params);
  }
  var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
    $ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
  });
  var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
    $ZodEmail.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function email2(params) {
    return _email(ZodEmail, params);
  }
  var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
    $ZodGUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function guid2(params) {
    return _guid(ZodGUID, params);
  }
  var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
    $ZodUUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function uuid2(params) {
    return _uuid(ZodUUID, params);
  }
  function uuidv4(params) {
    return _uuidv4(ZodUUID, params);
  }
  function uuidv6(params) {
    return _uuidv6(ZodUUID, params);
  }
  function uuidv7(params) {
    return _uuidv7(ZodUUID, params);
  }
  var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
    $ZodURL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function url(params) {
    return _url(ZodURL, params);
  }
  function httpUrl(params) {
    return _url(ZodURL, {
      protocol: regexes_exports.httpProtocol,
      hostname: regexes_exports.domain,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
    $ZodEmoji.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function emoji2(params) {
    return _emoji2(ZodEmoji, params);
  }
  var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
    $ZodNanoID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function nanoid2(params) {
    return _nanoid(ZodNanoID, params);
  }
  var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
    $ZodCUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function cuid3(params) {
    return _cuid(ZodCUID, params);
  }
  var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
    $ZodCUID2.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function cuid22(params) {
    return _cuid2(ZodCUID2, params);
  }
  var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
    $ZodULID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function ulid2(params) {
    return _ulid(ZodULID, params);
  }
  var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
    $ZodXID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function xid2(params) {
    return _xid(ZodXID, params);
  }
  var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
    $ZodKSUID.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function ksuid2(params) {
    return _ksuid(ZodKSUID, params);
  }
  var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
    $ZodIPv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function ipv42(params) {
    return _ipv4(ZodIPv4, params);
  }
  var ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", (inst, def) => {
    $ZodMAC.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function mac2(params) {
    return _mac(ZodMAC, params);
  }
  var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
    $ZodIPv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function ipv62(params) {
    return _ipv6(ZodIPv6, params);
  }
  var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
    $ZodCIDRv4.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function cidrv42(params) {
    return _cidrv4(ZodCIDRv4, params);
  }
  var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
    $ZodCIDRv6.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function cidrv62(params) {
    return _cidrv6(ZodCIDRv6, params);
  }
  var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
    $ZodBase64.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function base642(params) {
    return _base64(ZodBase64, params);
  }
  var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
    $ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function base64url2(params) {
    return _base64url(ZodBase64URL, params);
  }
  var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
    $ZodE164.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function e1642(params) {
    return _e164(ZodE164, params);
  }
  var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
    $ZodJWT.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function jwt(params) {
    return _jwt(ZodJWT, params);
  }
  var ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
    $ZodCustomStringFormat.init(inst, def);
    ZodStringFormat.init(inst, def);
  });
  function stringFormat(format, fnOrRegex, _params = {}) {
    return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
  }
  function hostname2(_params) {
    return _stringFormat(ZodCustomStringFormat, "hostname", regexes_exports.hostname, _params);
  }
  function hex2(_params) {
    return _stringFormat(ZodCustomStringFormat, "hex", regexes_exports.hex, _params);
  }
  function hash(alg, params) {
    const enc = params?.enc ?? "hex";
    const format = `${alg}_${enc}`;
    const regex = regexes_exports[format];
    if (!regex)
      throw new Error(`Unrecognized hash format: ${format}`);
    return _stringFormat(ZodCustomStringFormat, format, regex, params);
  }
  var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
    $ZodNumber.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => numberProcessor(inst, ctx, json2, params);
    _installLazyMethods(inst, "ZodNumber", {
      gt(value, params) {
        return this.check(_gt(value, params));
      },
      gte(value, params) {
        return this.check(_gte(value, params));
      },
      min(value, params) {
        return this.check(_gte(value, params));
      },
      lt(value, params) {
        return this.check(_lt(value, params));
      },
      lte(value, params) {
        return this.check(_lte(value, params));
      },
      max(value, params) {
        return this.check(_lte(value, params));
      },
      int(params) {
        return this.check(int(params));
      },
      safe(params) {
        return this.check(int(params));
      },
      positive(params) {
        return this.check(_gt(0, params));
      },
      nonnegative(params) {
        return this.check(_gte(0, params));
      },
      negative(params) {
        return this.check(_lt(0, params));
      },
      nonpositive(params) {
        return this.check(_lte(0, params));
      },
      multipleOf(value, params) {
        return this.check(_multipleOf(value, params));
      },
      step(value, params) {
        return this.check(_multipleOf(value, params));
      },
      finite() {
        return this;
      }
    });
    const bag = inst._zod.bag;
    inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
    inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
    inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
    inst.isFinite = true;
    inst.format = bag.format ?? null;
  });
  function number2(params) {
    return _number(ZodNumber, params);
  }
  var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
    $ZodNumberFormat.init(inst, def);
    ZodNumber.init(inst, def);
  });
  function int(params) {
    return _int(ZodNumberFormat, params);
  }
  function float32(params) {
    return _float32(ZodNumberFormat, params);
  }
  function float64(params) {
    return _float64(ZodNumberFormat, params);
  }
  function int32(params) {
    return _int32(ZodNumberFormat, params);
  }
  function uint32(params) {
    return _uint32(ZodNumberFormat, params);
  }
  var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
    $ZodBoolean.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => booleanProcessor(inst, ctx, json2, params);
  });
  function boolean2(params) {
    return _boolean(ZodBoolean, params);
  }
  var ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
    $ZodBigInt.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => bigintProcessor(inst, ctx, json2, params);
    inst.gte = (value, params) => inst.check(_gte(value, params));
    inst.min = (value, params) => inst.check(_gte(value, params));
    inst.gt = (value, params) => inst.check(_gt(value, params));
    inst.gte = (value, params) => inst.check(_gte(value, params));
    inst.min = (value, params) => inst.check(_gte(value, params));
    inst.lt = (value, params) => inst.check(_lt(value, params));
    inst.lte = (value, params) => inst.check(_lte(value, params));
    inst.max = (value, params) => inst.check(_lte(value, params));
    inst.positive = (params) => inst.check(_gt(BigInt(0), params));
    inst.negative = (params) => inst.check(_lt(BigInt(0), params));
    inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params));
    inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params));
    inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
    const bag = inst._zod.bag;
    inst.minValue = bag.minimum ?? null;
    inst.maxValue = bag.maximum ?? null;
    inst.format = bag.format ?? null;
  });
  function bigint2(params) {
    return _bigint(ZodBigInt, params);
  }
  var ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
    $ZodBigIntFormat.init(inst, def);
    ZodBigInt.init(inst, def);
  });
  function int64(params) {
    return _int64(ZodBigIntFormat, params);
  }
  function uint64(params) {
    return _uint64(ZodBigIntFormat, params);
  }
  var ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
    $ZodSymbol.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => symbolProcessor(inst, ctx, json2, params);
  });
  function symbol(params) {
    return _symbol(ZodSymbol, params);
  }
  var ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
    $ZodUndefined.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => undefinedProcessor(inst, ctx, json2, params);
  });
  function _undefined3(params) {
    return _undefined2(ZodUndefined, params);
  }
  var ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
    $ZodNull.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => nullProcessor(inst, ctx, json2, params);
  });
  function _null3(params) {
    return _null2(ZodNull, params);
  }
  var ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
    $ZodAny.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => anyProcessor(inst, ctx, json2, params);
  });
  function any() {
    return _any(ZodAny);
  }
  var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
    $ZodUnknown.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => unknownProcessor(inst, ctx, json2, params);
  });
  function unknown() {
    return _unknown(ZodUnknown);
  }
  var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
    $ZodNever.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => neverProcessor(inst, ctx, json2, params);
  });
  function never(params) {
    return _never(ZodNever, params);
  }
  var ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
    $ZodVoid.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => voidProcessor(inst, ctx, json2, params);
  });
  function _void2(params) {
    return _void(ZodVoid, params);
  }
  var ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
    $ZodDate.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => dateProcessor(inst, ctx, json2, params);
    inst.min = (value, params) => inst.check(_gte(value, params));
    inst.max = (value, params) => inst.check(_lte(value, params));
    const c = inst._zod.bag;
    inst.minDate = c.minimum ? new Date(c.minimum) : null;
    inst.maxDate = c.maximum ? new Date(c.maximum) : null;
  });
  function date3(params) {
    return _date(ZodDate, params);
  }
  var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
    $ZodArray.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => arrayProcessor(inst, ctx, json2, params);
    inst.element = def.element;
    _installLazyMethods(inst, "ZodArray", {
      min(n, params) {
        return this.check(_minLength(n, params));
      },
      nonempty(params) {
        return this.check(_minLength(1, params));
      },
      max(n, params) {
        return this.check(_maxLength(n, params));
      },
      length(n, params) {
        return this.check(_length(n, params));
      },
      unwrap() {
        return this.element;
      }
    });
  });
  function array(element, params) {
    return _array(ZodArray, element, params);
  }
  function keyof(schema) {
    const shape = schema._zod.def.shape;
    return _enum2(Object.keys(shape));
  }
  var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
    $ZodObjectJIT.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => objectProcessor(inst, ctx, json2, params);
    util_exports.defineLazy(inst, "shape", () => {
      return def.shape;
    });
    _installLazyMethods(inst, "ZodObject", {
      keyof() {
        return _enum2(Object.keys(this._zod.def.shape));
      },
      catchall(catchall) {
        return this.clone({ ...this._zod.def, catchall });
      },
      passthrough() {
        return this.clone({ ...this._zod.def, catchall: unknown() });
      },
      loose() {
        return this.clone({ ...this._zod.def, catchall: unknown() });
      },
      strict() {
        return this.clone({ ...this._zod.def, catchall: never() });
      },
      strip() {
        return this.clone({ ...this._zod.def, catchall: void 0 });
      },
      extend(incoming) {
        return util_exports.extend(this, incoming);
      },
      safeExtend(incoming) {
        return util_exports.safeExtend(this, incoming);
      },
      merge(other) {
        return util_exports.merge(this, other);
      },
      pick(mask) {
        return util_exports.pick(this, mask);
      },
      omit(mask) {
        return util_exports.omit(this, mask);
      },
      partial(...args) {
        return util_exports.partial(ZodOptional, this, args[0]);
      },
      required(...args) {
        return util_exports.required(ZodNonOptional, this, args[0]);
      }
    });
  });
  function object(shape, params) {
    const def = {
      type: "object",
      shape: shape ?? {},
      ...util_exports.normalizeParams(params)
    };
    return new ZodObject(def);
  }
  function strictObject(shape, params) {
    return new ZodObject({
      type: "object",
      shape,
      catchall: never(),
      ...util_exports.normalizeParams(params)
    });
  }
  function looseObject(shape, params) {
    return new ZodObject({
      type: "object",
      shape,
      catchall: unknown(),
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
    $ZodUnion.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => unionProcessor(inst, ctx, json2, params);
    inst.options = def.options;
  });
  function union(options, params) {
    return new ZodUnion({
      type: "union",
      options,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodXor = /* @__PURE__ */ $constructor("ZodXor", (inst, def) => {
    ZodUnion.init(inst, def);
    $ZodXor.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => unionProcessor(inst, ctx, json2, params);
    inst.options = def.options;
  });
  function xor(options, params) {
    return new ZodXor({
      type: "union",
      options,
      inclusive: false,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
    ZodUnion.init(inst, def);
    $ZodDiscriminatedUnion.init(inst, def);
  });
  function discriminatedUnion(discriminator, options, params) {
    return new ZodDiscriminatedUnion({
      type: "union",
      options,
      discriminator,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
    $ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => intersectionProcessor(inst, ctx, json2, params);
  });
  function intersection(left, right) {
    return new ZodIntersection({
      type: "intersection",
      left,
      right
    });
  }
  var ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
    $ZodTuple.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => tupleProcessor(inst, ctx, json2, params);
    inst.rest = (rest) => inst.clone({
      ...inst._zod.def,
      rest
    });
  });
  function tuple(items, _paramsOrRest, _params) {
    const hasRest = _paramsOrRest instanceof $ZodType;
    const params = hasRest ? _params : _paramsOrRest;
    const rest = hasRest ? _paramsOrRest : null;
    return new ZodTuple({
      type: "tuple",
      items,
      rest,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
    $ZodRecord.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => recordProcessor(inst, ctx, json2, params);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
  });
  function record(keyType, valueType, params) {
    if (!valueType || !valueType._zod) {
      return new ZodRecord({
        type: "record",
        keyType: string2(),
        valueType: keyType,
        ...util_exports.normalizeParams(valueType)
      });
    }
    return new ZodRecord({
      type: "record",
      keyType,
      valueType,
      ...util_exports.normalizeParams(params)
    });
  }
  function partialRecord(keyType, valueType, params) {
    const k = clone(keyType);
    k._zod.values = void 0;
    return new ZodRecord({
      type: "record",
      keyType: k,
      valueType,
      ...util_exports.normalizeParams(params)
    });
  }
  function looseRecord(keyType, valueType, params) {
    return new ZodRecord({
      type: "record",
      keyType,
      valueType,
      mode: "loose",
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodMap = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
    $ZodMap.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => mapProcessor(inst, ctx, json2, params);
    inst.keyType = def.keyType;
    inst.valueType = def.valueType;
    inst.min = (...args) => inst.check(_minSize(...args));
    inst.nonempty = (params) => inst.check(_minSize(1, params));
    inst.max = (...args) => inst.check(_maxSize(...args));
    inst.size = (...args) => inst.check(_size(...args));
  });
  function map(keyType, valueType, params) {
    return new ZodMap({
      type: "map",
      keyType,
      valueType,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodSet = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
    $ZodSet.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => setProcessor(inst, ctx, json2, params);
    inst.min = (...args) => inst.check(_minSize(...args));
    inst.nonempty = (params) => inst.check(_minSize(1, params));
    inst.max = (...args) => inst.check(_maxSize(...args));
    inst.size = (...args) => inst.check(_size(...args));
  });
  function set(valueType, params) {
    return new ZodSet({
      type: "set",
      valueType,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
    $ZodEnum.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => enumProcessor(inst, ctx, json2, params);
    inst.enum = def.entries;
    inst.options = Object.values(def.entries);
    const keys = new Set(Object.keys(def.entries));
    inst.extract = (values, params) => {
      const newEntries = {};
      for (const value of values) {
        if (keys.has(value)) {
          newEntries[value] = def.entries[value];
        } else
          throw new Error(`Key ${value} not found in enum`);
      }
      return new ZodEnum({
        ...def,
        checks: [],
        ...util_exports.normalizeParams(params),
        entries: newEntries
      });
    };
    inst.exclude = (values, params) => {
      const newEntries = { ...def.entries };
      for (const value of values) {
        if (keys.has(value)) {
          delete newEntries[value];
        } else
          throw new Error(`Key ${value} not found in enum`);
      }
      return new ZodEnum({
        ...def,
        checks: [],
        ...util_exports.normalizeParams(params),
        entries: newEntries
      });
    };
  });
  function _enum2(values, params) {
    const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
    return new ZodEnum({
      type: "enum",
      entries,
      ...util_exports.normalizeParams(params)
    });
  }
  function nativeEnum(entries, params) {
    return new ZodEnum({
      type: "enum",
      entries,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
    $ZodLiteral.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => literalProcessor(inst, ctx, json2, params);
    inst.values = new Set(def.values);
    Object.defineProperty(inst, "value", {
      get() {
        if (def.values.length > 1) {
          throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        }
        return def.values[0];
      }
    });
  });
  function literal(value, params) {
    return new ZodLiteral({
      type: "literal",
      values: Array.isArray(value) ? value : [value],
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
    $ZodFile.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => fileProcessor(inst, ctx, json2, params);
    inst.min = (size, params) => inst.check(_minSize(size, params));
    inst.max = (size, params) => inst.check(_maxSize(size, params));
    inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
  });
  function file(params) {
    return _file(ZodFile, params);
  }
  var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
    $ZodTransform.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => transformProcessor(inst, ctx, json2, params);
    inst._zod.parse = (payload, _ctx) => {
      if (_ctx.direction === "backward") {
        throw new $ZodEncodeError(inst.constructor.name);
      }
      payload.addIssue = (issue2) => {
        if (typeof issue2 === "string") {
          payload.issues.push(util_exports.issue(issue2, payload.value, def));
        } else {
          const _issue = issue2;
          if (_issue.fatal)
            _issue.continue = false;
          _issue.code ?? (_issue.code = "custom");
          _issue.input ?? (_issue.input = payload.value);
          _issue.inst ?? (_issue.inst = inst);
          payload.issues.push(util_exports.issue(_issue));
        }
      };
      const output = def.transform(payload.value, payload);
      if (output instanceof Promise) {
        return output.then((output2) => {
          payload.value = output2;
          payload.fallback = true;
          return payload;
        });
      }
      payload.value = output;
      payload.fallback = true;
      return payload;
    };
  });
  function transform(fn) {
    return new ZodTransform({
      type: "transform",
      transform: fn
    });
  }
  var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
    $ZodOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => optionalProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function optional(innerType) {
    return new ZodOptional({
      type: "optional",
      innerType
    });
  }
  var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
    $ZodExactOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => optionalProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function exactOptional(innerType) {
    return new ZodExactOptional({
      type: "optional",
      innerType
    });
  }
  var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
    $ZodNullable.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => nullableProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function nullable(innerType) {
    return new ZodNullable({
      type: "nullable",
      innerType
    });
  }
  function nullish2(innerType) {
    return optional(nullable(innerType));
  }
  var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
    $ZodDefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => defaultProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeDefault = inst.unwrap;
  });
  function _default2(innerType, defaultValue) {
    return new ZodDefault({
      type: "default",
      innerType,
      get defaultValue() {
        return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
      }
    });
  }
  var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
    $ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => prefaultProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function prefault(innerType, defaultValue) {
    return new ZodPrefault({
      type: "prefault",
      innerType,
      get defaultValue() {
        return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
      }
    });
  }
  var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
    $ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => nonoptionalProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function nonoptional(innerType, params) {
    return new ZodNonOptional({
      type: "nonoptional",
      innerType,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
    $ZodSuccess.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => successProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function success(innerType) {
    return new ZodSuccess({
      type: "success",
      innerType
    });
  }
  var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
    $ZodCatch.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => catchProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
    inst.removeCatch = inst.unwrap;
  });
  function _catch2(innerType, catchValue) {
    return new ZodCatch({
      type: "catch",
      innerType,
      catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
    });
  }
  var ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
    $ZodNaN.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => nanProcessor(inst, ctx, json2, params);
  });
  function nan(params) {
    return _nan(ZodNaN, params);
  }
  var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
    $ZodPipe.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => pipeProcessor(inst, ctx, json2, params);
    inst.in = def.in;
    inst.out = def.out;
  });
  function pipe(in_, out) {
    return new ZodPipe({
      type: "pipe",
      in: in_,
      out
      // ...util.normalizeParams(params),
    });
  }
  var ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", (inst, def) => {
    ZodPipe.init(inst, def);
    $ZodCodec.init(inst, def);
  });
  function codec(in_, out, params) {
    return new ZodCodec({
      type: "pipe",
      in: in_,
      out,
      transform: params.decode,
      reverseTransform: params.encode
    });
  }
  function invertCodec(codec2) {
    const def = codec2._zod.def;
    return new ZodCodec({
      type: "pipe",
      in: def.out,
      out: def.in,
      transform: def.reverseTransform,
      reverseTransform: def.transform
    });
  }
  var ZodPreprocess = /* @__PURE__ */ $constructor("ZodPreprocess", (inst, def) => {
    ZodPipe.init(inst, def);
    $ZodPreprocess.init(inst, def);
  });
  var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
    $ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => readonlyProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function readonly(innerType) {
    return new ZodReadonly({
      type: "readonly",
      innerType
    });
  }
  var ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
    $ZodTemplateLiteral.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => templateLiteralProcessor(inst, ctx, json2, params);
  });
  function templateLiteral(parts, params) {
    return new ZodTemplateLiteral({
      type: "template_literal",
      parts,
      ...util_exports.normalizeParams(params)
    });
  }
  var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
    $ZodLazy.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => lazyProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.getter();
  });
  function lazy(getter) {
    return new ZodLazy({
      type: "lazy",
      getter
    });
  }
  var ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
    $ZodPromise.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => promiseProcessor(inst, ctx, json2, params);
    inst.unwrap = () => inst._zod.def.innerType;
  });
  function promise(innerType) {
    return new ZodPromise({
      type: "promise",
      innerType
    });
  }
  var ZodFunction = /* @__PURE__ */ $constructor("ZodFunction", (inst, def) => {
    $ZodFunction.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => functionProcessor(inst, ctx, json2, params);
  });
  function _function(params) {
    return new ZodFunction({
      type: "function",
      input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array(unknown()),
      output: params?.output ?? unknown()
    });
  }
  var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
    $ZodCustom.init(inst, def);
    ZodType.init(inst, def);
    inst._zod.processJSONSchema = (ctx, json2, params) => customProcessor(inst, ctx, json2, params);
  });
  function check(fn) {
    const ch = new $ZodCheck({
      check: "custom"
      // ...util.normalizeParams(params),
    });
    ch._zod.check = fn;
    return ch;
  }
  function custom(fn, _params) {
    return _custom(ZodCustom, fn ?? (() => true), _params);
  }
  function refine(fn, _params = {}) {
    return _refine(ZodCustom, fn, _params);
  }
  function superRefine(fn, params) {
    return _superRefine(fn, params);
  }
  var describe2 = describe;
  var meta2 = meta;
  function _instanceof(cls, params = {}) {
    const inst = new ZodCustom({
      type: "custom",
      check: "custom",
      fn: (data) => data instanceof cls,
      abort: true,
      ...util_exports.normalizeParams(params)
    });
    inst._zod.bag.Class = cls;
    inst._zod.check = (payload) => {
      if (!(payload.value instanceof cls)) {
        payload.issues.push({
          code: "invalid_type",
          expected: cls.name,
          input: payload.value,
          inst,
          path: [...inst._zod.def.path ?? []]
        });
      }
    };
    return inst;
  }
  var stringbool = (...args) => _stringbool({
    Codec: ZodCodec,
    Boolean: ZodBoolean,
    String: ZodString
  }, ...args);
  function json(params) {
    const jsonSchema = lazy(() => {
      return union([string2(params), number2(), boolean2(), _null3(), array(jsonSchema), record(string2(), jsonSchema)]);
    });
    return jsonSchema;
  }
  function preprocess(fn, schema) {
    return new ZodPreprocess({
      type: "pipe",
      in: transform(fn),
      out: schema
    });
  }

  // node_modules/zod/v4/classic/compat.js
  var ZodIssueCode = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom"
  };
  function setErrorMap(map2) {
    config({
      customError: map2
    });
  }
  function getErrorMap() {
    return config().customError;
  }
  var ZodFirstPartyTypeKind;
  /* @__PURE__ */ (function(ZodFirstPartyTypeKind2) {
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));

  // node_modules/zod/v4/classic/from-json-schema.js
  var z = {
    ...schemas_exports2,
    ...checks_exports2,
    iso: iso_exports
  };
  var RECOGNIZED_KEYS = /* @__PURE__ */ new Set([
    // Schema identification
    "$schema",
    "$ref",
    "$defs",
    "definitions",
    // Core schema keywords
    "$id",
    "id",
    "$comment",
    "$anchor",
    "$vocabulary",
    "$dynamicRef",
    "$dynamicAnchor",
    // Type
    "type",
    "enum",
    "const",
    // Composition
    "anyOf",
    "oneOf",
    "allOf",
    "not",
    // Object
    "properties",
    "required",
    "additionalProperties",
    "patternProperties",
    "propertyNames",
    "minProperties",
    "maxProperties",
    // Array
    "items",
    "prefixItems",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "minContains",
    "maxContains",
    // String
    "minLength",
    "maxLength",
    "pattern",
    "format",
    // Number
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    // Already handled metadata
    "description",
    "default",
    // Content
    "contentEncoding",
    "contentMediaType",
    "contentSchema",
    // Unsupported (error-throwing)
    "unevaluatedItems",
    "unevaluatedProperties",
    "if",
    "then",
    "else",
    "dependentSchemas",
    "dependentRequired",
    // OpenAPI
    "nullable",
    "readOnly"
  ]);
  function detectVersion(schema, defaultTarget) {
    const $schema = schema.$schema;
    if ($schema === "https://json-schema.org/draft/2020-12/schema") {
      return "draft-2020-12";
    }
    if ($schema === "http://json-schema.org/draft-07/schema#") {
      return "draft-7";
    }
    if ($schema === "http://json-schema.org/draft-04/schema#") {
      return "draft-4";
    }
    return defaultTarget ?? "draft-2020-12";
  }
  function resolveRef(ref, ctx) {
    if (!ref.startsWith("#")) {
      throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
    }
    const path = ref.slice(1).split("/").filter(Boolean);
    if (path.length === 0) {
      return ctx.rootSchema;
    }
    const defsKey = ctx.version === "draft-2020-12" ? "$defs" : "definitions";
    if (path[0] === defsKey) {
      const key = path[1];
      if (!key || !ctx.defs[key]) {
        throw new Error(`Reference not found: ${ref}`);
      }
      return ctx.defs[key];
    }
    throw new Error(`Reference not found: ${ref}`);
  }
  function convertBaseSchema(schema, ctx) {
    if (schema.not !== void 0) {
      if (typeof schema.not === "object" && Object.keys(schema.not).length === 0) {
        return z.never();
      }
      throw new Error("not is not supported in Zod (except { not: {} } for never)");
    }
    if (schema.unevaluatedItems !== void 0) {
      throw new Error("unevaluatedItems is not supported");
    }
    if (schema.unevaluatedProperties !== void 0) {
      throw new Error("unevaluatedProperties is not supported");
    }
    if (schema.if !== void 0 || schema.then !== void 0 || schema.else !== void 0) {
      throw new Error("Conditional schemas (if/then/else) are not supported");
    }
    if (schema.dependentSchemas !== void 0 || schema.dependentRequired !== void 0) {
      throw new Error("dependentSchemas and dependentRequired are not supported");
    }
    if (schema.$ref) {
      const refPath = schema.$ref;
      if (ctx.refs.has(refPath)) {
        return ctx.refs.get(refPath);
      }
      if (ctx.processing.has(refPath)) {
        return z.lazy(() => {
          if (!ctx.refs.has(refPath)) {
            throw new Error(`Circular reference not resolved: ${refPath}`);
          }
          return ctx.refs.get(refPath);
        });
      }
      ctx.processing.add(refPath);
      const resolved = resolveRef(refPath, ctx);
      const zodSchema2 = convertSchema(resolved, ctx);
      ctx.refs.set(refPath, zodSchema2);
      ctx.processing.delete(refPath);
      return zodSchema2;
    }
    if (schema.enum !== void 0) {
      const enumValues = schema.enum;
      if (ctx.version === "openapi-3.0" && schema.nullable === true && enumValues.length === 1 && enumValues[0] === null) {
        return z.null();
      }
      if (enumValues.length === 0) {
        return z.never();
      }
      if (enumValues.length === 1) {
        return z.literal(enumValues[0]);
      }
      if (enumValues.every((v) => typeof v === "string")) {
        return z.enum(enumValues);
      }
      const literalSchemas = enumValues.map((v) => z.literal(v));
      if (literalSchemas.length < 2) {
        return literalSchemas[0];
      }
      return z.union([literalSchemas[0], literalSchemas[1], ...literalSchemas.slice(2)]);
    }
    if (schema.const !== void 0) {
      return z.literal(schema.const);
    }
    const type = schema.type;
    if (Array.isArray(type)) {
      const typeSchemas = type.map((t) => {
        const typeSchema = { ...schema, type: t };
        return convertBaseSchema(typeSchema, ctx);
      });
      if (typeSchemas.length === 0) {
        return z.never();
      }
      if (typeSchemas.length === 1) {
        return typeSchemas[0];
      }
      return z.union(typeSchemas);
    }
    if (!type) {
      return z.any();
    }
    let zodSchema;
    switch (type) {
      case "string": {
        let stringSchema = z.string();
        if (schema.format) {
          const format = schema.format;
          if (format === "email") {
            stringSchema = stringSchema.check(z.email());
          } else if (format === "uri" || format === "uri-reference") {
            stringSchema = stringSchema.check(z.url());
          } else if (format === "uuid" || format === "guid") {
            stringSchema = stringSchema.check(z.uuid());
          } else if (format === "date-time") {
            stringSchema = stringSchema.check(z.iso.datetime());
          } else if (format === "date") {
            stringSchema = stringSchema.check(z.iso.date());
          } else if (format === "time") {
            stringSchema = stringSchema.check(z.iso.time());
          } else if (format === "duration") {
            stringSchema = stringSchema.check(z.iso.duration());
          } else if (format === "ipv4") {
            stringSchema = stringSchema.check(z.ipv4());
          } else if (format === "ipv6") {
            stringSchema = stringSchema.check(z.ipv6());
          } else if (format === "mac") {
            stringSchema = stringSchema.check(z.mac());
          } else if (format === "cidr") {
            stringSchema = stringSchema.check(z.cidrv4());
          } else if (format === "cidr-v6") {
            stringSchema = stringSchema.check(z.cidrv6());
          } else if (format === "base64") {
            stringSchema = stringSchema.check(z.base64());
          } else if (format === "base64url") {
            stringSchema = stringSchema.check(z.base64url());
          } else if (format === "e164") {
            stringSchema = stringSchema.check(z.e164());
          } else if (format === "jwt") {
            stringSchema = stringSchema.check(z.jwt());
          } else if (format === "emoji") {
            stringSchema = stringSchema.check(z.emoji());
          } else if (format === "nanoid") {
            stringSchema = stringSchema.check(z.nanoid());
          } else if (format === "cuid") {
            stringSchema = stringSchema.check(z.cuid());
          } else if (format === "cuid2") {
            stringSchema = stringSchema.check(z.cuid2());
          } else if (format === "ulid") {
            stringSchema = stringSchema.check(z.ulid());
          } else if (format === "xid") {
            stringSchema = stringSchema.check(z.xid());
          } else if (format === "ksuid") {
            stringSchema = stringSchema.check(z.ksuid());
          }
        }
        if (typeof schema.minLength === "number") {
          stringSchema = stringSchema.min(schema.minLength);
        }
        if (typeof schema.maxLength === "number") {
          stringSchema = stringSchema.max(schema.maxLength);
        }
        if (schema.pattern) {
          stringSchema = stringSchema.regex(new RegExp(schema.pattern));
        }
        zodSchema = stringSchema;
        break;
      }
      case "number":
      case "integer": {
        let numberSchema = type === "integer" ? z.number().int() : z.number();
        if (typeof schema.minimum === "number") {
          numberSchema = numberSchema.min(schema.minimum);
        }
        if (typeof schema.maximum === "number") {
          numberSchema = numberSchema.max(schema.maximum);
        }
        if (typeof schema.exclusiveMinimum === "number") {
          numberSchema = numberSchema.gt(schema.exclusiveMinimum);
        } else if (schema.exclusiveMinimum === true && typeof schema.minimum === "number") {
          numberSchema = numberSchema.gt(schema.minimum);
        }
        if (typeof schema.exclusiveMaximum === "number") {
          numberSchema = numberSchema.lt(schema.exclusiveMaximum);
        } else if (schema.exclusiveMaximum === true && typeof schema.maximum === "number") {
          numberSchema = numberSchema.lt(schema.maximum);
        }
        if (typeof schema.multipleOf === "number") {
          numberSchema = numberSchema.multipleOf(schema.multipleOf);
        }
        zodSchema = numberSchema;
        break;
      }
      case "boolean": {
        zodSchema = z.boolean();
        break;
      }
      case "null": {
        zodSchema = z.null();
        break;
      }
      case "object": {
        const shape = {};
        const properties = schema.properties || {};
        const requiredSet = new Set(schema.required || []);
        for (const [key, propSchema] of Object.entries(properties)) {
          const propZodSchema = convertSchema(propSchema, ctx);
          shape[key] = requiredSet.has(key) ? propZodSchema : propZodSchema.optional();
        }
        if (schema.propertyNames) {
          const keySchema = convertSchema(schema.propertyNames, ctx);
          const valueSchema = schema.additionalProperties && typeof schema.additionalProperties === "object" ? convertSchema(schema.additionalProperties, ctx) : z.any();
          if (Object.keys(shape).length === 0) {
            zodSchema = z.record(keySchema, valueSchema);
            break;
          }
          const objectSchema2 = z.object(shape).passthrough();
          const recordSchema = z.looseRecord(keySchema, valueSchema);
          zodSchema = z.intersection(objectSchema2, recordSchema);
          break;
        }
        if (schema.patternProperties) {
          const patternProps = schema.patternProperties;
          const patternKeys = Object.keys(patternProps);
          const looseRecords = [];
          for (const pattern of patternKeys) {
            const patternValue = convertSchema(patternProps[pattern], ctx);
            const keySchema = z.string().regex(new RegExp(pattern));
            looseRecords.push(z.looseRecord(keySchema, patternValue));
          }
          const schemasToIntersect = [];
          if (Object.keys(shape).length > 0) {
            schemasToIntersect.push(z.object(shape).passthrough());
          }
          schemasToIntersect.push(...looseRecords);
          if (schemasToIntersect.length === 0) {
            zodSchema = z.object({}).passthrough();
          } else if (schemasToIntersect.length === 1) {
            zodSchema = schemasToIntersect[0];
          } else {
            let result = z.intersection(schemasToIntersect[0], schemasToIntersect[1]);
            for (let i = 2; i < schemasToIntersect.length; i++) {
              result = z.intersection(result, schemasToIntersect[i]);
            }
            zodSchema = result;
          }
          break;
        }
        const objectSchema = z.object(shape);
        if (schema.additionalProperties === false) {
          zodSchema = objectSchema.strict();
        } else if (typeof schema.additionalProperties === "object") {
          zodSchema = objectSchema.catchall(convertSchema(schema.additionalProperties, ctx));
        } else {
          zodSchema = objectSchema.passthrough();
        }
        break;
      }
      case "array": {
        const prefixItems = schema.prefixItems;
        const items = schema.items;
        if (prefixItems && Array.isArray(prefixItems)) {
          const tupleItems = prefixItems.map((item) => convertSchema(item, ctx));
          const rest = items && typeof items === "object" && !Array.isArray(items) ? convertSchema(items, ctx) : void 0;
          if (rest) {
            zodSchema = z.tuple(tupleItems).rest(rest);
          } else {
            zodSchema = z.tuple(tupleItems);
          }
          if (typeof schema.minItems === "number") {
            zodSchema = zodSchema.check(z.minLength(schema.minItems));
          }
          if (typeof schema.maxItems === "number") {
            zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
          }
        } else if (Array.isArray(items)) {
          const tupleItems = items.map((item) => convertSchema(item, ctx));
          const rest = schema.additionalItems && typeof schema.additionalItems === "object" ? convertSchema(schema.additionalItems, ctx) : void 0;
          if (rest) {
            zodSchema = z.tuple(tupleItems).rest(rest);
          } else {
            zodSchema = z.tuple(tupleItems);
          }
          if (typeof schema.minItems === "number") {
            zodSchema = zodSchema.check(z.minLength(schema.minItems));
          }
          if (typeof schema.maxItems === "number") {
            zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
          }
        } else if (items !== void 0) {
          const element = convertSchema(items, ctx);
          let arraySchema = z.array(element);
          if (typeof schema.minItems === "number") {
            arraySchema = arraySchema.min(schema.minItems);
          }
          if (typeof schema.maxItems === "number") {
            arraySchema = arraySchema.max(schema.maxItems);
          }
          zodSchema = arraySchema;
        } else {
          zodSchema = z.array(z.any());
        }
        break;
      }
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
    return zodSchema;
  }
  function convertSchema(schema, ctx) {
    if (typeof schema === "boolean") {
      return schema ? z.any() : z.never();
    }
    let baseSchema = convertBaseSchema(schema, ctx);
    const hasExplicitType = schema.type || schema.enum !== void 0 || schema.const !== void 0;
    if (schema.anyOf && Array.isArray(schema.anyOf)) {
      const options = schema.anyOf.map((s) => convertSchema(s, ctx));
      const anyOfUnion = z.union(options);
      baseSchema = hasExplicitType ? z.intersection(baseSchema, anyOfUnion) : anyOfUnion;
    }
    if (schema.oneOf && Array.isArray(schema.oneOf)) {
      const options = schema.oneOf.map((s) => convertSchema(s, ctx));
      const oneOfUnion = z.xor(options);
      baseSchema = hasExplicitType ? z.intersection(baseSchema, oneOfUnion) : oneOfUnion;
    }
    if (schema.allOf && Array.isArray(schema.allOf)) {
      if (schema.allOf.length === 0) {
        baseSchema = hasExplicitType ? baseSchema : z.any();
      } else {
        let result = hasExplicitType ? baseSchema : convertSchema(schema.allOf[0], ctx);
        const startIdx = hasExplicitType ? 0 : 1;
        for (let i = startIdx; i < schema.allOf.length; i++) {
          result = z.intersection(result, convertSchema(schema.allOf[i], ctx));
        }
        baseSchema = result;
      }
    }
    if (schema.nullable === true && ctx.version === "openapi-3.0") {
      baseSchema = z.nullable(baseSchema);
    }
    if (schema.readOnly === true) {
      baseSchema = z.readonly(baseSchema);
    }
    if (schema.default !== void 0) {
      baseSchema = baseSchema.default(schema.default);
    }
    const extraMeta = {};
    const coreMetadataKeys = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
    for (const key of coreMetadataKeys) {
      if (key in schema) {
        extraMeta[key] = schema[key];
      }
    }
    const contentMetadataKeys = ["contentEncoding", "contentMediaType", "contentSchema"];
    for (const key of contentMetadataKeys) {
      if (key in schema) {
        extraMeta[key] = schema[key];
      }
    }
    for (const key of Object.keys(schema)) {
      if (!RECOGNIZED_KEYS.has(key)) {
        extraMeta[key] = schema[key];
      }
    }
    if (Object.keys(extraMeta).length > 0) {
      ctx.registry.add(baseSchema, extraMeta);
    }
    if (schema.description) {
      baseSchema = baseSchema.describe(schema.description);
    }
    return baseSchema;
  }
  function fromJSONSchema(schema, params) {
    if (typeof schema === "boolean") {
      return schema ? z.any() : z.never();
    }
    let normalized;
    try {
      normalized = JSON.parse(JSON.stringify(schema));
    } catch {
      throw new Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
    }
    const version2 = detectVersion(normalized, params?.defaultTarget);
    const defs = normalized.$defs || normalized.definitions || {};
    const ctx = {
      version: version2,
      defs,
      refs: /* @__PURE__ */ new Map(),
      processing: /* @__PURE__ */ new Set(),
      rootSchema: normalized,
      registry: params?.registry ?? globalRegistry
    };
    return convertSchema(normalized, ctx);
  }

  // node_modules/zod/v4/classic/coerce.js
  var coerce_exports = {};
  __export(coerce_exports, {
    bigint: () => bigint3,
    boolean: () => boolean3,
    date: () => date4,
    number: () => number3,
    string: () => string3
  });
  function string3(params) {
    return _coercedString(ZodString, params);
  }
  function number3(params) {
    return _coercedNumber(ZodNumber, params);
  }
  function boolean3(params) {
    return _coercedBoolean(ZodBoolean, params);
  }
  function bigint3(params) {
    return _coercedBigint(ZodBigInt, params);
  }
  function date4(params) {
    return _coercedDate(ZodDate, params);
  }

  // node_modules/zod/v4/classic/external.js
  config(en_default());

  // src/state.ts
  var text = external_exports.string().max(12e3);
  var identitySchema = external_exports.object({ provider: external_exports.string().min(1).max(200), model: external_exports.string().min(1).max(300) }).strict();
  var participantSchema = identitySchema.extend({ id: external_exports.string().min(1).max(80).refine((id) => id !== "reviewer", "Participant ID reviewer is reserved"), enabled: external_exports.boolean(), role: external_exports.string().max(120), instructions: text, options: external_exports.object({ maxTokens: external_exports.number().int().min(64).max(32768).optional(), reasoningEffort: external_exports.string().max(80).optional() }).strict() }).strict();
  var settingsSchema = external_exports.object({
    participants: external_exports.array(participantSchema).max(20),
    mode: external_exports.enum(["parallel", "sequential", "hybrid"]),
    speakingOrder: external_exports.enum(["configured", "rotating"]),
    concurrency: external_exports.number().int().min(1).max(20),
    providerLimits: external_exports.record(external_exports.string(), external_exports.number().int().min(1).max(20)),
    maxRepliesPerParticipant: external_exports.number().int().min(1).max(30),
    maxReplies: external_exports.number().int().min(2).max(600),
    queueLimit: external_exports.number().int().min(1).max(100),
    rounds: external_exports.number().int().min(1).max(30),
    roundMs: external_exports.number().int().min(100).max(36e5),
    requestMs: external_exports.number().int().min(100).max(36e5),
    overallMs: external_exports.number().int().min(200).max(864e5),
    reserveReviewMs: external_exports.number().int().min(100).max(36e5),
    reviewMs: external_exports.number().int().min(100).max(36e5),
    roundCooldownMs: external_exports.number().int().min(0).max(36e5),
    globalSpacingMs: external_exports.number().int().min(0).max(36e5),
    providerSpacingMs: external_exports.record(external_exports.string(), external_exports.number().int().min(0).max(36e5)),
    turnDelayMs: external_exports.number().int().min(0).max(36e5),
    retries: external_exports.number().int().min(0).max(5),
    backoffMs: external_exports.number().int().min(0).max(6e4),
    backoffMaxMs: external_exports.number().int().min(0).max(3e5),
    directReplies: external_exports.boolean(),
    addressCount: external_exports.number().int().min(1).max(19),
    quotedContext: external_exports.boolean(),
    language: external_exports.enum(["auto", "ar", "en"]),
    responseChars: external_exports.number().int().min(200).max(3e4),
    contextChars: external_exports.number().int().min(2e3).max(5e5),
    earlyStop: external_exports.boolean(),
    tokenBudget: external_exports.number().int().min(1e3).max(1e7).nullable(),
    costBudget: external_exports.number().positive().nullable(),
    reviewer: identitySchema.nullable(),
    reviewInstructions: text
  }).strict().superRefine((s, ctx) => {
    const on = s.participants.filter((p) => p.enabled);
    if (new Set(s.participants.map((p) => p.id)).size !== s.participants.length) ctx.addIssue({ code: "custom", message: "Participant IDs must be unique", path: ["participants"] });
    if (new Set(on.map((p) => `${p.provider}\0${p.model}`)).size !== on.length) ctx.addIssue({ code: "custom", message: "Enabled participants must use distinct provider/model identities", path: ["participants"] });
    if (s.reserveReviewMs >= s.overallMs) ctx.addIssue({ code: "custom", message: "Review reservation must be shorter than overall deadline", path: ["reserveReviewMs"] });
    if (s.reviewMs > s.reserveReviewMs) ctx.addIssue({ code: "custom", message: "Review timeout must fit review reservation", path: ["reviewMs"] });
    if (s.backoffMaxMs < s.backoffMs) ctx.addIssue({ code: "custom", message: "Maximum backoff must be at least initial backoff", path: ["backoffMaxMs"] });
    if (s.costBudget !== null) ctx.addIssue({ code: "custom", message: "Cost budgets unavailable: DSH exposes no reliable text pricing contract", path: ["costBudget"] });
  });
  var imageMediaTypes = ["image/png", "image/jpeg", "image/webp", "image/gif"];
  var imageRefSchema = external_exports.object({ attachmentId: external_exports.string().min(1).max(200), mediaType: external_exports.enum(imageMediaTypes), bytes: external_exports.number().int().positive(), width: external_exports.number().int().positive(), height: external_exports.number().int().positive(), name: external_exports.string().max(255).optional(), originalDimensions: external_exports.object({ width: external_exports.number().int().positive(), height: external_exports.number().int().positive() }).strict().optional() }).strict();
  var encodedImageSchema = external_exports.object({ mediaType: external_exports.enum(imageMediaTypes), data: external_exports.string().min(4).max(28 * 1024 * 1024), name: external_exports.string().max(255).optional() }).strict();
  var taskStatusSchema = external_exports.enum(["queued", "waiting for cooldown", "responding", "completed", "timed out", "rate limited", "failed", "cancelled", "stopped", "interrupted"]);
  var claimSchema = external_exports.object({ id: external_exports.string(), text });
  var objectionSchema = external_exports.object({ claimId: external_exports.string(), text, evidence: text, verification: text });
  var revisionSchema = external_exports.object({ claimId: external_exports.string(), text });
  var messageSchema = external_exports.object({
    id: external_exports.string(),
    participantId: external_exports.string(),
    provider: external_exports.string(),
    model: external_exports.string(),
    role: external_exports.string(),
    round: external_exports.number().int(),
    turn: external_exports.number().int(),
    stage: external_exports.string(),
    timestamp: external_exports.number(),
    text: external_exports.string().max(1e5),
    incomplete: external_exports.boolean(),
    replyTo: external_exports.array(external_exports.string()),
    claims: external_exports.array(claimSchema),
    objections: external_exports.array(objectionSchema),
    revisions: external_exports.array(revisionSchema),
    evidence: external_exports.array(text),
    resolved: external_exports.array(external_exports.string()),
    unresolved: external_exports.array(text),
    agreement: external_exports.boolean(),
    parseWarning: external_exports.string().optional()
  });
  var usageSchema = external_exports.object({ inputTokens: external_exports.number().nonnegative(), outputTokens: external_exports.number().nonnegative(), totalTokens: external_exports.number().nonnegative().optional() });
  var taskSchema = external_exports.object({ id: external_exports.string(), participantId: external_exports.string(), round: external_exports.number(), status: taskStatusSchema, attempt: external_exports.number(), queuedAt: external_exports.number(), startedAt: external_exports.number().optional(), endedAt: external_exports.number().optional(), error: external_exports.string().optional(), partial: external_exports.string().max(1e5).optional() });
  var issueSchema = external_exports.object({ id: external_exports.string(), claimId: external_exports.string(), ownerId: external_exports.string(), raisedBy: external_exports.string(), text: external_exports.string(), evidence: external_exports.string(), verification: external_exports.string(), resolved: external_exports.boolean(), resolution: external_exports.string().optional() });
  var sessionSchema = external_exports.object({
    schemaVersion: external_exports.literal(1),
    id: external_exports.string(),
    title: external_exports.string().max(160),
    question: external_exports.string().max(3e4),
    images: external_exports.array(imageRefSchema).max(20).default([]),
    createdAt: external_exports.number(),
    updatedAt: external_exports.number(),
    status: external_exports.enum(["running", "reviewing", "completed", "partial", "stopped", "interrupted"]),
    settings: settingsSchema,
    messages: external_exports.array(messageSchema),
    tasks: external_exports.array(taskSchema),
    issues: external_exports.array(issueSchema),
    requests: external_exports.array(external_exports.object({ taskId: external_exports.string(), attempt: external_exports.number(), timestamp: external_exports.number(), system: external_exports.string(), prompt: external_exports.string(), config: external_exports.object({ provider: external_exports.string(), model: external_exports.string(), maxTokens: external_exports.number().optional(), reasoningEffort: external_exports.string().optional() }), contextIds: external_exports.array(external_exports.string()), images: external_exports.array(imageRefSchema).max(20).default([]), compressed: external_exports.boolean() })),
    usage: usageSchema,
    usageUnavailable: external_exports.boolean(),
    budgetUsed: external_exports.number(),
    budgetEstimated: external_exports.boolean(),
    round: external_exports.number(),
    stage: external_exports.string(),
    stageDeadline: external_exports.number(),
    deadline: external_exports.number(),
    startedAt: external_exports.number(),
    endedAt: external_exports.number().optional(),
    final: external_exports.object({ text: external_exports.string(), provider: external_exports.string(), model: external_exports.string(), timestamp: external_exports.number(), incomplete: external_exports.boolean() }).nullable(),
    reviewError: external_exports.string().nullable(),
    stopReason: external_exports.string().nullable(),
    compression: external_exports.array(external_exports.object({ timestamp: external_exports.number(), before: external_exports.number(), after: external_exports.number(), messageIds: external_exports.array(external_exports.string()) }))
  });
  var presetSchema = external_exports.object({ id: external_exports.string(), name: external_exports.string().min(1).max(100), settings: settingsSchema });
  var preferencesSchema = external_exports.object({ settings: settingsSchema, presets: external_exports.array(presetSchema).max(100), activeId: external_exports.string().nullable() });
  function schedulingWarnings(s) {
    const n = s.participants.filter((p) => p.enabled).length, waves = s.mode === "sequential" ? n : Math.ceil(n / s.concurrency);
    const stageWorst = waves * s.requestMs + Math.max(0, n - 1) * s.globalSpacingMs + (s.mode === "sequential" ? Math.max(0, n - 1) * s.turnDelayMs : 0);
    const out = [];
    if (stageWorst > s.roundMs) out.push(`${n} participants may not all fit: up to ${Math.ceil(stageWorst / 1e3)}s before retries vs ${s.roundMs / 1e3}s round deadline. Provider limits can reduce capacity further.`);
    if (s.rounds * s.roundMs + (s.rounds - 1) * s.roundCooldownMs > s.overallMs - s.reserveReviewMs) out.push("Configured rounds can exceed the debate window; final-review time takes priority.");
    if (s.queueLimit < n) out.push("Queue limit is below participant count; parallel work is admitted in bounded batches against one frozen snapshot.");
    return out;
  }

  // src/content.ts
  var str = external_exports.string().max(12e3);
  var structuredResponse = external_exports.object({
    text: external_exports.string().min(1).max(1e5),
    claims: external_exports.array(str).max(30).default([]),
    replyTo: external_exports.array(external_exports.string()).max(20).default([]),
    objections: external_exports.array(external_exports.object({ claimId: external_exports.string(), text: str, evidence: str.default(""), verification: str.default("") }).strict()).max(30).default([]),
    revisions: external_exports.array(external_exports.object({ claimId: external_exports.string(), text: str }).strict()).max(30).default([]),
    evidence: external_exports.array(str).max(30).default([]),
    resolved: external_exports.array(external_exports.string()).max(30).default([]),
    unresolved: external_exports.array(str).max(30).default([]),
    agreement: external_exports.boolean().default(false)
  }).strict();
  function parseJSON(raw) {
    try {
      return JSON.parse(raw.replace(/^\s*```(?:json)?\s*/i, "").replace(/\s*```\s*$/, ""));
    } catch {
      return null;
    }
  }
  function readableText(m) {
    const parsed = structuredResponse.safeParse(parseJSON(m.text));
    return parsed.success ? parsed.data.text : m.text;
  }

  // src/i18n.ts
  var namespace = "model-debate";
  var en = {
    "Vision supported": "Vision supported",
    "Text-only model": "Text-only",
    "Image support unknown": "Image support unknown",
    "Add images": "Add images",
    "Clear images": "Clear all images",
    "Remove image": "Remove image",
    Image: "Image",
    "Question images": "Question images",
    "Expand image": "Expand image",
    "Original dimensions": "Original dimensions",
    "Images unavailable": "Image inputs are unavailable under the current host policy.",
    "Image type error": "No images were added. Every selected file must be an allowed PNG, JPEG, WebP, or GIF image.",
    "Image count limit": "No images were added. Select at most {count} images in total.",
    "Image size limit": "No images were added. Every image must be nonempty and at most {size}.",
    "Image total limit": "No images were added. Images must total at most {size}.",
    "Image read failed": "Could not read {name}. No images from this selection were added.",
    "Reading images": "Reading images\u2026",
    "Loading image": "Loading saved image\u2026",
    "Image preview failed": "Could not load the saved image.",
    "Image limits": "Up to {count} images \xB7 {each} each \xB7 {total} total",
    "Image selection summary": "{count} images selected \xB7 {size}",
    "Image input hint": "PNG, JPEG, WebP, GIF \xB7 Paste or drop files here.",
    "Image privacy note": "Images are sent to every enabled participant and the final reviewer, through their configured model providers, in every round. They are saved with this debate.",
    "Image model support required": "Images require advertised vision support from every enabled participant and reviewer. Change these selections or remove the images: {models}",
    "Image token budget unsupported": "Image token budgets cannot be reliably pre-accounted. Clear the token budget or remove the images before starting.",
    "Image export note": "Exports retain image references and metadata, not image pixels. Reruns reuse the saved original images.",
    "Model Debate": "Model Debate",
    Chat: "Chat",
    Debate: "Debate",
    "New debate": "New debate",
    History: "History",
    "No debates yet": "No debates yet",
    "History hint": "Your debates stay here. Your Chat conversations stay untouched.",
    "Search history": "Search history",
    Rename: "Rename",
    Delete: "Delete",
    Cancel: "Cancel",
    Save: "Save",
    Close: "Close",
    "Delete debate": "Delete debate?",
    "Delete warning": "This permanently removes this debate and its transcript. This cannot be undone.",
    "Debate title": "Debate title",
    "New title": "New title",
    "Workspace eyebrow": "A SECOND OPINION, TOGETHER",
    "Workspace title": "One question. Different perspectives.",
    "Workspace subtitle": "Let distinct models challenge ideas, surface uncertainty, and build a considered final answer.",
    "Question label": "Your question",
    "Question placeholder": "What should the models investigate or decide? Add context, constraints, and what a good answer should cover\u2026",
    "Question hint": "Enter for a new line \xB7 Ctrl/\u2318 + Enter to start",
    "Start debate": "Start debate",
    "Starting": "Starting\u2026",
    Stop: "Stop",
    "Stop debate": "Stop debate?",
    "Stop warning": "Cancel active requests and keep all published contributions. A final review will not be started automatically.",
    "Review now": "Review now",
    "Review hint": "Explicitly run only the final reviewer on the existing discussion.",
    "Run again": "Run again",
    "Run again hint": "Start a new debate with this question and the original, immutable settings.",
    "Copy final": "Copy final",
    Copied: "Copied",
    "Export": "Export",
    "Export JSON": "Export JSON",
    "Export Markdown": "Export Markdown",
    Settings: "Settings",
    "Next-run settings": "Next-run settings",
    "Immutable hint": "Changes apply to future debates only. This run keeps its original settings.",
    "Save settings": "Save defaults",
    "Settings saved": "Defaults saved",
    "Unsaved settings": "Edited settings",
    "Load run settings": "Use these settings",
    "Original settings": "Original run settings",
    "Original settings hint": "Read-only configuration captured when this debate started.",
    "Configured": "Configured",
    "Available models": "Available models",
    "Enabled participants": "Enabled participants",
    "Distinct hint": "Choose 2\u201320 distinct provider/model identities. No unavailable model is silently replaced.",
    "No models": "No permitted models are available.",
    "No models hint": "Configure models in DSH Settings \u2192 Models, then refresh. At least two distinct models are needed.",
    Refresh: "Refresh",
    "Local only": "Local-only model policy",
    "Local only hint": "The host allows local models only. Remote models are not substituted.",
    "Models policy": "Models reflect the host\u2019s configured providers and access policy.",
    Participants: "Participants",
    "Add participant": "Add participant",
    "Remove participant": "Remove participant",
    "Move up": "Move up",
    "Move down": "Move down",
    Enabled: "Enabled",
    Model: "Model",
    Provider: "Provider",
    Role: "Role",
    Instructions: "Instructions",
    "Role placeholder": "e.g. critic, verifier, subject expert",
    "Instructions placeholder": "Give this participant a particular angle or responsibility.",
    "Unavailable selection": "Unavailable selection \u2014 retained",
    "Model required": "Choose a model",
    "Max tokens": "Maximum output tokens",
    "Max tokens hint": "Optional per-request output cap (64\u201332768). Otherwise the host derives a cap from the response character limit.",
    "Automatic cap": "Automatic response-length cap",
    "Provider default": "Provider default",
    "Reasoning effort": "Reasoning effort",
    "Reasoning hint": "Only values advertised by this exact model are offered.",
    "Not advertised": "Not advertised by this model",
    "Generation options": "Generation options",
    Temperature: "Temperature",
    "Top p": "Top p",
    "Stop sequences": "Stop sequences",
    "Unsupported options": "Unavailable: these options are not supported by the DSH text request contract.",
    "Debate format": "Debate format",
    Mode: "Execution mode",
    parallel: "Parallel",
    sequential: "Sequential",
    hybrid: "Hybrid",
    "Mode hint": "Parallel uses a frozen round snapshot. Sequential sees earlier turns. Hybrid combines opening and response stages.",
    "Speaking order": "Speaking order",
    configured: "Configured order",
    rotating: "Rotate each round",
    Rounds: "Rounds",
    "Rounds hint": "Maximum discussion rounds before final review.",
    "Early stop": "Stop on agreement",
    "Early stop hint": "Permit the engine to end discussion when agreement conditions are met.",
    "Reply routing": "Reply routing",
    "Direct replies": "Allow direct replies",
    "Direct replies hint": "Participants may address specific previous contributions.",
    "Address count": "Maximum addressed peers",
    "Quoted context": "Include quoted context",
    "Quoted context hint": "Include targeted source excerpts in participant prompts.",
    "Output language": "Debate output language",
    auto: "Match the question",
    ar: "Arabic",
    en: "English",
    "Output language hint": "Controls model output, separately from the interface language.",
    "Interface language": "Interface language",
    "Final reviewer": "Final reviewer",
    "Reviewer hint": "Select any available model or a participant\u2019s exact model. The reviewer synthesizes, but does not verify claims independently.",
    "Automatic reviewer": "Automatic \u2014 host selects an enabled participant",
    "From participants": "Participants",
    "All models": "All available models",
    "Review instructions": "Review instructions",
    "Review instructions hint": "Ask for a particular structure, priorities, or uncertainty reporting in the final answer.",
    "Time budgets": "Time budgets",
    "Seconds unit": "seconds",
    "Milliseconds unit": "milliseconds",
    "Overall deadline": "Overall deadline",
    "Overall hint": "Total time including the reserved final review.",
    "Round deadline": "Round deadline",
    "Request timeout": "Request timeout",
    "Review reservation": "Reserve for review",
    "Review timeout": "Review request timeout",
    "Review reservation hint": "Discussion ends in time to protect the reserved review window.",
    "Advanced settings": "Advanced scheduling & limits",
    "Concurrency limits": "Concurrency & queue",
    "Global concurrency": "Global concurrency",
    "Concurrency hint": "Maximum simultaneous requests across providers.",
    "Provider concurrency": "Provider concurrency",
    "Provider concurrency hint": "Blank inherits the global limit. Unavailable configured provider keys are retained.",
    "Queue limit": "Queue limit",
    "Queue hint": "Bounded pending work; low limits admit work in batches.",
    "Reply limits": "Reply & context limits",
    "Participant reply limit": "Replies per participant",
    "Total reply limit": "Total replies",
    "Response characters": "Response character limit",
    "Context characters": "Context character budget",
    "Context hint": "The host compresses bounded context and records when it does so.",
    "Pacing": "Pacing",
    "Round cooldown": "Cooldown between rounds",
    "Global spacing": "Global request spacing",
    "Provider spacing": "Per-provider spacing",
    "Turn delay": "Sequential turn delay",
    "Pacing hint": "Minimum request-start spacing, not an additional timeout.",
    "Retries": "Retries & backoff",
    "Retry count": "Maximum retries",
    "Initial backoff": "Initial backoff",
    "Maximum backoff": "Maximum backoff",
    "Retries hint": "Retries consume the same stage and overall deadlines.",
    "Usage budget": "Usage budget",
    "Token budget": "Token budget",
    "Token budget hint": "Optional whole-run token cap. Estimates are used when the provider omits usage.",
    "Cost budget": "Cost budget",
    "Cost unavailable": "Unavailable: DSH exposes no reliable text-model pricing contract.",
    "Unlimited": "No limit",
    Presets: "Presets",
    "Preset hint": "Presets are editable starting points, not changes to a running debate.",
    "Choose preset": "Choose a preset",
    "Save preset": "Save as preset",
    "Preset name": "Preset name",
    "Rename preset": "Rename preset",
    "Duplicate preset": "Duplicate preset",
    "Delete preset": "Delete preset?",
    "Delete preset warning": "Remove this saved preset? Existing debates are unaffected.",
    Apply: "Apply",
    Duplicate: "Duplicate",
    "Preset saved": "Preset saved",
    "Preset applied": "Preset applied",
    "Validation errors": "Check these settings",
    "Scheduling warnings": "Scheduling notes",
    "Question required": "Enter a question to start.",
    "Two participants": "Enable at least two distinct participants.",
    "Too many participants": "At most 20 participants are allowed.",
    "Duplicate identity": "Enabled participants must use distinct provider/model identities.",
    "Unavailable model error": "An enabled participant or reviewer is unavailable. Choose an available model; no substitution was made.",
    "Unsupported reasoning": "The selected reasoning effort is not advertised for this model.",
    Loading: "Loading debate workspace\u2026",
    "Connection error": "Could not reach Model Debate",
    Retry: "Retry",
    "Request failed": "The request failed.",
    "Working": "Working\u2026",
    "Dismiss": "Dismiss notification",
    running: "Discussing",
    reviewing: "Reviewing",
    completed: "Completed",
    partial: "Partial",
    stopped: "Stopped",
    interrupted: "Interrupted",
    queued: "Queued",
    "waiting for cooldown": "Waiting for cooldown",
    responding: "Responding",
    "timed out": "Timed out",
    "rate limited": "Rate limited",
    failed: "Failed",
    cancelled: "Cancelled",
    Queued: "Queued",
    "Independent proposals": "Independent proposals",
    "Sequential discussion (later turns have additional context)": "Sequential discussion (later turns have additional context)",
    "Targeted replies (fair queue)": "Targeted replies (fair queue)",
    "Focused challenges": "Focused challenges",
    "Defenses and corrections": "Defenses and corrections",
    "Final review": "Final review",
    "Round": "Round",
    "Stage": "Stage",
    "Overall remaining": "Overall remaining",
    "Stage remaining": "Stage remaining",
    "Elapsed": "Elapsed",
    "Awaiting contributions": "Waiting for the first contribution",
    "Awaiting hint": "Responses will appear here as participants publish them.",
    "Final answer": "Final synthesis",
    "Final caveat": "A model-generated synthesis, not independently verified ground truth.",
    "Incomplete": "Incomplete",
    "Live preview": "Live preview \xB7 incomplete",
    "No final": "No final review yet",
    "No final hint": "The discussion is preserved. Use Review now to request a final synthesis.",
    "Reviewer error": "Final review failed",
    Transcript: "Discussion transcript",
    "Messages": "contributions",
    "Tasks": "Request activity",
    "No tasks": "No requests yet",
    "Attempt": "Attempt",
    "Request error": "Request error",
    "Partial output": "Partial output was not published as a completed contribution.",
    "Replies to": "Replies to",
    "Quoted source": "Quoted source",
    "Structured details": "Claims, objections & evidence",
    "Original response": "Original response",
    Claims: "Claims",
    Objections: "Objections",
    Revisions: "Revisions",
    Evidence: "Evidence",
    "Unresolved items": "Unresolved items",
    "Agreement": "Participant reports agreement",
    "Parse warning": "Response format warning",
    "Issues": "Claims under discussion",
    "Issues hint": "Resolution labels reflect participant statements, not external verification.",
    Unverified: "Unverified",
    "Participant-resolved": "Participant-resolved",
    "Raised by": "Raised by",
    Resolution: "Resolution",
    "Suggested verification": "Suggested verification",
    "No issues": "No objections have been recorded.",
    "Usage": "Usage",
    "Input tokens": "Input tokens",
    "Output tokens": "Output tokens",
    "Total tokens": "Total tokens",
    Estimated: "Estimated",
    "Usage unavailable": "Exact usage unavailable from one or more requests.",
    "Budget accounted": "Budget accounted",
    "Context compressed": "Context compressed",
    "Compression events": "compression events",
    "Diagnostics": "Host diagnostics",
    "Run details": "Run details",
    "No text": "No readable text returned.",
    "Export ready": "Download export",
    "Browser copy failed": "Clipboard unavailable. Select and copy the final text manually.",
    "Untitled debate": "Untitled debate",
    "Not set": "Not set"
  };
  var ar = {
    "Vision supported": "\u064A\u062F\u0639\u0645 \u0627\u0644\u0635\u0648\u0631",
    "Text-only model": "\u0646\u0635\u0648\u0635 \u0641\u0642\u0637",
    "Image support unknown": "\u062F\u0639\u0645 \u0627\u0644\u0635\u0648\u0631 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641",
    "Add images": "\u0625\u0636\u0627\u0641\u0629 \u0635\u0648\u0631",
    "Clear images": "\u0645\u0633\u062D \u0643\u0644 \u0627\u0644\u0635\u0648\u0631",
    "Remove image": "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0635\u0648\u0631\u0629",
    Image: "\u0635\u0648\u0631\u0629",
    "Question images": "\u0635\u0648\u0631 \u0627\u0644\u0633\u0624\u0627\u0644",
    "Expand image": "\u062A\u0648\u0633\u064A\u0639 \u0627\u0644\u0635\u0648\u0631\u0629",
    "Original dimensions": "\u0627\u0644\u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0623\u0635\u0644\u064A\u0629",
    "Images unavailable": "\u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0635\u0648\u0631 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0648\u0641\u0642 \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0645\u0636\u064A\u0641 \u0627\u0644\u062D\u0627\u0644\u064A\u0629.",
    "Image type error": "\u0644\u0645 \u062A\u064F\u0636\u0641 \u0623\u064A \u0635\u0648\u0631. \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0643\u0644 \u0645\u0644\u0641 \u0645\u062E\u062A\u0627\u0631 \u0635\u0648\u0631\u0629 PNG \u0623\u0648 JPEG \u0623\u0648 WebP \u0623\u0648 GIF \u0645\u0633\u0645\u0648\u062D\u064B\u0627 \u0628\u0647\u0627.",
    "Image count limit": "\u0644\u0645 \u062A\u064F\u0636\u0641 \u0623\u064A \u0635\u0648\u0631. \u0627\u062E\u062A\u0631 {count} \u0635\u0648\u0631 \u0643\u062D\u062F \u0623\u0642\u0635\u0649 \u0625\u062C\u0645\u0627\u0644\u064B\u0627.",
    "Image size limit": "\u0644\u0645 \u062A\u064F\u0636\u0641 \u0623\u064A \u0635\u0648\u0631. \u064A\u062C\u0628 \u0623\u0644\u0627 \u062A\u0643\u0648\u0646 \u0623\u064A \u0635\u0648\u0631\u0629 \u0641\u0627\u0631\u063A\u0629 \u0648\u0623\u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 \u062D\u062C\u0645\u0647\u0627 {size}.",
    "Image total limit": "\u0644\u0645 \u062A\u064F\u0636\u0641 \u0623\u064A \u0635\u0648\u0631. \u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 \u0645\u062C\u0645\u0648\u0639 \u0623\u062D\u062C\u0627\u0645 \u0627\u0644\u0635\u0648\u0631 {size}.",
    "Image read failed": "\u062A\u0639\u0630\u0651\u0631\u062A \u0642\u0631\u0627\u0621\u0629 {name}. \u0644\u0645 \u062A\u064F\u0636\u0641 \u0623\u064A \u0635\u0648\u0631 \u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631.",
    "Reading images": "\u062C\u0627\u0631\u064D \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0635\u0648\u0631\u2026",
    "Loading image": "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629\u2026",
    "Image preview failed": "\u062A\u0639\u0630\u0651\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629.",
    "Image limits": "\u062D\u062A\u0649 {count} \u0635\u0648\u0631 \xB7 {each} \u0644\u0644\u0635\u0648\u0631\u0629 \xB7 {total} \u0625\u062C\u0645\u0627\u0644\u064B\u0627",
    "Image selection summary": "\u0639\u062F\u062F \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629 {count} \xB7 {size}",
    "Image input hint": "PNG\u060C JPEG\u060C WebP\u060C GIF \xB7 \u0627\u0644\u0635\u0642 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0623\u0648 \u0627\u0633\u062D\u0628\u0647\u0627 \u0625\u0644\u0649 \u0647\u0646\u0627.",
    "Image privacy note": "\u062A\u064F\u0631\u0633\u0644 \u0627\u0644\u0635\u0648\u0631 \u0625\u0644\u0649 \u0643\u0644 \u0645\u0634\u0627\u0631\u0643 \u0645\u0641\u0639\u0651\u0644 \u0648\u0625\u0644\u0649 \u0627\u0644\u0645\u0631\u0627\u062C\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0639\u0628\u0631 \u0645\u0632\u0648\u0651\u062F\u064A \u0646\u0645\u0627\u0630\u062C\u0647\u0645 \u0627\u0644\u0645\u0636\u0628\u0648\u0637\u064A\u0646\u060C \u0641\u064A \u0643\u0644 \u062C\u0648\u0644\u0629. \u0648\u062A\u064F\u062D\u0641\u0638 \u0645\u0639 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629.",
    "Image model support required": "\u062A\u062A\u0637\u0644\u0628 \u0627\u0644\u0635\u0648\u0631 \u062F\u0639\u0645\u064B\u0627 \u0645\u0639\u0644\u0646\u064B\u0627 \u0644\u0647\u0627 \u0645\u0646 \u0643\u0644 \u0645\u0634\u0627\u0631\u0643 \u0645\u0641\u0639\u0651\u0644 \u0648\u0627\u0644\u0645\u0631\u0627\u062C\u0639. \u063A\u064A\u0651\u0631 \u0647\u0630\u0647 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631\u0627\u062A \u0623\u0648 \u0623\u0632\u0644 \u0627\u0644\u0635\u0648\u0631: {models}",
    "Image token budget unsupported": "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u062D\u062A\u0633\u0627\u0628 \u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0631\u0645\u0648\u0632 \u0627\u0644\u0635\u0648\u0631 \u0645\u0633\u0628\u0642\u064B\u0627 \u0628\u0645\u0648\u062B\u0648\u0642\u064A\u0629. \u0627\u0645\u0633\u062D \u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0627\u0644\u0631\u0645\u0648\u0632 \u0623\u0648 \u0623\u0632\u0644 \u0627\u0644\u0635\u0648\u0631 \u0642\u0628\u0644 \u0627\u0644\u0628\u062F\u0621.",
    "Image export note": "\u064A\u062D\u062A\u0641\u0638 \u0627\u0644\u062A\u0635\u062F\u064A\u0631 \u0628\u0645\u0631\u0627\u062C\u0639 \u0627\u0644\u0635\u0648\u0631 \u0648\u0628\u064A\u0627\u0646\u0627\u062A\u0647\u0627 \u0627\u0644\u0648\u0635\u0641\u064A\u0629\u060C \u0648\u0644\u064A\u0633 \u0628\u0643\u0633\u0644\u0627\u062A \u0627\u0644\u0635\u0648\u0631. \u062A\u0633\u062A\u062E\u062F\u0645 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0623\u0635\u0644\u064A\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629.",
    "Model Debate": "\u0645\u0646\u0627\u0638\u0631\u0629 \u0627\u0644\u0646\u0645\u0627\u0630\u062C",
    Chat: "\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629",
    Debate: "\u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629",
    "New debate": "\u0645\u0646\u0627\u0638\u0631\u0629 \u062C\u062F\u064A\u062F\u0629",
    History: "\u0627\u0644\u0633\u062C\u0644",
    "No debates yet": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0646\u0627\u0638\u0631\u0627\u062A \u0628\u0639\u062F",
    "History hint": "\u062A\u064F\u062D\u0641\u0638 \u0645\u0646\u0627\u0638\u0631\u0627\u062A\u0643 \u0647\u0646\u0627\u060C \u0648\u062A\u0628\u0642\u0649 \u0645\u062D\u0627\u062F\u062B\u0627\u062A\u0643 \u0627\u0644\u0639\u0627\u062F\u064A\u0629 \u062F\u0648\u0646 \u062A\u063A\u064A\u064A\u0631.",
    "Search history": "\u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0633\u062C\u0644",
    Rename: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0645\u064A\u0629",
    Delete: "\u062D\u0630\u0641",
    Cancel: "\u0625\u0644\u063A\u0627\u0621",
    Save: "\u062D\u0641\u0638",
    Close: "\u0625\u063A\u0644\u0627\u0642",
    "Delete debate": "\u062D\u0630\u0641 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629\u061F",
    "Delete warning": "\u0633\u062A\u064F\u062D\u0630\u0641 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629 \u0648\u0633\u062C\u0644\u0647\u0627 \u0646\u0647\u0627\u0626\u064A\u064B\u0627\u060C \u0648\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0631\u0627\u062C\u0639.",
    "Debate title": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629",
    "New title": "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062C\u062F\u064A\u062F",
    "Workspace eyebrow": "\u0631\u0623\u064A \u0622\u062E\u0631\u060C \u0646\u0641\u0643\u0651\u0631 \u0641\u064A\u0647 \u0645\u0639\u064B\u0627",
    "Workspace title": "\u0633\u0624\u0627\u0644 \u0648\u0627\u062D\u062F. \u0648\u062C\u0647\u0627\u062A \u0646\u0638\u0631 \u0645\u062A\u0639\u062F\u062F\u0629.",
    "Workspace subtitle": "\u062F\u0639 \u0646\u0645\u0627\u0630\u062C \u0645\u062E\u062A\u0644\u0641\u0629 \u062A\u062E\u062A\u0628\u0631 \u0627\u0644\u0623\u0641\u0643\u0627\u0631\u060C \u0648\u062A\u0643\u0634\u0641 \u0645\u0648\u0627\u0637\u0646 \u0639\u062F\u0645 \u0627\u0644\u064A\u0642\u064A\u0646\u060C \u0648\u062A\u0628\u0646\u064A \u0625\u062C\u0627\u0628\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 \u0645\u062A\u0623\u0646\u064A\u0629.",
    "Question label": "\u0633\u0624\u0627\u0644\u0643",
    "Question placeholder": "\u0645\u0627 \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F \u0645\u0646 \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0628\u062D\u062B\u0647 \u0623\u0648 \u062D\u0633\u0645\u0647\u061F \u0623\u0636\u0641 \u0627\u0644\u0633\u064A\u0627\u0642 \u0648\u0627\u0644\u0642\u064A\u0648\u062F \u0648\u0645\u0627 \u064A\u0646\u0628\u063A\u064A \u0623\u0646 \u062A\u062A\u0646\u0627\u0648\u0644\u0647 \u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0627\u0644\u062C\u064A\u062F\u0629\u2026",
    "Question hint": "Enter \u0644\u0633\u0637\u0631 \u062C\u062F\u064A\u062F \xB7 Ctrl/\u2318 + Enter \u0644\u0644\u0628\u062F\u0621",
    "Start debate": "\u0628\u062F\u0621 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629",
    Starting: "\u062C\u0627\u0631\u064D \u0627\u0644\u0628\u062F\u0621\u2026",
    Stop: "\u0625\u064A\u0642\u0627\u0641",
    "Stop debate": "\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629\u061F",
    "Stop warning": "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062C\u0627\u0631\u064A\u0629 \u0645\u0639 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0643\u0644 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0629. \u0644\u0646 \u062A\u0628\u062F\u0623 \u0645\u0631\u0627\u062C\u0639\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 \u062A\u0644\u0642\u0627\u0626\u064A\u064B\u0627.",
    "Review now": "\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0622\u0646",
    "Review hint": "\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u0631\u0627\u062C\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0641\u0642\u0637 \u0639\u0644\u0649 \u0627\u0644\u0646\u0642\u0627\u0634 \u0627\u0644\u0645\u0648\u062C\u0648\u062F \u0628\u0637\u0644\u0628 \u0635\u0631\u064A\u062D.",
    "Run again": "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644",
    "Run again hint": "\u0628\u062F\u0621 \u0645\u0646\u0627\u0638\u0631\u0629 \u062C\u062F\u064A\u062F\u0629 \u0628\u0627\u0644\u0633\u0624\u0627\u0644 \u0646\u0641\u0633\u0647 \u0648\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0623\u0635\u0644\u064A\u0629 \u0627\u0644\u062B\u0627\u0628\u062A\u0629.",
    "Copy final": "\u0646\u0633\u062E \u0627\u0644\u0625\u062C\u0627\u0628\u0629",
    Copied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E",
    "Export": "\u062A\u0635\u062F\u064A\u0631",
    "Export JSON": "\u062A\u0635\u062F\u064A\u0631 JSON",
    "Export Markdown": "\u062A\u0635\u062F\u064A\u0631 Markdown",
    Settings: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
    "Next-run settings": "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062A\u0627\u0644\u064A",
    "Immutable hint": "\u062A\u0633\u0631\u064A \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0627\u062A \u0627\u0644\u0642\u0627\u062F\u0645\u0629 \u0641\u0642\u0637. \u064A\u062D\u062A\u0641\u0638 \u0647\u0630\u0627 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0628\u0625\u0639\u062F\u0627\u062F\u0627\u062A\u0647 \u0627\u0644\u0623\u0635\u0644\u064A\u0629.",
    "Save settings": "\u062D\u0641\u0638 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0627\u062A",
    "Settings saved": "\u062D\u064F\u0641\u0638\u062A \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629",
    "Unsaved settings": "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0645\u0639\u062F\u0651\u0644\u0629",
    "Load run settings": "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0647\u0630\u0647 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
    "Original settings": "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0623\u0635\u0644\u064A\u0629",
    "Original settings hint": "\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0644\u0644\u0642\u0631\u0627\u0621\u0629 \u0641\u0642\u0637 \u062D\u064F\u0641\u0638\u062A \u0639\u0646\u062F \u0628\u062F\u0621 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629.",
    Configured: "\u0627\u0644\u0645\u0639\u062F\u0651\u0629",
    "Available models": "\u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0627\u0644\u0645\u062A\u0627\u062D\u0629",
    "Enabled participants": "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0648\u0646 \u0627\u0644\u0645\u0641\u0639\u0651\u0644\u0648\u0646",
    "Distinct hint": "\u0627\u062E\u062A\u0631 \u0645\u0646 2 \u0625\u0644\u0649 20 \u0647\u0648\u064A\u0629 \u0645\u062E\u062A\u0644\u0641\u0629 \u0644\u0644\u0645\u0632\u0648\u0651\u062F \u0648\u0627\u0644\u0646\u0645\u0648\u0630\u062C. \u0644\u0627 \u064A\u064F\u0633\u062A\u0628\u062F\u0644 \u0623\u064A \u0646\u0645\u0648\u0630\u062C \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0628\u0635\u0645\u062A.",
    "No models": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u0645\u0627\u0630\u062C \u0645\u062A\u0627\u062D\u0629 \u0648\u0645\u0633\u0645\u0648\u062D \u0628\u0647\u0627.",
    "No models hint": "\u0623\u0636\u0641 \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0641\u064A \u0625\u0639\u062F\u0627\u062F\u0627\u062A DSH \u2190 \u0627\u0644\u0646\u0645\u0627\u0630\u062C\u060C \u062B\u0645 \u062D\u062F\u0651\u062B \u0627\u0644\u0642\u0627\u0626\u0645\u0629. \u064A\u0644\u0632\u0645 \u0646\u0645\u0648\u0630\u062C\u0627\u0646 \u0645\u062E\u062A\u0644\u0641\u0627\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.",
    Refresh: "\u062A\u062D\u062F\u064A\u062B",
    "Local only": "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0627\u0644\u0645\u062D\u0644\u064A\u0629 \u0641\u0642\u0637",
    "Local only hint": "\u064A\u0633\u0645\u062D \u0627\u0644\u0645\u0636\u064A\u0641 \u0628\u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0627\u0644\u0645\u062D\u0644\u064A\u0629 \u0641\u0642\u0637\u060C \u0648\u0644\u0627 \u064A\u0633\u062A\u0628\u062F\u0644 \u0628\u0647\u0627 \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0627\u0644\u0628\u0639\u064A\u062F\u0629.",
    "Models policy": "\u062A\u0639\u0643\u0633 \u0647\u0630\u0647 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0632\u0648\u0651\u062F\u064A\u0646 \u0648\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0641\u064A \u0627\u0644\u0645\u0636\u064A\u0641.",
    Participants: "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0648\u0646",
    "Add participant": "\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0627\u0631\u0643",
    "Remove participant": "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u0627\u0631\u0643",
    "Move up": "\u062A\u062D\u0631\u064A\u0643 \u0644\u0623\u0639\u0644\u0649",
    "Move down": "\u062A\u062D\u0631\u064A\u0643 \u0644\u0623\u0633\u0641\u0644",
    Enabled: "\u0645\u0641\u0639\u0651\u0644",
    Model: "\u0627\u0644\u0646\u0645\u0648\u0630\u062C",
    Provider: "\u0627\u0644\u0645\u0632\u0648\u0651\u062F",
    Role: "\u0627\u0644\u062F\u0648\u0631",
    Instructions: "\u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A",
    "Role placeholder": "\u0645\u062B\u0644\u064B\u0627: \u0646\u0627\u0642\u062F\u060C \u0645\u062F\u0642\u0651\u0642\u060C \u062E\u0628\u064A\u0631 \u0645\u062A\u062E\u0635\u0635",
    "Instructions placeholder": "\u062D\u062F\u0651\u062F \u0632\u0627\u0648\u064A\u0629 \u0623\u0648 \u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0627\u0631\u0643.",
    "Unavailable selection": "\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u2014 \u062A\u0645 \u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0647",
    "Model required": "\u0627\u062E\u062A\u0631 \u0646\u0645\u0648\u0630\u062C\u064B\u0627",
    "Max tokens": "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0631\u0645\u0648\u0632 \u0627\u0644\u0625\u062E\u0631\u0627\u062C",
    "Max tokens hint": "\u062D\u062F \u0627\u062E\u062A\u064A\u0627\u0631\u064A \u0644\u0643\u0644 \u0637\u0644\u0628 (64\u201332768). \u0648\u0625\u0644\u0627 \u064A\u0633\u062A\u0646\u062A\u062C \u0627\u0644\u0645\u0636\u064A\u0641 \u0627\u0644\u062D\u062F \u0645\u0646 \u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0644\u0623\u062D\u0631\u0641 \u0627\u0644\u0625\u062C\u0627\u0628\u0629.",
    "Automatic cap": "\u062D\u062F \u062A\u0644\u0642\u0627\u0626\u064A \u062D\u0633\u0628 \u0637\u0648\u0644 \u0627\u0644\u0625\u062C\u0627\u0628\u0629",
    "Provider default": "\u0627\u0641\u062A\u0631\u0627\u0636\u064A \u0627\u0644\u0645\u0632\u0648\u0651\u062F",
    "Reasoning effort": "\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0627\u0633\u062A\u062F\u0644\u0627\u0644",
    "Reasoning hint": "\u062A\u064F\u0639\u0631\u0636 \u0641\u0642\u0637 \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u0639\u0644\u0646\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0628\u0639\u064A\u0646\u0647.",
    "Not advertised": "\u063A\u064A\u0631 \u0645\u0639\u0644\u0646 \u0644\u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0648\u0630\u062C",
    "Generation options": "\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0648\u0644\u064A\u062F",
    Temperature: "\u062F\u0631\u062C\u0629 \u0627\u0644\u062D\u0631\u0627\u0631\u0629",
    "Top p": "Top p",
    "Stop sequences": "\u062A\u0633\u0644\u0633\u0644\u0627\u062A \u0627\u0644\u0625\u064A\u0642\u0627\u0641",
    "Unsupported options": "\u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629: \u0644\u0627 \u064A\u062F\u0639\u0645 \u0639\u0642\u062F \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0646\u0635 \u0641\u064A DSH \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A.",
    "Debate format": "\u0646\u0645\u0637 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629",
    Mode: "\u0646\u0645\u0637 \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
    parallel: "\u0645\u062A\u0648\u0627\u0632\u064D",
    sequential: "\u0645\u062A\u062A\u0627\u0628\u0639",
    hybrid: "\u0647\u062C\u064A\u0646",
    "Mode hint": "\u064A\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062A\u0648\u0627\u0632\u064A \u0644\u0642\u0637\u0629 \u062B\u0627\u0628\u062A\u0629 \u0644\u0644\u062C\u0648\u0644\u0629\u060C \u0648\u064A\u0631\u0649 \u0627\u0644\u0645\u062A\u062A\u0627\u0628\u0639 \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0633\u0627\u0628\u0642\u0629\u060C \u0648\u064A\u062C\u0645\u0639 \u0627\u0644\u0647\u062C\u064A\u0646 \u0645\u0631\u0627\u062D\u0644 \u0627\u0644\u0627\u0641\u062A\u062A\u0627\u062D \u0648\u0627\u0644\u0631\u062F.",
    "Speaking order": "\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u062D\u062F\u064A\u062B",
    configured: "\u0627\u0644\u062A\u0631\u062A\u064A\u0628 \u0627\u0644\u0645\u062D\u062F\u0651\u062F",
    rotating: "\u062A\u062F\u0648\u064A\u0631 \u0643\u0644 \u062C\u0648\u0644\u0629",
    Rounds: "\u0627\u0644\u062C\u0648\u0644\u0627\u062A",
    "Rounds hint": "\u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0644\u062C\u0648\u0644\u0627\u062A \u0627\u0644\u0646\u0642\u0627\u0634 \u0642\u0628\u0644 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629.",
    "Early stop": "\u0627\u0644\u062A\u0648\u0642\u0641 \u0639\u0646\u062F \u0627\u0644\u0627\u062A\u0641\u0627\u0642",
    "Early stop hint": "\u0627\u0644\u0633\u0645\u0627\u062D \u0628\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0646\u0642\u0627\u0634 \u0639\u0646\u062F \u062A\u062D\u0642\u0642 \u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u062A\u0641\u0627\u0642.",
    "Reply routing": "\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0631\u062F\u0648\u062F",
    "Direct replies": "\u0627\u0644\u0633\u0645\u0627\u062D \u0628\u0627\u0644\u0631\u062F\u0648\u062F \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629",
    "Direct replies hint": "\u064A\u0645\u0643\u0646 \u0644\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u062A\u0648\u062C\u064A\u0647 \u0631\u062F\u0648\u062F\u0647\u0645 \u0644\u0645\u0633\u0627\u0647\u0645\u0627\u062A \u0633\u0627\u0628\u0642\u0629 \u0628\u0639\u064A\u0646\u0647\u0627.",
    "Address count": "\u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0644\u0644\u0645\u062E\u0627\u0637\u064E\u0628\u064A\u0646",
    "Quoted context": "\u062A\u0636\u0645\u064A\u0646 \u0627\u0644\u0633\u064A\u0627\u0642 \u0627\u0644\u0645\u0642\u062A\u0628\u0633",
    "Quoted context hint": "\u062A\u0636\u0645\u064A\u0646 \u0645\u0642\u062A\u0637\u0641\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u0635\u0627\u062F\u0631 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629 \u0641\u064A \u0645\u0637\u0627\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646.",
    "Output language": "\u0644\u063A\u0629 \u0625\u062C\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629",
    auto: "\u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u063A\u0629 \u0627\u0644\u0633\u0624\u0627\u0644",
    ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    en: "\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629",
    "Output language hint": "\u062A\u062A\u062D\u0643\u0645 \u0628\u0644\u063A\u0629 \u0627\u0644\u0646\u0645\u0648\u0630\u062C\u060C \u0628\u0635\u0648\u0631\u0629 \u0645\u0633\u062A\u0642\u0644\u0629 \u0639\u0646 \u0644\u063A\u0629 \u0627\u0644\u0648\u0627\u062C\u0647\u0629.",
    "Interface language": "\u0644\u063A\u0629 \u0627\u0644\u0648\u0627\u062C\u0647\u0629",
    "Final reviewer": "\u0627\u0644\u0645\u0631\u0627\u062C\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064A",
    "Reviewer hint": "\u0627\u062E\u062A\u0631 \u0623\u064A \u0646\u0645\u0648\u0630\u062C \u0645\u062A\u0627\u062D \u0623\u0648 \u0646\u0645\u0648\u0630\u062C \u0623\u062D\u062F \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646. \u064A\u062C\u0645\u0639 \u0627\u0644\u0645\u0631\u0627\u062C\u0639 \u0627\u0644\u0646\u062A\u0627\u0626\u062C\u060C \u0644\u0643\u0646\u0647 \u0644\u0627 \u064A\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0627\u062F\u0639\u0627\u0621\u0627\u062A \u0628\u0634\u0643\u0644 \u0645\u0633\u062A\u0642\u0644.",
    "Automatic reviewer": "\u062A\u0644\u0642\u0627\u0626\u064A \u2014 \u064A\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0636\u064A\u0641 \u0645\u0634\u0627\u0631\u0643\u064B\u0627 \u0645\u0641\u0639\u0651\u0644\u064B\u0627",
    "From participants": "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0648\u0646",
    "All models": "\u0643\u0644 \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0627\u0644\u0645\u062A\u0627\u062D\u0629",
    "Review instructions": "\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
    "Review instructions hint": "\u062D\u062F\u0651\u062F \u0627\u0644\u0628\u0646\u064A\u0629 \u0623\u0648 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0627\u062A \u0623\u0648 \u0643\u064A\u0641\u064A\u0629 \u0639\u0631\u0636 \u0639\u062F\u0645 \u0627\u0644\u064A\u0642\u064A\u0646 \u0641\u064A \u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629.",
    "Time budgets": "\u0645\u064A\u0632\u0627\u0646\u064A\u0627\u062A \u0627\u0644\u0648\u0642\u062A",
    "Seconds unit": "\u062B\u0627\u0646\u064A\u0629",
    "Milliseconds unit": "\u0645\u0644\u0644\u064A \u062B\u0627\u0646\u064A\u0629",
    "Overall deadline": "\u0627\u0644\u0645\u0647\u0644\u0629 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629",
    "Overall hint": "\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0643\u0644\u064A \u0628\u0645\u0627 \u0641\u064A\u0647 \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062D\u062C\u0648\u0632 \u0644\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629.",
    "Round deadline": "\u0645\u0647\u0644\u0629 \u0627\u0644\u062C\u0648\u0644\u0629",
    "Request timeout": "\u0645\u0647\u0644\u0629 \u0627\u0644\u0637\u0644\u0628",
    "Review reservation": "\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062D\u062C\u0648\u0632 \u0644\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
    "Review timeout": "\u0645\u0647\u0644\u0629 \u0637\u0644\u0628 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
    "Review reservation hint": "\u064A\u0646\u062A\u0647\u064A \u0627\u0644\u0646\u0642\u0627\u0634 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0644\u062D\u0645\u0627\u064A\u0629 \u0641\u062A\u0631\u0629 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u062D\u062C\u0648\u0632\u0629.",
    "Advanced settings": "\u0627\u0644\u062C\u062F\u0648\u0644\u0629 \u0648\u0627\u0644\u062D\u062F\u0648\u062F \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629",
    "Concurrency limits": "\u0627\u0644\u062A\u0632\u0627\u0645\u0646 \u0648\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
    "Global concurrency": "\u0627\u0644\u062A\u0632\u0627\u0645\u0646 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A",
    "Concurrency hint": "\u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0644\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u062A\u0632\u0627\u0645\u0646\u0629 \u0639\u0628\u0631 \u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0632\u0648\u0651\u062F\u064A\u0646.",
    "Provider concurrency": "\u062A\u0632\u0627\u0645\u0646 \u0627\u0644\u0645\u0632\u0648\u0651\u062F",
    "Provider concurrency hint": "\u0627\u062A\u0631\u0643\u0647 \u0641\u0627\u0631\u063A\u064B\u0627 \u0644\u0648\u0631\u0627\u062B\u0629 \u0627\u0644\u062D\u062F \u0627\u0644\u0639\u0627\u0645. \u062A\u064F\u062D\u0641\u0638 \u0645\u0641\u0627\u062A\u064A\u062D \u0627\u0644\u0645\u0632\u0648\u0651\u062F\u064A\u0646 \u063A\u064A\u0631 \u0627\u0644\u0645\u062A\u0627\u062D\u064A\u0646.",
    "Queue limit": "\u062D\u062F \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
    "Queue hint": "\u0639\u062F\u062F \u0645\u062D\u062F\u0648\u062F \u0644\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0645\u0639\u0644\u0651\u0642\u0629\u061B \u062A\u0633\u0645\u062D \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0635\u063A\u064A\u0631\u0629 \u0628\u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u062F\u0641\u0639\u0627\u062A.",
    "Reply limits": "\u062D\u062F\u0648\u062F \u0627\u0644\u0631\u062F\u0648\u062F \u0648\u0627\u0644\u0633\u064A\u0627\u0642",
    "Participant reply limit": "\u0627\u0644\u0631\u062F\u0648\u062F \u0644\u0643\u0644 \u0645\u0634\u0627\u0631\u0643",
    "Total reply limit": "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0631\u062F\u0648\u062F",
    "Response characters": "\u062D\u062F \u0623\u062D\u0631\u0641 \u0627\u0644\u0625\u062C\u0627\u0628\u0629",
    "Context characters": "\u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0623\u062D\u0631\u0641 \u0627\u0644\u0633\u064A\u0627\u0642",
    "Context hint": "\u064A\u0636\u063A\u0637 \u0627\u0644\u0645\u0636\u064A\u0641 \u0627\u0644\u0633\u064A\u0627\u0642 \u0627\u0644\u0645\u062D\u062F\u0648\u062F \u0648\u064A\u0633\u062C\u0651\u0644 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0636\u063A\u0637.",
    Pacing: "\u0648\u062A\u064A\u0631\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
    "Round cooldown": "\u0627\u0644\u0641\u0627\u0635\u0644 \u0628\u064A\u0646 \u0627\u0644\u062C\u0648\u0644\u0627\u062A",
    "Global spacing": "\u0627\u0644\u0641\u0627\u0635\u0644 \u0627\u0644\u0639\u0627\u0645 \u0628\u064A\u0646 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
    "Provider spacing": "\u0627\u0644\u0641\u0627\u0635\u0644 \u0644\u0643\u0644 \u0645\u0632\u0648\u0651\u062F",
    "Turn delay": "\u0627\u0644\u0641\u0627\u0635\u0644 \u0628\u064A\u0646 \u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0645\u062A\u062A\u0627\u0628\u0639\u0629",
    "Pacing hint": "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0641\u0627\u0635\u0644 \u0628\u064A\u0646 \u0628\u062F\u0627\u064A\u0627\u062A \u0627\u0644\u0637\u0644\u0628\u0627\u062A\u060C \u0648\u0644\u064A\u0633 \u0645\u0647\u0644\u0629 \u0625\u0636\u0627\u0641\u064A\u0629.",
    Retries: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0648\u0627\u0644\u062A\u0631\u0627\u062C\u0639",
    "Retry count": "\u0623\u0642\u0635\u0649 \u0639\u062F\u062F \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629",
    "Initial backoff": "\u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0627\u0644\u0623\u0648\u0644\u064A",
    "Maximum backoff": "\u0623\u0642\u0635\u0649 \u062A\u0631\u0627\u062C\u0639",
    "Retries hint": "\u062A\u0633\u062A\u0647\u0644\u0643 \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0646 \u0645\u0647\u0644\u062A\u064A \u0627\u0644\u0645\u0631\u062D\u0644\u0629 \u0648\u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0646\u0641\u0633\u0647\u0645\u0627.",
    "Usage budget": "\u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645",
    "Token budget": "\u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0627\u0644\u0631\u0645\u0648\u0632",
    "Token budget hint": "\u062D\u062F \u0627\u062E\u062A\u064A\u0627\u0631\u064A \u0644\u0631\u0645\u0648\u0632 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0643\u0644\u0647. \u062A\u064F\u0633\u062A\u062E\u062F\u0645 \u062A\u0642\u062F\u064A\u0631\u0627\u062A \u0639\u0646\u062F\u0645\u0627 \u0644\u0627 \u064A\u0642\u062F\u0651\u0645 \u0627\u0644\u0645\u0632\u0648\u0651\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645.",
    "Cost budget": "\u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0627\u0644\u062A\u0643\u0644\u0641\u0629",
    "Cost unavailable": "\u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629: \u0644\u0627 \u064A\u0648\u0641\u0651\u0631 DSH \u0639\u0642\u062F\u064B\u0627 \u0645\u0648\u062B\u0648\u0642\u064B\u0627 \u0644\u062A\u0633\u0639\u064A\u0631 \u0646\u0645\u0627\u0630\u062C \u0627\u0644\u0646\u0635.",
    Unlimited: "\u0628\u0644\u0627 \u062D\u062F",
    Presets: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0633\u0628\u0642\u0629",
    "Preset hint": "\u0646\u0642\u0627\u0637 \u0628\u062F\u0627\u064A\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0639\u062F\u064A\u0644\u060C \u0648\u0644\u064A\u0633\u062A \u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0639\u0644\u0649 \u0645\u0646\u0627\u0638\u0631\u0629 \u062C\u0627\u0631\u064A\u0629.",
    "Choose preset": "\u0627\u062E\u062A\u0631 \u0625\u0639\u062F\u0627\u062F\u064B\u0627 \u0645\u0633\u0628\u0642\u064B\u0627",
    "Save preset": "\u062D\u0641\u0638 \u0643\u0625\u0639\u062F\u0627\u062F \u0645\u0633\u0628\u0642",
    "Preset name": "\u0627\u0633\u0645 \u0627\u0644\u0625\u0639\u062F\u0627\u062F",
    "Rename preset": "\u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0645\u064A\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F",
    "Duplicate preset": "\u0646\u0633\u062E \u0627\u0644\u0625\u0639\u062F\u0627\u062F",
    "Delete preset": "\u062D\u0630\u0641 \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u0633\u0628\u0642\u061F",
    "Delete preset warning": "\u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u061F \u0644\u0646 \u062A\u062A\u0623\u062B\u0631 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0627\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629.",
    Apply: "\u062A\u0637\u0628\u064A\u0642",
    Duplicate: "\u0646\u0633\u062E",
    "Preset saved": "\u062D\u064F\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u0633\u0628\u0642",
    "Preset applied": "\u0637\u064F\u0628\u0651\u0642 \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u0633\u0628\u0642",
    "Validation errors": "\u0631\u0627\u062C\u0639 \u0647\u0630\u0647 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
    "Scheduling warnings": "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u062C\u062F\u0648\u0644\u0629",
    "Question required": "\u0623\u062F\u062E\u0644 \u0633\u0624\u0627\u0644\u064B\u0627 \u0644\u0644\u0628\u062F\u0621.",
    "Two participants": "\u0641\u0639\u0651\u0644 \u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0645\u062E\u062A\u0644\u0641\u064A\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.",
    "Too many participants": "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0647\u0648 20 \u0645\u0634\u0627\u0631\u0643\u064B\u0627.",
    "Duplicate identity": "\u064A\u062C\u0628 \u0623\u0646 \u062A\u062E\u062A\u0644\u0641 \u0647\u0648\u064A\u0627\u062A \u0627\u0644\u0645\u0632\u0648\u0651\u062F \u0648\u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0644\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0627\u0644\u0645\u0641\u0639\u0651\u0644\u064A\u0646.",
    "Unavailable model error": "\u0623\u062D\u062F \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0627\u0644\u0645\u0641\u0639\u0651\u0644\u064A\u0646 \u0623\u0648 \u0627\u0644\u0645\u0631\u0627\u062C\u0639 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D. \u0627\u062E\u062A\u0631 \u0646\u0645\u0648\u0630\u062C\u064B\u0627 \u0645\u062A\u0627\u062D\u064B\u0627\u061B \u0644\u0645 \u064A\u062A\u0645 \u0623\u064A \u0627\u0633\u062A\u0628\u062F\u0627\u0644.",
    "Unsupported reasoning": "\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0627\u0633\u062A\u062F\u0644\u0627\u0644 \u0627\u0644\u0645\u062D\u062F\u0651\u062F \u063A\u064A\u0631 \u0645\u0639\u0644\u0646 \u0644\u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0648\u0630\u062C.",
    Loading: "\u062C\u0627\u0631\u064D \u062A\u062D\u0645\u064A\u0644 \u0645\u0633\u0627\u062D\u0629 \u0627\u0644\u0645\u0646\u0627\u0638\u0631\u0629\u2026",
    "Connection error": "\u062A\u0639\u0630\u0651\u0631 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0645\u0646\u0627\u0638\u0631\u0629 \u0627\u0644\u0646\u0645\u0627\u0630\u062C",
    Retry: "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629",
    "Request failed": "\u0641\u0634\u0644 \u0627\u0644\u0637\u0644\u0628.",
    Working: "\u062C\u0627\u0631\u064D \u0627\u0644\u0639\u0645\u0644\u2026",
    Dismiss: "\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0625\u0634\u0639\u0627\u0631",
    running: "\u062C\u0627\u0631\u064D \u0627\u0644\u0646\u0642\u0627\u0634",
    reviewing: "\u062C\u0627\u0631\u064D \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
    completed: "\u0645\u0643\u062A\u0645\u0644\u0629",
    partial: "\u062C\u0632\u0626\u064A\u0629",
    stopped: "\u0645\u062A\u0648\u0642\u0641\u0629",
    interrupted: "\u0645\u0646\u0642\u0637\u0639\u0629",
    queued: "\u0641\u064A \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
    "waiting for cooldown": "\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0641\u0627\u0635\u0644 \u0627\u0644\u0632\u0645\u0646\u064A",
    responding: "\u062C\u0627\u0631\u064D \u0627\u0644\u0631\u062F",
    "timed out": "\u0627\u0646\u062A\u0647\u062A \u0627\u0644\u0645\u0647\u0644\u0629",
    "rate limited": "\u062A\u062C\u0627\u0648\u0632 \u062D\u062F \u0627\u0644\u0645\u0639\u062F\u0651\u0644",
    failed: "\u0641\u0634\u0644",
    cancelled: "\u0645\u0644\u063A\u0627\u0629",
    Queued: "\u0641\u064A \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
    "Independent proposals": "\u0645\u0642\u062A\u0631\u062D\u0627\u062A \u0645\u0633\u062A\u0642\u0644\u0629",
    "Sequential discussion (later turns have additional context)": "\u0646\u0642\u0627\u0634 \u0645\u062A\u062A\u0627\u0628\u0639 (\u0627\u0644\u0623\u062F\u0648\u0627\u0631 \u0627\u0644\u0644\u0627\u062D\u0642\u0629 \u062A\u0631\u0649 \u0633\u064A\u0627\u0642\u064B\u0627 \u0625\u0636\u0627\u0641\u064A\u064B\u0627)",
    "Targeted replies (fair queue)": "\u0631\u062F\u0648\u062F \u0645\u0648\u062C\u0651\u0647\u0629 (\u0642\u0627\u0626\u0645\u0629 \u0627\u0646\u062A\u0638\u0627\u0631 \u0639\u0627\u062F\u0644\u0629)",
    "Focused challenges": "\u0627\u0639\u062A\u0631\u0627\u0636\u0627\u062A \u0645\u0631\u0643\u0651\u0632\u0629",
    "Defenses and corrections": "\u0627\u0644\u062F\u0641\u0627\u0639 \u0648\u0627\u0644\u062A\u0635\u062D\u064A\u062D",
    "Final review": "\u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629",
    Round: "\u0627\u0644\u062C\u0648\u0644\u0629",
    Stage: "\u0627\u0644\u0645\u0631\u062D\u0644\u0629",
    "Overall remaining": "\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062A\u0628\u0642\u064A",
    "Stage remaining": "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0644\u0645\u0631\u062D\u0644\u0629",
    Elapsed: "\u0627\u0644\u0645\u0646\u0642\u0636\u064A",
    "Awaiting contributions": "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u0627\u0644\u0623\u0648\u0644\u0649",
    "Awaiting hint": "\u0633\u062A\u0638\u0647\u0631 \u0627\u0644\u0625\u062C\u0627\u0628\u0627\u062A \u0647\u0646\u0627 \u0639\u0646\u062F \u0646\u0634\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646 \u0644\u0647\u0627.",
    "Final answer": "\u0627\u0644\u062E\u0644\u0627\u0635\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629",
    "Final caveat": "\u062E\u0644\u0627\u0635\u0629 \u0645\u0648\u0644\u0651\u062F\u0629 \u0628\u0627\u0644\u0646\u0645\u0648\u0630\u062C\u060C \u0648\u0644\u064A\u0633\u062A \u062D\u0642\u064A\u0642\u0629 \u0645\u062A\u062D\u0642\u0642\u064B\u0627 \u0645\u0646\u0647\u0627 \u0628\u0635\u0648\u0631\u0629 \u0645\u0633\u062A\u0642\u0644\u0629.",
    Incomplete: "\u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644\u0629",
    "Live preview": "\u0645\u0639\u0627\u064A\u0646\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \xB7 \u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644\u0629",
    "No final": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0631\u0627\u062C\u0639\u0629 \u0646\u0647\u0627\u0626\u064A\u0629 \u0628\u0639\u062F",
    "No final hint": "\u0627\u0644\u0646\u0642\u0627\u0634 \u0645\u062D\u0641\u0648\u0638. \u0627\u0633\u062A\u062E\u062F\u0645 \xAB\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0622\u0646\xBB \u0644\u0637\u0644\u0628 \u062E\u0644\u0627\u0635\u0629 \u0646\u0647\u0627\u0626\u064A\u0629.",
    "Reviewer error": "\u0641\u0634\u0644\u062A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629",
    Transcript: "\u0633\u062C\u0644 \u0627\u0644\u0646\u0642\u0627\u0634",
    Messages: "\u0645\u0633\u0627\u0647\u0645\u0627\u062A",
    Tasks: "\u0646\u0634\u0627\u0637 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
    "No tasks": "\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A \u0628\u0639\u062F",
    Attempt: "\u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629",
    "Request error": "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0637\u0644\u0628",
    "Partial output": "\u0644\u0645 \u064A\u064F\u0646\u0634\u0631 \u0627\u0644\u0625\u062E\u0631\u0627\u062C \u0627\u0644\u062C\u0632\u0626\u064A \u0643\u0645\u0633\u0627\u0647\u0645\u0629 \u0645\u0643\u062A\u0645\u0644\u0629.",
    "Replies to": "\u0631\u062F\u064B\u0627 \u0639\u0644\u0649",
    "Quoted source": "\u0627\u0644\u0645\u0635\u062F\u0631 \u0627\u0644\u0645\u0642\u062A\u0628\u0633",
    "Structured details": "\u0627\u0644\u0627\u062F\u0639\u0627\u0621\u0627\u062A \u0648\u0627\u0644\u0627\u0639\u062A\u0631\u0627\u0636\u0627\u062A \u0648\u0627\u0644\u0623\u062F\u0644\u0629",
    "Original response": "\u0627\u0644\u0625\u062C\u0627\u0628\u0629 \u0627\u0644\u0623\u0635\u0644\u064A\u0629",
    Claims: "\u0627\u0644\u0627\u062F\u0639\u0627\u0621\u0627\u062A",
    Objections: "\u0627\u0644\u0627\u0639\u062A\u0631\u0627\u0636\u0627\u062A",
    Revisions: "\u0627\u0644\u062A\u0646\u0642\u064A\u062D\u0627\u062A",
    Evidence: "\u0627\u0644\u0623\u062F\u0644\u0629",
    "Unresolved items": "\u0646\u0642\u0627\u0637 \u063A\u064A\u0631 \u0645\u062D\u0633\u0648\u0645\u0629",
    Agreement: "\u0623\u0641\u0627\u062F \u0627\u0644\u0645\u0634\u0627\u0631\u0643 \u0628\u0648\u062C\u0648\u062F \u0627\u062A\u0641\u0627\u0642",
    "Parse warning": "\u062A\u062D\u0630\u064A\u0631 \u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0625\u062C\u0627\u0628\u0629",
    Issues: "\u0627\u062F\u0639\u0627\u0621\u0627\u062A \u0642\u064A\u062F \u0627\u0644\u0646\u0642\u0627\u0634",
    "Issues hint": "\u062A\u0639\u0643\u0633 \u062A\u0633\u0645\u064A\u0627\u062A \u0627\u0644\u062D\u0644 \u0623\u0642\u0648\u0627\u0644 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646\u060C \u0644\u0627 \u062A\u062D\u0642\u0642\u064B\u0627 \u062E\u0627\u0631\u062C\u064A\u064B\u0627.",
    Unverified: "\u063A\u064A\u0631 \u0645\u062A\u062D\u0642\u0642 \u0645\u0646\u0647",
    "Participant-resolved": "\u062D\u064F\u0633\u0645 \u0648\u0641\u0642\u064B\u0627 \u0644\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646",
    "Raised by": "\u0623\u062B\u0627\u0631\u0647",
    Resolution: "\u0627\u0644\u062D\u0644",
    "Suggested verification": "\u0627\u0644\u062A\u062D\u0642\u0642 \u0627\u0644\u0645\u0642\u062A\u0631\u062D",
    "No issues": "\u0644\u0645 \u062A\u064F\u0633\u062C\u0651\u0644 \u0627\u0639\u062A\u0631\u0627\u0636\u0627\u062A \u0628\u0639\u062F.",
    Usage: "\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645",
    "Input tokens": "\u0631\u0645\u0648\u0632 \u0627\u0644\u0625\u062F\u062E\u0627\u0644",
    "Output tokens": "\u0631\u0645\u0648\u0632 \u0627\u0644\u0625\u062E\u0631\u0627\u062C",
    "Total tokens": "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0631\u0645\u0648\u0632",
    Estimated: "\u062A\u0642\u062F\u064A\u0631\u064A",
    "Usage unavailable": "\u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u062F\u0642\u064A\u0642 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u0644\u0637\u0644\u0628 \u0648\u0627\u062D\u062F \u0623\u0648 \u0623\u0643\u062B\u0631.",
    "Budget accounted": "\u0627\u0644\u0645\u062D\u062A\u0633\u0628 \u0644\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629",
    "Context compressed": "\u0636\u064F\u063A\u0637 \u0627\u0644\u0633\u064A\u0627\u0642",
    "Compression events": "\u0639\u0645\u0644\u064A\u0627\u062A \u0636\u063A\u0637",
    Diagnostics: "\u062A\u0634\u062E\u064A\u0635 \u0627\u0644\u0645\u0636\u064A\u0641",
    "Run details": "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062A\u0634\u063A\u064A\u0644",
    "No text": "\u0644\u0645 \u064A\u064F\u0631\u062C\u0639 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0646\u0635\u064B\u0627 \u0642\u0627\u0628\u0644\u064B\u0627 \u0644\u0644\u0642\u0631\u0627\u0621\u0629.",
    "Export ready": "\u062A\u0646\u0632\u064A\u0644 \u0627\u0644\u0645\u0644\u0641",
    "Browser copy failed": "\u0627\u0644\u062D\u0627\u0641\u0638\u0629 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629. \u062D\u062F\u0651\u062F \u0627\u0644\u0646\u0635 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0648\u0627\u0646\u0633\u062E\u0647 \u064A\u062F\u0648\u064A\u064B\u0627.",
    "Untitled debate": "\u0645\u0646\u0627\u0638\u0631\u0629 \u0628\u0644\u0627 \u0639\u0646\u0648\u0627\u0646",
    "Not set": "\u063A\u064A\u0631 \u0645\u062D\u062F\u0651\u062F"
  };

  // src/client.css
  var client_default = ".mdb-root,.mdb-switch,.mdb-panel-entry{color:var(--dsw-alias-label-primary);font-family:inherit;font-size:13px;line-height:1.5;box-sizing:border-box}.mdb-root *,.mdb-root *::before,.mdb-root *::after,.mdb-switch *{box-sizing:border-box}.mdb-root{height:100%;min-height:0;min-width:0;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base);isolation:isolate;--mdb-border:var(--dsw-alias-border-l1);--mdb-muted:var(--dsw-alias-label-secondary);--mdb-brand:var(--dsw-alias-brand-primary)}.mdb-root svg,.mdb-switch svg,.mdb-panel-entry svg{flex-shrink:0}.mdb-root button,.mdb-root input,.mdb-root textarea,.mdb-root select,.mdb-switch button{font:inherit;color:inherit}.mdb-root button,.mdb-switch button{cursor:pointer}.mdb-root button:disabled,.mdb-root input:disabled,.mdb-root select:disabled{cursor:not-allowed;opacity:.5}.mdb-root :focus-visible,.mdb-switch :focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}.mdb-root button,.mdb-switch button{-webkit-tap-highlight-color:var(--dsw-alias-bg-layer-2)}.mdb-root h1,.mdb-root h2,.mdb-root h3,.mdb-root h4,.mdb-root p{margin:0}.mdb-root h2{font-size:17px;font-weight:650;letter-spacing:-.025em}.mdb-root h3{font-size:14px;font-weight:650}.mdb-root h4{font-size:12px;font-weight:650}.mdb-root small{font-size:11px;color:var(--mdb-muted);line-height:1.6}.mdb-root a{color:var(--mdb-brand);text-decoration:none}.mdb-root a:hover{text-decoration:underline}.mdb-root ul{padding-inline-start:20px;margin:7px 0}.mdb-root li+li{margin-top:5px}.mdb-root details>summary{cursor:pointer;list-style:none;display:flex;align-items:center;gap:8px;min-height:34px;font-weight:550}.mdb-root details>summary::-webkit-details-marker{display:none}.mdb-root details>summary::before{content:'\u203A';font-size:19px;color:var(--mdb-muted);display:inline-block;transition:transform .15s;line-height:1}.mdb-root details[open]>summary::before{transform:rotate(90deg)}.mdb-root[dir=rtl] details>summary::before{transform:rotate(180deg)}.mdb-root[dir=rtl] details[open]>summary::before{transform:rotate(90deg)}.mdb-root input:not([type=checkbox]),.mdb-root select,.mdb-root textarea{border:1px solid var(--dsw-alias-border-l1);border-radius:7px;background:var(--dsw-alias-bg-base);width:100%;min-width:0;outline-offset:1px;padding:8px 10px;transition:border-color .15s;line-height:1.5}.mdb-root input:not([type=checkbox]):hover,.mdb-root select:hover,.mdb-root textarea:hover{border-color:var(--dsw-alias-border-l2)}.mdb-root input::placeholder,.mdb-root textarea::placeholder{color:var(--dsw-alias-label-secondary);opacity:.75}.mdb-root textarea{resize:vertical;min-height:68px}.mdb-root input[type=checkbox]{accent-color:var(--dsw-alias-brand-primary);width:16px;height:16px;flex-shrink:0;cursor:pointer}.mdb-root select{padding-inline-end:24px;cursor:pointer}.mdb-root select:disabled{cursor:not-allowed}.mdb-root pre{white-space:pre-wrap;overflow-wrap:anywhere;font-size:11px;line-height:1.65;background:var(--dsw-alias-bg-layer-2);padding:14px;border-radius:8px;max-height:450px;overflow:auto}.mdb-root .mdb-plaintext{white-space:pre-wrap;overflow-wrap:anywhere;unicode-bidi:plaintext;line-height:1.85}.mdb-sr-only{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.mdb-muted{color:var(--mdb-muted)}.mdb-button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:7px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;background:var(--dsw-alias-bg-layer-1);font-weight:550;white-space:nowrap;text-decoration:none;transition:background .15s,border-color .15s,transform .15s}.mdb-button:not(:disabled):hover{background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-border-l2)}.mdb-button:not(:disabled):active{transform:translateY(1px)}.mdb-button.mdb-button-primary{color:var(--dsw-alias-bg-base);background:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-brand-primary)}.mdb-button.mdb-button-primary:not(:disabled):hover{background:var(--dsw-alias-brand-primary);filter:brightness(1.08)}.mdb-button.mdb-button-danger{color:var(--dsw-alias-state-error-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-error-primary) 35%,var(--dsw-alias-border-l1));background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 7%,var(--dsw-alias-bg-base))}.mdb-icon-button{width:29px;height:29px;min-width:29px;display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:6px;background:none;color:var(--dsw-alias-label-secondary);padding:4px}.mdb-icon-button:not(:disabled):hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}.mdb-text-button{background:none;border:0;padding:4px 0;color:var(--dsw-alias-brand-primary)!important;font-size:12px!important}.mdb-toolbar{display:flex;align-items:center;gap:6px}.mdb-toolbar-wrap{flex-wrap:wrap}.mdb-switch{display:inline-flex;align-items:center;gap:2px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;padding:3px;background:var(--dsw-alias-bg-layer-1);flex-shrink:0}.mdb-switch button{display:flex;align-items:center;justify-content:center;gap:6px;border:0;border-radius:5px;background:none;min-width:64px;height:28px;padding:3px 12px;color:var(--dsw-alias-label-secondary);font-size:12px}.mdb-switch button[aria-pressed=true]{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font-weight:650}.mdb-switch button:hover{color:var(--dsw-alias-label-primary)}.mdb-panel-entry{display:flex;align-items:center;gap:10px}.mdb-topbar{height:64px;min-height:64px;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:0 24px;border-bottom:1px solid var(--mdb-border);background:var(--dsw-alias-bg-base)}.mdb-brand{display:flex;align-items:center;gap:10px;font-size:14px;letter-spacing:-.02em}.mdb-brand>svg{color:var(--mdb-brand)}.mdb-topbar-controls{display:flex;align-items:center;gap:12px}.mdb-language{display:flex;align-items:center;gap:5px;color:var(--mdb-muted)}.mdb-root .mdb-language select{border:0;background:none;font-size:12px;max-width:110px;padding-inline-start:3px}.mdb-workspace{display:flex;flex:1;min-height:0;min-width:0;overflow:hidden}.mdb-history{width:225px;min-width:225px;display:flex;flex-direction:column;gap:18px;background:var(--dsw-alias-bg-layer-1);border-inline-end:1px solid var(--mdb-border);padding:22px 12px 14px;overflow:auto}.mdb-new-debate{width:100%}.mdb-history-heading{display:flex;align-items:center;justify-content:space-between;padding-inline:8px;color:var(--mdb-muted)}.mdb-history-heading h2{font-size:11px;letter-spacing:.06em;text-transform:uppercase}.mdb-history-heading>span{font-size:11px}.mdb-root .mdb-history-search{font-size:12px;padding:7px 9px}.mdb-history nav{display:flex;flex-direction:column;gap:5px}.mdb-history-item{position:relative;border-radius:8px;border:1px solid transparent}.mdb-history-item:hover{background:var(--dsw-alias-bg-layer-2)}.mdb-history-active{background:color-mix(in srgb,var(--mdb-brand) 7%,var(--dsw-alias-bg-layer-1));border-color:color-mix(in srgb,var(--mdb-brand) 22%,var(--mdb-border))}.mdb-history-select{display:flex;width:100%;flex-direction:column;text-align:start;padding:10px 9px;border:0;border-radius:8px;background:none;gap:9px}.mdb-history-title{font-size:12px;font-weight:550;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding-inline-end:8px}.mdb-history-meta{display:flex;align-items:center;justify-content:space-between;gap:5px;font-size:10px;color:var(--mdb-muted);width:100%}.mdb-history-meta .mdb-status{font-size:10px;padding:0;border:0;background:none}.mdb-history-actions{display:flex;justify-content:flex-end;padding:0 5px 4px;opacity:0;max-height:0;overflow:hidden;transition:opacity .15s}.mdb-history-item:hover .mdb-history-actions,.mdb-history-item:focus-within .mdb-history-actions,.mdb-history-active .mdb-history-actions{opacity:1;max-height:32px}.mdb-history-actions .mdb-icon-button{width:25px;height:25px;min-width:25px}.mdb-history-actions svg{width:14px;height:14px}.mdb-history-empty{text-align:center;color:var(--mdb-muted);padding:30px 5px}.mdb-history-empty svg{margin-bottom:9px;opacity:.6}.mdb-history-empty p{font-size:12px}.mdb-history>footer{font-size:11px;line-height:1.7;color:var(--mdb-muted);padding:18px 8px 3px;margin-top:auto;border-top:1px solid var(--mdb-border)}.mdb-main{flex:1;min-width:0;overflow-y:auto;scroll-behavior:smooth;overscroll-behavior:contain}.mdb-main-inner{width:100%;max-width:1040px;margin:0 auto;padding:28px 42px 56px}.mdb-compose{max-width:780px;margin:0 auto;padding-top:50px}.mdb-hero{text-align:center;margin-bottom:32px}.mdb-hero-symbol{position:relative;display:inline-flex;align-items:center;justify-content:center;width:79px;height:79px;border:1px solid color-mix(in srgb,var(--mdb-brand) 22%,var(--mdb-border));border-radius:24px;color:var(--mdb-brand);background:color-mix(in srgb,var(--mdb-brand) 7%,var(--dsw-alias-bg-base));margin-bottom:26px;transform:rotate(-5deg)}.mdb-hero-symbol>svg{transform:rotate(5deg)}.mdb-hero-mini{position:absolute;inset-inline-end:-8px;bottom:-5px;display:flex;align-items:center;justify-content:center;width:29px;height:29px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--mdb-border);border-radius:10px;transform:rotate(12deg)}.mdb-root .mdb-eyebrow{font-size:10px;font-weight:650;letter-spacing:.16em;color:var(--mdb-brand);margin-bottom:12px}.mdb-hero h1{font-size:clamp(24px,2.35vw,35px);letter-spacing:-.045em;line-height:1.3;font-weight:650;margin-bottom:12px}.mdb-hero>p:last-child{font-size:13px;color:var(--mdb-muted);max-width:490px;margin-inline:auto;line-height:1.85}.mdb-compose-stats{display:flex;justify-content:center;gap:0;margin:0 auto 30px;max-width:490px}.mdb-compose-stats button{border:0;background:none;display:flex;flex-direction:column;gap:3px;padding:0 24px;min-width:100px;color:var(--mdb-muted)}.mdb-compose-stats button+button{border-inline-start:1px solid var(--mdb-border)}.mdb-compose-stats strong{font-size:16px;font-weight:600;color:var(--dsw-alias-label-primary)}.mdb-compose-stats span{font-size:10px;white-space:nowrap}.mdb-compose-stats button:hover strong{color:var(--mdb-brand)}.mdb-composer{border:1px solid var(--dsw-alias-border-l2);border-radius:13px;background:var(--dsw-alias-bg-layer-1);overflow:hidden;transition:border-color .15s}.mdb-composer:focus-within{border-color:var(--mdb-brand);outline:1px solid color-mix(in srgb,var(--mdb-brand) 15%,transparent)}.mdb-composer>label{display:block;font-size:12px;font-weight:600;padding:16px 18px 0}.mdb-root .mdb-composer textarea{background:none;border:0!important;outline:none;box-shadow:none;font-size:14px;line-height:1.9;padding:13px 18px 17px;min-height:180px;max-height:480px;border-radius:0}.mdb-composer footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 14px;border-top:1px solid var(--mdb-border);background:var(--dsw-alias-bg-base)}.mdb-composer footer small{font-size:10px}.mdb-composer footer .mdb-button{min-height:37px;padding-inline:16px}.mdb-model-policy{display:flex;align-items:center;justify-content:center;gap:5px;font-size:10px!important;color:var(--mdb-muted);margin:19px 0 0!important;flex-wrap:wrap}.mdb-model-policy strong{font-weight:550}.mdb-alert{display:flex;align-items:flex-start;gap:10px;padding:13px 15px;border:1px solid var(--mdb-border);border-radius:9px;font-size:12px;margin:14px 0;background:var(--dsw-alias-bg-layer-1)}.mdb-alert>svg{margin-top:2px}.mdb-alert>.mdb-plaintext{flex:1}.mdb-alert>div:not(.mdb-plaintext){flex:1;min-width:0}.mdb-alert .mdb-plaintext{line-height:1.7}.mdb-alert p{margin:6px 0 10px}.mdb-alert-error{color:var(--dsw-alias-state-error-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-error-primary) 24%,var(--mdb-border));background:color-mix(in srgb,var(--dsw-alias-state-error-primary) 4%,var(--dsw-alias-bg-base))}.mdb-alert-warn{color:var(--dsw-alias-label-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 28%,var(--mdb-border));background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 4%,var(--dsw-alias-bg-base))}.mdb-alert-warn>svg{color:var(--dsw-alias-state-warn-primary)}.mdb-alert-success{border-color:color-mix(in srgb,var(--dsw-alias-state-success-primary) 28%,var(--mdb-border))}.mdb-alert-success>svg{color:var(--dsw-alias-state-success-primary)}.mdb-scheduling,.mdb-diagnostics{margin-top:17px;border:1px solid var(--mdb-border);border-radius:8px;padding:5px 12px;font-size:11px;color:var(--mdb-muted)}.mdb-scheduling summary{color:var(--dsw-alias-label-primary)}.mdb-diagnostics .mdb-plaintext{padding:8px 0;border-top:1px solid var(--mdb-border)}.mdb-settings{display:none;flex-direction:column;width:395px;min-width:395px;border-inline-start:1px solid var(--mdb-border);background:var(--dsw-alias-bg-layer-1);overflow-y:auto;overscroll-behavior:contain}.mdb-settings-open .mdb-settings{display:flex}.mdb-settings-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:20px 20px 18px;border-bottom:1px solid var(--mdb-border);background:var(--dsw-alias-bg-layer-1)}.mdb-settings-heading h2{font-size:15px;margin-bottom:6px}.mdb-settings-heading p{color:var(--mdb-muted);font-size:11px;line-height:1.7}.mdb-settings>.mdb-alert{margin:14px 16px 0}.mdb-settings-section{padding:20px;border-bottom:1px solid var(--mdb-border)}.mdb-settings-section>h3{margin-bottom:14px}.mdb-section-heading{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}.mdb-section-heading h3,.mdb-section-heading h2{display:flex;align-items:center;gap:7px}.mdb-section-heading p,.mdb-settings-section p{font-size:11px;color:var(--mdb-muted);line-height:1.7;margin-top:6px}.mdb-section-heading>svg{color:var(--mdb-brand)}.mdb-count{display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:500;min-width:21px;height:20px;padding:0 6px;border-radius:5px;background:var(--dsw-alias-bg-layer-2);color:var(--mdb-muted);line-height:1.2}.mdb-preset-bar{display:flex;gap:7px;margin-bottom:10px}.mdb-field{display:flex;flex-direction:column;gap:6px;margin:12px 0;min-width:0}.mdb-field>label{font-size:11px;font-weight:600;color:var(--dsw-alias-label-primary)}.mdb-field>small{font-size:10px}.mdb-field input,.mdb-field textarea,.mdb-field select{font-size:12px!important}.mdb-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:12px;align-items:start}.mdb-form-grid .mdb-field{margin:8px 0}.mdb-toggle-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:11px 0;cursor:pointer}.mdb-toggle-row>span{display:flex;flex-direction:column;gap:4px}.mdb-toggle-row strong{font-size:12px;font-weight:550}.mdb-toggle-row small{font-size:10px}.mdb-participants{display:flex;flex-direction:column;gap:10px;margin:15px 0 12px}.mdb-participant{border:1px solid var(--mdb-border);border-radius:9px;padding:11px;background:var(--dsw-alias-bg-base)}.mdb-participant>header{display:flex;align-items:center;gap:7px;padding-bottom:3px}.mdb-avatar{display:inline-flex;align-items:center;justify-content:center;min-width:27px;height:27px;border:1px solid color-mix(in srgb,var(--mdb-brand) 20%,var(--mdb-border));background:color-mix(in srgb,var(--mdb-brand) 7%,var(--dsw-alias-bg-layer-1));border-radius:8px;font-size:11px;font-weight:600;color:var(--mdb-brand)}.mdb-participant-name{font-size:11px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;min-width:30px}.mdb-inline-toggle{display:flex;align-items:center;gap:3px;font-size:10px;color:var(--mdb-muted);cursor:pointer}.mdb-inline-toggle input{width:13px!important;height:13px!important}.mdb-participant header .mdb-toolbar{gap:0}.mdb-participant header .mdb-icon-button{width:22px;height:24px;min-width:22px}.mdb-participant header svg{width:14px;height:14px}.mdb-participant .mdb-field{margin:9px 0}.mdb-participant .mdb-field>label{font-size:10px}.mdb-identity{display:block;overflow-wrap:anywhere;font-size:9px!important;line-height:1.6;opacity:.8}.mdb-participant-disabled{background:var(--dsw-alias-bg-layer-1)}.mdb-participant-disabled .mdb-participant-name,.mdb-participant-disabled .mdb-avatar{opacity:.6}.mdb-participant-details{border-top:1px solid var(--mdb-border);margin-top:10px;padding-top:4px;font-size:11px}.mdb-participant-details>summary{font-size:10px;min-height:29px!important}.mdb-unsupported{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.mdb-unsupported .mdb-field label{font-size:9px}.mdb-add-participant{width:100%;border-style:dashed;background:none;font-size:12px!important}.mdb-input-unit{display:flex;align-items:center;position:relative}.mdb-input-unit input{padding-inline-end:62px!important}.mdb-input-unit>span{position:absolute;inset-inline-end:9px;font-size:9px;pointer-events:none;color:var(--mdb-muted);max-width:55px;text-overflow:ellipsis;overflow:hidden}.mdb-provider-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:12px;margin-top:12px}.mdb-provider-fields>h4{grid-column:1/-1;font-size:11px}.mdb-advanced{padding:10px 20px 14px}.mdb-advanced>summary{font-size:12px;min-height:40px!important}.mdb-advanced>section{padding:15px 0;border-top:1px solid var(--mdb-border)}.mdb-advanced>section h3{font-size:12px;margin-bottom:7px}.mdb-settings-save{position:sticky;bottom:0;display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--dsw-alias-bg-layer-1);border-top:1px solid var(--mdb-border);padding:14px 20px;z-index:2}.mdb-settings-save>span{font-size:10px;color:var(--mdb-muted)}.mdb-settings-save .mdb-button{font-size:11px}.mdb-run-heading{padding:2px 0 25px}.mdb-run-heading h1{font-size:25px;font-weight:650;letter-spacing:-.035em;line-height:1.45;margin:15px 0 8px;overflow-wrap:anywhere}.mdb-run-heading>.mdb-toolbar>.mdb-muted{font-size:11px}.mdb-status{display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:500;white-space:nowrap;color:var(--dsw-alias-state-idle-primary);padding:3px 7px;border:1px solid var(--mdb-border);border-radius:5px;background:var(--dsw-alias-bg-layer-1)}.mdb-status-dot{width:5px;height:5px;border-radius:50%;background:currentColor;flex-shrink:0}.mdb-status-running,.mdb-status-responding,.mdb-status-reviewing{color:var(--mdb-brand);border-color:color-mix(in srgb,var(--mdb-brand) 22%,var(--mdb-border))}.mdb-status-running .mdb-status-dot,.mdb-status-responding .mdb-status-dot,.mdb-status-reviewing .mdb-status-dot{animation:mdb-pulse 1.6s ease-in-out infinite}.mdb-status-completed{color:var(--dsw-alias-state-success-primary)}.mdb-status-failed,.mdb-status-timed-out,.mdb-status-rate-limited{color:var(--dsw-alias-state-error-primary)}.mdb-status-partial,.mdb-status-interrupted,.mdb-status-waiting-for-cooldown{color:var(--dsw-alias-state-warn-primary)}.mdb-question-detail{font-size:12px;color:var(--mdb-muted)}.mdb-question-detail>summary{font-size:11px;min-height:29px!important}.mdb-question-detail .mdb-plaintext{max-height:230px;overflow:auto;padding:4px 0 10px}.mdb-timers{margin:18px 0 20px}.mdb-timer-pills{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:10px}.mdb-timer-pills>span{display:flex;align-items:center;gap:6px;font-size:10px;color:var(--mdb-muted)}.mdb-timer-pills b{font-weight:600;color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums}.mdb-progress{height:3px;background:var(--dsw-alias-bg-layer-2);border-radius:2px;overflow:hidden}.mdb-progress>span{display:block;height:100%;background:var(--mdb-brand);border-radius:2px;transition:width .25s linear}.mdb-run-actions{display:flex;align-items:center;justify-content:space-between;gap:12px}.mdb-run-actions .mdb-button{font-size:11px;min-height:32px;padding:6px 10px}.mdb-run-actions .mdb-button svg{width:15px;height:15px}.mdb-export{position:relative}.mdb-export>summary{border:1px solid var(--mdb-border);border-radius:7px;padding:6px 10px;font-size:11px!important;min-height:32px!important;background:var(--dsw-alias-bg-layer-1);font-weight:500!important}.mdb-export>summary::before{display:none!important}.mdb-export>div{position:absolute;inset-inline-start:0;top:calc(100% + 5px);z-index:5;background:var(--dsw-alias-bg-overlay);padding:5px;border:1px solid var(--mdb-border);border-radius:8px;display:flex;flex-direction:column;min-width:160px;gap:3px}.mdb-export .mdb-button{border:0;justify-content:flex-start;background:none}.mdb-stop-reason{font-size:11px;color:var(--mdb-muted);margin-top:14px;border-inline-start:2px solid var(--dsw-alias-border-l2);padding-inline-start:10px}.mdb-final{position:relative;background:color-mix(in srgb,var(--mdb-brand) 3%,var(--dsw-alias-bg-base));border:1px solid color-mix(in srgb,var(--mdb-brand) 32%,var(--mdb-border));border-radius:12px;padding:23px 25px;margin:0 0 25px}.mdb-final::before{content:'';position:absolute;top:-1px;inset-inline:24px;height:2px;background:var(--mdb-brand);border-radius:3px}.mdb-final>header{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:22px}.mdb-final-title{display:flex;align-items:center;gap:11px}.mdb-final-mark{width:39px;height:39px;display:flex;align-items:center;justify-content:center;border:1px solid color-mix(in srgb,var(--mdb-brand) 20%,var(--mdb-border));border-radius:11px;background:color-mix(in srgb,var(--mdb-brand) 7%,var(--dsw-alias-bg-base));color:var(--mdb-brand)}.mdb-final h2{font-size:16px;margin-bottom:2px}.mdb-final header .mdb-button{font-size:10px;min-height:30px;padding:5px 9px;background:var(--dsw-alias-bg-base)}.mdb-final header .mdb-button svg{width:14px;height:14px}.mdb-final>.mdb-plaintext{font-size:14px;line-height:1.95}.mdb-final>footer{color:var(--mdb-muted);border-top:1px solid color-mix(in srgb,var(--mdb-brand) 15%,var(--mdb-border));font-size:10px;margin-top:21px;padding-top:13px}.mdb-badge{display:inline-flex;padding:3px 7px;border:1px solid var(--mdb-border);border-radius:4px;font-size:9px;white-space:nowrap;line-height:1.4}.mdb-badge-warn{color:var(--dsw-alias-state-warn-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 25%,var(--mdb-border));background:color-mix(in srgb,var(--dsw-alias-state-warn-primary) 5%,var(--dsw-alias-bg-base))}.mdb-badge-success{color:var(--dsw-alias-state-success-primary);border-color:color-mix(in srgb,var(--dsw-alias-state-success-primary) 25%,var(--mdb-border));background:color-mix(in srgb,var(--dsw-alias-state-success-primary) 5%,var(--dsw-alias-bg-base))}.mdb-final>.mdb-badge{margin-bottom:10px}.mdb-no-final{display:flex;align-items:flex-start;gap:12px;border:1px dashed var(--dsw-alias-border-l2);border-radius:9px;padding:18px;margin-bottom:20px;color:var(--mdb-muted)}.mdb-no-final>svg{margin-top:2px}.mdb-no-final h3{font-size:12px;color:var(--dsw-alias-label-primary);margin-bottom:4px}.mdb-no-final p{font-size:11px}.mdb-activity{border:1px solid var(--mdb-border);border-radius:10px;padding:15px 17px;margin-bottom:16px;background:var(--dsw-alias-bg-layer-1)}.mdb-activity h3{font-size:12px}.mdb-activity .mdb-section-heading{margin-bottom:8px}.mdb-task-list{display:flex;flex-direction:column}.mdb-task{padding:9px 0}.mdb-task+.mdb-task{border-top:1px solid var(--mdb-border)}.mdb-task-line{display:flex;align-items:center;gap:9px;flex-wrap:wrap}.mdb-task-line strong{font-size:11px;font-weight:550;overflow-wrap:anywhere}.mdb-task-line>small{font-size:9px;margin-inline-start:auto}.mdb-task-line .mdb-status{font-size:9px;padding:2px 5px;background:var(--dsw-alias-bg-base)}.mdb-error-text{color:var(--dsw-alias-state-error-primary);font-size:11px;line-height:1.7!important;margin:8px 0!important}.mdb-preview{margin-top:9px;border:1px dashed var(--dsw-alias-border-l2);border-radius:7px;padding:5px 11px;color:var(--mdb-muted)}.mdb-preview>summary{font-size:10px;min-height:25px!important;color:var(--mdb-brand)}.mdb-preview .mdb-plaintext{max-height:260px;overflow:auto;font-size:11px;margin:9px 0}.mdb-preview small{font-size:9px}.mdb-issues{border:1px solid var(--mdb-border);border-radius:9px;padding:6px 15px;margin-bottom:30px}.mdb-issues>summary{font-size:12px}.mdb-issues>p{font-size:11px;color:var(--mdb-muted);margin:8px 0 14px}.mdb-issue{border-top:1px solid var(--mdb-border);padding:15px 0}.mdb-issue .mdb-section-heading{margin-bottom:8px}.mdb-issue .mdb-section-heading>strong{font-size:11px;overflow-wrap:anywhere}.mdb-issue .mdb-plaintext{font-size:11px;margin:5px 0}.mdb-issue>small{font-size:10px}.mdb-transcript>summary{margin-bottom:16px;min-height:38px!important}.mdb-transcript>summary>.mdb-count{margin-inline-start:auto}.mdb-transcript h2{font-size:16px}.mdb-round-separator{display:flex;align-items:center;gap:13px;margin:23px 0 16px}.mdb-round-separator>span{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--mdb-muted);white-space:nowrap}.mdb-round-separator>i{height:1px;background:var(--mdb-border);flex:1}.mdb-message{background:var(--dsw-alias-bg-base);border:1px solid var(--mdb-border);border-radius:10px;padding:19px 21px;margin-bottom:13px;scroll-margin-top:24px;outline-offset:3px}.mdb-message>header{display:flex;align-items:center;gap:10px;margin-bottom:17px}.mdb-message .mdb-avatar{width:31px;height:31px;min-width:31px;border-radius:9px}.mdb-message-actor{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0}.mdb-message-actor strong{font-size:12px;font-weight:600;overflow-wrap:anywhere}.mdb-message-actor small{font-size:10px}.mdb-message time{font-size:9px;color:var(--mdb-muted);white-space:nowrap}.mdb-message>.mdb-plaintext{font-size:13px;line-height:1.95}.mdb-message-incomplete{border-style:dashed}.mdb-reply-links{display:flex;align-items:center;gap:7px;flex-wrap:wrap;font-size:10px;margin-bottom:13px;color:var(--mdb-muted)}.mdb-reply-links>span:not(:first-child){display:inline-flex;align-items:center;gap:6px;padding:3px 6px;border:1px solid var(--mdb-border);border-radius:5px;background:var(--dsw-alias-bg-layer-1);font-size:9px}.mdb-reply-links button{font-size:9px;border:0;border-inline-start:1px solid var(--mdb-border);padding-inline-start:6px;background:none;color:var(--mdb-muted)}.mdb-quote{margin:0 0 15px;padding:10px 12px;border-inline-start:2px solid var(--mdb-brand);background:var(--dsw-alias-bg-layer-1);border-radius:0 5px 5px 0;color:var(--mdb-muted);max-height:260px;overflow:auto;font-size:11px}.mdb-inline-warning{display:flex;align-items:flex-start;gap:6px;color:var(--dsw-alias-state-warn-primary);font-size:10px;margin-top:13px!important}.mdb-message-details{margin-top:17px;border-top:1px solid var(--mdb-border);padding-top:5px}.mdb-message-details>summary,.mdb-raw>summary{font-size:10px;color:var(--mdb-muted);min-height:27px!important}.mdb-message-details section{padding:10px 0}.mdb-message-details h4{margin-bottom:8px;color:var(--mdb-muted);font-size:11px}.mdb-message-details .mdb-plaintext{font-size:11px;margin:5px 0}.mdb-objection+.mdb-objection{margin-top:10px;padding-top:10px;border-top:1px solid var(--mdb-border)}.mdb-raw{margin-top:7px}.mdb-raw>.mdb-plaintext{max-height:400px;overflow:auto;background:var(--dsw-alias-bg-layer-1);padding:10px;border-radius:6px;font-size:10px}.mdb-empty-transcript{text-align:center;padding:35px 20px 45px;color:var(--mdb-muted)}.mdb-empty-transcript h3{font-size:13px;margin-top:14px;margin-bottom:6px;color:var(--dsw-alias-label-primary)}.mdb-empty-transcript p{font-size:11px}.mdb-orbit{display:inline-flex;align-items:center;justify-content:center;width:60px;height:60px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--mdb-border);border-radius:19px;color:var(--mdb-brand)}.mdb-run-details{margin-top:25px;border-top:1px solid var(--mdb-border);padding-top:10px;color:var(--mdb-muted);font-size:11px}.mdb-run-details>summary{font-size:12px}.mdb-run-details details{margin-top:10px}.mdb-run-details .mdb-button{font-size:11px;margin:10px 0}.mdb-run-details .mdb-plaintext{font-size:11px;max-height:500px;overflow:auto;padding:10px}.mdb-usage{padding:16px 0}.mdb-usage h3{font-size:12px;color:var(--dsw-alias-label-primary)}.mdb-usage dl{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin:12px 0;gap:20px}.mdb-usage dt{font-size:10px;margin-bottom:6px}.mdb-usage dd{margin:0;font-weight:600;color:var(--dsw-alias-label-primary);font-size:15px}.mdb-usage dd small{font-size:9px;font-weight:400}.mdb-dialog{padding:0;max-width:450px;width:calc(100% - 32px);border:1px solid var(--dsw-alias-border-l2);border-radius:13px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);box-shadow:0 20px 90px color-mix(in srgb,var(--dsw-alias-label-primary) 15%,transparent);font-family:inherit}.mdb-dialog::backdrop{background:color-mix(in srgb,var(--dsw-alias-bg-base) 65%,transparent);backdrop-filter:blur(4px)}.mdb-dialog form{padding:23px}.mdb-dialog header{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-bottom:18px}.mdb-dialog h2{font-size:17px}.mdb-dialog p{font-size:13px;line-height:1.85;color:var(--dsw-alias-label-secondary);margin:14px 0 24px}.mdb-dialog footer{display:flex;align-items:center;justify-content:flex-end;gap:9px;margin-top:22px}.mdb-initial{align-items:center;justify-content:center;gap:20px;min-height:380px;padding:30px;text-align:center}.mdb-initial>.mdb-switch{position:absolute;inset-block-start:20px}.mdb-initial>.mdb-plaintext{max-width:500px;color:var(--mdb-muted)}.mdb-mobile-tabs{display:none}.mdb-root[dir=rtl]{letter-spacing:0}.mdb-root[dir=rtl] .mdb-hero h1{letter-spacing:-.02em}.mdb-root[dir=rtl] .mdb-eyebrow{letter-spacing:.02em}.mdb-root[dir=rtl] .mdb-message-actor,.mdb-root[dir=rtl] .mdb-history-title{unicode-bidi:plaintext}.mdb-root :where(button,input,textarea,select,summary){scroll-margin:15px}@keyframes mdb-pulse{0%,100%{opacity:1}50%{opacity:.35}}\n.mdb-model-identity{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:10px}.mdb-model-identity .mdb-identity{margin:0}.mdb-image-support{font-size:10px;white-space:normal;line-height:1.4}.mdb-image-support-supported{color:var(--mdb-brand)}.mdb-image-composer{padding:12px 16px;border-top:1px solid var(--mdb-border);display:flex;flex-direction:column;gap:10px;background:var(--dsw-alias-bg-layer-1)}.mdb-image-toolbar{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.mdb-image-toolbar>.mdb-button:last-child:not(:first-child){margin-inline-start:auto}.mdb-image-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;max-width:100%;min-width:0}.mdb-image-grid figure{margin:0;min-width:0;border:1px solid var(--mdb-border);border-radius:10px;overflow:hidden;background:var(--dsw-alias-bg-base)}.mdb-draft-image{position:relative}.mdb-draft-image>img{display:block;width:100%;height:100px;object-fit:contain;background:var(--dsw-alias-bg-layer-2)}.mdb-draft-image>.mdb-icon-button{position:absolute;top:4px;inset-inline-end:4px;background:var(--dsw-alias-bg-base)}.mdb-image-grid figcaption{display:flex;flex-direction:column;gap:3px;padding:8px 10px;overflow-wrap:anywhere}.mdb-image-grid figcaption strong{font-size:11px;font-weight:550}.mdb-image-summary,.mdb-image-privacy{font-size:11px;color:var(--mdb-muted)}.mdb-session-images{margin-block:15px;display:flex;flex-direction:column;gap:10px}.mdb-saved-image summary{flex-direction:column;padding:8px;min-height:130px}.mdb-root .mdb-saved-image summary::before{display:none}.mdb-saved-image summary>img{width:100%;height:110px;object-fit:contain}.mdb-saved-image summary>span{font-size:11px;color:var(--mdb-brand)}.mdb-image-original{display:block;width:100%;height:auto;max-height:75vh;object-fit:contain;padding:8px}.mdb-image-placeholder{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:8px;min-height:140px;padding:12px;font-size:11px;color:var(--mdb-muted)}\n@media(min-width:1550px){.mdb-settings{width:420px;min-width:420px}.mdb-history{width:245px;min-width:245px}.mdb-main-inner{padding-inline:55px}.mdb-compose{padding-top:70px}}\n@media(max-width:1250px){.mdb-main-inner{padding:25px 28px 45px}.mdb-history{width:195px;min-width:195px}.mdb-settings{width:350px;min-width:350px}.mdb-settings-section{padding:17px}.mdb-settings-heading{padding:17px}.mdb-settings-open .mdb-compose{padding-top:22px}.mdb-settings-open .mdb-hero h1{font-size:25px}.mdb-settings-open .mdb-compose-stats button{padding-inline:14px;min-width:80px}.mdb-settings-open .mdb-composer footer{flex-wrap:wrap}.mdb-settings-open .mdb-composer footer small{width:100%}.mdb-settings-open .mdb-composer footer .mdb-button{margin-inline-start:auto}.mdb-participant>header{gap:5px}.mdb-participant-name{font-size:10px}.mdb-inline-toggle>span{display:none}}\n@media(max-width:1000px){.mdb-settings-open .mdb-history{display:none}.mdb-main-inner{padding-inline:26px}.mdb-compose{padding-top:35px}.mdb-topbar{padding-inline:20px}.mdb-settings{width:360px;min-width:360px}.mdb-hero h1{font-size:29px}.mdb-timer-pills{gap:10px}.mdb-run-actions{align-items:flex-start}.mdb-final{padding:19px}.mdb-message{padding:17px}}\n@media(max-width:760px){.mdb-topbar{height:57px;min-height:57px;padding-inline:15px;gap:10px}.mdb-brand strong{display:none}.mdb-brand{gap:0}.mdb-topbar>.mdb-switch button{min-width:57px;padding-inline:10px}.mdb-topbar-controls{gap:5px}.mdb-root .mdb-language select{max-width:80px;font-size:11px}.mdb-language>svg{display:none}.mdb-mobile-tabs{display:flex;padding:9px 14px;gap:8px;border-bottom:1px solid var(--mdb-border);background:var(--dsw-alias-bg-layer-1)}.mdb-mobile-tabs .mdb-button{flex:1;font-size:11px;min-height:31px;padding:5px 8px;background:none}.mdb-mobile-tabs .mdb-button svg{width:14px;height:14px}.mdb-history{display:none;width:100%;min-width:0;padding:16px}.mdb-history-open .mdb-history{display:flex}.mdb-history-open .mdb-main,.mdb-history-open .mdb-settings{display:none}.mdb-history-open .mdb-history-actions{opacity:1;max-height:32px}.mdb-history-item .mdb-history-select{padding:12px}.mdb-history-title{font-size:13px}.mdb-history-actions{position:absolute;top:5px;inset-inline-end:6px}.mdb-history-title{padding-inline-end:57px}.mdb-history nav{gap:8px}.mdb-settings{width:100%;min-width:0;border-inline-start:0}.mdb-settings-open .mdb-main,.mdb-settings-open .mdb-history{display:none}.mdb-settings-heading{padding:20px}.mdb-settings-section{padding:20px}.mdb-settings .mdb-form-grid{column-gap:16px}.mdb-settings .mdb-participants{gap:12px}.mdb-inline-toggle>span{display:inline}.mdb-participant-name{font-size:12px}.mdb-participant>header{gap:8px}.mdb-main-inner{padding:22px 18px 35px}.mdb-compose{padding-top:25px}.mdb-hero-symbol{width:65px;height:65px;border-radius:20px;margin-bottom:22px}.mdb-hero-symbol>svg{width:32px;height:32px}.mdb-root .mdb-eyebrow{font-size:9px;letter-spacing:.12em}.mdb-hero h1,.mdb-settings-open .mdb-hero h1{font-size:27px}.mdb-hero>p:last-child{font-size:12px;padding-inline:12px}.mdb-hero{margin-bottom:26px}.mdb-compose-stats{margin-bottom:26px}.mdb-compose-stats button{padding-inline:16px;min-width:90px}.mdb-compose-stats strong{font-size:14px}.mdb-compose-stats span{font-size:9px}.mdb-root .mdb-composer textarea{font-size:13px;padding:12px 14px;min-height:170px}.mdb-composer>label{padding-inline:14px}.mdb-composer footer{padding:11px;align-items:flex-end}.mdb-composer footer small{font-size:9px;max-width:125px;line-height:1.8}.mdb-composer footer .mdb-button{padding-inline:12px;font-size:11px}.mdb-model-policy{line-height:1.9;font-size:9px!important;text-align:center}.mdb-run-heading h1{font-size:22px}.mdb-run-heading>.mdb-toolbar{gap:9px}.mdb-run-heading>.mdb-toolbar>.mdb-muted{font-size:10px}.mdb-timer-pills{gap:8px 13px}.mdb-timer-pills>span{font-size:9px}.mdb-run-actions{flex-wrap:wrap}.mdb-run-actions>small{display:none}.mdb-final{padding:18px 16px;margin-bottom:20px}.mdb-final>header{gap:8px;margin-bottom:18px;align-items:flex-start}.mdb-final-title{gap:8px}.mdb-final-mark{width:33px;height:33px;border-radius:9px}.mdb-final h2{font-size:14px}.mdb-final small{font-size:9px}.mdb-final header .mdb-button{padding:5px 7px;font-size:9px;min-height:28px}.mdb-final>.mdb-plaintext{font-size:13px;line-height:1.95}.mdb-final>footer{font-size:9px}.mdb-message{padding:16px 14px}.mdb-message>header{gap:8px}.mdb-message-actor strong{font-size:11px}.mdb-message time{font-size:9px}.mdb-message>.mdb-plaintext{font-size:12px}.mdb-message .mdb-avatar{width:28px;height:28px;min-width:28px}.mdb-message-actor small{font-size:9px}.mdb-message-incomplete>header{flex-wrap:wrap}.mdb-message-incomplete>header>.mdb-badge{margin-inline-start:36px}.mdb-activity{padding:13px}.mdb-task-line{gap:6px}.mdb-task-line>small{font-size:8px}.mdb-task-line strong{font-size:10px}.mdb-issues{margin-bottom:22px;padding-inline:12px}.mdb-issue .mdb-section-heading{align-items:flex-start}.mdb-issue .mdb-badge{font-size:8px}.mdb-usage dl{gap:12px}.mdb-usage dt{font-size:9px}.mdb-usage dd{font-size:13px}.mdb-alert{padding:12px;font-size:11px}.mdb-dialog form{padding:20px}.mdb-dialog header{margin-bottom:12px}.mdb-dialog p{font-size:12px}.mdb-dialog h2{font-size:16px}}\n@media(prefers-reduced-motion:reduce){.mdb-root *,.mdb-root *::before,.mdb-switch *{animation:none!important;transition:none!important;scroll-behavior:auto!important}.mdb-main{scroll-behavior:auto}}\n";

  // src/client.tsx
  var modelKey = (value) => JSON.stringify([value.provider, value.model]);
  var activeRun = (s) => s.status === "running" || s.status === "reviewing";
  var clone2 = (value) => structuredClone(value);
  var IMAGE_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];
  var MAX_IMAGES = 4;
  var MAX_IMAGE_BYTES = 10 * 1024 * 1024;
  var MAX_TOTAL_IMAGE_BYTES = 20 * 1024 * 1024;
  function effectiveImagePolicy(policy) {
    const bounded = (value, ceiling) => typeof value === "number" && Number.isFinite(value) ? Math.max(0, Math.min(ceiling, Math.floor(value))) : 0;
    return { available: policy?.available === true, maxImages: bounded(policy?.maxImages, MAX_IMAGES), maxImageBytes: bounded(policy?.maxImageBytes, MAX_IMAGE_BYTES), maxTotalBytes: bounded(policy?.maxTotalBytes, MAX_TOTAL_IMAGE_BYTES), mediaTypes: IMAGE_TYPES.filter((type) => policy?.mediaTypes.includes(type)) };
  }
  function imageSupportLabel(model) {
    return model?.imageSupport === "supported" ? "Vision supported" : model?.imageSupport === "unsupported" ? "Text-only model" : "Image support unknown";
  }
  function formatBytes(bytes, locale) {
    const unit = bytes >= 1024 * 1024 ? "MiB" : bytes >= 1024 ? "KiB" : "B";
    return `${(bytes / (unit === "MiB" ? 1024 * 1024 : unit === "KiB" ? 1024 : 1)).toLocaleString(locale, { maximumFractionDigits: 1 })} ${unit}`;
  }
  function safeImageDataUrl(mediaType, data, maxBytes = MAX_IMAGE_BYTES) {
    if (typeof mediaType !== "string" || !IMAGE_TYPES.includes(mediaType) || typeof data !== "string" || !data.length || data.length > Math.ceil(maxBytes / 3) * 4 || data.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(data)) return null;
    try {
      const decoded = atob(data);
      if (!decoded.length || decoded.length > maxBytes || btoa(decoded) !== data) return null;
      return { url: `data:${mediaType};base64,${data}`, bytes: decoded.length };
    } catch {
      return null;
    }
  }
  window.__ModuleLoader__.load({
    id: "@local/dsh-model-debate",
    factory(require2) {
      const React = require2("react");
      const { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } = React;
      return {
        inject: ["slots", "locale", "layout"],
        apply(ctx) {
          ctx.effect(() => ctx.locale.register(namespace, "en", en));
          ctx.effect(() => ctx.locale.register(namespace, "ar", ar));
          ctx.effect(() => {
            if (!ctx.locale.getSnapshot().locales.some((item) => item.id === "ar")) return ctx.locale.addLanguage({ id: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", fallback: "en" });
          });
          ctx.effect(() => {
            const style = document.createElement("style");
            style.dataset.modelDebate = "true";
            style.textContent = client_default;
            document.head.appendChild(style);
            return () => style.remove();
          });
          const t = ctx.locale.bind(namespace);
          const listeners = /* @__PURE__ */ new Set();
          const controllers = /* @__PURE__ */ new Set();
          let view = { snapshot: null, error: null, loading: true };
          let alive = true;
          let polling;
          let flight = null;
          let composeDraft = "";
          let settingsDraft = null;
          let settingsBaseline = null;
          let imageDraft = { images: [], reading: false, error: null };
          const imageListeners = /* @__PURE__ */ new Set();
          const imageReaders = /* @__PURE__ */ new Set();
          let previewCacheSession = null;
          const savedImageCache = /* @__PURE__ */ new Map();
          const publishImageDraft = (next) => {
            if (!alive) return;
            imageDraft = next;
            imageListeners.forEach((listener) => listener());
          };
          const subscribeImages = (fn) => {
            imageListeners.add(fn);
            return () => {
              imageListeners.delete(fn);
            };
          };
          function validateImageBatch(files, existing, policy) {
            if (!policy.available || !policy.maxImages || !policy.mediaTypes.length) return t("Images unavailable");
            if (existing.length + files.length > policy.maxImages) return t("Image count limit", { count: policy.maxImages });
            if (existing.some((image) => !policy.mediaTypes.includes(image.encoded.mediaType)) || files.some((file2) => !policy.mediaTypes.includes(file2.type) || !IMAGE_TYPES.includes(file2.type))) return t("Image type error");
            if (files.some((file2) => !file2.size || file2.size > policy.maxImageBytes) || existing.some((image) => image.bytes > policy.maxImageBytes)) return t("Image size limit", { size: formatBytes(policy.maxImageBytes, ctx.locale.getSnapshot().active) });
            if (existing.reduce((sum, image) => sum + image.bytes, 0) + files.reduce((sum, file2) => sum + file2.size, 0) > policy.maxTotalBytes) return t("Image total limit", { size: formatBytes(policy.maxTotalBytes, ctx.locale.getSnapshot().active) });
            return null;
          }
          function readImageFile(file2) {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              imageReaders.add(reader);
              const fail = () => {
                imageReaders.delete(reader);
                reject(new Error(t("Image read failed", { name: file2.name })));
              };
              reader.onerror = fail;
              reader.onabort = fail;
              reader.onload = () => {
                imageReaders.delete(reader);
                const prefix = `data:${file2.type};base64,`;
                if (typeof reader.result !== "string" || !reader.result.startsWith(prefix)) {
                  fail();
                  return;
                }
                const data = reader.result.slice(prefix.length);
                const checked = safeImageDataUrl(file2.type, data);
                if (!checked || checked.bytes !== file2.size) {
                  fail();
                  return;
                }
                resolve({ id: crypto.randomUUID(), encoded: { mediaType: file2.type, data, name: file2.name.slice(0, 255) }, preview: checked.url, bytes: file2.size });
              };
              reader.readAsDataURL(file2);
            });
          }
          async function addImageFiles(files, policy) {
            if (!files.length || imageDraft.reading || !alive) return;
            const before = imageDraft.images;
            const error51 = validateImageBatch(files, before, policy);
            if (error51) {
              publishImageDraft({ ...imageDraft, error: error51 });
              return;
            }
            publishImageDraft({ ...imageDraft, reading: true, error: null });
            try {
              const results = await Promise.allSettled(files.map(readImageFile));
              const failed = results.find((result) => result.status === "rejected");
              if (failed?.status === "rejected") throw failed.reason;
              const images = results.flatMap((result) => result.status === "fulfilled" ? [result.value] : []);
              if (alive) publishImageDraft({ images: [...before, ...images], reading: false, error: null });
            } catch (error52) {
              if (alive) publishImageDraft({ images: before, reading: false, error: error52 instanceof Error ? error52.message : t("Image read failed", { name: "" }) });
            }
          }
          const publish = (next) => {
            if (!alive) return;
            view = next;
            listeners.forEach((listener) => listener());
          };
          async function request(action, fields = {}) {
            if (!alive) throw new Error("Plugin disposed");
            const controller = new AbortController();
            controllers.add(controller);
            try {
              const response = await fetch(new URL("api/model-debate", document.baseURI), { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ action, ...fields }), signal: controller.signal });
              const body = await response.json();
              if (!response.ok || !body.ok) throw new Error(body.error || `${t("Request failed")} (${response.status})`);
              return body.value;
            } finally {
              controllers.delete(controller);
            }
          }
          async function refresh(fresh = false) {
            if (!alive) return;
            if (flight) {
              await flight;
              if (fresh && alive) return refresh();
              return;
            }
            flight = (async () => {
              try {
                const snapshot = await request("snapshot");
                if (!alive) return;
                if (previewCacheSession !== snapshot.activeId) {
                  savedImageCache.clear();
                  previewCacheSession = snapshot.activeId;
                }
                publish({ snapshot, loading: false, error: null });
                const running = snapshot.sessions.some(activeRun);
                if (running && !polling) polling = setInterval(() => {
                  void refresh();
                }, 750);
                if (!running && polling) {
                  clearInterval(polling);
                  polling = void 0;
                }
              } catch (error51) {
                if (alive && !(error51 instanceof DOMException && error51.name === "AbortError")) publish({ ...view, loading: false, error: error51 instanceof Error ? error51.message : t("Request failed") });
              } finally {
                flight = null;
              }
            })();
            await flight;
          }
          const subscribe = (fn) => {
            listeners.add(fn);
            return () => {
              listeners.delete(fn);
            };
          };
          ctx.effect(() => {
            void refresh();
            return () => {
              alive = false;
              if (polling) clearInterval(polling);
              controllers.forEach((controller) => controller.abort());
              controllers.clear();
              imageReaders.forEach((reader) => reader.abort());
              imageReaders.clear();
              imageListeners.clear();
              savedImageCache.clear();
              imageDraft = { images: [], reading: false, error: null };
              listeners.clear();
            };
          });
          function useLocale() {
            return useSyncExternalStore((fn) => ctx.locale.subscribe(fn), () => ctx.locale.getSnapshot(), () => ctx.locale.getSnapshot());
          }
          function Icon({ name = "debate", size = 18 }) {
            const paths = {
              debate: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M4 4h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-5 4V4Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 8h5M9 11h3M19 9h1v12l-4-3h-4" })),
              image: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "8", cy: "8", r: "1" }), /* @__PURE__ */ React.createElement("path", { d: "m3 17 6-6 4 4 3-3 5 5" })),
              plus: /* @__PURE__ */ React.createElement("path", { d: "M12 5v14M5 12h14" }),
              chevron: /* @__PURE__ */ React.createElement("path", { d: "m9 5 7 7-7 7" }),
              settings: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M4 7h16M4 17h16" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "7", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "15", cy: "17", r: "3" })),
              play: /* @__PURE__ */ React.createElement("path", { d: "m8 5 11 7-11 7V5Z" }),
              stop: /* @__PURE__ */ React.createElement("rect", { x: "6", y: "6", width: "12", height: "12", rx: "2" }),
              check: /* @__PURE__ */ React.createElement("path", { d: "m5 12 4 4L19 6" }),
              copy: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", { x: "8", y: "8", width: "12", height: "12", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M16 8V4H4v12h4" })),
              download: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" })),
              close: /* @__PURE__ */ React.createElement("path", { d: "m6 6 12 12M6 18 18 6" }),
              trash: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7" })),
              edit: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "m15 4 5 5M4 20l5-1L21 7l-5-5L4 14v6Z" })),
              up: /* @__PURE__ */ React.createElement("path", { d: "m6 14 6-6 6 6" }),
              down: /* @__PURE__ */ React.createElement("path", { d: "m6 10 6 6 6-6" }),
              clock: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7v5l3 2" })),
              alert: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "m12 3 10 18H2L12 3Z" }), /* @__PURE__ */ React.createElement("path", { d: "M12 9v5M12 17h.01" })),
              retry: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M3 11a9 9 0 1 1 3 8M3 4v7h7" })),
              globe: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z" })),
              spark: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" }))
            };
            return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, paths[name] || paths.debate);
          }
          function Button({ children, icon, className = "", ...props }) {
            return /* @__PURE__ */ React.createElement("button", { type: "button", className: `mdb-button ${className}`, ...props }, icon && /* @__PURE__ */ React.createElement(Icon, { name: icon }), /* @__PURE__ */ React.createElement("span", null, children));
          }
          function IconButton({ label, icon, ...props }) {
            return /* @__PURE__ */ React.createElement("button", { type: "button", className: "mdb-icon-button", title: label, "aria-label": label, ...props }, /* @__PURE__ */ React.createElement(Icon, { name: icon }));
          }
          function Switcher({ debate = false }) {
            const locale = useLocale();
            return /* @__PURE__ */ React.createElement("div", { className: "mdb-switch", role: "group", "aria-label": t("Model Debate"), dir: locale.active.startsWith("ar") ? "rtl" : "ltr" }, /* @__PURE__ */ React.createElement("button", { type: "button", "aria-pressed": !debate, onClick: () => ctx.layout.selectPanel(null) }, t("Chat")), /* @__PURE__ */ React.createElement("button", { type: "button", "aria-pressed": debate, onClick: () => ctx.layout.selectPanel("model-debate") }, /* @__PURE__ */ React.createElement(Icon, { size: 15 }), t("Debate")));
          }
          function SidebarEntry({ size = 20 }) {
            return /* @__PURE__ */ React.createElement("span", { className: "mdb-panel-entry" }, /* @__PURE__ */ React.createElement(Icon, { size }));
          }
          function Field({ label, hint, children, className = "" }) {
            const id = useId();
            return /* @__PURE__ */ React.createElement("div", { className: `mdb-field ${className}` }, /* @__PURE__ */ React.createElement("label", { htmlFor: id }, t(label)), React.isValidElement(children) ? React.cloneElement(children, { id, "aria-describedby": hint ? `${id}-hint` : void 0 }) : children, hint && /* @__PURE__ */ React.createElement("small", { id: `${id}-hint` }, t(hint)));
          }
          function Toggle({ label, hint, value, onChange }) {
            const id = useId();
            return /* @__PURE__ */ React.createElement("label", { className: "mdb-toggle-row", htmlFor: id }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, t(label)), hint && /* @__PURE__ */ React.createElement("small", null, t(hint))), /* @__PURE__ */ React.createElement("input", { id, type: "checkbox", checked: value, onChange: (event) => onChange(event.target.checked) }));
          }
          function Status({ status }) {
            return /* @__PURE__ */ React.createElement("span", { className: `mdb-status mdb-status-${status.replaceAll(" ", "-")}` }, /* @__PURE__ */ React.createElement("span", { className: "mdb-status-dot" }), t(status));
          }
          function Plain({ children, className = "" }) {
            return /* @__PURE__ */ React.createElement("div", { dir: "auto", className: `mdb-plaintext ${className}` }, children);
          }
          function ImageSupportBadge({ model }) {
            return /* @__PURE__ */ React.createElement("span", { className: `mdb-badge mdb-image-support mdb-image-support-${model?.imageSupport || "unknown"}` }, t(imageSupportLabel(model)));
          }
          function ModelSelect({ models, value, onChange, allowEmpty = false, participants, ...controlProps }) {
            const key = value ? modelKey(value) : "";
            const unavailable = !!value && !models.some((m) => modelKey(m) === key);
            const participantModels = participants?.filter((p) => p.enabled).map((p) => models.find((m) => modelKey(m) === modelKey(p))).filter((m) => !!m) || [];
            const option = (m) => /* @__PURE__ */ React.createElement("option", { key: modelKey(m), value: modelKey(m) }, m.name, " \xB7 ", m.providerName, " \xB7 ", t(imageSupportLabel(m)));
            return /* @__PURE__ */ React.createElement("select", { ...controlProps, value: key, onChange: (event) => {
              const found = models.find((m) => modelKey(m) === event.target.value);
              onChange(found ? { provider: found.provider, model: found.model } : null);
            } }, /* @__PURE__ */ React.createElement("option", { value: "", disabled: !allowEmpty }, t(allowEmpty ? "Automatic reviewer" : "Model required")), unavailable && /* @__PURE__ */ React.createElement("option", { value: key }, t("Unavailable selection"), ": ", value.provider, "/", value.model, " \xB7 ", t("Image support unknown")), participantModels.length > 0 && /* @__PURE__ */ React.createElement("optgroup", { label: t("From participants") }, participantModels.map(option)), participants ? /* @__PURE__ */ React.createElement("optgroup", { label: t("All models") }, models.map(option)) : models.map(option));
          }
          function SettingsEditor({ settings: s, models, presets, presetId, onPreset, setSettings, dirty, busy, onSave, onDialog, onApply }) {
            const update = (key, value) => setSettings({ ...s, [key]: value });
            const number4 = (key, label, hint, unit = "", nullable2 = false, min = 0, max) => {
              const value = s[key];
              const scale = unit === "s" ? 1e3 : 1;
              return /* @__PURE__ */ React.createElement(Field, { label: unit ? `${t(label)} (${t(unit === "s" ? "Seconds unit" : "Milliseconds unit")})` : label, hint, key }, /* @__PURE__ */ React.createElement("input", { type: "number", min: min / scale, max: max === void 0 ? void 0 : max / scale, step: unit === "s" ? 0.1 : 1, value: value === null ? "" : value / scale, placeholder: nullable2 ? t("Unlimited") : void 0, onChange: (event) => update(key, event.target.value === "" && nullable2 ? null : Math.round(Number(event.target.value) * scale)) }));
            };
            const providerKeys = Array.from(/* @__PURE__ */ new Set([...models.map((m) => m.provider), ...Object.keys(s.providerLimits), ...Object.keys(s.providerSpacingMs)])).sort();
            const perProvider = (key, label) => /* @__PURE__ */ React.createElement("div", { className: "mdb-provider-fields" }, /* @__PURE__ */ React.createElement("h4", null, t(label)), providerKeys.map((provider) => /* @__PURE__ */ React.createElement(Field, { key: provider, label: models.find((m) => m.provider === provider)?.providerName || provider }, /* @__PURE__ */ React.createElement("input", { type: "number", min: key === "providerLimits" ? 1 : 0, max: key === "providerLimits" ? 20 : 36e5, step: "1", value: s[key][provider] ?? "", placeholder: key === "providerLimits" ? String(s.concurrency) : "0", onChange: (event) => {
              const next = { ...s[key] };
              if (event.target.value === "") delete next[provider];
              else next[provider] = Number(event.target.value);
              update(key, next);
            } }))));
            const selectedPreset = presets.find((p) => p.id === presetId);
            const addParticipant = () => {
              const nextModel = models.find((m) => !s.participants.some((p) => modelKey(p) === modelKey(m)));
              if (!nextModel) return;
              update("participants", [...s.participants, { id: `p-${crypto.randomUUID()}`, provider: nextModel.provider, model: nextModel.model, enabled: true, role: "", instructions: "", options: {} }]);
            };
            const editParticipant = (id, patch) => update("participants", s.participants.map((p) => p.id === id ? { ...p, ...patch } : p));
            const move = (index, direction) => {
              const next = [...s.participants];
              [next[index], next[index + direction]] = [next[index + direction], next[index]];
              update("participants", next);
            };
            return /* @__PURE__ */ React.createElement("div", { className: "mdb-settings-editor" }, /* @__PURE__ */ React.createElement("section", { className: "mdb-settings-section mdb-presets" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-section-heading" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, t("Presets")), /* @__PURE__ */ React.createElement("p", null, t("Preset hint"))), /* @__PURE__ */ React.createElement(Icon, { name: "spark" })), /* @__PURE__ */ React.createElement("div", { className: "mdb-preset-bar" }, /* @__PURE__ */ React.createElement("select", { "aria-label": t("Choose preset"), value: presetId, onChange: (event) => onPreset(event.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, t("Choose preset")), presets.map((p) => /* @__PURE__ */ React.createElement("option", { key: p.id, value: p.id }, p.name))), /* @__PURE__ */ React.createElement(Button, { disabled: !selectedPreset || busy, onClick: () => selectedPreset && onApply(selectedPreset) }, t("Apply"))), /* @__PURE__ */ React.createElement("div", { className: "mdb-toolbar mdb-toolbar-wrap" }, /* @__PURE__ */ React.createElement(Button, { icon: "plus", disabled: busy, onClick: () => onDialog({ kind: "preset-save" }) }, t("Save preset")), selectedPreset && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconButton, { icon: "edit", label: t("Rename preset"), disabled: busy, onClick: () => onDialog({ kind: "preset-rename", id: selectedPreset.id, name: selectedPreset.name }) }), /* @__PURE__ */ React.createElement(IconButton, { icon: "copy", label: t("Duplicate preset"), disabled: busy, onClick: () => onDialog({ kind: "preset-duplicate", id: selectedPreset.id, name: `${selectedPreset.name} \u2014 ${t("Duplicate")}` }) }), /* @__PURE__ */ React.createElement(IconButton, { icon: "trash", label: t("Delete preset"), disabled: busy, onClick: () => onDialog({ kind: "preset-delete", id: selectedPreset.id, name: selectedPreset.name }) })))), /* @__PURE__ */ React.createElement("section", { className: "mdb-settings-section" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-section-heading" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, t("Participants"), " ", /* @__PURE__ */ React.createElement("span", { className: "mdb-count" }, s.participants.filter((p) => p.enabled).length, "/", s.participants.length)), /* @__PURE__ */ React.createElement("p", null, t("Distinct hint")))), /* @__PURE__ */ React.createElement("div", { className: "mdb-participants" }, s.participants.map((p, index) => {
              const model = models.find((m) => modelKey(m) === modelKey(p));
              return /* @__PURE__ */ React.createElement("article", { key: p.id, className: `mdb-participant ${!p.enabled ? "mdb-participant-disabled" : ""}` }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("span", { className: "mdb-avatar" }, index + 1), /* @__PURE__ */ React.createElement("span", { className: "mdb-participant-name", dir: "auto" }, model?.name || p.model || t("Model required")), /* @__PURE__ */ React.createElement("label", { className: "mdb-inline-toggle" }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: p.enabled, onChange: (event) => editParticipant(p.id, { enabled: event.target.checked }) }), /* @__PURE__ */ React.createElement("span", null, t("Enabled"))), /* @__PURE__ */ React.createElement("div", { className: "mdb-toolbar" }, /* @__PURE__ */ React.createElement(IconButton, { icon: "up", label: t("Move up"), disabled: index === 0, onClick: () => move(index, -1) }), /* @__PURE__ */ React.createElement(IconButton, { icon: "down", label: t("Move down"), disabled: index === s.participants.length - 1, onClick: () => move(index, 1) }), /* @__PURE__ */ React.createElement(IconButton, { icon: "close", label: t("Remove participant"), onClick: () => update("participants", s.participants.filter((row) => row.id !== p.id)) }))), /* @__PURE__ */ React.createElement(Field, { label: "Model" }, /* @__PURE__ */ React.createElement(ModelSelect, { models, value: p.provider && p.model ? p : null, onChange: (value) => value && editParticipant(p.id, { ...value, options: { ...p.options, reasoningEffort: void 0 } }) })), /* @__PURE__ */ React.createElement("div", { className: "mdb-model-identity" }, /* @__PURE__ */ React.createElement("small", { className: "mdb-identity", dir: "ltr" }, p.provider, " / ", p.model), /* @__PURE__ */ React.createElement(ImageSupportBadge, { model })), /* @__PURE__ */ React.createElement(Field, { label: "Role" }, /* @__PURE__ */ React.createElement("input", { value: p.role, maxLength: 120, placeholder: t("Role placeholder"), onChange: (event) => editParticipant(p.id, { role: event.target.value }) })), /* @__PURE__ */ React.createElement("details", { className: "mdb-participant-details" }, /* @__PURE__ */ React.createElement("summary", null, t("Instructions"), " & ", t("Generation options")), /* @__PURE__ */ React.createElement(Field, { label: "Instructions" }, /* @__PURE__ */ React.createElement("textarea", { rows: 3, dir: "auto", maxLength: 12e3, value: p.instructions, placeholder: t("Instructions placeholder"), onChange: (event) => editParticipant(p.id, { instructions: event.target.value }) })), /* @__PURE__ */ React.createElement("div", { className: "mdb-form-grid" }, /* @__PURE__ */ React.createElement(Field, { label: "Max tokens", hint: "Max tokens hint" }, /* @__PURE__ */ React.createElement("input", { type: "number", min: 64, max: 32768, step: 1, value: p.options.maxTokens ?? "", placeholder: t("Automatic cap"), onChange: (event) => editParticipant(p.id, { options: { ...p.options, maxTokens: event.target.value === "" ? void 0 : Number(event.target.value) } }) })), /* @__PURE__ */ React.createElement(Field, { label: "Reasoning effort", hint: "Reasoning hint" }, /* @__PURE__ */ React.createElement("select", { disabled: !model?.reasoningEfforts.length && !p.options.reasoningEffort, value: p.options.reasoningEffort || "", onChange: (event) => editParticipant(p.id, { options: { ...p.options, reasoningEffort: event.target.value || void 0 } }) }, /* @__PURE__ */ React.createElement("option", { value: "" }, t(model?.reasoningEfforts.length ? "Provider default" : "Not advertised")), p.options.reasoningEffort && !model?.reasoningEfforts.includes(p.options.reasoningEffort) && /* @__PURE__ */ React.createElement("option", { value: p.options.reasoningEffort }, t("Unavailable selection"), ": ", p.options.reasoningEffort), model?.reasoningEfforts.map((effort) => /* @__PURE__ */ React.createElement("option", { key: effort, value: effort }, effort))))), /* @__PURE__ */ React.createElement("div", { className: "mdb-form-grid mdb-unsupported" }, /* @__PURE__ */ React.createElement(Field, { label: "Temperature" }, /* @__PURE__ */ React.createElement("input", { disabled: true, placeholder: "\u2014" })), /* @__PURE__ */ React.createElement(Field, { label: "Top p" }, /* @__PURE__ */ React.createElement("input", { disabled: true, placeholder: "\u2014" })), /* @__PURE__ */ React.createElement(Field, { label: "Stop sequences" }, /* @__PURE__ */ React.createElement("input", { disabled: true, placeholder: "\u2014" }))), /* @__PURE__ */ React.createElement("small", null, t("Unsupported options"))));
            })), /* @__PURE__ */ React.createElement(Button, { icon: "plus", className: "mdb-add-participant", disabled: s.participants.length >= 20 || !models.some((m) => !s.participants.some((p) => modelKey(p) === modelKey(m))), onClick: addParticipant }, t("Add participant"))), /* @__PURE__ */ React.createElement("section", { className: "mdb-settings-section" }, /* @__PURE__ */ React.createElement("h3", null, t("Debate format")), /* @__PURE__ */ React.createElement(Field, { label: "Mode", hint: "Mode hint" }, /* @__PURE__ */ React.createElement("select", { value: s.mode, onChange: (event) => update("mode", event.target.value) }, ["parallel", "sequential", "hybrid"].map((value) => /* @__PURE__ */ React.createElement("option", { key: value, value }, t(value))))), /* @__PURE__ */ React.createElement("div", { className: "mdb-form-grid" }, number4("rounds", "Rounds", "Rounds hint", "", false, 1, 30), /* @__PURE__ */ React.createElement(Field, { label: "Speaking order" }, /* @__PURE__ */ React.createElement("select", { value: s.speakingOrder, onChange: (event) => update("speakingOrder", event.target.value) }, ["configured", "rotating"].map((value) => /* @__PURE__ */ React.createElement("option", { key: value, value }, t(value)))))), /* @__PURE__ */ React.createElement(Toggle, { label: "Early stop", hint: "Early stop hint", value: s.earlyStop, onChange: (value) => update("earlyStop", value) }), /* @__PURE__ */ React.createElement(Field, { label: "Output language", hint: "Output language hint" }, /* @__PURE__ */ React.createElement("select", { value: s.language, onChange: (event) => update("language", event.target.value) }, ["auto", "ar", "en"].map((value) => /* @__PURE__ */ React.createElement("option", { key: value, value }, t(value)))))), /* @__PURE__ */ React.createElement("section", { className: "mdb-settings-section" }, /* @__PURE__ */ React.createElement("h3", null, t("Final reviewer")), /* @__PURE__ */ React.createElement(Field, { label: "Model", hint: "Reviewer hint" }, /* @__PURE__ */ React.createElement(ModelSelect, { models, participants: s.participants, value: s.reviewer, onChange: (value) => update("reviewer", value), allowEmpty: true })), /* @__PURE__ */ React.createElement(Field, { label: "Review instructions", hint: "Review instructions hint" }, /* @__PURE__ */ React.createElement("textarea", { rows: 3, maxLength: 12e3, value: s.reviewInstructions, dir: "auto", onChange: (event) => update("reviewInstructions", event.target.value) }))), /* @__PURE__ */ React.createElement("section", { className: "mdb-settings-section" }, /* @__PURE__ */ React.createElement("h3", null, t("Time budgets")), /* @__PURE__ */ React.createElement("div", { className: "mdb-form-grid" }, number4("overallMs", "Overall deadline", "Overall hint", "s", false, 200, 864e5), number4("roundMs", "Round deadline", void 0, "s", false, 100, 36e5), number4("requestMs", "Request timeout", void 0, "s", false, 100, 36e5), number4("reserveReviewMs", "Review reservation", "Review reservation hint", "s", false, 100, 36e5), number4("reviewMs", "Review timeout", void 0, "s", false, 100, 36e5))), /* @__PURE__ */ React.createElement("details", { className: "mdb-settings-section mdb-advanced" }, /* @__PURE__ */ React.createElement("summary", null, t("Advanced settings")), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h3", null, t("Reply routing")), /* @__PURE__ */ React.createElement(Toggle, { label: "Direct replies", hint: "Direct replies hint", value: s.directReplies, onChange: (value) => update("directReplies", value) }), number4("addressCount", "Address count", void 0, "", false, 1, 19), /* @__PURE__ */ React.createElement(Toggle, { label: "Quoted context", hint: "Quoted context hint", value: s.quotedContext, onChange: (value) => update("quotedContext", value) })), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h3", null, t("Concurrency limits")), /* @__PURE__ */ React.createElement("div", { className: "mdb-form-grid" }, number4("concurrency", "Global concurrency", "Concurrency hint", "", false, 1, 20), number4("queueLimit", "Queue limit", "Queue hint", "", false, 1, 100)), perProvider("providerLimits", "Provider concurrency"), /* @__PURE__ */ React.createElement("small", null, t("Provider concurrency hint"))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h3", null, t("Reply limits")), /* @__PURE__ */ React.createElement("div", { className: "mdb-form-grid" }, number4("maxRepliesPerParticipant", "Participant reply limit", void 0, "", false, 1, 30), number4("maxReplies", "Total reply limit", void 0, "", false, 2, 600), number4("responseChars", "Response characters", void 0, "", false, 200, 3e4), number4("contextChars", "Context characters", "Context hint", "", false, 2e3, 5e5))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h3", null, t("Pacing")), /* @__PURE__ */ React.createElement("p", null, t("Pacing hint")), /* @__PURE__ */ React.createElement("div", { className: "mdb-form-grid" }, number4("roundCooldownMs", "Round cooldown", void 0, "ms", false, 0, 36e5), number4("globalSpacingMs", "Global spacing", void 0, "ms", false, 0, 36e5), number4("turnDelayMs", "Turn delay", void 0, "ms", false, 0, 36e5)), perProvider("providerSpacingMs", "Provider spacing")), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h3", null, t("Retries")), /* @__PURE__ */ React.createElement("p", null, t("Retries hint")), /* @__PURE__ */ React.createElement("div", { className: "mdb-form-grid" }, number4("retries", "Retry count", void 0, "", false, 0, 5), number4("backoffMs", "Initial backoff", void 0, "ms", false, 0, 6e4), number4("backoffMaxMs", "Maximum backoff", void 0, "ms", false, 0, 3e5))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h3", null, t("Usage budget")), number4("tokenBudget", "Token budget", "Token budget hint", "", true, 1e3, 1e7), /* @__PURE__ */ React.createElement(Field, { label: "Cost budget", hint: "Cost unavailable" }, /* @__PURE__ */ React.createElement("input", { disabled: true, value: "\u2014", readOnly: true })))), /* @__PURE__ */ React.createElement("div", { className: "mdb-settings-save" }, /* @__PURE__ */ React.createElement("span", null, dirty ? t("Unsaved settings") : t("Configured")), /* @__PURE__ */ React.createElement(Button, { icon: "check", className: "mdb-button-primary", disabled: busy, onClick: onSave }, t("Save settings"))));
          }
          function Countdown({ session }) {
            const [now, setNow] = useState(Date.now());
            const running = activeRun(session);
            useEffect(() => {
              if (!running) return;
              const timer = setInterval(() => setNow(Date.now()), 250);
              return () => clearInterval(timer);
            }, [running]);
            const at = running ? now : session.endedAt || session.updatedAt;
            const duration3 = (ms) => {
              const seconds = Math.max(0, Math.ceil(ms / 1e3));
              return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
            };
            const percent = Math.min(100, Math.max(0, (at - session.startedAt) / Math.max(1, session.deadline - session.startedAt) * 100));
            return /* @__PURE__ */ React.createElement("div", { className: "mdb-timers" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-timer-pills" }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 15 }), t("Elapsed"), " ", /* @__PURE__ */ React.createElement("b", { dir: "ltr" }, duration3(at - session.startedAt))), running && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", null, t("Overall remaining"), " ", /* @__PURE__ */ React.createElement("b", { dir: "ltr" }, duration3(session.deadline - now))), /* @__PURE__ */ React.createElement("span", null, t("Stage remaining"), " ", /* @__PURE__ */ React.createElement("b", { dir: "ltr" }, duration3(session.stageDeadline - now))))), /* @__PURE__ */ React.createElement("div", { className: "mdb-progress", role: "progressbar", "aria-label": t("Overall deadline"), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.floor(percent) }, /* @__PURE__ */ React.createElement("span", { style: { width: `${percent}%` } })));
          }
          function MessageCard({ message: m, session }) {
            const [quote, setQuote] = useState(null);
            const participantIndex = session.settings.participants.findIndex((p) => p.id === m.participantId);
            const linked = session.messages.filter((item) => m.replyTo.includes(item.id));
            return /* @__PURE__ */ React.createElement("article", { className: `mdb-message ${m.incomplete ? "mdb-message-incomplete" : ""}`, id: `mdb-message-${m.id}`, tabIndex: -1 }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("span", { className: "mdb-avatar" }, participantIndex >= 0 ? participantIndex + 1 : /* @__PURE__ */ React.createElement(Icon, { size: 16 })), /* @__PURE__ */ React.createElement("div", { className: "mdb-message-actor" }, /* @__PURE__ */ React.createElement("strong", { dir: "auto" }, m.model), /* @__PURE__ */ React.createElement("small", { dir: "auto" }, m.role || m.provider, " \xB7 ", m.provider)), /* @__PURE__ */ React.createElement("time", { dateTime: new Date(m.timestamp).toISOString() }, new Date(m.timestamp).toLocaleTimeString(ctx.locale.getSnapshot().active, { hour: "2-digit", minute: "2-digit" })), m.incomplete && /* @__PURE__ */ React.createElement("span", { className: "mdb-badge mdb-badge-warn" }, t("Incomplete"))), linked.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mdb-reply-links" }, /* @__PURE__ */ React.createElement("span", null, t("Replies to")), linked.map((source) => /* @__PURE__ */ React.createElement("span", { key: source.id }, /* @__PURE__ */ React.createElement("a", { href: `#mdb-message-${source.id}`, onClick: (event) => {
              event.preventDefault();
              document.getElementById(`mdb-message-${source.id}`)?.focus({ preventScroll: false });
            } }, source.model, " \xB7 ", t("Round"), " ", source.round), /* @__PURE__ */ React.createElement("button", { type: "button", "aria-expanded": quote === source.id, onClick: () => setQuote(quote === source.id ? null : source.id) }, t("Quoted source"))))), quote && /* @__PURE__ */ React.createElement("blockquote", { className: "mdb-quote" }, /* @__PURE__ */ React.createElement(Plain, null, readableText(session.messages.find((source) => source.id === quote)))), /* @__PURE__ */ React.createElement(Plain, null, readableText(m) || t("No text")), m.parseWarning && /* @__PURE__ */ React.createElement("p", { className: "mdb-inline-warning" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert", size: 14 }), t("Parse warning"), ": ", m.parseWarning), (m.claims.length + m.objections.length + m.revisions.length + m.evidence.length + m.unresolved.length > 0 || m.agreement) && /* @__PURE__ */ React.createElement("details", { className: "mdb-message-details" }, /* @__PURE__ */ React.createElement("summary", null, t("Structured details")), m.claims.length > 0 && /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h4", null, t("Claims")), m.claims.map((claim) => /* @__PURE__ */ React.createElement(Plain, { key: claim.id }, /* @__PURE__ */ React.createElement("b", null, claim.id), " \u2014 ", claim.text))), m.objections.length > 0 && /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h4", null, t("Objections")), m.objections.map((objection, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "mdb-objection" }, /* @__PURE__ */ React.createElement(Plain, null, /* @__PURE__ */ React.createElement("b", null, objection.claimId), " \u2014 ", objection.text), objection.evidence && /* @__PURE__ */ React.createElement(Plain, null, t("Evidence"), ": ", objection.evidence), objection.verification && /* @__PURE__ */ React.createElement(Plain, null, t("Suggested verification"), ": ", objection.verification)))), m.revisions.length > 0 && /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h4", null, t("Revisions")), m.revisions.map((revision, i) => /* @__PURE__ */ React.createElement(Plain, { key: i }, /* @__PURE__ */ React.createElement("b", null, revision.claimId), " \u2014 ", revision.text))), m.evidence.length > 0 && /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h4", null, t("Evidence")), m.evidence.map((evidence, i) => /* @__PURE__ */ React.createElement(Plain, { key: i }, evidence))), m.unresolved.length > 0 && /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h4", null, t("Unresolved items")), m.unresolved.map((text2, i) => /* @__PURE__ */ React.createElement(Plain, { key: i }, text2))), m.agreement && /* @__PURE__ */ React.createElement("p", null, t("Agreement"))), /* @__PURE__ */ React.createElement("details", { className: "mdb-raw" }, /* @__PURE__ */ React.createElement("summary", null, t("Original response")), /* @__PURE__ */ React.createElement(Plain, null, m.text)));
          }
          function TaskActivity({ session }) {
            const [expanded, setExpanded] = useState(false);
            const current = session.tasks.filter((task) => ["queued", "waiting for cooldown", "responding"].includes(task.status));
            const shown = expanded ? session.tasks : current.length ? current : session.tasks.slice(-Math.min(session.settings.participants.length, 6));
            const taskName = (task) => task.participantId === "reviewer" ? session.settings.reviewer?.model || t("Final reviewer") : session.settings.participants.find((p) => p.id === task.participantId)?.model || task.participantId;
            return /* @__PURE__ */ React.createElement("section", { className: "mdb-activity" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-section-heading" }, /* @__PURE__ */ React.createElement("h3", null, t("Tasks"), " ", /* @__PURE__ */ React.createElement("span", { className: "mdb-count" }, session.tasks.length)), /* @__PURE__ */ React.createElement("button", { type: "button", className: "mdb-text-button", "aria-expanded": expanded, onClick: () => setExpanded(!expanded) }, expanded ? t("Close") : t("Run details"))), shown.length === 0 ? /* @__PURE__ */ React.createElement("p", null, t("No tasks")) : /* @__PURE__ */ React.createElement("div", { className: "mdb-task-list" }, shown.map((task) => /* @__PURE__ */ React.createElement("div", { key: task.id, className: "mdb-task" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-task-line" }, /* @__PURE__ */ React.createElement("strong", { dir: "auto" }, taskName(task)), /* @__PURE__ */ React.createElement(Status, { status: task.status }), /* @__PURE__ */ React.createElement("small", null, t("Round"), " ", task.round, " \xB7 ", t("Attempt"), " ", task.attempt)), task.error && /* @__PURE__ */ React.createElement(Plain, { className: "mdb-error-text" }, t("Request error"), ": ", task.error), task.partial && /* @__PURE__ */ React.createElement("details", { open: task.status === "responding", className: "mdb-preview" }, /* @__PURE__ */ React.createElement("summary", null, t("Live preview")), /* @__PURE__ */ React.createElement(Plain, null, task.partial), /* @__PURE__ */ React.createElement("small", null, t("Partial output")))))));
          }
          function Issues({ session }) {
            return /* @__PURE__ */ React.createElement("details", { className: "mdb-issues" }, /* @__PURE__ */ React.createElement("summary", null, t("Issues"), " ", /* @__PURE__ */ React.createElement("span", { className: "mdb-count" }, session.issues.length)), /* @__PURE__ */ React.createElement("p", null, t("Issues hint")), session.issues.length === 0 ? /* @__PURE__ */ React.createElement("p", null, t("No issues")) : session.issues.map((issue2) => /* @__PURE__ */ React.createElement("article", { key: issue2.id, className: "mdb-issue" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-section-heading" }, /* @__PURE__ */ React.createElement("strong", { dir: "auto" }, issue2.claimId), /* @__PURE__ */ React.createElement("span", { className: `mdb-badge ${issue2.resolved ? "mdb-badge-success" : "mdb-badge-warn"}` }, t(issue2.resolved ? "Participant-resolved" : "Unverified"))), /* @__PURE__ */ React.createElement(Plain, null, issue2.text), /* @__PURE__ */ React.createElement("small", null, t("Raised by"), ": ", session.settings.participants.find((p) => p.id === issue2.raisedBy)?.model || issue2.raisedBy), issue2.evidence && /* @__PURE__ */ React.createElement(Plain, null, t("Evidence"), ": ", issue2.evidence), issue2.verification && /* @__PURE__ */ React.createElement(Plain, null, t("Suggested verification"), ": ", issue2.verification), issue2.resolution && /* @__PURE__ */ React.createElement(Plain, null, t("Resolution"), ": ", issue2.resolution))));
          }
          function SavedImage({ sessionId, image, imageIndex }) {
            const locale = useLocale();
            const [preview, setPreview] = useState(null);
            const [error51, setError] = useState(false);
            const [retry, setRetry] = useState(0);
            useEffect(() => {
              let current = true;
              const cacheKey = JSON.stringify([sessionId, imageIndex, image.attachmentId]);
              const cached2 = savedImageCache.get(cacheKey);
              setPreview(cached2 || null);
              setError(false);
              if (cached2) return () => {
                current = false;
              };
              void request("image", { id: sessionId, imageIndex }).then((result) => {
                if (!current || !alive) return;
                if (!result || typeof result !== "object" || !("mediaType" in result) || !("data" in result)) throw new Error("Invalid image response");
                const checked = safeImageDataUrl(result.mediaType, result.data);
                if (!checked || result.mediaType !== image.mediaType || checked.bytes !== image.bytes) throw new Error("Invalid image response");
                if (previewCacheSession === sessionId && savedImageCache.size < MAX_IMAGES) savedImageCache.set(cacheKey, checked.url);
                setPreview(checked.url);
              }).catch(() => {
                if (current && alive) setError(true);
              });
              return () => {
                current = false;
              };
            }, [sessionId, imageIndex, image.attachmentId, retry]);
            const label = image.name || `${t("Image")} ${imageIndex + 1}`;
            return /* @__PURE__ */ React.createElement("figure", { className: "mdb-saved-image" }, preview ? /* @__PURE__ */ React.createElement("details", null, /* @__PURE__ */ React.createElement("summary", null, /* @__PURE__ */ React.createElement("img", { src: preview, alt: label }), /* @__PURE__ */ React.createElement("span", null, t("Expand image"))), /* @__PURE__ */ React.createElement("img", { className: "mdb-image-original", src: preview, alt: label })) : /* @__PURE__ */ React.createElement("div", { className: "mdb-image-placeholder", role: "status" }, t(error51 ? "Image preview failed" : "Loading image"), error51 && /* @__PURE__ */ React.createElement(Button, { icon: "retry", onClick: () => setRetry((value) => value + 1) }, t("Retry"))), /* @__PURE__ */ React.createElement("figcaption", null, /* @__PURE__ */ React.createElement("strong", { dir: "auto" }, label), /* @__PURE__ */ React.createElement("small", { dir: "ltr" }, image.width, " \xD7 ", image.height, " \xB7 ", formatBytes(image.bytes, locale.active), " \xB7 ", image.mediaType), image.originalDimensions && /* @__PURE__ */ React.createElement("small", null, t("Original dimensions"), ": ", /* @__PURE__ */ React.createElement("bdi", null, image.originalDimensions.width, " \xD7 ", image.originalDimensions.height))));
          }
          function SessionImages({ session }) {
            if (!session.images?.length) return null;
            return /* @__PURE__ */ React.createElement("section", { className: "mdb-session-images", "aria-label": t("Question images") }, /* @__PURE__ */ React.createElement("h3", null, t("Question images"), " ", /* @__PURE__ */ React.createElement("span", { className: "mdb-count" }, session.images.length)), /* @__PURE__ */ React.createElement("div", { className: "mdb-image-grid" }, session.images.map((image, imageIndex) => /* @__PURE__ */ React.createElement(SavedImage, { key: `${session.id}-${image.attachmentId}-${imageIndex}`, sessionId: session.id, image, imageIndex }))), /* @__PURE__ */ React.createElement("small", null, t("Image export note")));
          }
          function ImageComposer({ draft: images, policy, busy }) {
            const locale = useLocale();
            const input = useRef(null);
            return /* @__PURE__ */ React.createElement("section", { className: "mdb-image-composer", "aria-label": t("Question images"), "aria-busy": images.reading }, /* @__PURE__ */ React.createElement("input", { ref: input, className: "mdb-sr-only", type: "file", multiple: true, accept: "image/png,image/jpeg,image/webp,image/gif", "aria-label": t("Add images"), disabled: busy || images.reading || !policy.available, onChange: (event) => {
              const files = Array.from(event.target.files || []);
              event.target.value = "";
              void addImageFiles(files, policy);
            } }), /* @__PURE__ */ React.createElement("div", { className: "mdb-image-toolbar" }, /* @__PURE__ */ React.createElement(Button, { icon: "image", disabled: busy || images.reading || !policy.available, onClick: () => input.current?.click() }, t("Add images")), /* @__PURE__ */ React.createElement("small", null, t("Image limits", { count: policy.maxImages, each: formatBytes(policy.maxImageBytes, locale.active), total: formatBytes(policy.maxTotalBytes, locale.active) })), images.images.length > 0 && /* @__PURE__ */ React.createElement(Button, { disabled: busy || images.reading, onClick: () => publishImageDraft({ images: [], reading: false, error: null }) }, t("Clear images"))), !policy.available && /* @__PURE__ */ React.createElement("small", null, t("Images unavailable")), images.images.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "mdb-image-grid" }, images.images.map((image, index) => /* @__PURE__ */ React.createElement("figure", { className: "mdb-draft-image", key: image.id }, /* @__PURE__ */ React.createElement("img", { src: image.preview, alt: image.encoded.name || `${t("Image")} ${index + 1}` }), /* @__PURE__ */ React.createElement("figcaption", null, /* @__PURE__ */ React.createElement("strong", { dir: "auto" }, image.encoded.name || `${t("Image")} ${index + 1}`), /* @__PURE__ */ React.createElement("small", null, formatBytes(image.bytes, locale.active))), /* @__PURE__ */ React.createElement(IconButton, { label: `${t("Remove image")}: ${image.encoded.name || index + 1}`, icon: "close", disabled: busy || images.reading, onClick: () => publishImageDraft({ ...imageDraft, images: imageDraft.images.filter((item) => item.id !== image.id), error: null }) })))), /* @__PURE__ */ React.createElement("p", { className: "mdb-image-summary" }, t("Image selection summary", { count: images.images.length, size: formatBytes(images.images.reduce((sum, image) => sum + image.bytes, 0), locale.active) }))), /* @__PURE__ */ React.createElement("p", { className: "mdb-image-privacy" }, t("Image privacy note")), /* @__PURE__ */ React.createElement("small", null, t("Image input hint")), images.reading && /* @__PURE__ */ React.createElement("p", { role: "status", "aria-live": "polite" }, t("Reading images")), images.error && /* @__PURE__ */ React.createElement("p", { className: "mdb-error-text", role: "alert" }, images.error));
          }
          function SessionView({ session: s, busy, act, onDialog, onLoad, notify }) {
            const [copied, setCopied] = useState(false);
            const running = activeRun(s);
            useEffect(() => {
              setCopied(false);
            }, [s.id]);
            const copy = async () => {
              try {
                await navigator.clipboard.writeText(s.final?.text || "");
                setCopied(true);
              } catch {
                notify(t("Browser copy failed"));
              }
            };
            const exportRun = async (format) => {
              const result = await act("export", { id: s.id, format });
              if (!result) return;
              const url2 = URL.createObjectURL(new Blob([result.content], { type: result.mime }));
              const a = document.createElement("a");
              a.href = url2;
              a.download = result.filename;
              a.click();
              URL.revokeObjectURL(url2);
            };
            let previousRound;
            return /* @__PURE__ */ React.createElement("div", { className: "mdb-session-view" }, /* @__PURE__ */ React.createElement("section", { className: "mdb-run-heading" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-toolbar mdb-toolbar-wrap" }, /* @__PURE__ */ React.createElement(Status, { status: s.status }), /* @__PURE__ */ React.createElement("span", { className: "mdb-muted" }, t("Round"), " ", s.round, "/", s.settings.rounds, " \xB7 ", t("Stage"), ": ", t(s.stage))), /* @__PURE__ */ React.createElement("h1", { dir: "auto" }, s.title), /* @__PURE__ */ React.createElement("details", { className: "mdb-question-detail", open: s.question.length < 350 }, /* @__PURE__ */ React.createElement("summary", null, t("Question label")), /* @__PURE__ */ React.createElement(Plain, null, s.question)), /* @__PURE__ */ React.createElement(SessionImages, { session: s }), /* @__PURE__ */ React.createElement(Countdown, { session: s }), /* @__PURE__ */ React.createElement("div", { className: "mdb-run-actions" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-toolbar mdb-toolbar-wrap" }, running ? /* @__PURE__ */ React.createElement(Button, { icon: "stop", className: "mdb-button-danger", disabled: busy, onClick: () => onDialog({ kind: "stop", id: s.id }) }, t("Stop")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { icon: "spark", className: "mdb-button-primary", title: t("Review hint"), disabled: busy || !s.messages.length, onClick: () => {
              void act("review", { id: s.id });
            } }, t("Review now")), /* @__PURE__ */ React.createElement(Button, { icon: "retry", title: t("Run again hint"), disabled: busy, onClick: () => {
              void act("rerun", { id: s.id });
            } }, t("Run again"))), /* @__PURE__ */ React.createElement("details", { className: "mdb-export" }, /* @__PURE__ */ React.createElement("summary", null, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 16 }), t("Export")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, { disabled: busy, onClick: () => {
              void exportRun("json");
            } }, t("Export JSON")), /* @__PURE__ */ React.createElement(Button, { disabled: busy, onClick: () => {
              void exportRun("markdown");
            } }, t("Export Markdown"))))), /* @__PURE__ */ React.createElement("small", null, s.messages.length, " ", t("Messages"))), s.stopReason && /* @__PURE__ */ React.createElement(Plain, { className: "mdb-stop-reason" }, s.stopReason)), s.final ? /* @__PURE__ */ React.createElement("section", { className: "mdb-final" }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", { className: "mdb-final-title" }, /* @__PURE__ */ React.createElement("span", { className: "mdb-final-mark" }, /* @__PURE__ */ React.createElement(Icon, { name: "spark", size: 22 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, t("Final answer")), /* @__PURE__ */ React.createElement("small", { dir: "auto" }, s.final.model, " \xB7 ", s.final.provider))), /* @__PURE__ */ React.createElement(Button, { icon: copied ? "check" : "copy", onClick: () => {
              void copy();
            } }, t(copied ? "Copied" : "Copy final"))), s.final.incomplete && /* @__PURE__ */ React.createElement("span", { className: "mdb-badge mdb-badge-warn" }, t("Incomplete")), /* @__PURE__ */ React.createElement(Plain, null, s.final.text), /* @__PURE__ */ React.createElement("footer", null, t("Final caveat"))) : !running && /* @__PURE__ */ React.createElement("section", { className: "mdb-no-final" }, /* @__PURE__ */ React.createElement(Icon, { name: "spark" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, t("No final")), /* @__PURE__ */ React.createElement("p", null, t("No final hint")))), s.reviewError && /* @__PURE__ */ React.createElement("div", { className: "mdb-alert mdb-alert-error" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, t("Reviewer error")), /* @__PURE__ */ React.createElement(Plain, null, s.reviewError))), /* @__PURE__ */ React.createElement(TaskActivity, { session: s }), /* @__PURE__ */ React.createElement(Issues, { session: s }), /* @__PURE__ */ React.createElement("details", { className: "mdb-transcript", open: !s.final }, /* @__PURE__ */ React.createElement("summary", null, /* @__PURE__ */ React.createElement("h2", null, t("Transcript")), /* @__PURE__ */ React.createElement("span", { className: "mdb-count" }, s.messages.length)), s.messages.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "mdb-empty-transcript" }, /* @__PURE__ */ React.createElement("span", { className: "mdb-orbit" }, /* @__PURE__ */ React.createElement(Icon, { size: 28 })), /* @__PURE__ */ React.createElement("h3", null, t("Awaiting contributions")), /* @__PURE__ */ React.createElement("p", null, t("Awaiting hint"))), s.messages.map((message) => {
              const separator = previousRound !== message.round;
              previousRound = message.round;
              return /* @__PURE__ */ React.createElement(React.Fragment, { key: message.id }, separator && /* @__PURE__ */ React.createElement("div", { className: "mdb-round-separator" }, /* @__PURE__ */ React.createElement("span", null, t("Round"), " ", message.round), /* @__PURE__ */ React.createElement("i", null)), /* @__PURE__ */ React.createElement(MessageCard, { message, session: s }));
            })), /* @__PURE__ */ React.createElement("details", { className: "mdb-run-details" }, /* @__PURE__ */ React.createElement("summary", null, t("Run details")), /* @__PURE__ */ React.createElement("div", { className: "mdb-usage" }, /* @__PURE__ */ React.createElement("h3", null, t("Usage")), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, t("Input tokens")), /* @__PURE__ */ React.createElement("dd", null, s.usage.inputTokens.toLocaleString())), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, t("Output tokens")), /* @__PURE__ */ React.createElement("dd", null, s.usage.outputTokens.toLocaleString())), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, t("Budget accounted")), /* @__PURE__ */ React.createElement("dd", null, s.budgetUsed.toLocaleString(), s.budgetEstimated && /* @__PURE__ */ React.createElement("small", null, " \xB7 ", t("Estimated"))))), s.usageUnavailable && /* @__PURE__ */ React.createElement("small", null, t("Usage unavailable")), s.compression.length > 0 && /* @__PURE__ */ React.createElement("p", null, t("Context compressed"), " \xB7 ", s.compression.length, " ", t("Compression events"))), /* @__PURE__ */ React.createElement("details", null, /* @__PURE__ */ React.createElement("summary", null, t("Original settings")), /* @__PURE__ */ React.createElement("p", null, t("Original settings hint")), /* @__PURE__ */ React.createElement(Button, { onClick: () => onLoad(s.settings) }, t("Load run settings")), /* @__PURE__ */ React.createElement("pre", { dir: "ltr" }, JSON.stringify(s.settings, null, 2))), /* @__PURE__ */ React.createElement("details", null, /* @__PURE__ */ React.createElement("summary", null, t("Tasks")), s.requests.map((item, index) => /* @__PURE__ */ React.createElement("details", { key: `${item.taskId}-${index}` }, /* @__PURE__ */ React.createElement("summary", { dir: "auto" }, item.config.model, " \xB7 ", t("Attempt"), " ", item.attempt), /* @__PURE__ */ React.createElement(Plain, null, item.system), /* @__PURE__ */ React.createElement(Plain, null, item.prompt), /* @__PURE__ */ React.createElement("pre", { dir: "ltr" }, JSON.stringify(item.config, null, 2)))))));
          }
          function Dialog({ state, busy, onClose, onConfirm }) {
            const ref = useRef(null);
            const titleId = useId();
            const [value, setValue] = useState(state.name || "");
            const input = state.kind === "rename" || ["preset-save", "preset-rename", "preset-duplicate"].includes(state.kind);
            const titleKey = { rename: "Rename", delete: "Delete debate", stop: "Stop debate", "preset-save": "Save preset", "preset-rename": "Rename preset", "preset-duplicate": "Duplicate preset", "preset-delete": "Delete preset" }[state.kind];
            useEffect(() => {
              const dialog = ref.current;
              const previous = document.activeElement;
              dialog?.showModal();
              return () => {
                dialog?.close();
                if (previous?.isConnected) previous.focus();
              };
            }, []);
            return /* @__PURE__ */ React.createElement("dialog", { ref, className: "mdb-dialog", "aria-labelledby": titleId, onCancel: (event) => {
              event.preventDefault();
              if (!busy) onClose();
            }, onClick: (event) => {
              if (event.target === ref.current && !busy) {
                const rect = ref.current.getBoundingClientRect();
                if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
              }
            } }, /* @__PURE__ */ React.createElement("form", { onSubmit: (event) => {
              event.preventDefault();
              void onConfirm(value.trim());
            } }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("h2", { id: titleId }, t(titleKey)), /* @__PURE__ */ React.createElement(IconButton, { icon: "close", label: t("Close"), disabled: busy, onClick: onClose })), input ? /* @__PURE__ */ React.createElement(Field, { label: state.kind === "rename" ? "New title" : "Preset name" }, /* @__PURE__ */ React.createElement("input", { autoFocus: true, required: true, maxLength: state.kind === "rename" ? 160 : 100, value, dir: "auto", onChange: (event) => setValue(event.target.value) })) : /* @__PURE__ */ React.createElement("p", null, t(state.kind === "delete" ? "Delete warning" : state.kind === "stop" ? "Stop warning" : "Delete preset warning")), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement(Button, { disabled: busy, onClick: onClose }, t("Cancel")), /* @__PURE__ */ React.createElement("button", { type: "submit", disabled: busy || input && !value.trim(), className: `mdb-button ${input ? "mdb-button-primary" : "mdb-button-danger"}` }, busy ? t("Working") : t(input ? "Save" : state.kind === "stop" ? "Stop" : "Delete")))));
          }
          function App() {
            const state = useSyncExternalStore(subscribe, () => view, () => view);
            const locale = useLocale();
            const rtl = locale.active.startsWith("ar");
            const snapshot = state.snapshot;
            const [draft, setDraft] = useState(() => settingsDraft);
            const [question, setQuestion] = useState(() => composeDraft);
            const images = useSyncExternalStore(subscribeImages, () => imageDraft, () => imageDraft);
            const imagePolicy = effectiveImagePolicy(snapshot?.imagePolicy);
            useEffect(() => {
              settingsDraft = draft;
            }, [draft]);
            useEffect(() => {
              composeDraft = question;
            }, [question]);
            const [busy, setBusy] = useState(false);
            const [notice, setNotice] = useState(null);
            const [dialog, setDialog] = useState(null);
            const [settingsOpen, setSettingsOpen] = useState(false);
            const [historyOpen, setHistoryOpen] = useState(false);
            const [search, setSearch] = useState("");
            const [presetId, setPresetId] = useState("");
            const [attempted, setAttempted] = useState(false);
            const composerRef = useRef(null);
            useEffect(() => {
              void refresh();
            }, []);
            useEffect(() => {
              if (snapshot && !snapshot.activeId) composerRef.current?.focus();
            }, [snapshot?.activeId]);
            useEffect(() => {
              if (!snapshot) return;
              const next = JSON.stringify(snapshot.settings);
              const baseline = settingsBaseline;
              if (next !== baseline || !draft) setDraft((previous) => !previous || JSON.stringify(previous) === baseline ? clone2(snapshot.settings) : previous);
              settingsBaseline = next;
            }, [snapshot?.settings]);
            const selected = snapshot?.sessions.find((session) => session.id === snapshot.activeId) || null;
            const settings = draft || snapshot?.settings;
            const dirty = !!(draft && snapshot && JSON.stringify(draft) !== JSON.stringify(snapshot.settings));
            const validation = useMemo(() => {
              if (!settings || !snapshot) return [];
              const result = settingsSchema.safeParse(settings);
              const errors = result.success ? [] : result.error.issues.map((issue2) => `${issue2.path.join(".")}: ${issue2.message}`);
              const enabled = settings.participants.filter((p) => p.enabled);
              if (enabled.length < 2) errors.push(t("Two participants"));
              if (new Set(enabled.map(modelKey)).size !== enabled.length) errors.push(t("Duplicate identity"));
              if ([...enabled, ...settings.reviewer ? [settings.reviewer] : []].some((p) => !snapshot.models.some((m) => modelKey(m) === modelKey(p)))) errors.push(t("Unavailable model error"));
              if (enabled.some((p) => p.options.reasoningEffort && !snapshot.models.find((m) => modelKey(m) === modelKey(p))?.reasoningEfforts.includes(p.options.reasoningEffort))) errors.push(t("Unsupported reasoning"));
              if (images.images.length) {
                const imageError = validateImageBatch([], images.images, imagePolicy);
                if (imageError) errors.push(imageError);
                const unsupported = [...enabled, ...settings.reviewer ? [settings.reviewer] : []].filter((p) => snapshot.models.find((m) => modelKey(m) === modelKey(p))?.imageSupport !== "supported");
                if (unsupported.length) errors.push(t("Image model support required", { models: Array.from(new Set(unsupported.map((p) => `${p.provider}/${p.model}`))).join(", ") }));
                if (settings.tokenBudget !== null) errors.push(t("Image token budget unsupported"));
              }
              return Array.from(new Set(errors));
            }, [settings, snapshot?.models, snapshot?.imagePolicy, images.images, locale.revision]);
            const warnings = useMemo(() => settings ? schedulingWarnings(settings) : [], [settings]);
            const notify = (text2) => setNotice({ text: text2 });
            async function act(action, fields = {}) {
              if (busy) return null;
              setBusy(true);
              setNotice(null);
              try {
                const result = await request(action, fields);
                if (action === "start" && result?.id) publishImageDraft({ images: [], reading: false, error: null });
                if (["start", "rerun"].includes(action) && result?.id) await request("select", { id: result.id });
                if (action !== "export") await refresh(true);
                return result === void 0 ? true : result;
              } catch (error51) {
                if (alive) setNotice({ text: error51 instanceof Error ? error51.message : t("Request failed"), error: true });
                return null;
              } finally {
                if (alive) setBusy(false);
              }
            }
            const saveSettings = async () => {
              const parsed = settingsSchema.safeParse(settings);
              setAttempted(true);
              if (!parsed.success) {
                setSettingsOpen(true);
                return;
              }
              if (await act("settings", { settings: parsed.data })) notify(t("Settings saved"));
            };
            const newDebate = async () => {
              const result = await act("select", { id: null });
              if (result) {
                setHistoryOpen(false);
                setAttempted(false);
                composerRef.current?.focus();
              }
            };
            const start = async () => {
              setAttempted(true);
              if (busy || imageDraft.reading) return;
              if (!question.trim() || validation.length || !settings) {
                if (validation.length) setSettingsOpen(true);
                else composerRef.current?.focus();
                return;
              }
              const result = await act("start", { question: question.trim(), settings, ...images.images.length ? { images: images.images.map((image) => image.encoded) } : {} });
              if (result) publishImageDraft({ images: [], reading: false, error: null });
            };
            const onApply = async (preset) => {
              const result = await act("preset-apply", { id: preset.id });
              if (result) {
                setDraft(clone2(preset.settings));
                setPresetId(preset.id);
                notify(t("Preset applied"));
              }
            };
            const confirmDialog = async (name) => {
              if (!dialog || !snapshot || !settings) return;
              let result;
              if (dialog.kind === "rename") result = await act("rename", { id: dialog.id, title: name });
              else if (dialog.kind === "delete") result = await act("delete", { id: dialog.id });
              else if (dialog.kind === "stop") result = await act("stop", { id: dialog.id });
              else if (dialog.kind === "preset-delete") {
                result = await act("preset-delete", { id: dialog.id });
                if (presetId === dialog.id) setPresetId("");
              } else {
                const preset = snapshot.presets.find((p) => p.id === dialog.id);
                const nextSettings = dialog.kind === "preset-save" ? settings : preset?.settings;
                if (!nextSettings) return;
                const resultSettings = settingsSchema.safeParse(nextSettings);
                if (!resultSettings.success) {
                  setNotice({ text: resultSettings.error.issues.map((issue2) => issue2.message).join("\n"), error: true });
                  return;
                }
                result = await act("preset-save", { name, settings: nextSettings, ...dialog.kind === "preset-rename" ? { id: dialog.id } : {} });
                if (result) notify(t("Preset saved"));
              }
              if (result) setDialog(null);
            };
            if (!snapshot || !settings) return /* @__PURE__ */ React.createElement("div", { className: "mdb-root mdb-initial", dir: rtl ? "rtl" : "ltr" }, /* @__PURE__ */ React.createElement(Switcher, { debate: true }), /* @__PURE__ */ React.createElement("span", { className: "mdb-orbit" }, /* @__PURE__ */ React.createElement(Icon, { size: 32 })), /* @__PURE__ */ React.createElement("h2", null, t(state.error ? "Connection error" : "Loading")), state.error && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Plain, null, state.error), /* @__PURE__ */ React.createElement(Button, { icon: "retry", onClick: () => {
              void refresh();
            } }, t("Retry"))));
            const histories = snapshot.sessions.filter((session) => `${session.title} ${session.question}`.toLocaleLowerCase().includes(search.toLocaleLowerCase())).sort((a, b) => b.createdAt - a.createdAt);
            return /* @__PURE__ */ React.createElement("div", { className: `mdb-root ${settingsOpen ? "mdb-settings-open" : ""} ${historyOpen ? "mdb-history-open" : ""}`, dir: rtl ? "rtl" : "ltr", lang: locale.active }, /* @__PURE__ */ React.createElement("header", { className: "mdb-topbar" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-brand" }, /* @__PURE__ */ React.createElement(Icon, { size: 23 }), /* @__PURE__ */ React.createElement("strong", null, t("Model Debate"))), /* @__PURE__ */ React.createElement(Switcher, { debate: true }), /* @__PURE__ */ React.createElement("div", { className: "mdb-topbar-controls" }, /* @__PURE__ */ React.createElement("label", { className: "mdb-language" }, /* @__PURE__ */ React.createElement(Icon, { name: "globe", size: 16 }), /* @__PURE__ */ React.createElement("span", { className: "mdb-sr-only" }, t("Interface language")), /* @__PURE__ */ React.createElement("select", { "aria-label": t("Interface language"), value: locale.active, onChange: (event) => {
              try {
                ctx.locale.setLocale(event.target.value);
              } catch (error51) {
                setNotice({ text: String(error51), error: true });
              }
            } }, locale.locales.map((item) => /* @__PURE__ */ React.createElement("option", { key: item.id, value: item.id }, item.label)))), /* @__PURE__ */ React.createElement(IconButton, { icon: "settings", label: t("Next-run settings"), "aria-expanded": settingsOpen, onClick: () => {
              setSettingsOpen(!settingsOpen);
              setHistoryOpen(false);
            } }))), /* @__PURE__ */ React.createElement("div", { className: "mdb-mobile-tabs" }, /* @__PURE__ */ React.createElement(Button, { icon: "debate", "aria-expanded": historyOpen, onClick: () => {
              setHistoryOpen(!historyOpen);
              setSettingsOpen(false);
            } }, t("History")), /* @__PURE__ */ React.createElement(Button, { icon: "plus", disabled: busy, onClick: () => {
              void newDebate();
            } }, t("New debate")), /* @__PURE__ */ React.createElement(Button, { icon: "settings", "aria-expanded": settingsOpen, onClick: () => {
              setSettingsOpen(!settingsOpen);
              setHistoryOpen(false);
            } }, t("Settings"))), /* @__PURE__ */ React.createElement("div", { className: "mdb-workspace" }, /* @__PURE__ */ React.createElement("aside", { className: "mdb-history", "aria-label": t("History") }, /* @__PURE__ */ React.createElement(Button, { icon: "plus", className: "mdb-button-primary mdb-new-debate", disabled: busy, onClick: () => {
              void newDebate();
            } }, t("New debate")), /* @__PURE__ */ React.createElement("div", { className: "mdb-history-heading" }, /* @__PURE__ */ React.createElement("h2", null, t("History")), /* @__PURE__ */ React.createElement("span", null, snapshot.sessions.length)), snapshot.sessions.length > 5 && /* @__PURE__ */ React.createElement("input", { className: "mdb-history-search", type: "search", placeholder: t("Search history"), "aria-label": t("Search history"), value: search, onChange: (event) => setSearch(event.target.value) }), /* @__PURE__ */ React.createElement("nav", { "aria-label": t("History") }, histories.map((session) => /* @__PURE__ */ React.createElement("div", { key: session.id, className: `mdb-history-item ${session.id === snapshot.activeId ? "mdb-history-active" : ""}` }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "mdb-history-select", "aria-current": session.id === snapshot.activeId ? "page" : void 0, disabled: busy, onClick: () => {
              void act("select", { id: session.id });
              setHistoryOpen(false);
            } }, /* @__PURE__ */ React.createElement("span", { className: "mdb-history-title", dir: "auto" }, session.title || t("Untitled debate")), /* @__PURE__ */ React.createElement("span", { className: "mdb-history-meta" }, /* @__PURE__ */ React.createElement(Status, { status: session.status }), /* @__PURE__ */ React.createElement("time", null, new Date(session.createdAt).toLocaleDateString(locale.active, { month: "short", day: "numeric" })))), /* @__PURE__ */ React.createElement("div", { className: "mdb-history-actions" }, /* @__PURE__ */ React.createElement(IconButton, { icon: "edit", label: `${t("Rename")}: ${session.title}`, disabled: busy || activeRun(session), onClick: () => setDialog({ kind: "rename", id: session.id, name: session.title }) }), /* @__PURE__ */ React.createElement(IconButton, { icon: "trash", label: `${t("Delete")}: ${session.title}`, disabled: busy || activeRun(session), onClick: () => setDialog({ kind: "delete", id: session.id, name: session.title }) }))))), snapshot.sessions.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "mdb-history-empty" }, /* @__PURE__ */ React.createElement(Icon, { size: 25 }), /* @__PURE__ */ React.createElement("p", null, t("No debates yet"))), /* @__PURE__ */ React.createElement("footer", null, t("History hint"))), /* @__PURE__ */ React.createElement("main", { className: "mdb-main", "aria-label": t("Model Debate") }, /* @__PURE__ */ React.createElement("div", { className: "mdb-main-inner" }, (notice || state.error) && /* @__PURE__ */ React.createElement("div", { className: `mdb-alert ${notice?.error || state.error ? "mdb-alert-error" : "mdb-alert-success"}`, role: notice?.error || state.error ? "alert" : "status" }, /* @__PURE__ */ React.createElement(Icon, { name: notice?.error || state.error ? "alert" : "check" }), /* @__PURE__ */ React.createElement(Plain, null, notice?.text || state.error), state.error ? /* @__PURE__ */ React.createElement(Button, { onClick: () => {
              void refresh();
            } }, t("Retry")) : /* @__PURE__ */ React.createElement(IconButton, { icon: "close", label: t("Dismiss"), onClick: () => setNotice(null) })), selected ? /* @__PURE__ */ React.createElement(SessionView, { key: selected.id, session: selected, busy, act, onDialog: setDialog, onLoad: (value) => {
              setDraft(clone2(value));
              setSettingsOpen(true);
            }, notify }) : /* @__PURE__ */ React.createElement("div", { className: "mdb-compose" }, /* @__PURE__ */ React.createElement("div", { className: "mdb-hero" }, /* @__PURE__ */ React.createElement("span", { className: "mdb-hero-symbol" }, /* @__PURE__ */ React.createElement(Icon, { size: 38 }), /* @__PURE__ */ React.createElement("span", { className: "mdb-hero-mini" }, /* @__PURE__ */ React.createElement(Icon, { name: "spark", size: 17 }))), /* @__PURE__ */ React.createElement("p", { className: "mdb-eyebrow" }, t("Workspace eyebrow")), /* @__PURE__ */ React.createElement("h1", null, t("Workspace title")), /* @__PURE__ */ React.createElement("p", null, t("Workspace subtitle"))), /* @__PURE__ */ React.createElement("div", { className: "mdb-compose-stats" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setSettingsOpen(true) }, /* @__PURE__ */ React.createElement("strong", null, settings.participants.filter((p) => p.enabled).length), /* @__PURE__ */ React.createElement("span", null, t("Enabled participants"))), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setSettingsOpen(true) }, /* @__PURE__ */ React.createElement("strong", null, settings.rounds), /* @__PURE__ */ React.createElement("span", null, t("Rounds"))), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setSettingsOpen(true) }, /* @__PURE__ */ React.createElement("strong", null, t(settings.mode)), /* @__PURE__ */ React.createElement("span", null, t("Mode")))), /* @__PURE__ */ React.createElement("form", { className: "mdb-composer", onSubmit: (event) => {
              event.preventDefault();
              void start();
            }, onPaste: (event) => {
              const files = Array.from(event.clipboardData.items).filter((item) => item.kind === "file").map((item) => item.getAsFile()).filter((file2) => !!file2);
              if (files.length) {
                event.preventDefault();
                if (!busy) void addImageFiles(files, imagePolicy);
              }
            }, onDragOver: (event) => {
              if (event.dataTransfer.types.includes("Files")) event.preventDefault();
            }, onDrop: (event) => {
              if (!event.dataTransfer.types.includes("Files")) return;
              event.preventDefault();
              if (!busy) void addImageFiles(Array.from(event.dataTransfer.files), imagePolicy);
            } }, /* @__PURE__ */ React.createElement("label", { htmlFor: "mdb-question" }, t("Question label")), /* @__PURE__ */ React.createElement("textarea", { ref: composerRef, id: "mdb-question", dir: "auto", rows: 7, maxLength: 3e4, value: question, placeholder: t("Question placeholder"), onChange: (event) => setQuestion(event.target.value), "aria-invalid": attempted && !question.trim(), onKeyDown: (event) => {
              if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                void start();
              }
            } }), /* @__PURE__ */ React.createElement(ImageComposer, { draft: images, policy: imagePolicy, busy }), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("small", null, t("Question hint")), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "mdb-button mdb-button-primary", disabled: busy || images.reading || !!validation.length || !snapshot.models.length }, /* @__PURE__ */ React.createElement(Icon, { name: "play" }), t(images.reading ? "Reading images" : busy ? "Starting" : "Start debate")))), attempted && !question.trim() && /* @__PURE__ */ React.createElement("p", { className: "mdb-error-text", role: "alert" }, t("Question required")), validation.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mdb-alert mdb-alert-warn" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, t("Validation errors")), /* @__PURE__ */ React.createElement("ul", null, validation.map((error51) => /* @__PURE__ */ React.createElement("li", { key: error51 }, error51))), /* @__PURE__ */ React.createElement("button", { type: "button", className: "mdb-text-button", onClick: () => setSettingsOpen(true) }, t("Settings")))), warnings.length > 0 && /* @__PURE__ */ React.createElement("details", { className: "mdb-scheduling" }, /* @__PURE__ */ React.createElement("summary", null, t("Scheduling warnings"), " ", /* @__PURE__ */ React.createElement("span", { className: "mdb-count" }, warnings.length)), /* @__PURE__ */ React.createElement("ul", null, warnings.map((warning) => /* @__PURE__ */ React.createElement("li", { key: warning }, warning)))), /* @__PURE__ */ React.createElement("p", { className: "mdb-model-policy" }, snapshot.localOnly && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 15 }), /* @__PURE__ */ React.createElement("strong", null, t("Local only")), " \xB7 "), t("Models policy")), snapshot.models.length < 2 && /* @__PURE__ */ React.createElement("div", { className: "mdb-alert mdb-alert-warn" }, /* @__PURE__ */ React.createElement(Icon, { name: "alert" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, t("No models")), /* @__PURE__ */ React.createElement("p", null, t("No models hint")), /* @__PURE__ */ React.createElement(Button, { icon: "retry", onClick: () => {
              void refresh();
            } }, t("Refresh"))))), snapshot.diagnostics.length > 0 && /* @__PURE__ */ React.createElement("details", { className: "mdb-diagnostics" }, /* @__PURE__ */ React.createElement("summary", null, t("Diagnostics"), " ", /* @__PURE__ */ React.createElement("span", { className: "mdb-count" }, snapshot.diagnostics.length)), snapshot.diagnostics.map((item, i) => /* @__PURE__ */ React.createElement(Plain, { key: i }, item))))), /* @__PURE__ */ React.createElement("aside", { className: "mdb-settings", "aria-label": t("Next-run settings") }, /* @__PURE__ */ React.createElement("header", { className: "mdb-settings-heading" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, t("Next-run settings")), /* @__PURE__ */ React.createElement("p", null, t("Immutable hint"))), /* @__PURE__ */ React.createElement(IconButton, { icon: "close", label: t("Close"), onClick: () => setSettingsOpen(false) })), attempted && validation.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mdb-alert mdb-alert-warn" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, t("Validation errors")), /* @__PURE__ */ React.createElement("ul", null, validation.map((error51) => /* @__PURE__ */ React.createElement("li", { key: error51 }, error51))))), /* @__PURE__ */ React.createElement(SettingsEditor, { settings, models: snapshot.models, presets: snapshot.presets, presetId, onPreset: setPresetId, setSettings: setDraft, dirty, busy, onSave: () => {
              void saveSettings();
            }, onDialog: setDialog, onApply: (preset) => {
              void onApply(preset);
            } }))), dialog && /* @__PURE__ */ React.createElement(Dialog, { key: `${dialog.kind}-${dialog.id || ""}`, state: dialog, busy, onClose: () => setDialog(null), onConfirm: confirmDialog }));
          }
          ctx.slots.inject("conversation.header.leading", () => ctx.slots.register({ name: "conversation.header.leading" }, () => /* @__PURE__ */ React.createElement(Switcher, null)));
          ctx.slots.inject("main", () => ctx.slots.register({ name: "main", key: "model-debate" }, App));
          ctx.slots.inject("sidebar.panellist", () => ctx.slots.register({ name: "sidebar.panellist", id: "model-debate", order: -10, label: () => t("Model Debate") }, SidebarEntry));
        }
      };
    }
  });
})();
//# sourceMappingURL=client.js.map
