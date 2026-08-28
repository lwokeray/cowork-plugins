import { AppError } from "../errors.js";

export function boundedTop(value: number | undefined, max: number): number {
  const top = value ?? Math.min(30, max);
  if (!Number.isInteger(top) || top < 1 || top > max) {
    throw new AppError(
      "VALIDATION_ERROR",
      `top must be an integer between 1 and ${max}`,
      { status: 400 },
    );
  }
  return top;
}

export function assertJsonSize(
  value: unknown,
  maxBytes: number,
  label: string,
): void {
  const bytes = Buffer.byteLength(JSON.stringify(value ?? null), "utf8");
  if (bytes > maxBytes)
    throw new AppError(
      "PAYLOAD_TOO_LARGE",
      `${label} exceeds the configured size limit`,
      { status: 413 },
    );
}

export function requireNonBlank(value: string, label: string): string {
  if (!value || !value.trim())
    throw new AppError("VALIDATION_ERROR", `${label} is required`, {
      status: 400,
    });
  return value.trim();
}
