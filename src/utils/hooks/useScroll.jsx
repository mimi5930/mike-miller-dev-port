import { useEffect, useState } from 'react';

export function useScroll() {
  const [scroll, setScroll] = useState(window.scrollY ? true : false);

  useEffect(() => {
    function onScroll() {
      window.scrollY ? setScroll(true) : setScroll(false);
    }

    if (window.scrollY) onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scroll;
}
