import { TextAreaProps } from "../types/componentsTypes";

export default function TextArea ({name, title}: TextAreaProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{title}</label>
      <textarea className="h-52 py-2 px-4 bg-transparent resize-none border border-neutral-400 rounded-lg text-neutral-950 tracking-widest text-base" name={name} />
    </div>
  )
}