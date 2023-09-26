import { InputProps } from "../../types/componentsTypes";

export default function Input ({name, title, type, placeholder}: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{title}</label>
      <input className="py-2 px-4 bg-transparent border border-neutral-400 rounded-lg text-neutral-950 tracking-widest text-base" name={name} type={type} placeholder={placeholder} />
    </div>
  )
}