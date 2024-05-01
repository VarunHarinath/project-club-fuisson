import instance from "./PaymentInstance.js";

const checkout = async (req, res) => {
  try {
    const amount = req.params.amount;
    const options = {
      amount: parseInt(amount),
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { checkout };
