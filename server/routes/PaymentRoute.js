import express from "express";
import { checkout, getApi } from "../controllers/PaymentController.js";

const paymentRoute = express.Router();

paymentRoute.post("/checkout/:amount", checkout);
paymentRoute.get("/getapi", getApi);

export default paymentRoute;
