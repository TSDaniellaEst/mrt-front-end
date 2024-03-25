import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleAdminClick = () => {
    navigate("/login");
  };
  const handleHomeClick = () => {
    navigate("/home");
  };

  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className="flex justify between items-center h-24 max-w-[1000px] 
                            mx-auto px-4 font-bold bg-[#FFFFFF] text-[#222C55]"
    >
      <h1 className="w-full text-3xl font-bold text-[#222C55]"> MRT Line 3 </h1>
      <ul className="hidden md:flex">
        <button onClick={handleHomeClick} className="p-4">
          Home
        </button>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          {" "}
          <li className="p-4">Company</li>
        </a>
        <li className="flex justify-between">
          <button
            onClick={handleAdminClick}
            className="border w-40 px-11 py-3 rounded-md bg-[#222C55] hover:bg-[#3C51A5] relative flex  text-white"
          >
            <RiAdminLine size={20} className="mr-1" /> Admin
          </button>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#222C55] m-4">
          {" "}
          MRT Line 3{" "}
        </h1>
        <ul className="uppercase p-4 border-b border-red-600">
          {" "}
          {/*line underneath "contact"*/}
          <li
            onClick={handleHomeClick}
            className="p-4 border-b border-white-600"
          >
            Home
          </li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            {" "}
            <li className="p-4 border-b border-white-600">Company</li>
          </a>
          <li onClick={handleAdminClick} className="p-4">
            Admin
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
