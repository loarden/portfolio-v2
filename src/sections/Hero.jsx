import avatar from "../img/avatar.png";
import avatar2 from "../img/avatar2.png";
import { IoLocationSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Arrow from "../components/Arrow";

function Hero() {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsClicked(false);
    }, 3000);
  }, [isClicked]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen h-fit grid justify-center items-center text-center"
    >
      <div className="max-w-5xl self-end flex flex-col items-center px-4">
        <h1 className="text-4xl md:text-5xl mt-10 font-mono font-semibold">
          Biacsi Ors, Frontend Developer
        </h1>
        <div className="mt-5">
          <p className="inline-block">
            Hello there, I'm an ambitious Frontend Developer from Hungary.
          </p>
          <div className="text-3xl text-[#FF0000] inline-block ">
            <IoLocationSharp />
          </div>
        </div>

        <motion.img
          width={280}
          height={280}
          onClick={() => setIsClicked(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="mt-2 sm:mt-12 p-4"
          src={avatar}
          alt="avatar"
        />
      </div>
      <Arrow />
    </section>
  );
}

export default Hero;
