/// <reference path="../.astro/types.d.ts" />

type D1Database = import('@cloudflare/workers-types').D1Database;

interface RuntimeEnv {
  DB: D1Database;
  RESEND_API_KEY: string;
  CONTACT_EMAIL: string;
}

type Runtime = import('@astrojs/cloudflare').Runtime<RuntimeEnv>;

declare namespace App {
  interface Locals extends Runtime {}
}
