import { NavLink } from "react-router-dom";

export default function Categories({Cfunction}: {Cfunction?: ()=>void}) {
  const categories = [
    "popular",
    "headphones",
    "speakers",
    "smartwhatches",
    "earbuds"
  ];
  return (
    <nav className="p-4 flex flex-col gap-4">
      {
        categories.map((item, index) => (
          <NavLink 
            key = {index} 
            to = {`/${item}`} 
            className = { ( { isActive } ) => `uppercase tracking-widest ${isActive ? "text-highlight translate-x-3" : "text-custom-white"} transition-all duration-300 md:hover:translate-x-4 md:text-xl`} 
            onClick={Cfunction}>
            {item}
          </NavLink>
        ))
      }
    </nav>
  )
}
