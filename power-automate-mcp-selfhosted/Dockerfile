FROM node:22-bookworm-slim AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts
COPY tsconfig.json tsconfig.test.json ./
COPY src ./src
RUN pnpm build

FROM node:22-bookworm-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
RUN corepack enable && useradd --create-home --uid 10001 appuser
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile --ignore-scripts
COPY --from=build /app/dist ./dist
RUN mkdir -p /app/data && chown -R appuser:appuser /app
USER appuser
EXPOSE 8787
CMD ["node", "dist/index.js"]
