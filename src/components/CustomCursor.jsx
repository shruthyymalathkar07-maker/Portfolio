import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    let ringX = 0,
      ringY = 0,
      mouseX = 0,
      mouseY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const raf = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(raf);
    };

    const overHandler = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) setHovering(true);
    };
    const outHandler = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overHandler);
    window.addEventListener("mouseout", outHandler);
    const id = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overHandler);
      window.removeEventListener("mouseout", outHandler);
      cancelAnimationFrame(id);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? "is-hovering" : ""}`} />
    </>
  );
}
