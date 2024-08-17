/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly SITE_NAME: string
	readonly SITE_SHORTNAME: string
	readonly SITE_TAGLINE: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
