import express from "express";
import {
  checkout,
  getApi,
  paymentVerification,
} from "../controllers/PaymentController.js";

const paymentRoute = express.Router();

paymentRoute.post("/checkout/:amount", checkout);
paymentRoute.get("/getapi", getApi);
paymentRoute.post("/verification/:id", paymentVerification);

export default paymentRoute;
