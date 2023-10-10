import { NavLink } from "react-router-dom"
import Button from "../Button"
import CustomLink from "../CustomLink"
import useProduct from "../../hooks/useProduct"

type ProductProps = {
  id: string, 
  img: string, 
  title: string, 
  price: string
}

const Product = ({id, img, title, price}: ProductProps) => {

  const { handleAddToCart } = useProduct();

  return (
    <div className="flex flex-col w-full">
      <NavLink to={`/singleProduct/${id}`} className="h-full w-full flex flex-col justify-between">
        <div className="bg-neutral-300 w-full h-4/5 flex items-center rounded-lg md:h-80 p-4">
          <img className="transition-all duration-300 block w-full h-full object-contain hover:scale-110" src={img} alt={img} />
        </div>
        <div className="py-2">
          <span className="text-lg block overflow-ellipsis whitespace-nowrap overflow-hidden md:text-base">{title}</span>
          <span className="text-lg md:text-2xl">{price}</span>
        </div>
      </NavLink>
      <div className="flex gap-2">
        <CustomLink to={`/singleProduct/${id}`} width="w-1/2">View product</CustomLink>
        <Button width="w-1/2" onClick={() => handleAddToCart(id, img, price, title)}>Add to cart</Button>
      </div>
    </div>
  )
}

export default Product