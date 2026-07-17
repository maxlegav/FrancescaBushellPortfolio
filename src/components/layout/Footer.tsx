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
    <footer className="relative bg-[#050510] text-slate-300" id="contact">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      {/* CTA */}
      <div className="container mx-auto px-4 md:px-6 pt-20 pb-12 text-center">
        <h2 className="section-title mb-4">
          Let&apos;s take your brand{" "}
          <span className="gradient-text">global.</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
          Available for international marketing projects across Europe, the UK
          and Asia.
        </p>
        <a
          href="mailto:francescaiidaolivia@gmail.com"
          className="btn btn-primary"
        >
          <FaEnvelope className="mr-2" /> Get in Touch
        </a>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [&>div]:min-w-0">
          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center min-w-0">
                <FaEnvelope className="mr-3 text-indigo-400 shrink-0" />
                <a
                  href="mailto:francescaiidaolivia@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  francescaiidaolivia@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaLinkedin className="mr-3 text-indigo-400" />
                <a
                  href="https://www.linkedin.com/in/francesca-bushell-7a34b5255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-indigo-400" />
                <a
                  href="tel:+32472320024"
                  className="hover:text-white transition-colors"
                >
                  +32 472 32 00 24
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-indigo-400 mt-1" />
                <span>London, UK</span>
              </li>
            </ul>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-indigo-400 hover:text-white transition-colors"
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
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="hover:text-white transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info & Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">
              Francesca Bushell
            </h3>
            <p className="mb-2">International Marketing Advisor</p>
            <p className="text-sm text-indigo-400 mb-2">HEC Paris</p>
            <p className="text-sm text-slate-500 mb-6">
              Self-employed business based in the UK
            </p>

            <h4 className="font-medium text-white mb-3">
              Subscribe to Newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full min-w-0 flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/15 focus:outline-none focus:border-indigo-400 text-white placeholder:text-slate-500"
                required
              />
              <button
                type="submit"
                className="btn btn-primary !py-2 sm:whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-2">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {currentYear} Francesca Bushell. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/legal-notice"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Legal Notice
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-slate-500 hover:text-white transition-colors"
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
