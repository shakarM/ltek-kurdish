import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full z-10 bg-white shadow-md transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <Link
          to="/"
          className="uppercase font-bold text-purple-800"
          onClick={toggleMenu}
        >
          <img src={Logo} width={100} alt="logo.svg" />
        </Link>
        <button onClick={toggleMenu} className="text-purple-800">
          X
        </button>
      </div>
      <ul className="flex flex-col mt-4">
        <li className="p-4 border-b">
          <Link
            to="/home"
            className="text-purple-600 font-semibold hover:text-purple-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li className="p-4 border-b">
          <Link
            to="/about"
            className="text-gray-500 font-semibold hover:text-purple-500"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
        <li className="p-4 border-b">
          <Link
            to="/press"
            className="text-gray-500 font-semibold hover:text-purple-500"
            onClick={toggleMenu}
          >
            Press
          </Link>
        </li>
        <li className="p-4 border-b">
          <Link
            to="/contact"
            className="text-gray-500 font-semibold hover:text-purple-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
        <li className="p-4 border-b">
          <Link
            to="/login"
            className="text-gray-500 font-semibold hover:text-purple-500"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </li>
        <li className="p-4 border-b">
          <Link
            to="/register"
            className="text-gray-500 font-semibold hover:text-purple-500"
            onClick={toggleMenu}
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
