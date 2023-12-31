import { RiArrowDownDoubleLine } from "react-icons/ri";
import { motion } from "framer-motion";

function Arrow() {
  return (
    <div className="w-full self-end flex justify-center text-5xl text-primary">
      <motion.a
        href="#about"
        whileHover={{ y: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
        whileTap={{ scale: 0.9 }}
      >
        <RiArrowDownDoubleLine />
      </motion.a>
    </div>
  );
}

export default Arrow;
