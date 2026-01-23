import "./Nav.scss";
import { animate, motion, scale } from "framer-motion";
import SideBar from "./SideBar/SideBar";
const Nav = () => {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };
  return (
    <div className="nav-bar">
      <SideBar />
      <div className="nav-wrapper">
        <motion.span variants={variants} initial="initial" animate="animate">
          Cyrus
        </motion.span>
        <div className="social-icons">
          <a href="https://www.facebook.com/shekhar.sharma.390674">
            <img
              src="/facebook.png
            "
            />
          </a>
          <a href="https://www.youtube.com/@cutie8864">
            <img
              src="youtube.png
          "
            />
          </a>
          <a href="https://www.instagram.com/shekharcyrus/">
            <img
              src="/instagram.png
          "
            />
          </a>
          <a href="https://github.com/ram2005024">
            <img
              src="/github.png
          "
            />
          </a>
          <a href="https://x.com/shekhar_1010">
            <img
              src="twitter.png
          "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
