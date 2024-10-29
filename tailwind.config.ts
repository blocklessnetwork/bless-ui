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
			},
			borderRadius: {
				'60': '60px'
			},
			dropShadow: {
				'1md': '4px 4px 7px rgba(75, 75, 75, 0.19)'
			}
		},
		colors: {
			green: '#C9FCC0',
			'light-gray': '#CCCAC0',
			grey: '#F2F2F2',
			slate: '#F5F5F5',
			cement: '#AEB3B7',
			charcoal: '#292D2A',
			black: '#000000'
		}
	},
	plugins: []
}
export default config
