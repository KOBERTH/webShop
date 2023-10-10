import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { CarouselProps } from "../../types/componentsTypes";
import { useCarousel } from "../../hooks/useCarousel.ts";
import ElementsCounter from "./ElementsCounter";

export default function Carousel ({ elements = [] }: CarouselProps) {

  const { iconSize, btnClass, sliderRef, currentIndex, handleScroll, handleScrollLeft, handleScrollRight } = useCarousel();

  return (
    <div className="relative w-full h-full">
      <ElementsCounter totalElements={elements.length} currentElement={currentIndex + 1} />
      <BsChevronCompactLeft  className={`${btnClass} left-1`}  size={iconSize} onClick={handleScrollLeft} />
      <BsChevronCompactRight className={`${btnClass} right-1`} size={iconSize} onClick={handleScrollRight} />
      <ul ref={sliderRef} onScroll={handleScroll} className={`h-full overflow-y-hidden overflow-x-scroll snap-x snap-mandatory grid auto-rows-[32rem] lg:auto-rows-[100%] scrollbar-none`} style={{gridTemplateColumns: `repeat(${elements.length}, 100%)`}}>
        {
          elements.map((element, index) => (
            <li key={index} className="p-2 snap-center">
              {element}
            </li>
          ))
        }
      </ul>
    </div>
  )
}