import "./parallax.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const transformY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <motion.div
      className="parallax-container"
      ref={ref}
      style={{
        background:
          type === "parallax1"
            ? "linear-gradient(rgb(17, 17, 50), rgb(12, 12, 29))"
            : "linear-gradient(rgb(17, 17, 50), rgb(80, 80, 100))",
      }}
    >
      <motion.h1
        style={{
          y: yText,
        }}
      >
        {type === "parallax1" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div
        className="mountains"
        style={{
          background: `url("/mountains.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          x: transformY,
          backgroundImage: `url("/stars.png")`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          y: transformY,
          backgroundImage:
            type === "parallax1"
              ? "url({'./planets.png'})"
              : "url('./sun.png')",
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Parallax;
