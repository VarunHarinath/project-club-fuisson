import express from "express";
import { checkout } from "../controllers/PaymentController.js";

const paymentRoute = express.Router();

paymentRoute.post("/checkout/:amount", checkout);

export default paymentRoute;
