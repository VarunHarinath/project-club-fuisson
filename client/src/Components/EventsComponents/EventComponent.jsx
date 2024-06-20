import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EventComponent = () => {
  const [eventData, setEventData] = useState([]);
  const [fetchData, setFetchData] = useState(true);

  useEffect(() => {
    const fetchEventApi = async () => {
      if (fetchData) {
        try {
          const response = await axios.get(
            "https://club-fusion-server.onrender.com/events"
          );

          setEventData(response.data);
          setFetchData(false);
        } catch (error) {
          console.error("Error fetching events:", error);
          setFetchData(false);
        }
      }
    };

    fetchEventApi();
  }, [fetchData]);

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
        {/* Loading Component */}
        {fetchData && (
          <div
            role="status"
            className="w-full m-5 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>Loading may takeupto 50 seconds...</div>
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {/* end of loading compoenet */}
        {/* Dynamic data  */}
        {eventData.map((event) => {
          if (event.status) {
            return (
              <>
                <div className="m-5">
                  <article className="flex bg-white transition hover:shadow-2xl">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                      <time
                        datetime="2022-10-10"
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                      >
                        <span>{event.eventYear}</span>
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        <span> {event.eventDate} </span>
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
                        <Link to={`/events/${event._id}`}>
                          <h3 className="font-bold uppercase text-gray-900">
                            {event.eventName}
                          </h3>
                        </Link>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                          {event.eventDescription}
                        </p>
                      </div>

                      <div className="sm:flex sm:items-end sm:justify-end">
                        <Link
                          to={`/events/${event._id}`}
                          className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                        >
                          Book the event
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              </>
            );
          }
        })}
        {/* end of dynamic data */}
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
        {/* past elemets */}
        {/* Loading Component */}
        {fetchData && (
          <div
            role="status"
            className="w-full m-5 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>Loading may takeupto 50 seconds...</div>

              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {/* end of loading compoenet */}
        {/* Dynamic data  */}
        {eventData.map((event) => {
          if (!event.status) {
            return (
              <>
                <div className="m-5 ">
                  <article className="flex bg-white transition hover:shadow-2xl">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                      <time
                        datetime="2022-10-10"
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                      >
                        <span>{event.eventYear}</span>
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        <span> {event.eventDate} </span>
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
                        <p href="#">
                          <h3 className="font-bold uppercase text-gray-900">
                            {event.eventName}
                          </h3>
                        </p>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                          {event.eventDescription}
                        </p>
                      </div>

                      <div className="sm:flex sm:items-end sm:justify-end">
                        <Link className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 hover:blur-sm hover: cursor-not-allowed">
                          Book the event
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              </>
            );
          }
        })}
        {/* end of dynamic data */}
        {/* end of past elements */}
      </div>
    </>
  );
};

export default EventComponent;
