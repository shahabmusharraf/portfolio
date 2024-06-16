import Image from 'next/image'
import React from 'react'
import aboutImage from '../../../public/images/about.jpg';
const AboutPage = () => {
  return (
    <section
          className="flex justify-between flex-row-reverse items-center py-8 px-6 lg:px-10 bg-gray-700 gap-24"
          style={{ height: "102vh" }}
          id='about'
        >
          <div className="flex flex-col gap-20 justify-around h-full">
            <div>
              <div className="">
                <h1 className="text-white text-5xl font-bold">About Me</h1>
                <h1 className="text-blue-400 text-3xl font-bold mt-5">Full Stack Developer</h1>
              </div>
              <div className="text-gray-400 mt-9 text-sm md:text-lg">
                Shahab Musharraf, a passionate full-stack developer, adept at
                creating impactful web applications. Dedicated to building a
                diverse portfolio highlighting proficiency in both frontend
                aesthetics and backend functionality.
              </div>
            </div>
          </div>
          <div className="brightness-75 w-600 h-600 ">
            <Image
              src={aboutImage}
              alt="MyImage"
              style={{
                borderRadius: "100%",
                zIndex: "-1",
              }}
            />
          </div>
        </section>
  )
}

export default AboutPage