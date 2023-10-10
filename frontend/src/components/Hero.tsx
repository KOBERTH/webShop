import { useNavigate } from "react-router-dom";
import { RefObject, forwardRef, useEffect } from "react"

import placeholder from "../assets/img.png"
import useIntersection from "../hooks/useIntersection.ts";
import Button from "./Button.tsx";

const Hero = forwardRef<HTMLDivElement>(() => {

  const {isIntersecting, ref} = useIntersection({
    threshold:1,
  })

  const navigate = useNavigate();

  useEffect (() => {
    if (isIntersecting) {
      navigate('#home')
    }
  }, [isIntersecting, navigate])

  return (
    <div ref={ref as RefObject<HTMLDivElement>} id="home" className="h-[80vh] p-2 m-4 bg-gradient-to-t from-indigo-800 to-neutral-100 rounded-lg flex flex-col justify-around">
      <div className="">
        <p className="text-lg">Beats Solo</p>
        <p className="text-2xl font-medium tracking-widest">Wireless</p>
        <h3 className="text-4xl font-extrabold tracking-widest">HEADSET</h3>
      </div>
      <div className="h-2/4 flex justify-center">
        <img className="object-contain" src={placeholder} alt="placeholder" />
      </div>
      <div className="flex gap-2">
        <Button bgLight={true} width="w-1/2">Shop By Category</Button>
        <Button bgLight={true} width="w-1/2">View Product</Button>
      </div>
    </div>
  );
});

export default Hero;