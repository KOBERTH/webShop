import { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import Hero from "../components/Hero";
import Products from "../components/Products/Products";
import { fetchProducts } from "../api/fetchProducts";

export default function Home (  ) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const products = await fetchProducts('popular/list');
      setProducts(products);
      // console.log(products)
    };
  
    fetchAndSetProducts();
  }, [])

  return (
    <Layout>
      <Hero />
      <Products products={products} headingText="Popular" />
    </Layout>
  )
}

// import React, { Suspense } from 'react';
// import Layout from "../../Layouts/Layout";
// import Footer from "../../components/Footer";
// import Hero from "./components/Hero";

// // Aquí usamos `React.lazy()` para cargar dinámicamente los componentes de las secciones
// const SectionHeadset = React.lazy(() => import('./components/Section').then(module => ({ default: () => <module.default categoryName="headset" /> })));
// const SectionEarbuds = React.lazy(() => import('./components/Section').then(module => ({ default: () => <module.default categoryName="earbuds" /> })));
// const SectionSpeaker = React.lazy(() => import('./components/Section').then(module => ({ default: () => <module.default categoryName="speaker" /> })));
// const SectionSmartwatch = React.lazy(() => import('./components/Section').then(module => ({ default: () => <module.default categoryName="smartwatch" /> })));

// export default function Home (  ) {
//   return (
//     <Layout>
//       <div className="p-2 h-full w-full flex flex-col gap-4 scroll-smooth overflow-y-scroll snap-y snap-mandatory">
//         <Hero />
//         <Suspense fallback={<div>Cargando...</div>}>
//           <SectionHeadset />
//           <SectionEarbuds />
//           <SectionSpeaker />
//           <SectionSmartwatch />
//         </Suspense>
//         <Footer />
//       </div>
//     </Layout>
//   )
// }
