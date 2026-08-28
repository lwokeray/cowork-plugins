# Security

This release is read-only against Power Platform. The optional local Store can change only local metadata.

| Boundary              | Main risks                                        | Controls                                                                               |
| --------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------- |
| MCP client → server   | unauthorized access, injection, oversized payload | API key, exact Origin allowlist, request limit, schemas, TLS proxy                     |
| Server → identity/API | token theft, SSRF, excessive privilege            | process/file secrets, HTTPS same-origin enforcement, least privilege, egress allowlist |
| Tenant data → model   | prompt injection, sensitive metadata              | treat as untrusted data, output redaction and size limits, explicit tool allowlist     |
| Server → local Store  | tampering, disclosure, races                      | atomic replace, restricted filesystem permissions, metadata-only retention             |

Production deployments should use one tenant identity per isolated process, TLS, a secret manager, ingress rate limiting, centralized audit logs, network egress controls and a non-production validation environment. Rotate an exposed API key or token immediately. Do not place secrets in issues, prompts, logs, flow names or Store metadata.

This repository does not implement a Copilot Studio OAuth callback. API-key mode is for controlled internal use; delegated per-user authorization requires a supported OAuth gateway and authorization policy.

Report security issues privately to the repository owner; do not open a public issue containing exploit details or credentials.
