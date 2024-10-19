import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';

export default {
	extensions: ['.svelte', '.svx'],

	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),

	},

	preprocess: mdsvex({
		extension: '.svx', 
	  }),
};
