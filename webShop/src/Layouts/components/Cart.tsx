import { AiOutlineCloseSquare } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import CartProduct from "./CartProduct";
import btnStyles from "../../components/Theme/button";
import useCart from "../../hooks/useCart";

export default function Cart ({cartStatus, closeCart}: {cartStatus?: boolean, closeCart?: () => void}) {
  const iconsSize = 35;
  const {items, total, getHash, updateProducts} = useCart();
  return (
    <div className={`h-full fixed right-0 flex z-50 duration-300 ${cartStatus ? 'translate-x-0 w-full' : 'translate-x-full'}`}>
      <div className="w-0 md:w-full md:h-full bg-neutral-900/50" onClick={closeCart}></div>
      <div className="bg-neutral-900 w-full h-full flex flex-col justify-between md:w-96 md:min-w-[24rem]" >
        <section className="p-4 text-2xl flex items-center justify-between border-b border-indigo-500 text-neutral-100">
          <span>Cart ( {items.length} )</span>
          <AiOutlineCloseSquare size={iconsSize} color="red" onClick={closeCart} />
        </section>

        <section className="p-4 h-full flex flex-col gap-4 overflow-y-scroll scrollbar-none">
          {
            items.length > 0  ?
              items.map((item) => (
                <CartProduct
                  key={item.id} 
                  id={item.id}
                  img={item.img_url}
                  productName={item.name}
                  price={item.price}
                  amount={parseInt(item.amount)}
                />
              ))
            :
              <div className="h-full text-neutral-100 flex flex-col items-center justify-center opacity-60">
                <BiCartAdd size={350} />
                <span className="text-xl tracking-widest text-center">There are no products in the cart</span>
              </div>
          }
        </section>
        
        <section className="p-4 border-t border-indigo-500 flex flex-col gap-4">
          <div className="text-xl text-neutral-100 flex items-center justify-between">
            <span>Total: </span>
            <span>$ {total}</span>
          </div>
          <NavLink to={'/cheakout'} className={`${btnStyles.primary} w-full ${items.length === 0 ? 'opacity-50 pointer-events-none' : ''}`}
            onClick={(e) => {
              if (items.length === 0) {
                e.preventDefault();
              }
              getHash(location.hash)
              updateProducts();
            }}
          >
            Cheakout
          </NavLink>
        </section>
      </div>
    </div>
  )
}