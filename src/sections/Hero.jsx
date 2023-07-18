import avatar from "../img/avatar.png";
import avatar2 from "../img/avatar2.png";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ExitAnimation from "../components/ExitAnimation";

function Hero() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  }, [isClicked]);

  return (
    <section
      id="home"
      className="w-full h-screen flex justify-center items-center text-center"
    >
      <div className="max-w-5xl flex flex-col items-center px-4">
        <h1 className="text-4xl md:text-5xl font-mono font-semibold">
          Ors Biacsi, Frontend Developer
        </h1>
        <div className="mt-5">
          <p className="inline-block">
            Hello there, I'm an ambitious Frontend Developer from Hungary.
          </p>
          <div className="text-3xl text-[#FF0000] inline-block ">
            <IoLocationSharp />
          </div>
        </div>
        <ExitAnimation>
          {isClicked ? (
            <motion.img
              width={300}
              height={300}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="mt-2 sm:mt-12"
              src={avatar2}
              alt="avatar2"
            />
          ) : (
            <motion.img
              width={300}
              height={300}
              onClick={() => setIsClicked(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="mt-2 sm:mt-12"
              src={avatar}
              alt="avatar"
            />
          )}
        </ExitAnimation>
      </div>
    </section>
  );
}

export default Hero;
