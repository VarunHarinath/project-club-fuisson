import participantModel from "../models/Participant.js";
import instance from "./PaymentInstance.js";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const getApi = (req, res) => {
  res.status(200).json({
    key: process.env.RAZERPAY_API_KEY,
  });
};

const checkout = async (req, res) => {
  try {
    const amount = req.params.amount;
    const options = {
      amount: parseInt(amount) * 100,
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZERPAY_SECRET_KEY)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature == razorpay_signature;

  if (isAuthentic) {
    const id = req.params.id;
    try {
      const response = await participantModel.findByIdAndUpdate(id, {
        $set: {
          orderId: razorpay_order_id,
          paymentId: razorpay_payment_id,
        },
      });

      if (!response) {
        res.status(404).json({ message: false });
      }
      res.json({
        message: "Success",
        redirectUrl: `http://localhost:5173/event/successform/${id}}`,
      });
    } catch (error) {
      res.json(error);
    }
  } else {
    res.status(400).json({
      message: false,
    });
  }
};

export { checkout, getApi, paymentVerification };
