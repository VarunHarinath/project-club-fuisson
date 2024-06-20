import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Club = () => {
  const [clubData, setClubData] = useState([]);
  const [fetchData, setFetchData] = useState(true);

  useEffect(() => {
    const fetchClubApi = async () => {
      if (fetchData) {
        try {
          const response = await axios.get(
            "https://club-fusion-server.onrender.com/clubs"
          );
          console.log(response.data);
          setClubData(response.data);
          setFetchData(false);
        } catch (error) {
          console.error("error fetching clubs:", error);
          setFetchData(false);
        }
      }
    };
    fetchClubApi();
  }, [fetchData]);

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="w-full max-w-4xl">
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
        {/* Dynamic Article  */}
        {clubData.map((club, index) => (
          <div className="mb-4">
            <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
              <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {club.subTitle}
                </time>
                <Link to={`/clubs/${club._id}`}>
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    {club.title}
                  </h3>
                </Link>
                <div className="mt-4 flex flex-wrap gap-1">
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    {club.leadMember}
                  </span>
                  <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                    {club.coLeadMember}
                  </span>
                </div>
              </div>
            </article>
          </div>
        ))}
        {/* end of article */}
      </div>
    </div>
  );
};

export default Club;
