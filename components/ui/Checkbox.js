import { forwardRef } from 'react'

const Checkbox = forwardRef(({ 
  label,
  error,
  className = '',
  children,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-3">
        <input
          ref={ref}
          type="checkbox"
          className={`w-5 h-5 mt-0.5 text-accent-red bg-background-surface border-border rounded focus:ring-accent-red focus:ring-2 focus:ring-opacity-50 ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
        <div className="flex-1">
          {label && (
            <label className="text-sm text-gray-300 leading-relaxed cursor-pointer">
              {label}
            </label>
          )}
          {children}
        </div>
      </div>
      {error && (
        <p className="error-message">{error}</p>
      )}
    </div>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
