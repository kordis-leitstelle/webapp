module.exports = {
  "stories": [
		'../src/lib/components/**/*.stories.js',
		'../src/lib/components/**/*.stories.svelte'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
		"@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "svelteOptions": {

  },
  "features": {
		// svelte stories are currently not working with storyStoreV7
    "storyStoreV7": false
  }
}
