import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50">
      <nav
        className="
        w-[92%] max-w-7xl
        rounded-[28px]
        border border-white/10
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        px-8 py-4
        flex items-center justify-between
      "
        style={{
          background: "rgba(0,46,26,0.9)", // darker green glass
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
            <span className="text-[#e2dfd8] font-bold text-lg">S</span>
          </div>

          <h1 className="text-[#e2dfd8] text-lg font-semibold tracking-wide">
            Siffrum
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-[#e2dfd8] font-medium">
          <li className="cursor-pointer hover:text-white transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Dashboard
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Loan Planner
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Scenarios
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Insights
          </li>

          <li className="cursor-pointer hover:text-white transition">
            Security
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-[#e2dfd8] hover:text-white transition">
            Log in
          </button>

          <button
            className="
            px-5 py-2 rounded-full
            bg-white/10
            text-[#e2dfd8]
            hover:bg-white/20
            transition
          "
          >
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;