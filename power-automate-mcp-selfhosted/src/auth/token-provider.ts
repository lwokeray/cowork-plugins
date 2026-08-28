import { readFile } from "node:fs/promises";
import { PublicClientApplication, type Configuration } from "@azure/msal-node";
import type { AppConfig } from "../config.js";
import { AppError } from "../errors.js";

export interface TokenProvider {
  getAccessToken(): Promise<string>;
}

export class StaticTokenProvider implements TokenProvider {
  private readonly value?: string;
  private readonly file?: string;

  constructor(config: Pick<AppConfig, "accessToken" | "accessTokenFile">) {
    this.value = config.accessToken;
    this.file = config.accessTokenFile;
  }

  async getAccessToken(): Promise<string> {
    const value =
      this.value ?? (this.file ? await readFile(this.file, "utf8") : undefined);
    if (!value?.trim()) {
      throw new AppError(
        "AUTH_REQUIRED",
        "No Power Platform access token is configured",
        { status: 401 },
      );
    }
    return value.trim();
  }
}

export class DeviceCodeTokenProvider implements TokenProvider {
  private readonly client: PublicClientApplication;
  private readonly scopes: string[];
  private cachedToken?: { value: string; expiresAt: number };
  private pending?: Promise<string>;

  constructor(clientId: string, tenantId: string, scope: string) {
    const msalConfig: Configuration = {
      auth: {
        clientId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
      },
    };
    this.client = new PublicClientApplication(msalConfig);
    this.scopes = [scope];
  }

  async getAccessToken(): Promise<string> {
    if (this.cachedToken && this.cachedToken.expiresAt > Date.now() + 60_000)
      return this.cachedToken.value;
    if (this.pending) return this.pending;
    this.pending = this.acquire();
    try {
      return await this.pending;
    } finally {
      this.pending = undefined;
    }
  }

  private async acquire(): Promise<string> {
    const result = await this.client.acquireTokenByDeviceCode({
      scopes: this.scopes,
      deviceCodeCallback: (response) => {
        console.error(
          JSON.stringify({ level: "info", message: response.message }),
        );
      },
    });
    if (!result?.accessToken) {
      throw new AppError(
        "AUTH_FAILED",
        "Entra device-code authentication returned no access token",
        { status: 401 },
      );
    }
    const expiresAt = result.expiresOn?.getTime() ?? Date.now() + 45 * 60_000;
    this.cachedToken = { value: result.accessToken, expiresAt };
    return result.accessToken;
  }
}

export function createTokenProvider(config: AppConfig): TokenProvider {
  if (config.accessToken || config.accessTokenFile)
    return new StaticTokenProvider(config);
  const clientId = process.env.ENTRA_CLIENT_ID?.trim();
  const tenantId = config.tenantId ?? process.env.ENTRA_TENANT_ID?.trim();
  const scope =
    process.env.POWER_PLATFORM_SCOPE?.trim() ||
    "https://api.powerplatform.com/.default";
  if (clientId && tenantId)
    return new DeviceCodeTokenProvider(clientId, tenantId, scope);
  return new StaticTokenProvider(config);
}
