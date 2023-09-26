import { BsCart, BsPerson, BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from  "react-router-dom";

import logo from "../../assets/logo.webp"
import { DesktopNavProps } from "../../types/componentsTypes";

import Categories from "./Categories";
import ProfileContainer from "./ProfileContainer";
import btnStyles from "../../components/Theme/button";
import ButtonNav from "../../components/Buttons/ButtonNav";

export default function DesktopNav ({email, handleLogout, openCart, openSearch}: DesktopNavProps) {
  
  const iconSize = 25;
  const navigate = useNavigate();
  const location = useLocation();
  const onCheakout = location.pathname != '/cheakout';
  
  function goBack () {
    const hash = localStorage.getItem('hash')
    if (location.pathname.startsWith('/cheakout')) {
      navigate(-1)
    } else {
      navigate(`/${hash}`)
    }

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
    <div className="hidden bg-neutral-900 px-3 rounded-lg md:h-full md:w-[260px] md:py-4 md:flex md:flex-col">
      <div className="flex flex-col gap-8 md:h-full">

        <div className="h-28 text-center flex justify-center">
          <img className="h-full" src={logo} alt="logo" />
        </div>

        <div className="flex flex-col gap-2">
          <ButtonNav className={`${onCheakout ? '': 'opacity-50 pointer-events-none'}`} onClick={() => onCheakout && openSearch()}>
            <BsSearch className="fill-neutral-100" size={iconSize} />
          </ButtonNav>
          <ButtonNav className={`${onCheakout ? '': 'opacity-50 pointer-events-none'} ml-auto`} onClick={() => onCheakout && openCart()}>
            <BsCart className="fill-neutral-100" size={iconSize} />
          </ButtonNav>
        </div>

        {
          location.pathname !== '/'? 
            <button className={btnStyles.primary + 'w-full'} onClick={() => goBack()}> Go Back </button>
          :
            <Categories className="h-full" />
        }

      </div>
      <div className="text-neutral-100 flex flex-col items-center justify-center gap-2">
        <BsPerson size={iconSize} />
        <ProfileContainer email={email} handleLogout={handleLogout} />
      </div>
    </div>
  )
}