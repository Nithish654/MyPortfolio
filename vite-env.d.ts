
// Fix: Manually defining ImportMeta and ImportMetaEnv to resolve errors when vite/client types are missing
interface ImportMetaEnv {
  readonly [key: string]: any;
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
