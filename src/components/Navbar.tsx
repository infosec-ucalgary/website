import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "@/assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Calendar", to: "/calendar" },
    { name: "Speakers", to: "/speakers" },
    { name: "Resources", to: "/resources" },
    { name: "CTF Winners", to: "/winners" },
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-center flex-wrap bg-dark-gray">
      <div className="flex items-center justify-between flex-wrap p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <img className="h-12 w-12 mr-2" src={Logo} />
          </Link>
          <span className="text-xl tracking-tight">
            UofC CyberSecurity Club
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-500 hover:text-white hover:border-white"
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
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className={`block mt-4 lg:inline-block lg:mt-0 text-lavendar hover:text-white text-lg mr-4 ${
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
    </nav>
  );
}

export default Navbar;
