import { forwardRef } from 'react'

const Select = forwardRef(({ 
  label,
  error,
  options = [],
  placeholder = 'Alege o opțiune',
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
      <select
        ref={ref}
        className={`input ${error ? 'input-error' : ''} ${className}`}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="error-message">{error}</p>
      )}
    </div>
  )
})

Select.displayName = 'Select'

export default Select
