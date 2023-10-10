import { useParams } from "react-router-dom";

import Counter from "../components/Counter";
import Layout from "../Layouts/Layout";
import { useEffect, useState } from "react";
import useProduct from "../hooks/useProduct";
import { fetchProducts } from "../api/fetchProducts";
import { BiSubdirectoryRight } from "react-icons/bi";
import Button from "../components/Button";
import Products from "../components/Products/Products";

type ProductTypes = {
  id: string,
  img: string,
  name: string,
  price: string,
  discount: string,
  description: Array<string>,
  brand: string,
  category: string
}

export default function SingleProduct () {

  const productId = useParams()
  const {handleAddToCart, setAmount} = useProduct();
  const [product, setProduct] = useState<ProductTypes>();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productId.id) {
      const fetchData = async () => {
        const data = await fetchProducts(`product/${productId.id}`);
        setProduct(data);
      }
      fetchData();
    }
  }, [productId.id]);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      if (product) {
        const products = await fetchProducts(`category/${product.category}`);
        setProducts(products);
      }
    };
  
    fetchAndSetProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <Layout>
      <div className="p-6">

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-neutral-300 p-6 max-h-[80vh] lg:w-1/2 flex rounded-lg">
            <img className="w-full object-contain" src={product?.img} alt={product?.img} />
          </div>

          <div className="flex flex-col gap-4 lg:w-1/2 justify-center">
            <h4 className="text-xl font-semibold tracking-wider md:text-2xl lg:text-4xl">{product?.name}</h4>
            <span className="text-lg md:text-xl lg:text-2xl">{product?.price}</span>
            <ul className="text-lg flex flex-col gap-4">
              {
                product?.description.map((item, index) => (
                  <li key={index} className="flex items-center md:text-xl lg:text-2xl">
                    <BiSubdirectoryRight size={25} className="text-red-500" />
                    {item}.
                  </li>
                ))
              }
            </ul>
            
            <br />
            <div className="flex  gap-2">
              <Counter initialCount={1} onCountChange={setAmount} />
              <Button onClick={() => handleAddToCart(product?.id || '', product?.img || '', product?.price || '', product?.name || '')}>Add to cart</Button>
            </div>
            
            <div className="border border-neutral-900">
              <div className="bg-neutral-300 p-2 font-bold uppercase tracking-widest">Details</div>
              <ul className="p-2">
                <li className="flex gap-2">
                  <h4 className="font-semibold">Catetegory:</h4> 
                  <span className="uppercase">
                    {product?.category}
                  </span>
                </li>
                <li className="flex gap-2">
                  <h4 className="font-semibold">Brand:</h4> 
                  <span>
                    {product?.brand}
                  </span>
                </li>
              </ul>
            </div>
          </div>
            
            
        </div>
        <br />
        {/* In the future add comments to each product */}
            
        <Products products={products} headingText="Related products" />
            
      </div>
    </Layout>  
  )
}