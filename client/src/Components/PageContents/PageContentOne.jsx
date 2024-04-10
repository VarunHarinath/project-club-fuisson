import React from "react";

const PageContentOne = () => {
  return (
    <>
      <div>
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animated-text">
                <span className="text-white font-sans subpixel-antialiased">
                  Welcome to
                </span>
                <br />
                <span className="text-sky-400 animated-text-2 font-mono antialiased whitespace-pre-wrap">
                  MRU CLUBS
                </span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"></p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="#"
                >
                  Learn More
                </a>
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
        }

        .animated-text-2 {
          display: inline-block;
          opacity: 0;
          animation: typing 2s ease-in-out forwards;
          animation-delay: 2s;
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
