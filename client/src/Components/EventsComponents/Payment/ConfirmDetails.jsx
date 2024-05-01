import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

const ConfirmDetails = ({
  isOpen,
  onOpenChange,
  name,
  email,
  rollNumber,
  phoneNumber,
  price,
  event,
}) => {
  const onClickHandler = async (e) => {
    e.stopPropagation();
    try {
      const data = { name, email, rollNumber, phoneNumber, price, event };
      const response = await axios.post(
        "https://project-club-fuisson.onrender.com/participants",
        data
      );
      const id = response.data.id;
      console.log(id);
      if (id) {
        try {
          const dataResponse = await axios.post(
            `https://project-club-fuisson.onrender.com/payments/checkout/${price}`
          );
          const keyResponse = await axios.get(
            "https://project-club-fuisson.onrender.com/payments/getapi"
          );
          console.log(dataResponse.data);
          console.log(keyResponse.data);
          const options = {
            key: keyResponse.data.key,
            amount: dataResponse.data.amount,
            currency: "INR",
            name: "Malla Reddy University CSE",
            description: "-- Test Transaction -- ",
            image: "",
            order_id: dataResponse.data.id,
            callback_url: "http://localhost:5000/api/paymentVerification",
            prefill: {
              name: name,
              email: email,
              contact: phoneNumber,
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#000000",
            },
          };
          const razor = new window.Razorpay(options);
          razor.open();
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
          <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
            <div className="bg-white rounded-md shadow-lg px-4 py-6">
              <div className=" flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 text-yellow-500" // Adjusted the color class for yellow
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.360-.593 1.431-.593 1.79 0l6.406 10.801c.38.637.055 1.434-.79 1.434H2.65c-.843 0-1.17-.797-.79-1.434l6.406-10.801zM9 7c-.553 0-1 .444-1 1v3c0 .552.447 1 1 1s1-.448 1-1V8c0-.556-.447-1-1-1zm0 8a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <Dialog.Title className="text-lg font-medium text-gray-800 text-center mt-3">
                {" "}
                Check wether the details are correct?
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-base leading-relaxed text-center text-gray-500 py-4">
                <span className="font-semibold">Name: </span>{" "}
                <span className=" font-bold text-sky-500">{name}</span> <br />
                <span className="font-semibold">Email: </span>{" "}
                <span className=" font-bold text-sky-500">{email}</span> <br />
              </Dialog.Description>
              <div className="items-center gap-2 mt-3 text-sm sm:flex">
                <Dialog.Close asChild>
                  <button
                    onClick={onClickHandler}
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                  >
                    Pay
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    aria-label="Close"
                  >
                    Go back
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default ConfirmDetails;
