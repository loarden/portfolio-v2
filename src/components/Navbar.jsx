import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import ExitAnimation from "./ExitAnimation";

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

  return (
    <div ref={ref} className="fixed z-50 mx-auto bg-background w-full">
      <nav className="flex mx-auto items-center h-16 sm:h-18 md:h-20 max-w-7xl w-full justify-between font-mono px-4 xs:px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Portfolio<span className="text-primary">.</span>
        </h2>
        <ul className="md:flex gap-8 hidden text-[1.25rem]">
          <li className={style.hover}>
            <a href="#home">Home</a>
          </li>
          <li className={style.hover}>
            <a href="#about">About</a>
          </li>
          <li className={style.hover}>
            <a href="#skills">Skills</a>
          </li>
          <li className={style.hover}>Portfolio</li>
        </ul>
        <div className="hidden md:block">
          <Button text="Contact" />
        </div>
        <div
          className="text-4xl text-primary block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </div>
      </nav>
      <ExitAnimation>
        {isOpen && (
          <ul className="absolute flex flex-col items-center w-full">
            <motion.a
              href="#home"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { ease: "linear", duration: 0.2, delay: 0 },
              }}
              exit={{
                x: "100%",
                transition: { ease: "linear", duration: 0.2, delay: 0.2 },
              }}
              className={style.mobileListElements}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { ease: "linear", duration: 0.2, delay: 0.05 },
              }}
              exit={{
                x: "100%",
                transition: { ease: "linear", duration: 0.2, delay: 0.15 },
              }}
              className={style.mobileListElements}
            >
              About
            </motion.a>
            <motion.a
              href="#skills"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { ease: "linear", duration: 0.2, delay: 0.1 },
              }}
              exit={{
                x: "100%",
                transition: { ease: "linear", duration: 0.2, delay: 0.1 },
              }}
              className={style.mobileListElements}
            >
              Skills
            </motion.a>
            <motion.a
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { ease: "linear", duration: 0.2, delay: 0.15 },
              }}
              exit={{
                x: "100%",
                transition: { ease: "linear", duration: 0.2, delay: 0.05 },
              }}
              className={style.mobileListElements}
            >
              Portfolio
            </motion.a>
            <motion.a
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { ease: "linear", duration: 0.2, delay: 0.2 },
              }}
              exit={{
                x: "100%",
                transition: { ease: "linear", duration: 0.2, delay: 0 },
              }}
              className={style.mobileListElements}
            >
              Contact
            </motion.a>
          </ul>
        )}
      </ExitAnimation>
    </div>
  );
}

export default Navbar;
