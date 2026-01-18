import { useEffect } from "react";
import "./Cursor.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";
const Cursor = () => {
  const xValue = useMotionValue(0);
  const yValue = useMotionValue(0);
  const smoothX = useSpring(xValue, {
    stiffness: 330,
    damping: 30,
  });
  const smoothY = useSpring(yValue, {
    stiffness: 200,
    damping: 30,
  });
  useEffect(() => {
    const moveCursor = (e) => {
      xValue.set(e.clientX);
      yValue.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <motion.div
      className="cursor-container"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    ></motion.div>
  );
};

export default Cursor;
