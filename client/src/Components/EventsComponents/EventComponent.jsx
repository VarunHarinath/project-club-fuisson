import React from "react";

const EventComponent = () => {
  return (
    <>
      <div className="m-5 cursor-default">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="-ms-1 me-1.5 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="whitespace-nowrap text-base">Upcoming Events</p>
          </span>
        </div>
        <div className="m-5">
          <article className="flex bg-white transition hover:shadow-2xl">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time
                datetime="2022-10-10"
                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
              >
                <span>2022</span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>Oct 10</span>
              </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    Hacathon 2k24
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  Join us for Hackathon 2K24, where creativity meets technology
                  in an electrifying showdown of coding prowess. Set for [insert
                  specific dates], this exhilarating event invites tech
                  enthusiasts, developers, and innovators from across the globe
                  to come together and tackle real-world challenges with
                  cutting-edge solutions. Over the span of 48 hours,
                  participants will dive into a collaborative frenzy, coding
                  their way through problems and competing for prizes,
                  recognition, and the opportunity to turn their visions into
                  reality.
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <a
                  href="#"
                  className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                >
                  Book the event
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* complemeted events */}
        <div className="text-center mt-14">
          <span class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="-ms-1 me-1.5 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
              />
            </svg>

            <p class="whitespace-nowrap text-base">Past Events</p>
          </span>
        </div>
        <div>
          <div className="m-5">
            <article className="flex bg-white transition hover:shadow-2xl ">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  datetime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2022</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Oct 10</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      TechCon 2K24
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Step into the future at TechCon 2024, the premier event for
                    tech enthusiasts, industry leaders, and innovators.
                    Scheduled for [insert dates], this event is a melting pot of
                    ideas and a showcase of groundbreaking technologies that are
                    shaping our world. From interactive workshops and expert-led
                    panels to live demonstrations of the latest advancements,
                    TechCon 2024 offers a unique platform to explore emerging
                    trends and technologies across diverse sectors.
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <p
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 hover:blur-sm hover: cursor-not-allowed"
                  >
                    Book the event
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventComponent;
