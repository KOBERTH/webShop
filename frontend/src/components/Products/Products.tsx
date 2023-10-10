import Product from "./Product"

type ProductsProps = {
  products: Array<{id: string, img: string, name: string, price: string}>, 
  innerPage?: boolean, 
  headingText?: string
}

const Products = ({products, innerPage, headingText}: ProductsProps) => {
  // console.log(products)
  return (
    <div className="p-4">
      {
        !innerPage && 
        <h2 className="text-custom-white tracking-widest text-xl font-medium uppercase md:text-2xl after:content-normal after:block after:w-12 after:h-1 after:bg-highlight">
          {headingText}
        </h2>
      }
      <br />
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(min(100%,_18rem),_1fr))] auto-rows-max gap-6">
        {
          products.map((item, index) => (
            <li key={index} className="flex">
              <Product
                id={item.id}
                img={item.img}
                title={item.name}
                price={item.price}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Products