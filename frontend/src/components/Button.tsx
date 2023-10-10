
type ButtonProps = {
  onClick?: () => void
  children?: React.ReactNode
  width?: 'w-full' | 'w-fit' | 'w-1/2'
}

function Button({ width = 'w-fit', children, onClick }: ButtonProps) {
  return (
    <button className={`bg-highlight ${width} py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button