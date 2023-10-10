import { ReactNode, useEffect, useState } from "react";
import Search from "./Search";
import Cart from "./Cart/Cart";
import NavigationBar from "./Nav/NavigationBar";
// import Footer from "../components/Footer";

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

  useEffect(() => {
    if (viewCart || viewSearch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Limpiar después de que el componente se desmonte
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [viewCart, viewSearch]);

  return (
    <div className="bg-custom-light h-full flex flex-col md:flex-row">
      <NavigationBar openCart={openCart} openSearch={openSearch} />
      <section className="min-h-full w-full flex flex-col justify-between gap-4 md:z-40">
        {children}
        {/* <Footer /> */}
      </section>
      <Search searchStatus={viewSearch} closeSearch={() => setViewSearch(false)} />
      <Cart cartStatus={viewCart} closeCart={() => setViewCart(false)} />
    </div>
  )
}