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
				"primary-default": "#21B599",
				"secondary-dark": "#0CA789",
				"primary-tint": "#21B599",
				"line-default":'#E6E6E6',
				"line-dark":'#818181',

				"text-primary": "#515151",
				"text-dark": "#444444",
				"text-light": "#8b8b8b",
				"text-tint": "#d1d1d1",

				"tag-yellow": "#FAC710",
				"tag-light-yellow": "#FFF446",

				"tag-skyblue": "#12CDD4",
				"tag-blue": "#70B9F0",
				"tag-pink": "#FF6DB1",

				"error-primary": "#F06549",

				"primary-bg": "#E5E5E5",
				"tint-bg": "#f7f7f7",
				"hover-gray-bg": "rgba(209, 209, 209, 0.2)",
				"modal-bg": "rgba(0, 0, 0, 0.67)",

				
				"bottom-shadow": "rgba(0, 0, 0, 0.05)",
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
