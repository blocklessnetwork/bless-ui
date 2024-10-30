import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
	title: 'Bless UI',
	description: 'A React UI component library.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="font-light antialiased">
				<div className="flex min-h-screen w-full flex-col">{children}</div>
			</body>
		</html>
	)
}
