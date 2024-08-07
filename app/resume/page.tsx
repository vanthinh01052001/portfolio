"use client";
import cap from "../../public/assets/resume/cap.svg";
import badge from "../../public/assets/resume/badge.svg";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

const about = {
  title: "About me",
  description:
    " I am a frontend developer with 6 months of experience in building user interfaces. During this time, I have implemented various small projects and coordinated work with team members to efficiently complete tasks. I have optimized workflows to enhance performance and achieved positive outcomes.",
  info: [
    {
      fielddName: "Name",
      fieldValue: "Mai Văn Thinh",
    },
    {
      fielddName: "Phone",
      fieldValue: "0378 155 913",
    },
    {
      fielddName: "Experience",
      fieldValue: "6+ Months",
    },
    {
      fielddName: "Skype",
      fieldValue: "Mai Van Thinh",
    },
    {
      fielddName: "Nationality",
      fieldValue: "VietNam",
    },
    {
      fielddName: "Email",
      fieldValue: "vanthinh01052001@gmail.com",
    },
    {
      fielddName: "Freelance",
      fieldValue: "Un-Available",
    },
    {
      fielddName: "Languages",
      fieldValue: "VietNamese, English-basic",
    },
  ],
};
// experience
const experience = {
  icon: badge,
  title: "My experience",
  description: {
    des1: "➖ Cut Layout Figma to Next.js",
    subDes1: "demo: https://doct-iwwuwwwxd-vanthinhs-projects.vercel.app/",
    des2: "Project: ALTEK COMPANY - FE",
    des3: "Description:",
    subDes3:
      "+ This is the official website of ALTEK Company. This website serves as a central hub for all information and updates about ALTEK company.",
    des4: " Technologies:",
    subDes4: "+ Vite, React, MUI, Font Awesome, Redux, Lodash, Sass, Yup, ...",
    des5: "Responsibilities:",
    sub1Des5: "+ Upgrade the company web interface.",
    sub2Des5: "+ Responsive UI Website ALTEK",
    sub3Des5: "+ Handle show in Google search result",
  },
  items: [
    {
      company: "ALTEK Technology Company",
      position: "Frontend Developer",
      duration: "03/2024 - Present",
    },
  ],
};

// education
const education = {
  icon: cap,
  title: "My education",
  description: "Major: Information technology",
  items: [
    {
      institution: "Sai Gon University",
      GPA: "2.68",
      duration: "09/2019 - Present",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Html, Css, JavaScript, React.js, Next.js, Tailwind.css, Node.js, Figma, ...",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content  */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <div>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description.des1}
                  </p>
                  <Link
                    className="max-w-[600px] text-blue-400 mx-auto xl:mx-0"
                    href="https://doct-iwwuwwwxd-vanthinhs-projects.vercel.app/"
                  >
                    {experience.description.subDes1}
                  </Link>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description.des2}
                </p>
                <div>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description.des3}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 pl-5">
                    {experience.description.subDes3}
                  </p>
                </div>
                <div>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description.des4}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 pl-5">
                    {experience.description.subDes4}
                  </p>
                </div>
                <div>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description.des5}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 pl-5">
                    {experience.description.sub1Des5}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 pl-5">
                    {experience.description.sub2Des5}
                  </p>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 pl-5">
                    {experience.description.sub3Des5}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          GPA: {item.GPA}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fielddName}</span>
                      <span className="text-lg">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
