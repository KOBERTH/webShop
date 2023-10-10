import { BsCart, BsPersonCircle, BsSearch } from "react-icons/bs"
import MobileMenu from "./MobileMenu"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AiOutlineRollback } from "react-icons/ai"

type HeaderProps = {
  openCart: () => void, 
  openSearch: () => void
}

function Header({openCart, openSearch}: HeaderProps) {
  
  const location = useLocation();
  const iconSize = 20;
  const ngClass = 'md:border md:border-indigo-800 md:w-3/5 md:p-2 md:flex md:justify-center rounded-xl';
  const categories = [
    "headphones",
    "speakers",
    "smartwhatches",
    "earbuds"
  ];

  return (
    <header className="sticky top-0 z-50 md:h-screen md:min-w-[260px] md:z-20">
      <section className="bg-neutral-100 h-full p-4 shadow-md md:shadow-none flex justify-between items-center z-50">
        
        <div className="contents md:flex md:flex-col md:items-center md:gap-8 md:h-full md:w-full">
          
          <Link to='/' className={`text-xl flex gap-1 text-indigo-800 md:text-4xl `}>
            <span>L</span>
            <span className="translate-y-1">O</span>
            <span>G</span>
            <span className="translate-y-1">O</span>
          </Link>

          {
            location.pathname.startsWith('/cheakout') ?
              <Link to='/' className="flex items-center gap-2">
                <AiOutlineRollback size={20} />
                Go Back
              </Link>
            :
              <>
                <div className="flex md:flex-col gap-4 md:w-full">
                  {/* <BsPersonCircle size={iconSize} className='md:hidden' /> */}
                  <div className={ngClass} onClick={openSearch}>
                    <BsSearch className='text-xl md:text-2xl' />
                  </div>
                  <div className={`md:ml-auto ${ngClass}`} onClick={openCart}>
                    <BsCart className='text-xl md:text-2xl' />
                  </div>
                </div>
                
                <div className="hidden md:block md:w-full">
                  <h4 className="text-2xl tracking-widest font-semibold after:content-normal after:block after:w-12 after:h-1 after:bg-indigo-800">
                    Categories
                  </h4>
                  <nav className="p-3 flex flex-col gap-2">
                    {
                      categories.map((item, index) => (
                        <NavLink key={index} to={`/category/${item}`} className={({ isActive }) => isActive ? "text-indigo-800 translate-x-2 uppercase tracking-wider text-xl transition-all duration-300" : "hover:translate-x-1 uppercase tracking-wider text-xl transition-all duration-300"}>
                          {item}
                        </NavLink>
                      ))
                    }
                  </nav>
                </div>
              </>
          }

        </div>
      
      </section>
      {
        !location.pathname.startsWith('/cheakout') &&
        <MobileMenu />
      }
    </header>
  )
}

export default Header