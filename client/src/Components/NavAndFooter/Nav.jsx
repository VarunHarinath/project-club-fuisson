import React, { useState } from "react";

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
                  <li>
                    <a
                      className="text-white transition duration-500 ease-in-out hover:bg-blue-800 px-4 py-2 rounded-full"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition duration-500 ease-in-out hover:bg-blue-800 px-4 py-2 rounded-full"
                      href="#"
                    >
                      {" "}
                      Careers{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition duration-500 ease-in-out hover:bg-blue-800 px-4 py-2 rounded-full"
                      href="#"
                    >
                      {" "}
                      History{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition duration-500 ease-in-out hover:bg-blue-800 px-4 py-2 rounded-full"
                      href="#"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition duration-500 ease-in-out hover:bg-blue-800 px-4 py-2 rounded-full"
                      href="#"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition duration-500 ease-in-out hover:bg-blue-800 px-4 py-2 rounded-full"
                      href="#"
                    >
                      {" "}
                      Blog{" "}
                    </a>
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
