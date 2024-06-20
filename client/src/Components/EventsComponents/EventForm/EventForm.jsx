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
  const [spinner, setSpinner] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleCheckboxChange = (event) => {
    setAcceptedTerms(event.target.checked);
  };

  useEffect(() => {
    const fetchEventApi = async () => {
      if (fetchData && eventDataById === null) {
        try {
          const response = await axios.get(
            `https://club-fusion-server.onrender.com/events/${eventId}`
          );

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
    setSpinner(true);
    setModalOpen(true);
  };
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-16 sm:px-6 sm:py-24">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Student Registration
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Complete the form to proceed with your payment.
            </p>
          </div>
          <form onSubmit={onSubmitHandler} className="mt-8 space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email (College Email ID)"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Roll Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                required
              />
            </div>
            <div className="relative flex items-center">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                pattern="^\d{10}$"
                title="Enter a 10-digit phone number without any dashes or spaces."
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>

            <div className="mt-10 w-full max-w-md space-y-4 bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center">
                <h3 className="text-xl font-bold py-0.5 ">Event Details</h3>
                <div className="mt-4 text-sm text-gray-600 space-y-2">
                  <p className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">
                      Event Name:
                    </span>
                    <span className="text-gray-800">
                      {eventDataById ? eventDataById.eventName : "Loading..."}
                    </span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Venue:</span>
                    <span className="text-gray-800">
                      {eventDataById ? eventDataById.eventVenue : "Loading..."}
                    </span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Cost:</span>
                    <span className="text-gray-800">
                      {eventDataById
                        ? `₹ ${eventDataById.price}`
                        : "Loading..."}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={handleCheckboxChange}
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2">
                    I accept the{" "}
                    <a
                      href="/terms-and-conditions"
                      className="text-indigo-600 underline"
                    >
                      Terms and Conditions
                    </a>
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className={`w-full flex justify-center items-center px-4 py-3 text-white font-medium rounded-lg focus:outline-none duration-300 ${
                  acceptedTerms
                    ? "bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 active:bg-indigo-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!acceptedTerms || spinner}
              >
                {spinner ? (
                  <div
                    className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full"
                    style={{ borderTopColor: "transparent" }}
                  ></div>
                ) : (
                  "Continue With Payment"
                )}
              </button>
            </div>
          </form>
          <ConfirmDetails
            isOpen={isModalOpen}
            onOpenChange={setModalOpen}
            name={name}
            email={email}
            rollNumber={rollNumber}
            phoneNumber={number}
            price={eventDataById ? eventDataById.price : null}
            event={eventDataById ? eventDataById.eventName : null}
          />
        </div>
      </div>
    </>
  );
};

export default EventForm;
