import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	server: {
		port: 3000,
	},
	output: 'static',
	base: '',
	trailingSlash: 'never',
	build: {
		format: 'file',
	},
});
