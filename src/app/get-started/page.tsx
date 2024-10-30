import Input from '@/components/ui/input'
import * as React from 'react'

export default function GetStartedPage() {
	return (
		
			<div className="flex-1 items-center justify-items-center p-12 bg-slate">
				<div className="p-8 mb-12 bg-slate w-[600px] h-[264px] rounded-60 drop-shadow-main">
					<p className="text-2xl text-charcoal">
						Contribute your unused computer power, earn rewards effortlessly. Get the chrome
						extension.
					</p>
				</div>
				<div className="relative p-8 bg-slate w-[600px] h-[200px] rounded-60 drop-shadow-main">
					<p className="text-2xl text-charcoal">Full Name</p>
					<div className="absolute bottom-6 w-full pr-14">
						<Input placeholder="Email" />
					</div>
				</div>
			</div>
		
	)
}
