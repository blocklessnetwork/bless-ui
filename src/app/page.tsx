import Link from 'next/link'

import './globals.css'

export default function LandingPage() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-light">
			<main className="flex flex-col gap-4 row-start-2 items-center">
				<div className="text-3xl">Bless UI</div>
				<div className="text-lg mt-0">React component library</div>
				<Link href="/get-started">Get Started</Link>
			</main>
		</div>
	)
}
