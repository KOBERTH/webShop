import { ReactNode, useState } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Cart from "./components/Cart";

export default function Layout ({children}: {children: ReactNode}) {
  const [searchStatus, setSearchStatus] = useState(false);
  const [cartStatus, setCartStatus] = useState(false);

  const openCart = () => {
    setCartStatus(true)
    setSearchStatus(false)
  }

  const openSearch = () => {
    setSearchStatus(true)
    setCartStatus(false)
  }

  return (
    <div className="bg-neutral-100 h-full flex flex-col md:flex-row-reverse">
      {children}
      <NavBar openCart={openCart} openSearch={openSearch} />
      <Search searchStatus={searchStatus} closeSearch={() => setSearchStatus(false)} />
      <Cart cartStatus={cartStatus} closeCart={() => setCartStatus(false)} />
    </div>
  )
}