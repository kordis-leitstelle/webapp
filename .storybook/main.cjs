module.exports = {
  "stories": [
		'../src/lib/components/**/*.stories.js',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "svelteOptions": {

  },
  "features": {
    "storyStoreV7": true
  }
}
