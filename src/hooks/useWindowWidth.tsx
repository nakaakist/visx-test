import { useCallback, useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, [setWindowWidth]);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  return { windowWidth };
};
