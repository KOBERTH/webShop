import { NavLink } from "react-router-dom"
import useProduct from "../../hooks/useProduct"
import { BsCartPlus } from "react-icons/bs"

type ProductProps = {
  id: string, 
  img: string, 
  title: string, 
  price: string
}

const Product = ({id, img, title, price}: ProductProps) => {

  const { handleAddToCart } = useProduct();


  return (
    <div className="bg-custom-dark w-full p-4 flex flex-col gap-4 rounded-xl shadow-md">
      <NavLink to={`/singleProduct/${id}`} className="h-full w-full flex flex-col justify-between">
        <div className="w-full h-4/5 flex items-center rounded-lg md:h-80 p-4">
          <img className="transition-all duration-300 block w-full h-full object-contain hover:scale-110" src={img} alt={img} />
        </div>
        <div className="text-custom-white text-center">
          <span className="text-lg block overflow-ellipsis whitespace-nowrap overflow-hidden md:text-xl">{title}</span>
          <span className="text-lg md:text-2xl">{price}</span>
        </div>
      </NavLink>
      <div className="flex justify-center">
        <BsCartPlus size={30} className="text-highlight" onClick={() => handleAddToCart(id, img, price, title)} />
      </div>
    </div>
  )
}

export default Product