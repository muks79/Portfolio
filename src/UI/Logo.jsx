import React from "react";

export default function Logo() {
  return (
    <a
      href="#home"
      className="font-mono text-xl font-bold text-gray-300 hover:text-white transition duration-300"
    >
      Mukul
      <span className="bg-gradient-to-r ml-2 from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        Mehra
      </span>
    </a>
  );
}
