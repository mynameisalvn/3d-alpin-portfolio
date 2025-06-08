import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
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
            <source src="assets/rocket-1.mp4" type="video/mp4" />
          </video>

          <div className="z-10">
            <p className="text-5xl">My Profile</p>
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
          <div className="z-10 w-[40%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I’m actively exploring and learning different technologies that
              help bring ideas to life on the web with some tech stack i used.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to collab together ?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-black-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Indonesia. Currently open to work
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
