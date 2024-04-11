import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="bg-slate-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12"></div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {/* Each Link/Nav Item is in its own <li> */}
                  <li className="group">
                    <Link
                      to="/"
                      className="flex items-center gap-2 text-white text-sm transition duration-500 ease-in-out hover:bg-blue-700 px-4 py-2 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        viewBox="0 0 20 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      Home
                    </Link>
                  </li>

                  <li className="group">
                    <Link
                      to="/a"
                      className="flex items-center gap-2 text-white text-sm transition duration-500 ease-in-out hover:bg-blue-700 px-4 py-2 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                      About
                    </Link>
                  </li>

                  <li className="group">
                    <Link
                      to="/events"
                      className="flex items-center gap-2 text-white transition duration-500 ease-in-out hover:bg-blue-700 px-4 py-2 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Size adjusted to w-4 h-4 for a smaller icon
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor" // Keeps the icon color consistent with the text
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      Events
                    </Link>
                  </li>

                  <li className="group">
                    <Link
                      to="/d"
                      className="flex items-center gap-2 text-white transition duration-500 ease-in-out hover:bg-blue-700 px-4 py-2 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Adjust size and opacity transition as before
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor" // Use currentColor to match the text color or adjust as needed
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                      >
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                      </svg>
                      Club's
                    </Link>
                  </li>

                  <li className="group">
                    <Link
                      to="/"
                      className="flex items-center gap-2 text-white text-sm transition duration-500 ease-in-out hover:bg-blue-700 px-4 py-2 rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Adjust size as needed
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor" // Changed to currentColor for consistency with the text color
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="arcs"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
