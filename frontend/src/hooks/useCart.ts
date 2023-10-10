import { useEffect } from "react";

import useCustomContext from "./useCustomContext";
import { updateFetchProducts } from "../api/Put";
import { get_cart_products } from "../api/cartApi";

export default function useCart() {
  const { items, total, calculateTotal, getItems } = useCustomContext();

  const updateProducts = async () => {
    const tempSessionData = JSON.parse(localStorage.getItem('tempSessionData') || '');
    const tempSessionId = tempSessionData.sessionId
    const products = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const data = await updateFetchProducts(tempSessionId, products);
    console.log(data.message);
  }

  const setCartProduct = async (user: string) => {
    const data = await get_cart_products(user)
    if (data.message) {
      console.error(data.message);
    } else {
      localStorage.setItem('cartItems', JSON.stringify(data));
    }
  }

  useEffect(() => {
    
    const handleLocalStorageChange = (e: StorageEvent) => {
      if (e.storageArea === localStorage) {
        let user = localStorage.getItem('email') || '';
        if (user === '') {
          const tempSessionData = localStorage.getItem('tempSessionData') || '';
          if (tempSessionData === '') {
            console.log('no hay un usuario registrado o no se han agregado productos al localstorage')
          } else {
            const data = JSON.parse(tempSessionData);
            user = data.sessionId;
            setCartProduct(user);
          }
        } else{
          setCartProduct(user);
        }
      }
    };

    window.addEventListener('storage', handleLocalStorageChange);
    getItems();
    calculateTotal();
    return () => {
      window.removeEventListener('storage', handleLocalStorageChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {items, total, updateProducts}
}