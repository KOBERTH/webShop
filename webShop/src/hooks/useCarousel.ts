import { useRef, useState } from 'react';

export const useCarousel = () => {
  const iconSize = 50;
  const btnClass = 'hidden lg:block cursor-pointer absolute top-1/2 bottom-1/2 hover:scale-110 active:scale-95 transition-all duration-300';

  const sliderRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (sliderRef.current) {
      const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.clientWidth);
      setCurrentIndex(index);
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return {
    iconSize,
    btnClass,
    sliderRef,
    currentIndex,
    handleScroll,
    handleScrollLeft,
    handleScrollRight,
  };
};
