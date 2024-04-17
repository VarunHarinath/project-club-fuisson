import React from "react";
import { Link } from "react-router-dom";

const PageContentOne = ({ onGetStartedClick }) => {
  return (
    <>
      <div className="cursor-default">
        <section className="relative overflow-hidden w-full h-screen py-28 px-4 bg-gray-900 md:px-8">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
          <div className="max-w-xl mx-auto text-center relative">
            <div className="py-4">
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-500 animate-typing delay-1000">
                Udhbhava
              </h3>

              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-500 mt-2 ">
                CSE
              </h3>
              <p className="text-white  p-4 rounded-lg mt-4 mx-auto max-w-2xl text-lg leading-relaxed">
                Nam erat risus, sodales sit amet lobortis ut, finibus eget
                metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales
                nisi id porta lacinia.
              </p>
            </div>
            <div className="mt-5 items-center justify-center gap-3 sm:flex">
              <a
                className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
                onClick={onGetStartedClick}
              >
                Get Started
              </a>
              <a
                href="javascript:void(0);"
                className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
              >
                Read More
              </a>
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
