import { ReactNode } from "react"

type ButtonNavProps = {
  className?: string,
  children?: ReactNode
  onClick?: () => void
}

const ButtonNav = ({ className, onClick, children }: ButtonNavProps) => {
  return (
    <button className={`w-3/5 p-2 flex justify-center rounded-lg border-2 border-[#5846C5] transition-all duration-300 hover:scale-105 active:scale-95 ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonNav