import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="text-secondary block text-sm mb-1">{label}</label>
        <input
          ref={ref}
          className={`w-full p-2 rounded bg-hoverLight text-black focus:outline-none focus:ring-1 focus:ring-accent ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
