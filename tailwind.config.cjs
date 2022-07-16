const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
			colors: {
				"input-focus": "rgb(14, 165, 233)", // blue 500
				"input": "rgb(209 213 219)", // gray 300
				"input-error": "rgb(245, 101, 101)", // red 500
				"label-error": "rgb(220 38 38)", // red 600
				"input-error-focus": "rgb(220 38 38)", // red 600
				"icon-hover": "rgb(14, 165, 233)", // blue 500
				"button-primary": "rgb(37, 99, 235)", // blue 600
				"button-primary-hover": "rgb(29, 78, 216)", // blue 700
				"primary": "rgb(37, 99, 235)", // blue 600
			},
			screens: {
				"3xl": "2080px"
			}
		},
  },
  plugins: [forms],
};

module.exports = config;
