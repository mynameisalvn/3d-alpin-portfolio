import { motion, useScroll, useSpring, useTransform } from "motion/react";

function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const layer3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsY = useTransform(x, [0, 0.5], ["-10%", "80%"]);
  const layer2X = useTransform(x, [0, 0.5], ["0%", "-50%"]);
  const layer1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url('assets/night-2.jpg')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Layer 3*/}
        {/* <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url('assets/planets.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        /> */}
        {/* Planet*/}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url('assets/sun.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: planetsY,
          }}
        />
        {/* Layer 2*/}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url('assets/stars.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: layer2X,
          }}
        />
        {/* Layer 1*/}
        {/* <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url('assets/stars.png')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        /> */}
      </div>
    </section>
  );
}

export default ParallaxBackground;
