import Stripe from "stripe";
import { Payment } from "./payment.model";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const createPaymentIntent = async (userId: string, amount: number, currency: string) => {
  const paymentIntent = await stripe.paymentIntents.create({ amount, currency });

  const newPayment = new Payment({
    userId,
    amount,
    currency,
    paymentIntentId: paymentIntent.id,
  });

  await newPayment.save();
  return paymentIntent.client_secret;
};

export const confirmPayment = async (paymentIntentId: string) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

  if (paymentIntent.status === "succeeded") {
    await Payment.findOneAndUpdate(
      { paymentIntentId },
      { paymentStatus: "successful" }
    );
  }

  return paymentIntent.status;
};
