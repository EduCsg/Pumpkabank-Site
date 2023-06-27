/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				purple: "#320995",
				lpurple: "#3b0cae",
				pink: "#e23063",
				green: "#26E55F",
			},
		},
		screens: {
			xs: "320px",
			sm: "640px",
			md: "767px",
			lg: "1024px",
			xlg: "1070px",
			xl: "1280px",
			xxl: "1320px",
		},
	},
	plugins: [],
};
