import { AppError } from "../errors.js";

export interface PageResult<T> {
  value?: T[];
  nextLink?: string;
  [key: string]: unknown;
}

export function readArray<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) return payload as T[];
  if (payload && typeof payload === "object") {
    const candidate = (payload as Record<string, unknown>).value;
    if (Array.isArray(candidate)) return candidate as T[];
  }
  return [];
}

export function getNextLink(payload: unknown): string | undefined {
  if (!payload || typeof payload !== "object") return undefined;
  const value =
    (payload as Record<string, unknown>).nextLink ??
    (payload as Record<string, unknown>)["@odata.nextLink"];
  return typeof value === "string" && value.trim() ? value : undefined;
}

export function validateContinuationUrl(
  nextLink: string,
  apiOrigin: string,
): URL {
  let parsed: URL;
  try {
    parsed = new URL(nextLink, apiOrigin);
  } catch {
    throw new AppError("VALIDATION_ERROR", "Invalid continuation URL", {
      status: 400,
    });
  }
  const origin = new URL(apiOrigin).origin;
  if (parsed.origin !== origin || parsed.protocol !== "https:") {
    throw new AppError(
      "VALIDATION_ERROR",
      "Continuation URL is outside the configured Power Platform API origin",
      { status: 400 },
    );
  }
  return parsed;
}

export async function collectPages<T>(
  first: () => Promise<unknown>,
  next: (url: string) => Promise<unknown>,
  maxItems: number,
): Promise<{ items: T[]; nextLink?: string }> {
  const items: T[] = [];
  let page = await first();
  let link = getNextLink(page);
  while (true) {
    for (const item of readArray<T>(page)) {
      if (items.length >= maxItems)
        return { items, ...(link ? { nextLink: link } : {}) };
      items.push(item);
    }
    if (!link || items.length >= maxItems)
      return { items, ...(link ? { nextLink: link } : {}) };
    page = await next(link);
    link = getNextLink(page);
  }
}
