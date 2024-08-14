/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const APP_VERSION: string;
declare const APP_TEST: string;
