"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-lg md:text-xl text-white"
        >
          Francesca Bushell
          <span className="block text-xs md:text-sm font-medium text-gray-300">
            International Marketing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Process
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Social Links & CTA - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/francesca-bushell-7a34b5255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="/cv-francesca-bushell.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="CV"
          >
            <FaFileAlt size={18} />
          </a>
          <a
            href="mailto:francescaiidaolivia@gmail.com"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>

          <a href="#services" className="ml-4 btn btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 shadow-lg p-4 flex flex-col space-y-4 border-t border-gray-800">
            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {/* Social Links - Mobile */}
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-800">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="/cv-francesca-bushell.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="CV"
              >
                <FaFileAlt size={18} />
              </a>
              <a
                href="mailto:contact@francescabushell.com"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>

            <a href="#contact" className="btn btn-primary text-center">
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
