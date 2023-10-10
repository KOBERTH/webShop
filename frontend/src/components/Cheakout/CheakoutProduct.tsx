import img from "../../assets/img.png";

export default function CheakoutProduct() {
  return (
    <div className="bg-custom-dark w-full flex p-4 rounded-lg items-center gap-4">
      <div className="flex h-24 w-28">
        <img src={img} alt={img} className="object-contain" />
      </div>
      <div className="text-custom-white w-full text-center">
        <h4>Product Name</h4>
        <span>$21.36</span>
      </div>
    </div>
  )
}
