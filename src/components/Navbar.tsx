import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "/images/logo.svg";
import CYBERSEC from "/images/wordmark.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    // { name: "Events", to: "/events" },
    // { name: "Speakers", to: "/speakers" },
    { name: "Resources", to: "/resources" },
    // { name: "Docs", to: "/docs" },
    { name: "Sponsors", to: "/sponsors" },
    { name: "CTF Winners", to: "/winners" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-like-lavendar to-electric-plum p-2">
      <div className="flex items-center justify-between ">
        <div className="flex items-center flex-shrink-0 text-lavendar mr-6 ml-3">
          <Link to="/" className="flex items-center">
            <img className="h-12 w-12 mr-2" src={Logo} />
            <img className="h-8 hidden navbarCustom:block" src={CYBERSEC} />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-500 hover:text-white hover:neutral-gray"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto hidden`}
        >
          <div className="flex-grow flex justify-end">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black text-lg mr-8 transition duration-300 ${
                  location.pathname === item.to ? "underline" : ""
                }`}
                to={item.to}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`w-full lg:hidden flex-grow lg:items-center lg:w-auto transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="text-sm flex-col">
          {navItems.map((item) => (
            <Link
              key={item.name}
              className={`flex my-2 justify-center items-center lg:mt-0 text-white hover:text-black text-lg transition duration-[2500ms] ${
                location.pathname === item.to ? "underline" : ""
              }`}
              to={item.to}
              onClick={() => setIsOpen(!isOpen)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
