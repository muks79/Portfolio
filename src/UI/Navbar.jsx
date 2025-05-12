import { useEffect } from "react";
import Logo from "./Logo";
import { MdOutlineMenu } from "react-icons/md";

export default function Navbar({ isMenuOpen, setisMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg[rgba(10,10,10,0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
          <Logo />
          {!isMenuOpen && (
            <div
              onClick={() => setisMenuOpen((prev) => !prev)}
              className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono"
            >
              <MdOutlineMenu />
            </div>
          )}

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#Home"
              className="text-gray-300 hover:text-xl hover:text-white transition-all text-lg"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-gray-300 hover:text-xl hover:text-white transition-all text-lg"
            >
              About
            </a>
            <a
              href="#Projects"
              className="text-gray-300 hover:text-xl hover:text-white transition-all text-lg"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="text-gray-300 hover:text-xl hover:text-white transition-all text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
