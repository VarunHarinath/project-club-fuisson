import React from "react";
import { Link } from "react-router-dom";

const PageContentOne = ({ onGetStartedClick }) => {
  return (
    <>
      <div className=" cursor-default">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animated-text">
                <span className=" text-sky-500 font-sans subpixel-antialiased">
                  Udbava
                </span>
                <br />
                <span className="text-white">CSE</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"></p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  onClick={onGetStartedClick}
                >
                  <span className="relative inline-flex items-center">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                    <span className="ml-3">Get Started</span>
                  </span>
                </button>
                <Link
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  to="/a"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .animated-text span {
          display: inline-block;
          opacity: 0;
          animation: typing 2s ease-in-out forwards;
          animation-delay: 1s;
        }

        .animated-text-2 {
          display: inline-block;
          opacity: 0;
          animation: typing 2s ease-in-out forwards;
          animation-delay: 0s;
        }

        @keyframes typing {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default PageContentOne;
