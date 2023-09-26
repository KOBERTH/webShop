import { useParams } from "react-router-dom";
import img from "../assets/img.png";

import Counter from "../components/Counter";
import Layout from "../Layouts/Layout";
import { useEffect, useState } from "react";
import btnStyles from "../components/Theme/button";
import { SectionProps } from "../types/componentsTypes";
import { getProductById } from "../api/Gets";
import useProduct from "../hooks/useProduct";

export default function SingleProduct () {

  const productId = useParams()
  const {handleAddToCart, setAmount} = useProduct();
  const [product, setProduct] = useState<SectionProps>();

  useEffect(() => {
    if (productId.id) {
      const fetchData = async () => {
        const data = await getProductById(productId.id || '');
        setProduct(data);
      }
      fetchData();
    }
  }, [productId.id]);

  return (
    <Layout>
      <div className="w-full h-full p-4 overflow-y-scroll">
        
        <div className="p-4 bg-neutral-200 rounded-lg shadow-lg shadow-neutral-600 flex flex-col xl:flex-row xl:gap-4">
          <section className="rounded-lg overflow-hidden xl:w-1/2">
            <img className="bg-neutral-200 object-contain lg:w-full p-4 max-h-[40rem]" src={product?.img_url} alt={img} />
          </section>

          <section className="flex flex-col gap-3 xl:w-1/2">
            <span>{product?.name}</span>
            
            <span>{product?.price}</span>
            
            <ul>
              {
                product?.description.map((feature, index) => (
                  <li className="list-inside lg:text-2xl" key={index}>{feature}</li>
                ))
              }
            </ul>
            
            <div className="flex gap-4">
              <Counter initialCount={1} onCountChange={setAmount} />
              <button className={`${btnStyles.primary} w-full`} onClick={() => handleAddToCart(product?.id.toString() || '', product?.img_url || '', product?.price || '', product?.name || '')}>
                Add to Cart
              </button>
            </div>

            <div className="shadow">
              <h4 className="bg-neutral-300 p-2">Detalles</h4>
              <ul className="p-2 flex flex-col gap-2">
                <li>Marca</li>
                <li>Catgoria: {product?.category}</li>
                <li>Color</li>
                <li>Genero</li>
              </ul>
            </div>
            {/* Podria incluir un par de obsiones para compartir el link */}
          </section>
        </div>

        <section>
          {/* Productos relacionados */}
        </section>

      </div>
    </Layout>  
  )
}