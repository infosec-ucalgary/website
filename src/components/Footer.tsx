import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-gray bg-opacity-50 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} UofC CyberSecurity Club. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
