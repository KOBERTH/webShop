import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Counter ({ initialCount, onCountChange }: { initialCount: number, onCountChange: (newCount: number) => void }) {
 
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount: number) => prevCount + 1);
    onCountChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount: number) => prevCount - 1);
      onCountChange(count - 1);
    }
  };
 
  return (
    <div className="w-fit flex items-center border border-neutral-900 rounded-lg flex-shrink-0">
      <button className="py-1 px-2" onClick={() => handleDecrement()}>
        <AiOutlineMinus />
      </button>
      <span className="py-1 px-4 border-x border-neutral-900">{count}</span>
      <button className="py-1 px-2" onClick={() => handleIncrement()}>
        <AiOutlinePlus />
      </button>
    </div>
  )
}