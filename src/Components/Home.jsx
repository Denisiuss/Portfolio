import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import MyPhoto from "../Assets/myPhoto.jpeg";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-white">Hello,</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              I am Denis
            </h1>
            <h2 className="text-4xl sm:text-xl  font-bold text-[#8892b0]">
              A Full Stack Developer
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              with a passion for turning ideas into interactive and engaging
              online experiences. I thrive on the creative challenge of crafting
              beautiful, functional websites from concept to completion. My
              journey in the world of web development is an ever-evolving
              adventure, and I’m excited to share my projects and showcase my
              skills as I continue to learn and grow in this dynamic field.
            </p>

            <div>
              <Link to="about" smooth={true} duration={500}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col justify-around items-center">
            <img
              className="shadow-lg shadow-[#040c16] w-64 group container rounded-full flex justify-center items-center mx-auto content-div"
              src={MyPhoto}
              alt="My Photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
