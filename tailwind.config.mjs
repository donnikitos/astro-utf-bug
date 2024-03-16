/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				screen: ['100vh', '100dvh'],
			},
			minHeight: {
				screen: ['100vh', '100dvh'],
			},
			maxHeight: {
				'screen-3/4': ['75vh', '75dvh'],
			},
			boxShadow: {
				n5: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
				n15: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
			},
			textShadow: {
				outline: '',
			},
			screens: {
				xs: '300px',
				sm: '540px',
			},
		},
	},
	plugins: [],
};

export default config;
