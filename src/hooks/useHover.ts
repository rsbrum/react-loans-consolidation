import { useState, useRef, useEffect } from "react";

const useHover = <T>() => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  useEffect(() => {
    const node: any = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      // Cleanup function to remove event listeners
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return [ref, isHovered];
};

export default useHover;
