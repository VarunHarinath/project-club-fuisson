import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ClubDetail = () => {
  const { clubId } = useParams();
  const [clubDataById, setClubDataById] = useState(null);
  const [fetchData, setFetchData] = useState(true);
  const numberOfRows = 5;
  const numberOfColumns = 3;

  useEffect(() => {
    const fetchClubApi = async () => {
      if (fetchData && clubDataById === null) {
        try {
          console.log("fetching...");
          const response = await axios.get(
            `https://club-fusion-server.onrender.com/clubs/${clubId}`
          );
          console.log(response.data);
          setClubDataById(response.data);
          setFetchData(false);
        } catch (error) {
          console.error("Error fetching events:", error);
          setFetchData(false);
        }
      }
    };

    if (fetchData) {
      fetchClubApi();
    }
  }, [fetchData, clubId]);
  return (
    <>
      <div>
        {/* loading */}
        <div className=" m-24">
          {fetchData && (
            <>
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center flex justify-center items-center"
              >
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg
                    className="w-30 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>

                <span className="sr-only">Loading...</span>
              </div>
              <table className="min-w-full divide-y divide-gray-200 mt-5">
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
              {/* end of loading */}
            </>
          )}
        </div>

        {/* Image */}
        {clubDataById && (
          <div className=" mx-16">
            <p href="#" className="block">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
              />

              <div className="my-10 sm:flex sm:items-center sm:justify-center sm:gap-4 text-xl">
                <strong className="font-medium">
                  {clubDataById && clubDataById.title}
                </strong>

                <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p className="mt-0.5 opacity-50 sm:mt-0">
                  {clubDataById && clubDataById.subTitle}
                </p>
              </div>
            </p>
          </div>
        )}
        {/* end of Image */}
      </div>
      {/* Table of contents */}
      {clubDataById && (
        <div className="m-10 mx-16">
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Club Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {clubDataById && clubDataById.title}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Description</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {clubDataById && clubDataById.description}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Lead</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {clubDataById && clubDataById.leadMember}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">co - Lead</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {clubDataById && clubDataById.coLeadMember}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
      {/* end of table of contens */}
    </>
  );
};

export default ClubDetail;
