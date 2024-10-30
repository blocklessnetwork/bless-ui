import Input from '@/components/ui/input'
import Link from 'next/link'
import * as React from 'react'

export default function GetStartedPage() {
	return (
		<div className="flex-1 items-center justify-items-center p-12 bg-slate">
			<div className="p-8 mb-12 bg-slate w-[600px] h-[264px] rounded-60 drop-shadow-main">
				<p className="text-2xl text-charcoal">
					Contribute your unused computer power, earn rewards effortlessly.{' '}
					<Link href="https://chromewebstore.google.com/category/extensions" target="_blank">
						Get the chrome extension.
					</Link>
				</p>
			</div>
			<div className="m-auto p-8 bg-slate w-[600px] h-[200px] rounded-60 drop-shadow-main">
				<div className="relative h-full">
					<p className="text-2xl text-charcoal">Full Name</p>
					<Input className="absolute bottom-0" placeholder="Email" />
				</div>
			</div>
		</div>
	)
}
