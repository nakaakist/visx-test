import { useEffect, useRef, useState } from 'react';

export const useDivWidth = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [divWidth, setdivWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (divRef.current) {
      setdivWidth(divRef.current.offsetWidth);
    }
  }, [divRef]);

  return { divRef, divWidth };
};
