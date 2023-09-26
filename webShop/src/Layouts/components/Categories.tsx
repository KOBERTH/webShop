import { ReactNode } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import useCustomContext from "../../hooks/useCustomContext";

const CLink = ({ to, children }: { to: string, children?: ReactNode }) => {
  const location = useLocation();
  const {navigateTo} = useCustomContext();
  return (
    <a href={`${to}`} className={location.hash === to ? 'text-[#5846C5] pl-2 transition-all duration-300' : 'hover:pl-1 transition-all duration-300'} onClick={navigateTo}>
      {children}
    </a>
  )
} 

const Categories = ({className}: {className?: string}) => {
  const iconSize = 25

  return (
    <div className={`text-neutral-100 overflow-hidden ${className}`}>
      <div className="pl-2 py-2 mb-4 flex border-2 rounded-tl-2xl rounded-br-2xl">
        <h2 className="text-xl tracking-widest font-extrabold md:text-2xl">
          Categories
        </h2>
      </div>
      <nav className="px-3 flex flex-col gap-6 text-lg tracking-widest">
        <CLink to="#home">
          <div className="flex justify-between items-center">
            <p>Home</p>
            <AiOutlineHome size={iconSize} />
          </div>
        </CLink>
        <CLink to="#headset">Headphones</CLink>
        <CLink to="#smartwatch">Smartwatch</CLink>
        <CLink to="#speaker">Speakers</CLink>
        <CLink to="#earbuds">Earbuds</CLink>
      </nav>
    </div>
  )
}

export default Categories