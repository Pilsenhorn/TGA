import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        
        <div className="flex gap-4">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaFacebook size={24} />
          </a>
        </div>

        <p className="text-sm text-center">
          © 2025 The Griffoons Academy & pilsenhorn. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
