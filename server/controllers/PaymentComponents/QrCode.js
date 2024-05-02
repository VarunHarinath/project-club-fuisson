import qrCode from "qrcode";

const QrCode = async (razorpay_order_id, razorpay_payment_id) => {
  try {
    const pushDataQr = {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    };
    const qrCodeUrl = await qrCode.toDataURL(JSON.stringify(pushDataQr));
    return qrCodeUrl;
  } catch (error) {
    console.log(error);
  }
};

export default QrCode;
