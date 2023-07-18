import { AnimatePresence } from "framer-motion";

function ExitAnimation({ children }) {
  return (
    <AnimatePresence wait={true} >
      {children}
    </AnimatePresence>
  );
}

export default ExitAnimation;