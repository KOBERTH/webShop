import { BsCart, BsGridFill, BsPerson, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import ProfileContainer from "./ProfileContainer";
import btnStyles from "../../components/Theme/button";
import Categories from "./Categories";
import { MobileNavProps } from "../../types/componentsTypes";

export default function MobileNav ({ categories, profile, email, handleLogout, handleCategories, handleProfile, openCart, openSearch }: MobileNavProps) {
  
  const iconSize = 25;
  const navigate = useNavigate();

  function goBack () {
    const hash = localStorage.getItem('hash')
    navigate(`/${hash}`)

    // Si hay un hash, buscar el elemento y hacer scroll hasta él
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          localStorage.removeItem('hash');
        }
      }, 200);
    }
  }

  return (
    <div className="bg-neutral-900 w-full py-2 px-3 rounded-lg md:hidden">
      {
        location.pathname.startsWith('/singleProduct') ? 
          <button className={btnStyles.primary + 'w-full'} onClick={() => goBack()}> Go Back </button>
        :
          <Categories className={`${categories ? "max-h-min mb-4" : "max-h-0"}`} />
      }
        
      <div className={` text-neutral-100 flex flex-col items-center gap-2 overflow-hidden ${profile ? "max-h-min mb-4" : "max-h-0"}`}>
        <BsPerson size={iconSize} />
        <ProfileContainer email={email} handleLogout={handleLogout} />
      </div>


      <div className="text-neutral-100 flex justify-between">
        <BsSearch size={iconSize} onClick={openSearch} />
        <BsCart size={iconSize} onClick={openCart} />
        <BsGridFill size={iconSize} onClick={handleCategories} />
        <BsPerson size={iconSize} onClick={handleProfile} />
      </div>
      
    </div>
  )
}