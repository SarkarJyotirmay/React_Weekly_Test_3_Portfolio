import React from "react";
import { FaJava, FaNode, FaGitAlt, FaSlack, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiIntellijidea, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";

function About() {
  return (
    <>
      <main className="text-white">
        {/* section - 1 */}
        <section className="section-1 h-screen px-12 flex justify-center items-center ">
          <div className="left w-[60%] px-6 text-xl flex flex-col gap-8">
            <h1 className="text-4xl font-semibold text-center">
              Know Who <span className="text-purple-500">I'm</span>
            </h1>

            <h2 className="text-white">
              Know Who I'M Hi Everyone, I am{" "}
              <span className="text-purple-500 font-semibold">
                Jyotirmay Sarkar
              </span>{" "}
              from Kolkata, India. I am currently persuing{" "}
              <span className="text-purple-500 font-semibold">
                Full Stack Web Development
              </span>{" "}
              on <span className="text-green-400">Geekster.</span>I have
              completed{" "}
              <span className="text-purple-500 font-semibold">B.Tech (ME)</span>{" "}
              from G.M.I.T. Kolkata in 2023
            </h2>

            <h2>
              <span className="text-purple-500">Apart</span> from coding, some
              other <span className="text-purple-500">activities</span> that I
              love to do!
            </h2>
            <ul className="px-8">
              <li className="list-['🔍']">
                <span className="px-2"></span> Playing Cricket
              </li>
              <li className="list-['🔍']">
                <span className="px-2"></span> Playing Video Games
              </li>
              <li className="list-['🔍']">
                <span className="px-2"></span> Connecting With New People
              </li>
            </ul>
          </div>
          <div className="right w-[35%] ">
            <img src="/about-page-main-image.png" alt="" />
          </div>
        </section>

        {/* section - 2 */}
        <section className="section-2 py-12 flex flex-col gap-12  items-center">
          <h2 className="text-3xl font-semibold">
            Professional <span className="text-purple-500">Skillset</span>
          </h2>
          <div className="skills px-8 flex flex-wrap justify-center items-center gap-8 text-6xl ">
            <div className="skill w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <FaJava className="text-purple-500" />
            </div>
            <div className="skill w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <RiJavascriptFill className="text-purple-500" />
            </div>
            <div className="skill w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <FaHtml5 className="text-purple-500" />
            </div>
            <div className="skill w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <FaCss3Alt className="text-purple-500" />
            </div>
            <div className="skill w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <RiTailwindCssFill className="text-purple-500" />
            </div>
            <div className="skill w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <RiReactjsLine className="text-purple-500" />
            </div>
            <div className="skill w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <FaNode className="text-purple-500" />
            </div>
            <div className="skill w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <SiMongodb className="text-purple-500" />
            </div>
            <div className="skill w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <FaGitAlt className="text-purple-500" />
            </div>
          </div>
        </section>

        {/* section - 3 */}
        <section className="section-3 py-12 flex flex-col gap-12  items-center">
          <h2 className="text-3xl font-semibold">
            <span className="text-purple-500">Tools</span> I use the most
          </h2>
          <div className="tools px-8 flex flex-wrap justify-center items-center gap-8 text-6xl ">
            <div className="tool w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <VscVscode className="text-purple-500" />
            </div>
            <div className="tool w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <VscVscode className="text-purple-500" />
            </div>
            <div className="tool w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <SiIntellijidea className="text-purple-500" />
            </div>
            <div className="tool w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <SiPostman className="text-purple-500" />
            </div>
            <div className="tool w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <IoLogoVercel className="text-purple-500" />
            </div>
            <div className="tool w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <FaSlack Vercel className="text-purple-500" />
            </div>
            <div className="tool w-[180px] h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200">
              <FaGithub Vercel className="text-purple-500" />
            </div>
          </div>
        </section>

        {/* section - 4 */}
        <section className="section-4 p-12 ">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl text-center font-semibold">
              On Going {" "}
              <span className="text-green-500">Github Contributions</span>
            </h1>
            <img
              src="/days-of-coding.png"
              alt=""
              className="w-full  object-contain"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
