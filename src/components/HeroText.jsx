import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Clean", "Secure", "Modern"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-70 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View*/}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-8xl font-bold "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, <span>I'm Alpin</span> <br />
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Web Developer <br /> Dedicated to Create
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
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
            transition={{ delay: 1.8 }}
          >
            Modern Website
          </motion.p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.linkedin.com/in/mynameisalpin/">
              <img src="/assets/socials/linkedIn.svg" alt="linkedin" />
            </a>
            <a href="https://github.com/mynameisalvn">
              <img src="/assets/socials/github.svg" alt="github" />
            </a>
            <a href="https://www.instagram.com/a.rzha/">
              <img src="/assets/socials/instagram.svg" alt="github" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mt-15 sm:mt-25 md:mt-35 flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-7xl font-black"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          I'm Alpin
        </motion.p>
        <div>
          <motion.p
            className="mb-5 text-6xl md:text-7xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="ml-2.5 font-bold text-white text-6xl md:text-7xl"
            />
          </motion.div>
          <div>
            <motion.p
              className="mt-5 text-5xl font-black text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}
            >
              Website Applications
            </motion.p>
          </div>
        </div>
        <div className="items-center flex gap-3 justify-center">
          <a href="https://www.linkedin.com/in/mynameisalpin/">
            <img src="/assets/socials/linkedIn.svg" alt="linkedin" />
          </a>
          <a href="https://github.com/mynameisalvn">
            <img src="/assets/socials/github.svg" alt="github" />
          </a>
          <a href="https://www.instagram.com/a.rzha/">
            <img src="/assets/socials/instagram.svg" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
