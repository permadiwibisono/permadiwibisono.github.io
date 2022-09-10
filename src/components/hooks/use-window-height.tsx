import { useEffect, useState } from "react";

function useWindowHeight() {
  const [height, setHeight] = useState<number>(1);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    setHeight(vh);
  }, []);

  useEffect(() => {
    function resizeHandler() {
      const vh = window.innerHeight * 0.01;
      setHeight(vh);
    }
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return { height };
}

export default useWindowHeight;
