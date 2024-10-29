import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			}
		},
		colors: {
			green: '#C9FCC0',
			'light-gray': '#CCCAC0',
			slate: '#F5F5F5',
			cement: '#AEB3B7',
			charcoal: '#292D2A'
		}
	},
	plugins: []
}
export default config
