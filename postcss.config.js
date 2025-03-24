module.exports = {
	plugins: {
		"postcss-import": {},
		"@tailwindcss/postcss": {},
		"postcss-focus-visible": {},
		autoprefixer: {},
		"postcss-preset-env": {
			stage: 1,
			features: {
				"focus-within-pseudo-class": false,
			},
		},
	},
};
