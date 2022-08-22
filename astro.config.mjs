import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
    integrations: [preact(), tailwind(), svelte()],
    site: `https://ygorganization.com`,
    output: 'server',
    adapter: vercel()
});
