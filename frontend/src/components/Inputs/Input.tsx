
type InputProps = {
  type?: React.HTMLInputTypeAttribute | undefined 
  id?: string
  name?: string
  label?: string
}

const Input = ({type, id, name, label}: InputProps) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={id} className="uppercase left-2">
        {label}
      </label>
      <input type={type} id={id} name={name} className="p-2 border border-neutral-900" required />
    </div>
  )
}

export default Input