import { Input } from '@/components/ui'

export function InputDemo() {
	return (
		/// [demo_input]
		<main className="flex-1 items-center justify-items-center p-12 bg-slate">
			<div className="flex w-[600px] h-[200px] p-4 my-4">
				<Input placeholder="Email" type="email" />
			</div>
		</main>
		/// [demo_input]
	)
}
