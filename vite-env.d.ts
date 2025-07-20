/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  // otras que necesites
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


