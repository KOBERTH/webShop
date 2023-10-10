
export default function CheakoutProduct({img, name, price, amount}: {img: string, name: string, price: string, amount: number}) {
  return (
    <div className="bg-custom-dark w-full flex p-4 rounded-lg items-center gap-4">
      <div className="flex h-24 w-28">
        <img src={img} alt={img} className="object-contain" />
      </div>
      <div className="text-custom-white w-full text-center">
        <h4>{name}</h4>
        <div className="flex justify-center gap-2 text-center tracking-widest">
          <span>{price}</span>
          <span className="text-green-600">x{amount}</span>
        </div>
      </div>
    </div>
  )
}
