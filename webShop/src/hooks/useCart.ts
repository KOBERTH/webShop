import { useEffect } from "react";

import useCustomContext from "./useCustomContext";
import { getCartProducts } from "../api/Post";
import { updateFetchProducts } from "../api/Put";

export default function useCart() {
  const { items, total, calculateTotal, getItems, getHash } = useCustomContext();

  const updateProducts = async () => {
    const tempSessionData = JSON.parse(localStorage.getItem('tempSessionData') || '');
    const tempSessionId = tempSessionData.sessionId
    const products = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const data = await updateFetchProducts(tempSessionId, products);
    console.log(data.message);
  }

  const setCartProduct = async ({user, tempSessionId}: {user?: string, tempSessionId?: string}) => {
    const data = await getCartProducts(user, tempSessionId)
    if (data.message) {
      console.error(data.message);
    } else {
      localStorage.setItem('cartItems', JSON.stringify(data));
    }
  }

  useEffect(() => {
    const handleLocalStorageChange = (e: StorageEvent) => {
      if (e.storageArea === localStorage) {
        const user = localStorage.getItem('email') || '';
        const tempSessionId = localStorage.getItem('tempSessionData') || '';
        // console.log('LocalStorage ha sido modificado manualmente:', e.key)
        setCartProduct({user, tempSessionId});
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

  return {items, total, getHash, updateProducts}
}