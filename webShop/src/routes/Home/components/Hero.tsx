import { useNavigate } from "react-router-dom";
import { RefObject, forwardRef, useEffect } from "react"

import placeholder from "../../../assets/img.png"
import useIntersection from "../../../hooks/useIntersection.ts";

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
    <div ref={ref as RefObject<HTMLDivElement>} id="home" className="h-full p-2 bg-gradient-to-b from-[#5846C5] to-neutral-100 rounded-lg flex flex-col items-center flex-shrink-0 md:bg-gradient-to-l lg:flex-row snap-center">
      <div className="h-1/2 w-full flex justify-center lg:w-1/2 lg:h-full lg:p-4">
        <img className="h-full w-full object-contain" src={placeholder} alt="placeholder" />
      </div>
      <div className="text-center h-1/2 w-full flex flex-col justify-center items-center gap-2 lg:w-1/2 lg:gap-6">
        <h1 className="text-xl lg:text-6xl">Welcome to "Company Name"</h1>
        <p className="text-base lg:text-2xl">Find the best products, at the best price, with a wide range of products. Visit our website today and discover our amazing offers.</p>
      </div>
    </div>
  );
});

export default Hero;