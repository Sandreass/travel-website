"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import{ useRef } from "react";


export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center mb-10"
    >
      <motion.div
        style={{ y: textY }}
        className="font-bold text-white text-5xl md:text-7xl relative z-30 drop-shadow-2xl w-full lg:w-1/2 text-center"
      >
        <h1>Pavasa Travel Service</h1>
      </motion.div>
     

      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(/whole.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/front.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
