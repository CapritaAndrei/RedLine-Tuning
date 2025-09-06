import { forwardRef } from 'react'

const Textarea = forwardRef(({ 
  label,
  error,
  className = '',
  required = false,
  rows = 4,
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
      <textarea
        ref={ref}
        rows={rows}
        className={`input resize-none ${error ? 'input-error' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="error-message">{error}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
