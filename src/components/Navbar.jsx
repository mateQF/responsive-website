import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex items-center gap-2">
        <li className="p-4 ">
          <a href="#analytics" className="cursor-pointer">
            Analytics
          </a>
        </li>
        <li className="p-4 ">
          <a href="#newsletter" className="cursor-pointer">
            Newsletter
          </a>
        </li>
        <li className="text-black font-medium text-center">
          <a
            href="#cards"
            className="bg-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Get Started
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {open ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      <ul
        className={
          open
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300"
            : "fixed left-[-100%] ease-in-out duration-300"
        }
      >
        <h1 className="w-full text-3xl m-4 font-bold text-[#00df9a]">REACT.</h1>
        <li className="p-4 cursor-pointer border-b border-b-gray-500">
          <a href="#analytics" onClick={handleNav}>Analytics</a>
        </li>
        <li className="p-4 cursor-pointer border-b border-b-gray-500">
          <a href="#newsletter" onClick={handleNav}>Newsletter</a>
        </li>
        <li className="p-4 py-6 cursor-pointer text-black font-medium ">
          <a href="#cards" onClick={handleNav} className="bg-white px-4 py-2 rounded-lg">
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
