
import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
// icons
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <>
      <main className="min-h-screen ">
        {/* section -1 */}
        <section className="section-1  flex justify-center items-center">
          <section className="left w-1/2 text-white p-2 md:p-12">
            <h1 className="text-xl md:text-3xl text-semibold">
              Hi There, <span className={styles.wave}>👋</span>
            </h1>
            <h2 className="text-[2rem] md:text-[3rem] text-cyan-400">I am </h2>

            <div className={styles["wave-container"]}>
              <h1 className={styles["wave-text"]}>
                <span>J</span>
                <span>Y</span>
                <span>O</span>
                <span>T</span>
                <span>I</span>
                <span>R</span>
                <span>M</span>
                <span>A</span>
                <span>Y</span>
              </h1>
            </div>

            {/* info > interests */}
            <div className={styles["dropping-texts"]}>
              <div>Developer</div>
              <div>Designer</div>
              <div>Coder</div>
            </div>
          </section>

          <section className="right w-1/3 ">
            <img src="/coder.png" alt="" className="" />
          </section>
        </section>

        {/* section - 2 */}
        <section className="section-2 min-h-screen flex flex-col md:flex-row items-center gap-4 px-2 md:px-12 py-20 text-white text-xl md:text-2xl ">
          <div className="left w-[80%] flex flex-col gap-4 md:gap-12 ">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center py-6">
              LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
            </h1>

            <h2>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </h2>
            <h2>
              I am fluent in classics like{" "}
              <span className="text-purple-500 font-semibold">Java</span> and{" "}
              <span className="text-purple-500 font-semibold">Javascript</span>{" "}
            </h2>
            <h2>
              My field of Interestis in{" "}
              <span className="text-purple-500 font-semibold">
                building new Web Technologies and Products.
              </span>
            </h2>
            <h2>
              Whenever possible, I also apply my passion for developing products
              with <span className="text-purple-500 font-semibold">Modern Javascript Library and Frameworks</span> like <span className="text-purple-500 font-semibold">React.js</span>
            </h2>
          </div>
          <div className="right">
            <img src="/avatar.svg" alt="" />
          </div>
        </section>

        {/* section - 3 */}
        <section className="section-3 py-12 flex flex-col justify-center gap-4 items-center text-white">
          <h1 className="text-2xl font-semibold">FIND ME ON</h1>
          <p>Feel free to <span className="text-purple-500">connect</span> with me</p>
          <div className="handles flex gap-4">
            <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer">
                <Link to="https://github.com/SarkarJyotirmay/"><FaGithub className="text-purple-700"/></Link>
            </div>
            <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer">
                <Link tp="https://x.com/jsarkar0201"><FaTwitter className="text-purple-700"/></Link>
            </div>
            <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer">
                <Link to="https://www.linkedin.com/in/jyotirmay-sarkar/"><FaLinkedin className="text-purple-700"/></Link>
            </div>
            <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer">
                <FaInstagram className="text-purple-700"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
