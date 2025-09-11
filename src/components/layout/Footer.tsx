"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-white" id="contact">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a
                  href="mailto:francescaiidaolivia@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  francescaiidaolivia@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-3 text-blue-400" />
                <a
                  href="https://www.linkedin.com/in/francesca-bushell-7a34b5255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-blue-400" />
                <a
                  href="tel:+33123456789"
                  className="hover:text-blue-400 transition-colors"
                >
                  +32 472 32 00 24
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-blue-400 mt-1" />
                <span>London, UK</span>
              </li>
            </ul>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
              >
                <FaArrowUp /> Back to top
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="hover:text-blue-400 transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>

            <h3 className="font-heading font-semibold text-lg mb-4 mt-6 text-white">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info & Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">
              Francesca Bushell
            </h3>
            <p className="mb-2">International Marketing Specialist</p>
            <p className="text-sm text-gray-400 mb-6">
              Self-employed business based in the UK
            </p>

            <h4 className="font-medium text-white mb-3">
              Subscribe to Newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
                required
              />
              <button
                type="submit"
                className="btn btn-primary sm:whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-2">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Francesca Bushell. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/legal-notice"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Legal Notice
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
