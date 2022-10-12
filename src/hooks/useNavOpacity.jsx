import { useState, useEffect } from 'react';

// determines whether or not navbar has a background
export default function useNavOpacity() {
  function onScroll() {
    window.scrollY ? setScroll(false) : setScroll(true);
  }

  const [scroll, setScroll] = useState();

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scroll;
}
