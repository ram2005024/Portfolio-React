import { motion } from "framer-motion";
const ToggleBtn = ({ isOpen, changeState }) => {
  return (
    <motion.div className="btn-cont">
      <button
        className="button"
        onClick={() => {
          changeState((prev) => !prev);
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24">
          <motion.path
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 4 6 L 20 6" },
              opened: { d: "M 6 6 L 18 18" },
            }}
            transition={{ duration: 0.4 }}
            animate={isOpen ? "opened" : "closed"}
          />
          <motion.path
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            d="M 4 12 L 20 12"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.path
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 4 18 L 20 18" },
              opened: { d: "M 6 18 L 18 6" },
            }}
            transition={{ duration: 0.4 }}
            animate={isOpen ? "opened" : "closed"}
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default ToggleBtn;
