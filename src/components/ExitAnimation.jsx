import { AnimatePresence } from "framer-motion";

function ExitAnimation({ children }) {
  return (
    <AnimatePresence wait={true} onExitComplete={() => null}>
      {children}
    </AnimatePresence>
  );
}

export default ExitAnimation;