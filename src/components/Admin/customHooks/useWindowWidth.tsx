import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 or another fallback value

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use 'window' here
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Set initial window width
      setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowWidth;
};

export default useWindowWidth;
