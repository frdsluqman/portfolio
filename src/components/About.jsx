import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#00203fff] text-gray-100 font-josefin">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-2xl font-bold inline border-b-2 border-[#adefd1ff]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>Hi, I'am Luqman, nice to meet you.</p>
          </div>
          <div>
            <p>I am passionate about building a web application interface using technology that I know and of course following current needs. I'am ready to work with individuals or companies, and also i'am ready to work remote or from the office.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
