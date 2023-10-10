import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Products from "../components/Products/Products";
import { fetchProducts } from "../api/fetchProducts";
import { useParams } from "react-router-dom";

export default function Home (  ) {

  const category = useParams().category
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const products = await fetchProducts(category === 'popular' ? 'popular/list' : `category/${category}`);
      setProducts(products);
    };
  
    fetchAndSetProducts();
  }, [category])

  return (
    <Layout>
      <Products products={products} headingText={category} />
    </Layout>
  )
}