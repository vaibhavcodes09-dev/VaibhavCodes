import { useState } from "react";
import "../styles/glass.css";
import MenuIcon from "../assets/menu.svg?react";
import CrossIcon from "../assets/x.svg?react";
import Logo from "../assets/VaibhavCodes_logo.svg?react";
import LogoIcon from "../assets/logo.png";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <nav className="liquid-glass mt-4 h-16 rounded-lg w-[90%] sm:w-[80%] md:w-[50%] flex justify-around mx-auto fixed top-0 left-0 right-0 z-10">
      <img src={LogoIcon} alt="Logo" className="scale-200 md:pl-1" />
      <ul className="hidden md:flex px-6 py-4 gap-9 justify-around items-center ">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="md:hidden" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
        {hamburgerOpen ? <CrossIcon /> : <MenuIcon />}
      </button>
      {hamburgerOpen && (
        <ul className="flex flex-col items-center gap-4 py-4">
          <li><a href="#home" onClick={() => setHamburgerOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setHamburgerOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setHamburgerOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setHamburgerOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
