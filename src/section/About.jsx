import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { motion } from "motion/react";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <motion.h2
        className="text-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="assets/falling-stars.mp4" type="video/mp4" />
          </video>

          <div className="z-10">
            <p className="text-3xl md:text-5xl font-bold mb-5 text-white">
              My Profile
            </p>
            <p className="subtext">
              My approach to development focuses on creating clean, efficient,
              and user-friendly solutions. I enjoy tackling complex problems and
              turning them into simple, beautiful interfaces.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-event-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="absolute inset-0 bg-opacity-40 rounded-xl z-0">
              <img src="assets/stars.png" alt="" />
            </div>
            <p className="flex items-end text-5xl text-white">CREATIVITY</p>
            <Card
              style={{ rotate: "10deg", top: "10%", left: "40%" }}
              image="assets/logos/vitejs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "80%", left: "45%" }}
              image="assets/logos/bootstrap-5.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "50deg", top: "40%", left: "80%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "45%", left: "5%" }}
              image="assets/logos/threejs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "32deg", top: "20%", left: "80%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/laravel-2.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-default-color grid-3">
          <div className="items-center">
            <p className="text-5xl font-bold mt-5 md:mt-20 mb-2">
              Based in Indonesia
            </p>
            <p className="subtext">Currently open to work 📈</p>
          </div>
          {/* <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure> */}
        </div>

        {/* Grid 4 */}
        <div className="grid-black-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to collab together ?
            </p>
            <div className="flex gap-3">
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
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-black-color grid-5">
          <div className="z-10 w-[50%] md:w-[80%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-45"
            >
              <source src="assets/stars-rotate.mp4" type="video/mp4" />
            </video>
            <p className="sm:text-4xl text-3xl font-semibold text-white my-15 md:my-25 -mx-3 md:mx-14 lg:mx-22 sm:mx-10">
              TECH STACKS
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
