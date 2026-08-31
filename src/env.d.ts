/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_PASSWORD_HASH?: string;
  readonly PUBLIC_SITE_PASSWORD_HINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
