import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {config} from 'dotenv';

export default defineConfig(() => {
	return {
		// vite config
		plugins: [
			svelte(),
		],
		test: {
			globals: true,
			environment: 'jsdom',
		},
		define: {
			__kordisConfig: config().parsed,
			__appDetails: {
				buildDate: new Date(),
			}
		}
	}
})
