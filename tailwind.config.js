/** @type {import('tailwindcss').Config} */
export default {
  	content: [
		"./index.html",
    	"./src/**/*.{js,jsx,ts,tsx}",
  	],
  	theme: {
    	extend: {
			fontFamily: {
				'headlandOne': ['HeadlandOne', 'sans'],
				'cutiveMono': ['CutiveMono', 'mono'],
				'cutive': ['Cutive', 'sans']
			}
		},
  	},
  	plugins: [],
}

