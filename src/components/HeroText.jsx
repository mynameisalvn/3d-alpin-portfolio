import { mySocials } from "../constants";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Clean", "Secure", "Modern"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-25 text-center md:mt-70 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View*/}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-8xl font-bold "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Hi, <span>I'm Alpin</span> <br />
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            A Web Developer <br /> Dedicated to Create
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            Modern Website
          </motion.p>

          {/* Desktop Animated icon */}
          <div className="mt-5 flex gap-3">
            {mySocials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mt-15 sm:mt-25 md:mt-35 flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl md:text-5xl font-black"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          I'm Alpin
        </motion.p>
        <div>
          <motion.p
            className="mb-5 text-5xl md:text-7xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <FlipWords
              words={words}
              className="ml-2.5 font-bold text-white text-5xl md:text-6xl"
            />
          </motion.div>
          <div>
            <motion.p
              className="mt-5 text-4xl md:text-5xl font-black text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              Website Applications
            </motion.p>
          </div>
        </div>
        {/* Animated on mobile */}
        <div className="items-center flex gap-3 justify-center">
          {mySocials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src={social.icon}
                alt={social.name}
                className="w-6 h-6"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroText;
