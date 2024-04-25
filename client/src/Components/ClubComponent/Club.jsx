import React from "react";

const Club = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="w-full max-w-4xl">
        {/* Article Card */}
        <div className="mb-4">
          <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                Code more, create change—where every line opens new
                possibilities.
              </time>
              <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Club Coding
                </h3>
              </a>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Srinivas
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Mahi
                </span>
              </div>
            </div>
          </article>
        </div>
        <div className="mb-4">
          <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <time
                dateTime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                Empower your words, shape the world—join the conversation that
                matters.
              </time>
              <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Commuinication Club
                </h3>
              </a>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Arjun
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Karthik
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Club;
