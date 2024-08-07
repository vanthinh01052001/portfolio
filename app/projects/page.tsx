"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import doct from '../../public/assets/projects/img-doct.png'
import blog from "../../public/assets/projects/img-mernblog.png";
import port from "../../public/assets/projects/banner-portfolio.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "blog",
    description:
      "This is where I share and update my knowledge and the technologies I frequently use, such as deploying products to Vercel, commit conventions, and more.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Taiwind.css",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express.js",
      },
    ],
    image: blog,
    live: "https://mern-blog-om9w.onrender.com/",
    github: "https://github.com/vanthinh01052001/mern-blog",
  },
  {
    num: "02",
    category: "frontend",
    title: "Portfolio",
    description:
      "This is where I introduce myself, showcase my completed projects, and share valuable experiences from my career journey.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Taiwind.css",
      },
      {
        name: "Framer-motion",
      },
    ],
    image: port,
    live: "/",
    github: "https://github.com/vanthinh01052001/portfolio",
  },
  {
    num: "03",
    category: "frontend",
    title: "doct",
    description: "Interface for clinic management system for doctors",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Taiwind.css",
      },
    ],
    image: doct,
    live: "https://doct-iwwuwwwxd-vanthinhs-projects.vercel.app/",
    github: "https://github.com/vanthinh01052001/doct",
  },
];

const ProjectsPage = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: any) =>{
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="rounded-lg h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover rounded-lg" alt={project.title}/>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
