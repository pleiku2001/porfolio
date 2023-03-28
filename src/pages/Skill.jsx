import React from "react";
import {
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  typescript,
} from "../assets/tech";
import { fireRocket, Moon, Rocket, Spaceman, start70 } from "../assets/space";
import BallCanvas from "../components/Ball";
import { motion } from "framer-motion";
import { starts } from "../assets/planet";
import IconAnimation from "../components/IconAnimation";
const technologies = [
  {
    name: "HTML 5",
    icon: html,
    color: "#439024",
    id: 0,
  },
  {
    name: "CSS 3",
    icon: css,
    color: "#f3f051",
    id: 1,
  },
  {
    name: "JavaScript",
    icon: javascript,
    id: 2,
    color: "#ee4705",
  },
  {
    name: "TypeScript",
    icon: typescript,
    id: 3,
    color: "#077932",
  },
  {
    name: "React JS",
    icon: reactjs,
    id: 4,
    color: "#00eeda",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    id: 5,
    color: "#0739a7",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    color: "#6711d8",
    id: 6,
  },
  {
    name: "Node JS",
    icon: nodejs,
    color: "#a60cc5",
    id: 7,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    color: "#be1028",
    id: 8,
  },
  {
    name: "Three JS",
    icon: threejs,
    color: "#a36069",
    id: 9,
  },
  {
    name: "git",
    icon: git,
    color: "#10be58",
    id: 10,
  },
  {
    name: "figma",
    icon: figma,
    color: "#1047be",
    id: 11,
  },
  {
    name: "docker",
    icon: docker,
    color: "#be3910",
    id: 12,
  },
];
function Skill() {
  return (
    <div className="h-[100vh] mt-[100px] relative" id="skills">
      <div className="lg:flex flex-row flex-wrap justify-center items-center gap-10 z-10 absolute hidden">
        {technologies.map((tech, key) => (
          <div className=" ">
            <BallCanvas icon={tech.icon} color={tech.color} index={key} />
          </div>
        ))}
      </div>
      <img
        src={start70}
        alt="start70"
        className="w-[100px] absolute bottom-10 left-4 z-10"
      />
      <img
        src={start70}
        alt="start70"
        className="w-[80px] absolute bottom-40  right-4 z-10"
      />
      <img
        src={start70}
        alt="start70"
        className="w-[90px] absolute bottom-52 right-72 z-10"
      />
      <img
        src={start70}
        alt="start70"
        className="w-[80px] absolute bottom-720 right-96 z-10"
      />
      <img
        src={start70}
        alt="start70"
        className="w-[30px] absolute bottom-80 left-[200px] z-20"
      />
      <img
        src={start70}
        alt="start70"
        className="w-[97px] absolute bottom-80 left-32 z-10"
      />
      <img
        src={Moon}
        alt="start70"
        className="w-[700px] absolute -bottom-[200px] -left-[200px] z-0"
      />
      <img
        src={Rocket}
        alt="start70"
        className="w-[100px] absolute bottom-[450px] left-[100px] z-0"
      />
      <img
        src={fireRocket}
        alt="start70"
        className="w-[700px] absolute top-[100px] left-[600px] -z-100 rotate-[10deg]"
      />
      <motion.div
        className="hidden lg:absolute bottom-[300px] left-[300px] z-0"
        animate={{
         
          y: [0, 10, 0],
        }}
        transition={{
          ease: "linear",
          duration: 2,
          repeat: Infinity,
        }}
      >
        <img
          src={Spaceman}
          alt="start70"
          className="w-[100px] rotate-[20deg]"
        />
      </motion.div>
      <motion.div
        className="absolute top-[-100px] z-10 "
        animate={{
        
          zoom: [3],
          opacity: [0.3, 0.5, 1, 0.5, 0.3, 0.2],
        }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
      >
        <img src={starts} alt="start" className=" z-0 " />
      </motion.div>
      <div className=" absolute bottom-0 z-10">
        <IconAnimation
          tech={technologies}
          techReverse={technologies.reverse()}
        />
      </div>
    </div>
  );
}

export default Skill;
