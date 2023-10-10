import { Link } from "react-router-dom"

type CustomLinkProps = {
  to: string
  className?: string
  children?: React.ReactNode
  bgLight?: boolean
  width?: 'w-full' | 'w-fit' | 'w-1/2'
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

function CustomLink({ bgLight, width = 'w-fit', children, to, className, onClick }: CustomLinkProps) {
  return (
    <Link to={to} onClick={onClick} className={`${bgLight? 'bg-neutral-100 text-indigo-800' : 'bg-indigo-800 text-neutral-100'} ${width} ${className} py-2 px-4 text-center rounded-lg transition-all duration-200 hover:scale-105 active:scale-95`}>
      {children}
    </Link>
  )
}

export default CustomLink