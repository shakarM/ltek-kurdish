import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="flex items-center justify-between py-4 border-b">
        <Link
          to="/"
          className="px-2 lg:px-0 uppercase font-bold text-purple-800"
        >
          <img src={Logo} width={100} alt="logo.svg" />
        </Link>
        <ul className="hidden md:flex items-center">
          <li className="px-2 md:px-4">
            <a
              href="#home"
              className="text-purple-600 font-semibold hover:text-purple-500"
            >
              Home
            </a>
          </li>
          <li className="px-2 md:px-4">
            <a
              href="#about"
              className="text-gray-500 font-semibold hover:text-purple-500"
            >
              About
            </a>
          </li>
          <li className="px-2 md:px-4">
            <a
              href="#press"
              className="text-gray-500 font-semibold hover:text-purple-500"
            >
              Press
            </a>
          </li>
          <li className="px-2 md:px-4">
            <a
              href="#contact"
              className="text-gray-500 font-semibold hover:text-purple-500"
            >
              Contact
            </a>
          </li>
          <li className="px-2 md:px-4 hidden md:block">
            <a
              href="#login"
              className="text-gray-500 font-semibold hover:text-purple-500"
            >
              Login
            </a>
          </li>
          <li className="px-2 md:px-4 hidden md:block">
            <a
              href="#register"
              className="text-gray-500 font-semibold hover:text-purple-500"
            >
              Register
            </a>
          </li>
        </ul>
        <button
          className="md:hidden flex flex-col items-center justify-center"
          onClick={toggleMobileMenu}
        >
          <div className="w-6 h-1 bg-purple-800 mb-1"></div>
          <div className="w-6 h-1 bg-purple-800 mb-1"></div>
          <div className="w-6 h-1 bg-purple-800"></div>
        </button>
      </header>
      <MobileNavbar isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </div>
  );
};

export default Navbar;
