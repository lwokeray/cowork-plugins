const SENSITIVE_KEY =
  /(access[_-]?token|refresh[_-]?token|client[_-]?secret|api[-_]?key|authorization|cookie|password|secret|credential|private[_-]?key)/i;
const SENSITIVE_STRING =
  /^(Bearer\s+|eyJ[A-Za-z0-9_-]{20,}|-----BEGIN .*PRIVATE KEY-----)/i;

export interface RedactionOptions {
  maxDepth?: number;
  maxStringLength?: number;
  maxArrayItems?: number;
  maxObjectKeys?: number;
}

export function redactJson(
  value: unknown,
  options: RedactionOptions = {},
  depth = 0,
): unknown {
  const maxDepth = options.maxDepth ?? 8;
  const maxStringLength = options.maxStringLength ?? 16_000;
  const maxArrayItems = options.maxArrayItems ?? 200;
  const maxObjectKeys = options.maxObjectKeys ?? 300;
  if (depth > maxDepth) return "[redacted-depth]";
  if (typeof value === "string") {
    if (SENSITIVE_STRING.test(value)) return "[redacted-secret]";
    return value.length > maxStringLength
      ? `${value.slice(0, maxStringLength)}…[truncated]`
      : value;
  }
  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    value === null ||
    value === undefined
  )
    return value;
  if (Array.isArray(value)) {
    const result = value
      .slice(0, maxArrayItems)
      .map((item) => redactJson(item, options, depth + 1));
    if (value.length > maxArrayItems)
      result.push(`[${value.length - maxArrayItems} items truncated]`);
    return result;
  }
  if (typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value).slice(0, maxObjectKeys)) {
      result[key] = SENSITIVE_KEY.test(key)
        ? "[redacted-secret]"
        : redactJson(item, options, depth + 1);
    }
    if (Object.keys(value).length > maxObjectKeys)
      result.__truncatedKeys = Object.keys(value).length - maxObjectKeys;
    return result;
  }
  return "[redacted-unsupported]";
}

export function limitedJson(value: unknown, maxBytes: number): unknown {
  const redacted = redactJson(value);
  const serialized = JSON.stringify(redacted);
  if (Buffer.byteLength(serialized, "utf8") <= maxBytes) return redacted;
  return {
    truncated: true,
    originalBytes: Buffer.byteLength(serialized, "utf8"),
    maxBytes,
    preview: serialized.slice(0, Math.max(0, maxBytes - 120)),
  };
}
