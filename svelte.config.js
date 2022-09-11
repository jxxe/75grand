import cloudflare from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: cloudflare()
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({ postcss: true }),
		mdsvex({ extensions: ['.md'] })
	]
};

export default config;
