
type InputProps = {
  type?: React.HTMLInputTypeAttribute | undefined 
  id?: string
  name?: string
  label?: string
}

const Input = ({type, id, name, label}: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor={id} className="uppercase left-2 text-custom-white">
        {label}
      </label>
      <input type={type} id={id} name={name} className="p-2 bg-custom-dark rounded-lg shadow-md" required />
    </div>
  )
}

export default Input