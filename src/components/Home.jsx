import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#00203fff]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full px-8 font-josefin">
        <p className="text-gray-100 text-xl">Hi, my name is</p>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-100">Luqman Firdaus</h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#adefd1ff]">Front End Web Developer Enthusiast</h2>
        <p className="text-gray-100 py-4 max-w-[700px] text-justify">
          Fresh graduate in Informatics Engineering who is interested in Front
          End Web Development and Website Design. Has been involved in various
          application development projects in teams and individuals. Want to
          always grow and learn about Web Development. Looking for job
          opportunities that provide opportunities for further development.
        </p>
        <div>
            <button className="group text-gray-100 border-2 px-6 py-3 my-2 flex items-center hover:bg-[#adefd1ff] hover:text-gray-900 hover:font-semibold rounded duration-300">View Work 
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-2"/>
            </span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
