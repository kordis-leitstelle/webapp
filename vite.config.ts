import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {config} from 'dotenv';
import * as path from "path";

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
		},
		resolve: {
			alias: {
				$lib: path.resolve("./src/lib")
			}
		}
	}
})
