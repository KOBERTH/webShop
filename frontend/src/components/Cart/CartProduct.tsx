import { BiSolidTrash } from "react-icons/bi";
import { useState } from "react";

import { deleteProductFromCart } from "../../api/deleteProductCart";
import useCustomContext from "../../hooks/useCustomContext";
import { Item } from "../../types/contextTypes";
import Counter from "../Counter";

export default function CartProduct ({id, img, productName, price, amount}: {id: string, img: string, productName: string, price: string, amount:number}) {

  const { deleteItem, calculateTotal } = useCustomContext();
  const [ cartAmount, setCartAmount ] = useState(amount);

  const handleCountChange = (newCount: number) => {
    setCartAmount(newCount);
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const productIndex = cartItems.findIndex((item: Item) => item.id === id);
    if (productIndex !== -1) {
      // Actualiza el valor de amount en el producto
      cartItems[productIndex].amount = newCount.toString();
  
      // Guarda los cartItems actualizados en el LocalStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      calculateTotal();
    }
  };

  async function deleteProduct(id: string) {
    const data = await deleteProductFromCart(id);
    console.log(data)
    deleteItem(id);
  }

  return (
    <div className="bg-custom-light p-2 flex gap-4 rounded-lg">
      <img className="w-24 object-contain" src={img} alt="headphonesImg" />
      <section className="w-full flex flex-col gap-2 justify-between">
        <div className="flex justify-between">
          <h4>{productName}</h4>
          <BiSolidTrash className="cursor-pointer" size={20} color='red' onClick={ () => deleteProduct(id) } />
        </div>
        <div className="flex gap-2 tracking-wider">
          <span>{price}</span> 
          <span className="text-green-800">x {cartAmount}</span>
        </div>
        <Counter initialCount={cartAmount} onCountChange={handleCountChange} />
      </section>
    </div>
  )
}