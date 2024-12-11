import { useEffect } from "react";

export const AnimationOnScroll = ({ children, id, setIsVisible }) => {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window?.innerHeight;
        if (elementTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id={id}>{children}</div>;
};
