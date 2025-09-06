import { forwardRef } from 'react'

const Card = forwardRef(({ 
  children, 
  variant = 'default',
  className = '',
  testId,
  ...props 
}, ref) => {
  const variants = {
    default: 'card',
    elevated: 'card-elevated'
  }
  
  const classes = `${variants[variant]} ${className}`
  
  return (
    <div
      ref={ref}
      className={classes}
      data-testid={testId}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Card
