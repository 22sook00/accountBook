module.exports = {
	important: true,
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/**/*.{js,ts,jsx,tsx}",
		"./src/**/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-default": "#2277DC",
				"secondary-dark": "#1A62B8",
				"primary-tint": "#E9F1FC",
				"primary-bg": "#E5E5E5",
				"tint-bg": "#f7f7f7",
				"text-primary": "#515151",
				"text-dark": "#444444",
				"text-light": "#8b8b8b",
				"text-tint": "#d1d1d1",
				"text-line": "#dddddd",
				"circle-green": "#00B507",
				"circle-red": "#F8979b",
				"tag-yellow": "#FFE792",
				"error-primary": "#E74346",
				"hover-gray-bg": "rgba(209, 209, 209, 0.2)",
				"bottom-shadow": "rgba(0, 0, 0, 0.05)",
				"modal-bg": "rgba(0, 0, 0, 0.67)",
				"item-hover": "#EEEEEE",
			},
			boxShadow: {
				"nav-shadow": "0px 4px 100px rgba(153, 153, 153, 0.15)",
			},
			screens: {
				desktop: "1120px",
			},
			gridTemplateColumns: {
				"desktop-grid": "grid-cols-12",
				"mobile-grid": "grid-cols-6",
			},
		},
	},
	plugins: [],
};
