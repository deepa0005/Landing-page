import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { hero } from '../data/content';
import brandLogo from '../assets/brandLogo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={brandLogo} alt="Brand Logo" className="h-8 md:h-16" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          {['home', 'what', 'services', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-yellow-300 hover:text-purple-900 transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
            </a>
          ))}
          <a
            href={hero.ctaLink}
            className="inline-block bg-black bg-opacity-50 backdrop-blur-sm text-yellow-300 px-5 py-2 rounded-full hover:text-purple-900 hover:bg-opacity-70 transition"
          >
            {hero.ctaText}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-yellow-300 focus:outline-none transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? 'bg-white' : 'bg-transparent'
          }`}
        >
          <div className="flex flex-col space-y-4 py-6 px-4">
            {['home', 'what', 'services', 'contact'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-yellow-300 hover:text-purple-900 transition block"
                onClick={() => setMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
