import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaPython,
  FaDocker,
  FaGitAlt,
  FaNode,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import {
  SiNextdotjs,
  SiCplusplus,
  SiMongodb,
  SiFlask,
  SiKubernetes,
  SiGooglecloud,
  SiFirebase,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [SiCplusplus, FaPython, FaJs, FaNode],
        stage: "",
      },
      {
        title: "Developer Tools",
        icons: [FaGitAlt, FaDocker, SiKubernetes, SiGooglecloud, SiFirebase],
        stage: "",
      },
      {
        title: "Frameworks & Databases",
        icons: [FaReact, SiFlask, SiNextdotjs, SiMongodb],
        stage: "",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "AIML Lead - WCE MLSC",
        stage: "Aug 2024 - Present",
      },
      {
        title: "Linux Kernel Fall 2025 - Linux Foundation",
        stage: "Sep 2025 - Nov 2025",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "B.Tech in Electronics Engineering",
        stage: "Aug 2023 - May 2027",
      },
      {
        title: "Walchand College of Engineering, Sangli",
        stage: "CGPA: 7.88",
      },
    ],
  },
  {
    title: "achievements",
    info: [
      {
        title: "Robotechnic '25 Winner",
        stage: "2025",
      },
      {
        title: "IEEE TechSangam '25 Finalist",
        stage: "2025",
      },
      {
        title: "CodeChef 3 Star (max 1793)",
        stage: "2024",
      },
      {
        title: "Daily Coding Challenge Badge - LeetCode",
        stage: "Sep 2024 - Oct 2025",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
        style={{ zIndex: -1 }}
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 justify-center pt-16">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-[32px] xl:text-[40px]"
          >
            PASSIONATE ABOUT <span className="text-accent">TECHNOLOGY</span> AND
            INNOVATION.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Software Engineering student at Walchand College, specializing in AI/ML,
            full-stack development, and system programming. Experienced in building
            scalable applications from conception to deployment using modern cloud
            technologies and development practices.
          </motion.p>

          {/* resume button */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            className="flex mx-auto xl:mx-0 mb-8"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-x-3 bg-accent/10 hover:bg-accent/20 text-accent border-2 border-accent px-8 py-4 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 overflow-hidden"
            >
              {/* Animated background on hover */}
              <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>

              {/* Text */}
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Resume
              </span>

              {/* Icon with animation */}
              <HiArrowDown className="relative z-10 text-xl group-hover:text-black group-hover:animate-bounce transition-colors duration-300" />
            </a>
          </motion.div>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of coding.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1px] max-w-[100px]">
                  Projects.
                </div>
              </div>

              {/* cgpa */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1200} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  DSA Questions Solved.
                </div>
              </div>

              {/* achievements */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Certifications
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
