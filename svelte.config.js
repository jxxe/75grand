import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			edge: false,
			external: [],
			split: false
		})
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({ postcss: true }),
		mdsvex({ extensions: ['.md'] })
	]
};

export default config;
