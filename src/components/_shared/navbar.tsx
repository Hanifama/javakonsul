import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logojava.png";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsScrolled(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Layanan Kami", path: "/services" },
    { name: "Portfolio Kami", path: "/portfolio" },
    { name: "Galery", path: "/article" },
    { name: "Hubungi Kami", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#fefefe] shadow-sm backdrop-blur-sm"
        : "bg-[#fefefe]/80 backdrop-blur-md"
        }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul
          className={`hidden lg:flex space-x-8 font-medium transition-colors duration-300 ${isScrolled ? "text-[#333333]" : "text-[#444444]"
            }`}
        >
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`relative px-2 py-1 hover:text-[#457b9d] transition duration-300 ${isActive(path) ? "text-[#e63946] font-semibold" : ""
                  }`}
              >
                {name}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 bg-red-600 transition-all duration-300 ${isActive(path)
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                    }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-red-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-md shadow-md py-4 px-6 space-y-4 transition-all duration-300">
          {navLinks.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`block text-base font-medium ${isActive(path)
                ? "text-red-600 font-semibold"
                : "text-gray-800"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
