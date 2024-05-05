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

      if (id) {
        try {
          const dataResponse = await axios.post(
            `https://project-club-fuisson.onrender.com/payments/checkout/${price}`
          );

          const keyResponse = await axios.get(
            "https://project-club-fuisson.onrender.com/payments/getapi"
          );

          const options = {
            key: keyResponse.data.key,
            amount: dataResponse.data.amount,
            currency: "INR",
            name: "Malla Reddy University CSE",
            description: "-- Test Transaction -- ",
            image: "",
            order_id: dataResponse.data.id,
            callback_url: `https://project-club-fuisson.onrender.com/payments/verification/${id}`,
            prefill: {
              name: name,
              email: email,
              contact: phoneNumber,
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#f2f2f2",
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
              <Dialog.Title className="text-lg font-medium text-gray-800 text-center mt-3">
                {" "}
                Check wether the details are correct?
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-base leading-relaxed text-center text-gray-500 py-4">
                <span className="font-semibold">Name: </span>{" "}
                <span className=" p-0.5"> {name}</span> <br />
                <span className="font-semibold">Email: </span>{" "}
                <span className=" p-0.5">{email}</span> <br />
              </Dialog.Description>
              <div className="items-center gap-2 mt-3 text-sm sm:flex">
                <Dialog.Close asChild>
                  <button
                    onClick={onClickHandler}
                    className="w-full mt-2 px-4 py-3 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg duration-150 flex justify-center items-center shadow-lg transform transition-all hover:scale-105 flex-1"
                  >
                    Pay with Razorpay
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                    className="w-full mt-2 px-4 py-3 text-gray-800 rounded-md border border-gray-300 focus:border-indigo-600 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 flex justify-center items-center shadow-sm flex-1"
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
