import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import Products from "../components/Products/Products"
import { fetchProducts } from "../api/fetchProducts";
import Layout from "../Layouts/Layout";

const Categories = () => {
  const params = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const products = await fetchProducts(`category/${params.category}`);
      setProducts(products);
    };
  
    fetchAndSetProducts();
  }, [params.category]);



  return (
    <Layout>
      <div className="bg-neutral-200 mt-4 md:mt-0 py-10 flex justify-center">
        <h2 className="font-bold text-3xl">Products</h2>
      </div>
        
      <div className="flex px-2">
        <section className="w-full">  
          <h1 className="ml-2 text-2xl md:text-3xl lg:text-4xl font-medium uppercase tracking-wider">{params.category}</h1>

          <Products 
            products={products}
            innerPage={true}
          />
        </section>
      </div>
    </Layout>
  )
}

export default Categories