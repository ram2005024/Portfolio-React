import { motion } from "framer-motion";
const Link = ({ opening }) => {
  const varianceForParent = {
    opened: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };
  const childVariants = {
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.1,
      },
    },
  };
  const arrayLinked = ["Home", "Service", "Portfolio", "Contact"];
  return (
    <motion.div
      className="link-cont"
      variants={varianceForParent}
      animate={opening ? "opened" : "closed"}
    >
      {arrayLinked.map((items, index) => (
        <motion.a
          href={`#${items}`}
          key={index}
          variants={childVariants}
          whileHover={{
            scale: 1.3,
          }}
          whileTap={{
            scale: 1,
          }}
        >
          {items}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Link;
