import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function MobileMenu({ isMenuOpen, setisMenuOpen }) {
  return (
    <div
      className={`fixed w-full top-0 left-0 bg[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 gap-12 ease-in-out ${
        isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setisMenuOpen(false)}
        className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer text-white"
        aria-label="Close Menu"
      >
        <RxCross2 />
      </button>
      <a
        href="#Home"
        className="text-2xl font-semibold text-white my-4 transform transition-transform duration-300  ${isMenuOpen? }"
      >
        Home
      </a>
      <a
        href="#About"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300  ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        About
      </a>
      <a
        href="#Projects"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300  ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Projects
      </a>
      <a
        href="#Contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300  ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Contact
      </a>
    </div>
  );
}
