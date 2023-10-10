import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Categories from "./Categories";

// import Button from "./Button";

const MobileMenu = () => {
  // const iconSize = 22;
  const [seeMenu, setSeeMenu] = useState(false);
  const handleMenu = () => {
    setSeeMenu(!seeMenu)
  }
  return (
    <div className={`bg-custom-dark w-full fixed flex flex-col justify-between transition-all md:hidden duration-300 shadow-md -z-10 ${seeMenu ? 'translate-y-0' : '-translate-y-full'}`}>
      <Categories Cfunction={handleMenu} />
      <div className="bg-gradient-to-t from-highlight to-custom-dark p-2 absolute bottom-0 right-0 translate-y-full rounded-bl-lg" onClick={handleMenu}>
        <AiOutlineMenu className="text-neutral-100" size={25} />
      </div>
    </div>
  )
}

export default MobileMenu