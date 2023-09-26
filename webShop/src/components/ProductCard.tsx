import { ProductCardProps } from "../types/componentsTypes";
import { NavLink } from "react-router-dom";

import useProductCard from "../hooks/useProductCard";
import btnStyles from "./Theme/button";
import Counter from "./Counter";
import { AiOutlineLine } from "react-icons/ai";

export default function ProductCard ( { id, img, price, name, features}: ProductCardProps ) {

  const {location, getHash, handleAddToCart, setAmount} = useProductCard();

  return (
    <div className="bg-neutral-200 h-full p-2 rounded-lg flex flex-col shadow shadow-neutral-600 lg:flex-row">
      
      <div className="h-full flex lg:w-1/2">
        <img className="h-full aspect-video object-contain" src={img} alt="img" />
      </div>

      <div className="tracking-widest flex flex-col gap-2 md:gap-3 justify-center lg:w-1/2 lg:px-10">
        
        <h3 className="text-xl lg:text-4xl font-bold">{name}</h3>
        
        <span className="lg:text-2xl font font-semibold">{price}</span>
        
        <ul className="hidden lg:flex lg:flex-col lg:gap-2">
          {
            features.map((feature, index) => (
              <li className="list-inside lg:text-2xl flex items-center gap-2" key={index}>
                <AiOutlineLine className='text-red-600' />
                {feature}
              </li>
              ))
            }
        </ul>

        <div className="flex items-center gap-2 lg:gap-4 lg:flex-col">
          <div className="contents w-full lg:flex lg:items-center lg:gap-4">
            <div className="hidden lg:block">
              <Counter initialCount={1} onCountChange={setAmount} />
            </div>
            <button className={`${btnStyles.primary} w-full`} onClick={() => handleAddToCart({id, img, price, name})}>
              Add to Cart
            </button>
          </div>
          <NavLink to={`/singleProduct/${id}`} className={`${btnStyles.secondary} w-full`} onClick={() => getHash(location.hash)}>
            More details
          </NavLink>
        </div>

        <div className="hidden lg:block shadow">
          <h4 className="bg-neutral-300 p-2">Detalles</h4>
          <ul className="p-2 flex flex-col gap-2">
            <li>Marca</li>
            <li>Catgoria</li>
            <li>Color</li>
            <li>Genero</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}