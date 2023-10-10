import { ReactNode, useState } from "react";
import Search from "../components/Search/Search";
import Cart from "../components/Cart/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout ({children}: {children: ReactNode}) {
  const [viewSearch, setViewSearch] = useState(false);
  const [viewCart, setViewCart] = useState(false);

  const openCart = () => {
    setViewCart(true)
    setViewSearch(false)
  }

  const openSearch = () => {
    setViewSearch(true)
    setViewCart(false)
  }

  return (
    <div className="bg-neutral-100 h-full flex flex-col md:flex-row">
      <Header openCart={openCart} openSearch={openSearch} />
      <div className="bg-neutral-100 overflow-hidden min-h-full w-full flex flex-col justify-between gap-4 rounded-l-3xl shadow-lg shadow-neutral-400 md:z-40">
        {children}
        <Footer />
      </div>
      <Search searchStatus={viewSearch} closeSearch={() => setViewSearch(false)} />
      <Cart cartStatus={viewCart} closeCart={() => setViewCart(false)} />
    </div>
  )
}