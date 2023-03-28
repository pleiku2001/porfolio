import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import {Github } from "../assets/icons"
const projects = [
  {
    name: "Lorem 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta vero unde quia voluptatem architecto placeat nobis, aperiam illo expedita atque sit porro facere doloremque. Repellendus debitis inventore porro tempora?",
    image:
      "https://images.unsplash.com/photo-1543772204-2cc21eb14509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJhY2slMjBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    tags: ["reactjs", "mongodb", "tailwind"],
    link: "https://github.com/pleiku2001",
  },
  {
    name: "Lorem 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta vero unde quia voluptatem architecto placeat nobis, aperiam illo expedita atque sit porro facere doloremque. Repellendus debitis inventore porro tempora?",
    image:
      "https://images.unsplash.com/photo-1549444931-ea94960d38ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGJhY2slMjBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    tags: ["reactjs", "mongodb", "tailwind"],
    link: "https://github.com/pleiku2001",
  },
  {
    name: "Lorem 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta vero unde quia voluptatem architecto placeat nobis, aperiam illo expedita atque sit porro facere doloremque. Repellendus debitis inventore porro tempora?",
    image:
      "https://images.unsplash.com/photo-1616583739984-0f3a970d8752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGJhY2slMjBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    tags: ["reactjs", "mongodb", "tailwind"],
    link: "https://github.com/pleiku2001",
  },
  {
    name: "Lorem 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta vero unde quia voluptatem architecto placeat nobis, aperiam illo expedita atque sit porro facere doloremque. Repellendus debitis inventore porro tempora?",
    image:
      "https://images.unsplash.com/photo-1618688749926-c94abd039f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGJhY2slMjBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    tags: ["reactjs", "mongodb", "tailwind"],
    link: "https://github.com/pleiku2001",
  },
  {
    name: "Lorem 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta vero unde quia voluptatem architecto placeat nobis, aperiam illo expedita atque sit porro facere doloremque. Repellendus debitis inventore porro tempora?",
    image:
      "https://images.unsplash.com/photo-1610021277358-dc4fc480d085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGJhY2slMjBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    tags: ["reactjs", "mongodb", "tailwind"],
    link: "https://github.com/pleiku2001",
  },
  {
    name: "Lorem 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta vero unde quia voluptatem architecto placeat nobis, aperiam illo expedita atque sit porro facere doloremque. Repellendus debitis inventore porro tempora?",
    image:
      "https://plus.unsplash.com/premium_photo-1661380484331-aaa38f6a502d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGJhY2slMjBncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    tags: ["reactjs", "mongodb", "tailwind"],
    link: "https://github.com/pleiku2001",
  },
];
function Card({ project }) {
  return (
    <motion.div
      className=""
      animate={{
     
        opacity: [0, 0.5, 1],
      }}
      transition={{ ease: "linear", duration: 2 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="border-[1px] p-5 rounded-2xl sm:w-[360px] w-full border-red-400"
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={project.image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(project.link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={Github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={`${tag}-`} className={`text-[14px] ${tag}`}>
              #{tag}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
function Projects() {
  return (
    <div id="projects" className="  mt-[100px] flex justify-center items-center flex-col gap-10">
      <motion.div
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] z-20 "
        animate={{
          x: [1, 0],
       
          opacity: [0, 0.5, 1],
        }}
        transition={{ ease: "linear", duration: 3 }}
      >
        Projects
      </motion.div>
      <div className=" flex flex-wrap gap-5 justify-center items-center max-w-[1200px]">
        {projects.map((project, index) => (
          <Card project={project} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Projects;


