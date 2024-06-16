import * as React from "react";
import { motion } from "framer-motion";
import './linksContainer.css'
import Link from "next/link";

import { FaCode } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const LinksContainer = () => (
  <motion.ul
    className="link-container2 py-2 px-3 md:py-3 md:px-4 lg:py-4 lg:px-5 h-16 w-56 md:w-72 lg:w-80 md:h-20 lg:h-24"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    <motion.li className="rounded-full flex justify-center items-center p-2 md:p-3 bg-blue-950" variants={item} >
        <Link target="_blank" href={'https://in.linkedin.com/in/shamusharraf'} className="hover:scale-105 hover:rotate-6 text-white"><FaLinkedinIn className="text-xl md:text-2xl lg:text-3xl" /></Link>
    </motion.li>
    <motion.li className="rounded-full flex justify-center items-center p-2 md:p-3 bg-black" variants={item} >
        <Link target="_blank" href={'https://github.com/shahab-musharraf'} className="hover:scale-105 hover:rotate-6 text-white"><FaGithub className="text-xl md:text-2xl lg:text-3xl" /></Link>
    </motion.li>
    <motion.li className="rounded-full flex justify-center items-center p-2 md:p-3 bg-black" variants={item} >
        <Link target="_blank" href={''} className="hover:scale-105 hover:rotate-6 "><FaCode className="text-xl md:text-2xl lg:text-3xl text-white font-bold" /></Link>
    </motion.li>
    <motion.li className="item flex justify-center items-center p-2 md:p-3" variants={item} >
        <Link target="_blank" href={''} className="hover:scale-105 hover:rotate-6"><BsTwitterX className="text-xl md:text-2xl lg:text-3xl" /></Link>
    </motion.li>
  </motion.ul>
);
