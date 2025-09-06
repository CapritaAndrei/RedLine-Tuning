import { forwardRef } from 'react'

const Input = forwardRef(({ 
  label,
  error,
  className = '',
  required = false,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="label">
          {label}
          {required && <span className="text-accent-red ml-1">*</span>}
        </label>
      )}
      <input
        ref={ref}
        className={`input ${error ? 'input-error' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="error-message">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
