import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventsDetail = () => {
  const { eventId } = useParams();
  const [eventDataById, setEventDataById] = useState(null);
  const [fetchData, setFetchData] = useState(true);
  const numberOfRows = 5; // Example number of rows
  const numberOfColumns = 3; // Example number of columns

  useEffect(() => {
    const fetchEventApi = async () => {
      if (fetchData && eventDataById === null) {
        try {
          const response = await axios.get(
            `https://project-club-fuisson.onrender.com/events/${eventId}`
          );
          console.log(response.data);
          setEventDataById(response.data);
          setFetchData(false);
        } catch (error) {
          console.error("Error fetching events:", error);
          setFetchData(false);
        }
      }
    };

    if (fetchData) {
      fetchEventApi();
    }
  }, [fetchData, eventId]);

  return (
    <>
      {/* loading */}
      <div className=" m-24">
        {fetchData && (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {Array.from({ length: numberOfColumns }).map((_, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: numberOfColumns }).map(
                    (_, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        <div className="h-2 bg-gray-200 rounded"></div>
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* end of loading */}
      {/* dynamic table  */}
      {eventDataById && (
        <>
          <div className=" mx-16">
            <div class="flow-root">
              <dl class="-my-3 divide-y divide-gray-100 text-sm">
                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900">title</dt>
                  <dd class="text-gray-700 sm:col-span-2">
                    {eventDataById && eventDataById.eventName}
                  </dd>
                </div>

                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 text-green-600">
                  <dt class="font-medium ">Date</dt>
                  <dd class="sm:col-span-2">
                    {eventDataById && eventDataById.eventDate}
                  </dd>
                </div>

                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900">Event Venue</dt>
                  <dd class="text-gray-700 sm:col-span-2"></dd>
                </div>

                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900">Hosted By</dt>
                  <dd class="text-gray-700 sm:col-span-2"></dd>
                </div>
                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4 text-red-600">
                  <dt class="font-medium ">Last Date To Apply</dt>
                  <dd class=" sm:col-span-2"></dd>
                </div>

                <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt class="font-medium text-gray-900">Description</dt>
                  <dd class="text-gray-700 sm:col-span-2">
                    {eventDataById && eventDataById.eventDescription}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {/* end of dynamic table */}
          {/* button */}
          <div className="flex justify-center mt-28">
            <a
              className="group relative inline-block focus:outline-none focus:ring"
              href="#"
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                Book the event !
              </span>
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default EventsDetail;