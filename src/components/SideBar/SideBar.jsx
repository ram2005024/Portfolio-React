import "./SideBar.scss";
import ToggleBtn from "./ToggleBtn";
import Link from "./Link";
import { motion } from "framer-motion";
import { useState } from "react";
const SideBar = () => {
  const variance = {
    opening: {
      clipPath: "circle(1000px at 0px 0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 60,
      },
    },
    closing: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        duration: 0.4,
      },
    },
  };
  const [opening, changeState] = useState(false);
  return (
    <motion.div
      className="side-bar"
      variants={variance}
      animate={opening ? "opening" : "closing"}
    >
      <ToggleBtn isOpen={opening} changeState={changeState} />
      <motion.div className="bg">
        <Link />
      </motion.div>
    </motion.div>
  );
};
export default SideBar;
