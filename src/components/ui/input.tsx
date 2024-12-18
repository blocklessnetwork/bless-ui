import { cn } from '@/lib/utils'
import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					`flex h-[78px] w-full box-border rounded-full 
          border border-input bg-slate 
          px-8 py-2 text-xl ring-offset-background 
          shadow-inner-slate
          placeholder:text-muted-foreground 
          focus-visible:outline-none focus-visible:ring-1 
          focus-visible:ring-ring focus-visible:ring-offset-0 
          disabled:cursor-not-allowed disabled:opacity-50`,
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export default Input
