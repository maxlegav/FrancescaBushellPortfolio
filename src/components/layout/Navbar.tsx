"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050510]/80 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-lg md:text-xl text-white"
        >
          Francesca Bushell
          <span className="block text-xs md:text-sm font-medium text-slate-400">
            International Marketing · HEC Paris
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Links & CTA - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/francesca-bushell-7a34b5255/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="/FrancescaCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors"
            aria-label="CV"
          >
            <FaFileAlt size={18} />
          </a>
          <a
            href="mailto:francescaiidaolivia@gmail.com"
            className="text-slate-300 hover:text-white transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>

          <a href="#contact" className="ml-2 btn btn-primary !py-2 !px-5">
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#050510]/95 backdrop-blur-xl shadow-lg p-4 flex flex-col space-y-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Social Links - Mobile */}
            <div className="flex items-center space-x-4 pt-2 border-t border-white/10">
              <a
                href="https://www.linkedin.com/in/francesca-bushell-7a34b5255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="/FrancescaCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="CV"
              >
                <FaFileAlt size={18} />
              </a>
              <a
                href="mailto:francescaiidaolivia@gmail.com"
                className="text-slate-300 hover:text-white transition-colors"
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
