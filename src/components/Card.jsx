import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa6";
import { useState } from "react";
import ExitAnimation from "./ExitAnimation";

function Card({ img, title, url, code, desc, stack }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relative overflow-hidden max-w-xl w-full max-h-72 rounded-xl">
      <motion.img
        animate={isShow ? { scale: 1.3 } : { scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full h-full object-cover"
        src={img}
        alt={title}
      />
      <div
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        className="absolute top-0 left-0 w-full h-full backdrop-brightness-90"
      >
        <ExitAnimation>
          {isShow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center text-center p-6 bg-text"
            >
              <div className="flex flex-col w-full h-full justify-center items-center text-background">
                <p>{desc}</p>
                <div className="flex flex-wrap justify-center gap-3 my-4">
                  {stack?.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="bg-primary px-2 font-semibold rounded-lg text-background text-lg"
                      >
                        {item.title}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex w-full justify-around text-3xl md:text-4xl text-background">
                <a href={url}>
                  <FaEye />
                </a>
                <a href={code}>
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          )}
        </ExitAnimation>
      </div>
    </div>
  );
}

export default Card;
