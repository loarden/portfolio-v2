import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const style = {
  hover: "hover:text-primary transition-all cursor-pointer",
  mobileListElements: "bg-background w-full py-4 text-center font-mono text-xl",
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref = useRef();

  useEffect(() => {
    const handleOutClick = (e) => {
      if (!ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleOutClick);
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  useEffect(() => {
    if (windowWidth >= 640) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="fixed z-50 mx-auto bg-background w-full">
      <nav className="flex mx-auto items-center h-16 sm:h-18 md:h-20 max-w-7xl w-full justify-between font-mono px-4 xs:px-6 sm:px-8">
        <a href="#home">
          <h2
            onClick={handleClick}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            Portfolio<span className="text-primary">.</span>
          </h2>
        </a>
        <ul className="md:flex gap-8 hidden">
          <li className={style.hover}>
            <a href="#about">About</a>
          </li>
          <li className={style.hover}>
            <a href="#skills">Skills</a>
          </li>
          <li className={style.hover}>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div className="hidden md:block">
          <Button link="#contact" text="Contact" />
        </div>
        <div
          className="text-4xl text-primary block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <div className="absolute flex flex-col items-center w-full">
            <motion.a
              href="#about"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { ease: "linear", duration: 0.2, delay: 0 },
              }}
              exit={{
                x: "100%",
                transition: { ease: "linear", duration: 0.2, delay: 0.15 },
              }}
              onClick={handleClick}
              className={style.mobileListElements}
            >
              About
            </motion.a>
            <motion.a
              href="#skills"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { ease: "linear", duration: 0.2, delay: 0.05 },
              }}
              exit={{
                x: "100%",
                transition: { ease: "linear", duration: 0.2, delay: 0.1 },
              }}
              onClick={handleClick}
              className={style.mobileListElements}
            >
              Skills
            </motion.a>
            <motion.a
              href="#projects"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { ease: "linear", duration: 0.2, delay: 0.1 },
              }}
              exit={{
                x: "100%",
                transition: { ease: "linear", duration: 0.2, delay: 0.05 },
              }}
              onClick={handleClick}
              className={style.mobileListElements}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { ease: "linear", duration: 0.2, delay: 0.15 },
              }}
              exit={{
                x: "100%",
                transition: { ease: "linear", duration: 0.2, delay: 0 },
              }}
              onClick={handleClick}
              className={style.mobileListElements}
            >
              Contact
            </motion.a>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
