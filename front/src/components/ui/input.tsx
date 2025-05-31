import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={`w-full p-2 border border-slate-300 focus-visible:border-ring focus-visible:ring-ring/50 rounded bg-hoverLight text-black focus:outline-none focus:ring-1 focus:ring-accent ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
