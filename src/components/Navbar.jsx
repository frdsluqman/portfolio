import React, { useState } from "react";
import {
  FaTeamspeak,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

  return (
    <div className="flex justify-between items-center fixed w-full h-[80px] px-8 bg-[#00203fff] text-gray-300 font-josefin">
      <div>
        <FaTeamspeak size="35px" color="#adefd1ff" />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
        <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
        <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
        <Link to="projects" smooth={true} duration={500}>
            Project
          </Link>
        </li>
      </ul>
      {/* hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!menu ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !menu
            ? "hidden"
            : "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#00203fff]"
        }
      >
        <li className="py-6 text-2xl">
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl">
        <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Project
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8a3ab9]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
