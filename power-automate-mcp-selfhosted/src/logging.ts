import { AppConfig } from "./config.js";

const SECRET_KEYS =
  /token|secret|password|authorization|api[-_]?key|cookie|client_secret|refresh/i;

export function redactValue(value: unknown, depth = 0): unknown {
  if (depth > 6) return "[redacted-depth]";
  if (typeof value === "string") {
    if (
      value.length > 80 &&
      /^(eyJ|Bearer\s|sk-|ghp_|xox[baprs]-)/i.test(value)
    )
      return "[redacted-secret]";
    return value;
  }
  if (Array.isArray(value))
    return value.map((item) => redactValue(item, depth + 1));
  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      result[key] = SECRET_KEYS.test(key)
        ? "[redacted-secret]"
        : redactValue(item, depth + 1);
    }
    return result;
  }
  return value;
}

export function createLogger(config: AppConfig) {
  const levels = { silent: 0, error: 1, warn: 2, info: 3, debug: 4 } as const;
  const threshold = levels[config.logLevel] ?? levels.info;
  const write = (
    level: keyof typeof levels,
    message: string,
    fields?: Record<string, unknown>,
  ) => {
    if (levels[level] > threshold || level === "silent") return;
    const record = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...(fields ? { fields: redactValue(fields) } : {}),
    };
    const line = JSON.stringify(record);
    if (level === "error" || level === "warn") console.error(line);
    else console.error(line);
  };
  return {
    debug: (message: string, fields?: Record<string, unknown>) =>
      write("debug", message, fields),
    info: (message: string, fields?: Record<string, unknown>) =>
      write("info", message, fields),
    warn: (message: string, fields?: Record<string, unknown>) =>
      write("warn", message, fields),
    error: (message: string, fields?: Record<string, unknown>) =>
      write("error", message, fields),
  };
}

export type Logger = ReturnType<typeof createLogger>;
