import { useState, useLayoutEffect, useRef } from 'react';

export const useIntersection = (element, rootMargin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);
  let elementRef = useRef(null);
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if(element.current) elementRef = element.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(elementRef);
    return () => observer.unobserve(elementRef);
  }, []);

  return isIntersecting;
};
