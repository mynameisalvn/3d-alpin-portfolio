import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

const HeroText = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const words = ["Clean", "Secure", "Modern"];

  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-16 text-center md:text-left rounded-3xl bg-clip-text">
      {!isMobile ? (
        // Desktop View
        <div className="flex-col hidden md:flex c-space">
          <motion.h1
            className="text-6xl font-bold"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            Hi, <span>I'm Alpin</span>
          </motion.h1>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            A Web Developer <br /> Dedicated to Create
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Modern Website
          </motion.p>
          <SocialLinks />
        </div>
      ) : (
        // Mobile View
        <div className="space-y-4 flex flex-col items-center">
          <motion.p
            className="text-4xl font-black"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            I'm Alpin
          </motion.p>
          <motion.p
            className="text-3xl font-semibold text-neutral-300"
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
            transition={{ delay: 0.7 }}
          >
            <FlipWords
              words={words}
              className="text-white text-4xl font-bold"
            />
          </motion.div>
          <motion.p
            className="text-2xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            Website Apps
          </motion.p>
          <SocialLinks />
        </div>
      )}
    </div>
  );
};

const SocialLinks = () => (
  <div className="mt-4 flex gap-4 justify-center md:justify-start">
    <a href="https://www.linkedin.com/in/mynameisalpin/">
      <img
        src="/assets/socials/linkedIn.svg"
        alt="linkedin"
        className="w-6 h-6"
      />
    </a>
    <a href="https://github.com/mynameisalvn">
      <img src="/assets/socials/github.svg" alt="github" className="w-6 h-6" />
    </a>
    <a href="https://www.instagram.com/a.rzha/">
      <img
        src="/assets/socials/instagram.svg"
        alt="instagram"
        className="w-6 h-6"
      />
    </a>
  </div>
);

export default HeroText;
