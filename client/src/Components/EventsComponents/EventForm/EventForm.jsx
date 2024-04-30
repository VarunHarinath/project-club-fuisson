import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import ConfirmDetails from "../Payment/ConfirmDetails";

const EventForm = () => {
  const { eventId } = useParams();
  const [eventDataById, setEventDataById] = useState(null);
  const [fetchData, setFetchData] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };
  return (
    <>
      <main className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4 shadow-xl py-16 sm:pt-20">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <img src="" width={150} className="mx-auto" />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Fill the Form
              </h3>
              <p className="">to continue with the payment </p>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <form onSubmit={onSubmitHandler} className="space-y-5">
              <div className="relative w-full">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                  <circle cx="12" cy="10" r="3" />
                  <circle cx="12" cy="12" r="10" />
                </svg>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="relative w-full">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email ( College Email Id )"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Roll Number"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  required
                />
              </div>
              <div className="relative w-full">
                <style>
                  {`
                    input[type="number"]::-webkit-inner-spin-button,
                    input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                     }

                    input[type="number"] {
                    -moz-appearance: textfield;
                        }
                   `}
                </style>
                <div>
                  <div className="relative  w-full mt-2  text-gray-500">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <p className="text-sm bg-transparent outline-none rounded-lg h-full">
                        IN
                      </p>
                    </div>
                    <input
                      type="number"
                      placeholder="+1 (555) 000-000"
                      className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      value={number}
                      onChange={(e) => {
                        const trimmedValue = e.target.value.trim();
                        setNumber(trimmedValue);

                        if (trimmedValue.length === 10) {
                          setErrorMessage("");
                        } else {
                          setErrorMessage("Please enter exactly 10 digits.");
                        }
                      }}
                      required
                    />
                    {errorMessage && (
                      <div className="text-red-500 text-xs mt-1">
                        {errorMessage}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <div className="relative mt-2  text-gray-500">
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <p className="text-sm bg-transparent outline-none rounded-lg ">
                      INR
                    </p>
                  </div>
                  <input
                    type="number"
                    placeholder={
                      eventDataById ? `₹ ${eventDataById.price}` : "loading.."
                    }
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg  hover:cursor-default font-semibold"
                    readOnly
                  />
                </div>
              </div>
              <span className="flex items-center">
                <span className="h-px flex-1 bg-black"></span>
              </span>

              <div className="relative w-full ">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
                </svg>
                <input
                  type="text"
                  placeholder={
                    eventDataById ? eventDataById.eventName : "loading"
                  }
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg   hover:cursor-default font-bold"
                  readOnly
                />
              </div>
              <div className="relative w-full">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </svg>
                <input
                  type="text"
                  placeholder={
                    eventDataById ? eventDataById.eventVenue : "Loading..."
                  }
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg hover:cursor-default font-bold"
                  readOnly
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Continue With Payment
              </button>
            </form>
            <ConfirmDetails
              isOpen={isModalOpen}
              onOpenChange={setModalOpen}
              name={name}
              email={email}
              rollNumber={rollNumber}
              phoneNumber={number}
              price={eventDataById ? eventDataById.eventVenue : null}
              event={eventDataById ? eventDataById.eventName : null}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default EventForm;
