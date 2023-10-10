
type ButtonProps = {
  onClick?: () => void
  children?: React.ReactNode
  bgLight?: boolean
  width?: 'w-full' | 'w-fit' | 'w-1/2'
}

function Button({ bgLight, width = 'w-fit', children, onClick }: ButtonProps) {
  return (
    <button className={`${bgLight? 'bg-neutral-100 text-indigo-800' : 'bg-indigo-800 text-neutral-100'} ${width} py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button