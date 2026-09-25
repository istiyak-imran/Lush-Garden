

const Button = ({children,type,className,...props}) => {
  return (
<button className={`inline-flex items-center gap-3 hover:bg-primary hover:border-primary hover:rounded-[3px] ${className}`} {...props} type={type}>
        {children}
    </button>
  )
}

export default Button