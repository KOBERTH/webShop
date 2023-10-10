import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

// import Button from "./Button";

const MobileMenu = () => {

  // const iconSize = 22;
  const [seeMenu, setSeeMenu] = useState(false);

  const categories = [
    "headphones",
    "speakers",
    "smartwhatches",
    "earbuds"
  ];

  return (
    <div className={`bg-white w-full fixed flex flex-col justify-between transition-all md:hidden duration-300 -z-10 ${seeMenu ? '' : '-translate-y-[95%]'}`}>
      <ul className="p-3 flex flex-col gap-2">
        {
          categories.map((item, index) => (
            <li key={index} className="uppercase">
              <NavLink to={`/category/${item}`} className={({ isActive }) => isActive ? "text-red-500" : ""} onClick={() => setSeeMenu(false)}>
                {item}
              </NavLink>
            </li>
          ))
        }  
      </ul>
      <div className="bg-indigo-800 h-1">
        <div className="absolute bottom-0 right-1 translate-y-full bg-indigo-800 p-1 rounded-b-lg" onClick={() => setSeeMenu(!seeMenu)}>
          <AiOutlineMenu className="text-neutral-100" size={25} />
        </div>
      </div>
    </div>
  )
}

export default MobileMenu