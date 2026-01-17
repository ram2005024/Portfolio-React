import "./Home.scss";
import { animate, motion } from "framer-motion";
const Home = () => {
  const variants = {
    initial: {
      x: -1000,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const varianceForSlidingText = {
    initial: {
      x: "0%",
    },
    animate: {
      x: "-180%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };
  return (
    <motion.div className="hero-container">
      <motion.div
        className="home-wrapper"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={variants}>Ram Sharma</motion.h2>
        <motion.h1 variants={variants}>
          Web Developer and UI/UX Designer
        </motion.h1>
        <motion.div className="hero-button">
          <motion.div className="my-btns">
            <motion.button
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
            >
              View my work
            </motion.button>
            <motion.button
           
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.img
          src="scroll.png"
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0.3, 1, 0.2],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          className="scroll-img"
        />
      </motion.div>

      <img src="/about-image.png" alt="heroImage" className="hero-image" />
      <motion.div
        className="hero-text"
        variants={varianceForSlidingText}
        initial="initial"
        animate="animate"
      >
        <motion.h1>Coder Designer Youtuber Tutor</motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Home;
