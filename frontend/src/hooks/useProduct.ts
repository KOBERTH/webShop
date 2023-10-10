import { useLocation } from "react-router-dom";
import useCustomContext from "./useCustomContext";
import { useState } from "react";
import { save_product_in_cart } from "../api/cartApi";

export default function useProduct() {
  const location = useLocation();
  const [amount, setAmount] = useState(1);
  const { addProduct } = useCustomContext();

  const handleAddToCart = async (id: string , img: string, price: string, name: string) => {
    
    let user = localStorage.getItem('email') || '';

    if (user === '') {
      let tempSessionData = localStorage.getItem('tempSessionData') || '';      
      if (tempSessionData === '') {
        const date = new Date();
        user = (date.getTime() + Math.random()).toString();
        const tempSessionData = {
          sessionId: user,
        };
        localStorage.setItem('tempSessionData', JSON.stringify(tempSessionData));
      } else {
        let data = JSON.parse(tempSessionData);
        user = data.sessionId;
      }
    }
    

    const product = {
      id,
      user,
      img_url: img,
      name,
      price,
      amount: amount.toString(),
    };

    addProduct(product);
    
    const data = await save_product_in_cart(product);
    console.log(data);
  };
  

  return { location, amount, handleAddToCart, setAmount }
}
