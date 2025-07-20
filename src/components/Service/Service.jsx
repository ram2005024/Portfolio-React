import "./service.scss";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { motion, stagger, useInView } from "framer-motion";
const Service = () => {
  const [onMobile, setOnMobile] = useState(false);
  useEffect(() => {
    const checkOnMobile = () => {
      setOnMobile(window.innerWidth <= 818);
    };
    checkOnMobile();
    window.addEventListener("resize", checkOnMobile);
    return () => {
      window.removeEventListener("resize", checkOnMobile);
    };
  }, []);
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: onMobile ? "-50px" : "-500px",
  });

  const variants = {
    initial: {
      x: onMobile ? -20 : -500,
      y: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className="service-container"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={inView && "animate"}
    >
      <motion.div className="title-container">
        <motion.p>
          I focus on helping your tech gow <br /> and move forward
        </motion.p>
        <motion.hr />
      </motion.div>
      <motion.div className="text-container">
        <motion.div className="first-text-container">
          <motion.img src="people.webp" />
          <motion.p>
            <motion.b
              whileHover={{
                color: "orange",
              }}
            >
              Unique{" "}
            </motion.b>{" "}
            Ideas
            <motion.br />
          </motion.p>
        </motion.div>
        <motion.div className="second-text-container">
          <motion.p>
            <motion.b
              whileHover={{
                color: "orange",
              }}
            >
              for your{" "}
            </motion.b>
            business.
          </motion.p>
          <motion.div>
            <motion.button>WHAT WE DO?</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="box-container">
        <motion.div
          whileHover={{
            background: "rgb(215, 188, 188)",
            color: " black",
          }}
        >
          <motion.h2>Branding</motion.h2>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            tenetur cumque accusantium neque natus iste alias numquam earum
            odio, officiis veniam adipisci molestiae culpa obcaecati. Ipsa illum
            maxime sapiente corrupti.
          </motion.p>
          <motion.button>Go</motion.button>
        </motion.div>
        <motion.div
          whileHover={{
            background: "rgb(215, 188, 188)",
            color: "black",
          }}
        >
          <motion.h2>Branding</motion.h2>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            tenetur cumque accusantium neque natus iste alias numquam earum
            odio, officiis veniam adipisci molestiae culpa obcaecati. Ipsa illum
            maxime sapiente corrupti.
          </motion.p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{
            background: "rgb(215, 188, 188)",
            color: "black",
          }}
        >
          <motion.h2>Branding</motion.h2>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            tenetur cumque accusantium neque natus iste alias numquam earum
            odio, officiis veniam adipisci molestiae culpa obcaecati. Ipsa illum
            maxime sapiente corrupti.
          </motion.p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{
            background: "rgb(215, 188, 188)",
            color: "black",
          }}
        >
          <motion.h2>Branding</motion.h2>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            tenetur cumque accusantium neque natus iste alias numquam earum
            odio, officiis veniam adipisci molestiae culpa obcaecati. Ipsa illum
            maxime sapiente corrupti.
          </motion.p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Service;
