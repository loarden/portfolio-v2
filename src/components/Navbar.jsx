import { useMemo, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const hover = {
  hover: "hover:text-primary transition-all cursor-pointer",
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed mx-auto bg-background w-full">
      <nav className="flex mx-auto items-center h-20 max-w-7xl w-full justify-between font-mono px-4 xs:px-6 sm:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Portfolio<span className="text-primary">.</span>
        </h2>
        <ul className="md:flex gap-8 hidden">
          <li className={hover.hover}><a href="#home">Home</a></li>
          <li className={hover.hover}><a href="#about">About</a></li>
          <li className={hover.hover}>Portfolio</li>
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
      {isOpen && (
        <ul className="absolute flex flex-col items-center w-full">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
