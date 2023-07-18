import avatar from "../img/avatar.png";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="w-full h-screen flex justify-center items-center text-center">
      <div className="max-w-5xl flex flex-col items-center px-4">
        <h1 className="text-4xl md:text-5xl font-mono font-semibold">
          Biacsi Ors, Frontend Developer
        </h1>
        <div className="mt-5">
          <p className="inline-block">Hello there, I'm an ambitious Frontend Developer from Hungary.</p>
          <div className="text-3xl text-[#FF0000] inline-block ">
            <IoLocationSharp />
          </div>
        </div>
        <motion.img whileHover={{scale: 1.1}} transition={{type: "spring", stiffness: 400, damping: 10}} className="mt-2 sm:mt-12" src={avatar} alt="avatar" />
      </div>
    </section>
  );
}

export default Hero;
