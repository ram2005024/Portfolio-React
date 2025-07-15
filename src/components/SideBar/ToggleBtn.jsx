import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
        {isOpen ? (
          <XMarkIcon height={50} width={50} color="red" />
        ) : (
          <Bars3Icon height={50} width={50} />
        )}
      </button>
    </motion.div>
  );
};

export default ToggleBtn;
