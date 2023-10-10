import { Link, useLocation } from "react-router-dom"
import { AiOutlineRollback } from "react-icons/ai"
import { BsCart, BsSearch } from "react-icons/bs"

import MobileMenu from "./MobileMenu"
import Categories from "./Categories"

type NavigationBarProps = {
  openCart: () => void, 
  openSearch: () => void
}

export default function NavigationBar ({openCart, openSearch}: NavigationBarProps) {
  
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 md:h-screen md:min-w-[260px]">

      <section className="bg-custom-dark h-full p-4 shadow-md flex justify-between items-center z-50 md:shadow-none md:flex-col md:justify-start md:gap-24">
        
        <Link to='/' className={`text-xl flex gap-1 text-highlight md:text-4xl md:pt-4`}>
          <span>L</span>
          <span className="translate-y-1">O</span>
          <span>G</span>
          <span className="translate-y-1">O</span>
        </Link>
        
        {
          location.pathname.startsWith('/cheakout') ?
            <Link to='/' className="flex items-center gap-2 text-custom-white md:text-2xl">
              <AiOutlineRollback/>
              Go Back
            </Link>
          :
            <>
              <div className="flex md:flex-col gap-4 md:w-full">
                <_Button onClick={openSearch}>
                  <BsSearch />
                </_Button>

                <_Button onClick={openCart} margin="ml-auto">
                  <BsCart />
                </_Button>
              </div>
              
              <div className="hidden md:block md:w-full">
                <Categories />
              </div>
            </>
        }      
      </section>
      {
        !location.pathname.startsWith('/cheakout') &&
        <MobileMenu />
      }
    </div>
  )
}

const _Button = ({children, onClick, margin}: {children: React.ReactNode, onClick: () => void, margin?: 'ml-auto' | 'mr-auto'}) => (
  <button onClick={onClick} className={`${margin} text-2xl text-highlight md:w-3/5 md:flex md:justify-center md:border md:border-highlight md:py-2 md:px-6 md:rounded-xl md:hover:scale-105 transition-all duration-200 md:active:scale-95`}>
    {children}
  </button>
)