import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import ProductCard from "../../components/ProductCard";
import Carousel from "../../components/Carousel/Carousel";
import { SectionProps } from "../../types/componentsTypes";
import { searchProducts } from "../../api/Gets";

export default function Search ({searchStatus, closeSearch}: {searchStatus?: boolean, closeSearch?: () => void}) {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SectionProps[]>([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery.length >= 2) {
      const data = await searchProducts(newQuery);
      console.log(data);
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    <div className={`px-4 pb-4 bg-neutral-900 h-full w-full fixed flex flex-col items-center duration-500 z-50 ${searchStatus ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="w-full py-4 flex items-center gap-4"> 
        <input 
          className="text-neutral-200 py-2 px-4 w-full border-b border-indigo-500 tracking-widest text-base bg-transparent outline-none focus:border focusrounded-lg" 
          onChange={handleInputChange}
          value={query}
          type="text"
        />
        <AiOutlineClose size={30} color="red" onClick={closeSearch} />
      </div>
      {results.length > 0 ? (
        <Carousel
          elements = {
            results.map((product) => (
              <ProductCard
                id={product.id.toString()}
                img={product.img_url}
                price={product.price}
                name={product.name}
                features={product.description}
                key={product.id}
              />
            ))
          }
        />
      ) : (
        <p>No hay resultados disponibles.</p>
      )}
    </div>
  )
}