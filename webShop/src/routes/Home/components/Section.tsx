import { useLocation, useNavigate } from "react-router-dom";
import { RefObject, useEffect, useState } from "react";

import Carousel from "../../../components/Carousel/Carousel";
import ProductCard from "../../../components/ProductCard";
import useIntersection from "../../../hooks/useIntersection";
import { SectionProps } from "../../../types/componentsTypes";
import { getProductsByCategory } from "../../../api/Gets";
import useCustomContext from "../../../hooks/useCustomContext";

export default function Section ({ categoryName }: {categoryName: string}) {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState<Array<SectionProps>>([])
  const {isNavigating, noNavigateTo} = useCustomContext();
  const {isIntersecting, ref} = useIntersection({
    threshold:1,
  })

  useEffect(() => {
    if (isIntersecting && isNavigating === false) {
      navigate(`#${categoryName}`);
    }
  }, [categoryName, isIntersecting, isNavigating, navigate]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsByCategory(categoryName);
      setProducts(data);
    }

    if (categoryName && isIntersecting && location.hash == `#${categoryName}` && products.length === 0 ) {
      fetchData();
      noNavigateTo();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash, isIntersecting, categoryName]);

  return (
    <section ref={ref as RefObject<HTMLElement>} id={categoryName} className="overflow-hidden flex flex-col gap-2 flex-shrink-0 snap-center lg:h-full">
      <h2 className="ml-2 w-fit text-neutral-950 font-extrabold tracking-widest text-xl border-b-2 border-neutral-950 md:text-3xl lg:text-4xl uppercase">{categoryName}</h2>
      <Carousel 
        elements = {
          products.map((product) => (
            <ProductCard 
              id={product.id.toString()}
              img={product.img_url}
              price={product.price}
              name={product.name}
              features={product.description}
              brand={product.brand}
              category={product.category}
            />
          ))
        }
      />
    </section>
  )
}