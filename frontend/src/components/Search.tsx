import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { fetchProducts } from "../api/fetchProducts";
import Products from "./Products/Products";

export default function Search ({searchStatus, closeSearch}: {searchStatus?: boolean, closeSearch?: () => void}) {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery.length >= 2) {
      const data = await fetchProducts(`search/${newQuery}`);
      console.log(data);
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    <div className={`px-4 pb-4 bg-custom-light h-screen w-full fixed flex flex-col items-center duration-500 z-50 ${searchStatus ? 'translate-y-0 top-0' : 'translate-y-full bottom-0'}`}>
      <div className="w-full py-4 flex items-center gap-4"> 
        <input 
          className="bg-transparent text-custom-white py-2 px-4 w-full outline-none text-center text-2xl md:text-3xl lg:text-5xl" 
          onChange={handleInputChange}
          value={query}
          placeholder="SEARCH OF PRODUCTS"
          type="text"
        />
        <AiOutlineClose className="text-3xl md:text-4xl lg:text-5xl" color="red" onClick={closeSearch} />
      </div>
      {results.length > 0 ? (
        <div className="overflow-y-scroll overflow-x-hidden w-full h-full">
          <Products products={results} innerPage={true} />
        </div>
      ) : (
        <p>No hay resultados disponibles.</p>
      )}
    </div>
  )
}