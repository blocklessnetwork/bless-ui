import { Input } from '@/components/ui'

const DemoInput = () => {
	return (
		/// [demo_input]
		<Input placeholder="Email" type="email" />
		/// [demo_input]
	)
}

export function Demo() {
	return (
		<div className="flex w-[600px] h-[200px] p-4 my-4">
			<DemoInput />
		</div>
	)
}
