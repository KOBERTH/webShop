import { useLocation } from "react-router-dom";
import useCustomContext from "./useCustomContext";
import { addProductToCart } from "../api/Post";
import { useState } from "react";

export default function useProduct() {
  const location = useLocation();
  const [amount, setAmount] = useState(1);
  const { addProduct, getHash } = useCustomContext();

  const handleAddToCart = async (id: string , img: string, price: string, name: string) => {
    
    let tempSesionId = '';
    const userEmail = localStorage.getItem('email') || '';

    if (userEmail === '') {
      tempSesionId = localStorage.getItem('sessionId') || '';
      if (tempSesionId === '') {
        const date = new Date();
        tempSesionId = (date.getTime() + Math.random()).toString();
        const tempSessionData = {
          sessionId: tempSesionId,
        };
        localStorage.setItem('tempSessionData', JSON.stringify(tempSessionData));
      }
    }
    

    const product = {
      id,
      user: userEmail,
      tempSesionId,
      img_url: img,
      name,
      price,
      amount: amount.toString(),
    };

    addProduct(product);
    
    const data = await addProductToCart(product);
    console.log(data);
  };
  

  return { location, amount, getHash, handleAddToCart, setAmount }
}
