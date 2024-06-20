import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SucessPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [fetchData, setFetchData] = useState(true);

  useEffect(() => {
    const fetchEventApi = async () => {
      if (fetchData && data === null) {
        try {
          const response = await axios.get(
            `https://club-fusion-server.onrender.com/participants/${id}`
          );
          console.log(response.data);
          setData(response.data);
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
  }, [fetchData, id]);
  return (
    <>
      <div className="p-5 m-5 ">
        <header className="bg-gray-50 rounded-lg shadow-lg">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Congratulations, <br /> {data && data.name}!
                </h1>

                <p className="mt-1.5 text-sm text-gray-500">
                  You tickec is succesfully booked 🎉
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <button
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  <span className="text-sm font-medium"> Go Home </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>

                <button
                  className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button"
                >
                  Download Tikect
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="p-5 m-16">
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm hover:shadow-xl transition-shadow duration-300">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Name</dt>
              <dd className="text-gray-700 sm:col-span-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                {data && data.name}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Email</dt>
              <dd className="text-gray-700 sm:col-span-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                {data && data.email}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Event</dt>
              <dd className="text-gray-700 sm:col-span-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                {data && data.event}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">RollNumber</dt>
              <dd className="text-gray-700 sm:col-span-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-full break-words">
                {data && data.rollNumber}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Order ID</dt>
              <dd className="text-gray-700 sm:col-span-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                {data && data.orderId}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Payment ID</dt>
              <dd className="text-gray-700 sm:col-span-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                {data && data.paymentId}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default SucessPage;
