import Layout from "../../Layouts/Layout";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Section from "./components/Section";

export default function Home (  ) {

  return (
    <Layout>
      <div className="p-2 h-full w-full flex flex-col gap-4 scroll-smooth overflow-y-scroll snap-y snap-mandatory">
        <Hero />
        <Section categoryName="headset" />
        <Section categoryName="smartwatch"  />
        <Section categoryName="speaker" />
        <Section categoryName="earbuds"  />
        <Footer />
      </div>
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
