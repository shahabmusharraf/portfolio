"use client";
import Navbar from "@/components/Home/Navbar";
import Achievments from "@/components/Achievments";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import PointsMoving from "@/components/Home/PointsMoving";
import Gallery from "@/components/Gallery";
import { LinksContainer } from "@/components/Home/LinksContainer";
import Wave from "@/components/Home/Wave";
import TitlesComp from "@/components/Home/TitlesComp";
import myImage from "../../public/images/home.jpg";
import Image from "next/image";
import AboutPage from "@/components/About/page";
import SkillPage from "@/components/Skills/page";
import ProjectPage from "@/components/Projects/Page";
import ContactPage from "@/components/Contact/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  const title = [
    "Full Stack Developer...",
    "Freelancer...",
    "Frontend Developer...",
    "Backend Developer...",
    "YouTuber...",
  ];
  return (
    <>
      <main id="home" className="relative min-h-screen bgAnimate">
        <Navbar />
        <section
          className="flex justify-between items-center py-8 px-6 lg:px-10"
          style={{ height: "90vh" }}
        >
          <div className="flex flex-col gap-20 justify-around h-full">
            <div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-fit">
                <h1 className="text-white text-3xl">Hey, I am a </h1>
                <TitlesComp />
              </div>
              <div className="text-gray-400 mt-9 text-sm md:text-lg">
                Shahab Musharraf, a passionate full-stack developer, adept at
                creating impactful web applications. Dedicated to building a
                diverse portfolio highlighting proficiency in both frontend
                aesthetics and backend functionality.
              </div>
            </div>
            <div>
              <LinksContainer />
            </div>
          </div>
          <div className="md:self-end brightness-75 w-600 h-600 ">
            <Image
              src={myImage}
              alt="MyImage"
              style={{
                borderRadius: "100%",
                zIndex: "-1",
              }}
            />
          </div>
        </section>
        <Wave />
      </main>

      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </>
  );
}
