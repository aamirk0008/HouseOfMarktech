import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Login', href: '#login' },
  ];

  return (
    <nav className="py-8 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 transition-all duration-300">
      {/* Logo */}
      <div className="text-2xl md:text-3xl font-bold text-gray-800">
        LOGO
      </div>

      {/* Right-side buttons */}
      <div className="hidden md:flex items-center space-x-4">
        {!isScrolled && navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-8 py-3 text-gray-800 hover:bg-gray-300  rounded-full font-semibold transition-all duration-300"
          >
            {item.name}
          </a>
        ))}
        <button className="px-8 py-3 rounded-full bg-gray-800 text-white hover:bg-blue-700 font-bold transition-all duration-500">
          Let's Talk
        </button>

        {/* Menu Button */}
        <div className="relative">
          <button
            className="px-8 py-3 bg-gray-300 text-black rounded-full hover:bg-white font-bold transition-all duration-500"
            onClick={toggleMenu}
          >
            ☰ 
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border z-100 border-gray-200 rounded-md shadow-lg">
              <ul className="flex flex-col">
                {isScrolled && navItems.map((item) => (
                  <li key={item.name} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
                
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="relative">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-white font-bold transition-all duration-500"
            onClick={toggleMenu}
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className="absolute p-2 flex flex-col right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.name} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
                
              </ul>
              <button className="mt-2 px-8 py-3 rounded-full bg-gray-800 text-white hover:bg-blue-700 font-bold transition-all duration-500">
                Let's Talk
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}