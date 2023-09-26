import { ReactNode, createContext, useState } from "react";
import { ContextProps, Item } from "../types/contextTypes";

export const Context = createContext<ContextProps>({
  total: 0,
  items: [],
  isNavigating: false,
  
  getHash: () => {},
  getItems: () => {},
  deleteItem: () => {},
  addProduct: () => {},
  calculateTotal: () => {},
  navigateTo: () => {},
  noNavigateTo: () => {},
});

export default function Provider ({ children }: { children: ReactNode }) {

  // const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [items, setItems] = useState<Array<Item>>([]);
  const [total, setTotal] = useState(0);

  // Products Controll
  function getItems () {
    const cartItems = localStorage.getItem('cartItems');
    setItems(cartItems ? JSON.parse(cartItems) : []);
  }

  function addProduct (product: Item) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const productExists = cartItems.some((item: Item) => item.id === product.id);

    if (productExists) {
      console.log('El producto ya existe en el carrito.');
    } else {
      cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      getItems();
      calculateTotal();
    }

  }

  function deleteItem (id: string) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const itemIndex = cartItems.findIndex((item: Item) => item.id === id.toString());
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Comprobar si el carrito está vacío
    if (cartItems.length === 0) {
      // El carrito está vacío, así que eliminamos la sesión temporal
      localStorage.removeItem('tempSessionData');
    }

    getItems();
    calculateTotal();
  }

  // Others Functions
  function getHash (section: string) {
    localStorage.setItem('hash', section);
  }

  function calculateTotal() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const priceWithoutDollarSign = cartItems[i].price.substring(1);
      const amount = cartItems[i].amount;
      const price = priceWithoutDollarSign.replace(",", ".")
      const productAmount = price * amount;
      total += parseFloat(productAmount.toString());
    }
    total = parseFloat(total.toFixed(2));
    // Actualizar el total en el estado
    setTotal(total);
  }

  function navigateTo() {
    setIsNavigating(true);
  }

  function noNavigateTo() {
    setIsNavigating(false);
  }

  // function generateUniqueID() {

  //   // Comprobar si han pasado más de tres días desde que se guardó la sesión
  //   const storedTime = localStorage.getItem('sessionTime') || '';
  //   const currentTime = new Date().getTime();

  //   if (currentTime - storedTime > 3*24*60*60*1000) {
  //       // Han pasado más de tres días, así que borramos la sesión
  //       localStorage.removeItem('sessionId');
  //       localStorage.removeItem('sessionTime');
  //   }
  // }

  return (
    <Context.Provider value={{ items, total, isNavigating, getItems, deleteItem, addProduct, calculateTotal, getHash, navigateTo, noNavigateTo }}>
      {children}
    </Context.Provider>
  );
}