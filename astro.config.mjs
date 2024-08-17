import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'http://www.mpsv2.test',
  integrations: [react(), tailwind(), sitemap()],
  siteName: 'Name of the Site',
  siteShortName: 'Nickname',
  siteTagline: 'What is the site about?'
});