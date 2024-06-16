// SkillPage.js

import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";






const SkillPage = () => {
  return (
    <section className='h-screen bg-gray-600 py-8 px-6 lg:px-10 pt-40' id='skills'>
      <h1 className='text-5xl font-bold text-center text-white'>My <span className='text-blue-400'>Skills</span></h1>
      <div className=" flex justify-center items-center flex-wrap mt-16 text-9xl gap-10 text-blue-400 md:w-3/4 m-auto" >
        <div className='text-orange-600'><IoLogoHtml5 /></div>
        <div className='text-blue-600'><FaCss3 /></div>
        <div className='text-yellow-600'><IoLogoJavascript /></div>
        <FaReact/>
        <div className='text-green-500'><FaNode /></div>
        <div className='text-yellow-400'><SiExpress /></div>
        <div className='text-green-950'><SiMongodb /></div>
        <div className='text-black'><SiNextdotjs /></div>
        <div className='text-orange-700'><SiNestjs /></div>
        <div className='text-blue-400'><SiTailwindcss /></div>
        <div className='text-white'><SiCplusplus /></div>
        <div className='text-orange-600'><FaJava /></div>
        <div className='text-white'><SiMysql /></div>
        <div className='text-black'><FaGitSquare /></div>
        <div className='text-white'><FaGithub /></div>
        <div className='text-blue-400'><VscVscode /></div>


    </div>
    </section>
  );
};

export default SkillPage;
