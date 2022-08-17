module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:prettier/recommended",
		"plugin:storybook/recommended",
		"plugin:svelte/recommended"
	],
	rules: {
		"@typescript-eslint/no-unsafe-call": "warn",
		"@typescript-eslint/no-unsafe-member-access": "warn",
		"import/no-unresolved": "error",
		"svelte/sort-attributes": "error",
	},
	parserOptions: {
		project: ["./tsconfig.json"],
		extraFileExtensions: [".svelte"]
	},
	overrides: [{
		files: ["*.svelte"],
		parser: "svelte-eslint-parser",
		parserOptions: {
			parser: "@typescript-eslint/parser"
		}
	}],
	settings: {
		"import/resolver": {
			"typescript": {
				"alwaysTryTypes": true
			}
		}
	},
	plugins: ["import", "@typescript-eslint"],
	ignorePatterns: ["node_modules", "*stories.svelte"],
	globals: {
		"__kordisConfig": "readonly",
		"__appDetails": "readonly"
	}
};
