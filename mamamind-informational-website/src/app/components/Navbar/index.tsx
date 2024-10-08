"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkClick = (section: string) => {
    setActiveLink(section);
    handleScroll(section.replace("#", ""));
  };

  return (
    
    <nav className="bg-white p-6 font-nunito z-50 fixed top-0 left-0 w-full pb-12 md:mb-[10px]">
      <div className="max-w-full mx-auto px-5 md:px-[24px]">
        <div className="flex justify-between items-center h-16">
          {!isOpen && (
            <div className="flex-shrink-0 pt-5 md:pt-[15px]">
              <Link href="/">
                <img
                  className="h-[40px] w-[80px] md:h-[110px] md:w-[207px]"
                  src="/Assets/logo.png"
                  alt="MamaMind Logo"
                />
              </Link>
            </div>
          )}
          
          <div className="hidden nest-hub:gap-11 nest-hub:space-x-[80] lg:flex space-x-[112px] text-[27px] font-bold pt-[92px]">
            <Link
              href="#home"
              onClick={() => handleLinkClick("#home")}
              className={`${
                activeLink === "#home" ? "text-[#02A6A6]" : "text-black"
              } hover:text-[#02A6A6] font-bold`}
            >
            Home
            </Link>
            <Link
              href="#about"
              onClick={() => handleLinkClick("#about")}
              className={`${
                activeLink === "#about" ? "text-[#02A6A6]" : "text-black"
              } hover:text-[#02A6A6] font-bold`}
            >
              About Us
            </Link>
            <Link
              href="#features"
              onClick={() => handleLinkClick("#features")}
              className={`${
                activeLink === "#features" ? "text-[#02A6A6]" : "text-black"
              } hover:text-[#02A6A6] font-bold`}
            >
              Features
            </Link>
            <Link
              href="#demo"
              onClick={() => handleLinkClick("#demo")}
              className={`${
                activeLink === "#demo" ? "text-[#02A6A6]" : "text-black"
              } hover:text-[#02A6A6] font-bold`}
            >
              Demo
            </Link>
            <Link
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className={`${
                activeLink === "#contact" ? "text-[#02A6A6]" : "text-black"
              } hover:text-[#02A6A6] font-bold`}
            >
              Contact
            </Link>
          </div>
          {/* Hamburger Menu */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none pt-5"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#02A6A6] fixed inset-0 w-full h-auto z-50 overflow-y-auto">
          <div className="flex justify-between items-center p-6">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-start space-y-6 pt-32 px-6 text-[27px] text-white font-bold w-full">
            <Link
              href="#home"
              onClick={() => {
                handleLinkClick("#home");
                handleMenuClick();
              }}
              className={`${
                activeLink === "#home" ? "text-[#F18721]" : "text-white"
              } hover:text-[#F18721] w-full`}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => {
                handleLinkClick("#about");
                handleMenuClick();
              }}
              className={`${
                activeLink === "#about" ? "text-[#F18721]" : "text-white"
              } hover:text-[#F18721] w-full`}
            >
              About Us
            </Link>
            <Link
              href="#features"
              onClick={() => {
                handleLinkClick("#features");
                handleMenuClick();
              }}
              className={`${
                activeLink === "#features" ? "text-[#F18721]" : "text-white"
              } hover:text-[#F18721] w-full`}
            >
              Features
            </Link>
            <Link
              href="#demo"
              onClick={() => {
                handleLinkClick("#demo");
                handleMenuClick();
              }}
              className={`${
                activeLink === "#demo" ? "text-[#F18721]" : "text-white"
              } hover:text-[#F18721] w-full`}
            >
              Demo
            </Link>
            <Link
              href="#contact"
              onClick={() => {
                handleLinkClick("#contact");
                handleMenuClick();
              }}
              className={`${
                activeLink === "#contact" ? "text-[#F18721]" : "text-white"
              } hover:text-[#F18721] w-full`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
