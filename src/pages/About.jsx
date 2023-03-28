import React from "react";
import { motion } from "framer-motion";
import {
  Planet_1,
  Planet_2,
  Planet_4,
  Planet_6,
  Planet_12,
  starts,
} from "../assets/planet";
function About() {
  return (
    <div className="h-[89vh] relative " id="about">
      <motion.div
        className="absolute top-[100px] left-[100px]"
        animate={{
          opacity: [0,0.5,0.8,1]
        }}
        transition={{ ease: "linear", duration: 2  }}
        >
        <img src={Planet_1} alt="planet" className="h-[400px] z-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-[50px] "
        animate={{
        
          opacity: [0,0.5,0.8,1]

        }}
        transition={{ ease: "linear", duration: 1.6 }}
      >
        <img src={Planet_2} alt="planet" className="h-[600px] z-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-[100px] "
        animate={{
          opacity: [0,0.5,0.8,1]
       
        }}
        transition={{ ease: "linear", duration: 1.3 }}
      >
        <img src={Planet_4} alt="planet" className="h-[100px] z-10" />
      </motion.div>
      <motion.div
        className="absolute top-10 right-10 "
        animate={{
          x: 0,
        }}
        transition={{ ease: "linear", duration: 2 }}
      >
        <img src={Planet_6} alt="planet" className="h-[100px] z-10" />
      </motion.div>
      <motion.div
        className="absolute top-[-400px] left-[550px]  "
        animate={{
        
        }}
        transition={{ ease: "linear", duration: 1.9 }}
      >
        <img src={Planet_12} alt="planet" className="h-[600px] z-0" />
      </motion.div>
      <motion.div
        className="absolute sm:top-[-100px] z-0 top-[0px]"
        animate={{
        
          zoom: [3],
          opacity: [0.3, 0.5, 1, 0.5, 0.3, 0.2],
        }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
      >
        <img src={starts} alt="start" className=" z-0 " />
      </motion.div>
      <div className="bottom-1 absolute left-12">
        <motion.div
          className="opacity-0"
          animate={{
            opacity: [0, 0.3, 0.5, 1, 0.8, 1],
            x: 0
          }}
          transition={{ ease: "linear", duration: 1 }}
        >
          <h1 className="font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[35px] text-[20px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-[#daff36]">Kien Nguyen</span>
          </h1>
        </motion.div>

        <motion.div
          className="text-[#dfd9ff] font-medium  sm:text-[26px] xs:text-[20px] text-[16px] w-[90%] sm:w-[80%] lg:leading-[40px]  mt-7"
          animate={{
            opacity: [0, 0.3, 0.6, 1],
            x: [ 1, 0],
          }}
          transition={{
            ease: "linear",
            duration: 2,
          }}
        >
          I'm a Frontend Developer with experience in JavaScript, PHP, and
          expertise in frameworks like React, Node.js ,...
        </motion.div>
      </div>
    </div>
  );
}

export default About;
