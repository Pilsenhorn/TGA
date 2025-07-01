import React, { useState } from 'react';
import { PawPrint } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo / Čumák */}
      <button onClick={toggleMenu} className="text-gray-800 hover:text-black">
        <PawPrint size={32} />
      </button>

      {/* Navigace */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md animate-slide-down">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><a href="#about" className="text-lg hover:underline">O nás</a></li>
            <li><a href="#products" className="text-lg hover:underline">Produkty</a></li>
            <li><a href="#contact" className="text-lg hover:underline">Kontakt</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
