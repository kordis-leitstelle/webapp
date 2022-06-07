import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {config} from 'dotenv';

export default defineConfig(() => {
	return {
		// vite config
		plugins: [
			svelte(),
		],
		define: {
			__kordisConfig: config().parsed,
			__appDetails: {
				buildDate: new Date(),
			}
		}
	}
})
