import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 text-gray-100 flex flex-col items-center justify-center gap-5 bg-black/80 backdrop-blur-sm">
      <div className="w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40px] h-full bg-blue-500 shadow-[0_0_15px] animate-loading-button"></div>
      </div>

      <div className="mb-4 text-2xl font-mono font-semibold">
        Glad to have you here!
        <span className="animate-blink ml-1 text-2xl font-bold">|</span>
      </div>

      <div className="w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40px] h-full bg-blue-500 shadow-[0_0_15px] animate-loading-button"></div>
      </div>
    </div>
  );
}
