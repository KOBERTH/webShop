import { useEffect, useRef, useState } from "react";
import { UseIntersectionProps } from "../types/hooksTypes";

const useIntersection = (props: UseIntersectionProps = {}) => {
  const {root, rootMargin = "0px", cb, threshold = 0} = props;
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    const handleIntersection: IntersectionObserverCallback = ([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (cb) cb(entry.isIntersecting);
    };

    const options = {
      root,
      rootMargin,
      threshold
    };

    const observer = new IntersectionObserver(handleIntersection, options)
    observer.observe(current);
    return () => current && observer.unobserve(current);
  }, [ref, root, rootMargin, threshold, cb]);

  return {isIntersecting, ref};
};

export default useIntersection