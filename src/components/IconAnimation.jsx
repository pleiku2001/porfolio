import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
function IconAnimation({ tech, techReverse }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 40,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 4000);

     
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

   
    return (
      <div className="parallax ">
        <motion.div className="scroller " style={{ x }}>
          <span>{children} </span>
        
        </motion.div>
      </div>
    );
  }


  return (
    <>
      <motion.div
        className="progress-bar absolute bottom-0"
        style={{ scaleX }}
      />
      <section className="">
        <ParallaxText baseVelocity={-5} className="bg-blue-500 ">
          <div className="flex flex-row gap-10 justify-center items-center ">
            {tech.map((e) => (
              <>
                <img src={e.icon} alt="icon" className="w-[100px] h-[100px]" />
              </>
            ))}
            {techReverse.map((e) => (
              <>
                <img src={e.icon} alt="icon" className="w-[100px] h-[100px]" />
              </>
            ))}
          </div>
        </ParallaxText>

      </section>
      <motion.div>
      </motion.div>

    </>
  );
}

export default IconAnimation;
