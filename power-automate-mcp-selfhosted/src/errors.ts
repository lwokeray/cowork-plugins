export type ErrorCode =
  | "CONFIG_ERROR"
  | "AUTH_REQUIRED"
  | "AUTH_FAILED"
  | "UPSTREAM_ERROR"
  | "VALIDATION_ERROR"
  | "WRITE_DISABLED"
  | "APPROVAL_REQUIRED"
  | "NOT_FOUND"
  | "RATE_LIMITED"
  | "PAYLOAD_TOO_LARGE"
  | "UNSUPPORTED";

export class AppError extends Error {
  readonly code: ErrorCode;
  readonly status: number;
  readonly details?: Record<string, unknown>;
  readonly retryable: boolean;

  constructor(
    code: ErrorCode,
    message: string,
    options: {
      status?: number;
      details?: Record<string, unknown>;
      retryable?: boolean;
    } = {},
  ) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.status = options.status ?? 500;
    this.details = options.details;
    this.retryable = options.retryable ?? false;
  }
}

export function asAppError(error: unknown): AppError {
  if (error instanceof AppError) return error;
  if (error instanceof Error)
    return new AppError("UPSTREAM_ERROR", error.message);
  return new AppError("UPSTREAM_ERROR", "Unknown error");
}

export function publicError(error: unknown): {
  code: ErrorCode;
  message: string;
  retryable: boolean;
} {
  const safe = asAppError(error);
  return { code: safe.code, message: safe.message, retryable: safe.retryable };
}
