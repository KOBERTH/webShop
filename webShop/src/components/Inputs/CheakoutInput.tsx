import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../../types/componentsTypes";

type CheakoutInputProps = {
  id?: string, 
  type?: React.HTMLInputTypeAttribute | undefined
  label?: string,
  maxLength?: number,
  minLength?: number,
  error: FieldErrors<Inputs>,
  register: UseFormRegister<Inputs>, 
  name: "name" | "address" | "email" | "celular" | "cedula" | "provincia" | "canton" | "distrito", 
}

export function CheakoutInput ({id, label, register, name, error, maxLength, minLength, type}: CheakoutInputProps) {
  return (
    <div className="flex flex-col">
      <label className="tracking-widest font-semibold" htmlFor={id}>{label}</label>
      <input 
        className="py-2 px-4 bg-transparent border border-neutral-400 rounded-lg text-neutral-950 tracking-widest text-base"  
        id={id}
        type={type} 
        {...register(name, {
              required: true,
              minLength: minLength,
              maxLength: maxLength, 
            }
          )
        } 
      />
      {error[name]?.type === "required" && <span>Campo obligatorio</span>}
      {error[name]?.type === "maxLength" && <span>Debe de tener menos de {maxLength} caracteres</span>}
      {error[name]?.type === "minLength" && <span>Debe de tener mas de {minLength} caracteres</span>}
    </div>
  )
}