import { Schema, model } from 'mongoose';
import { Iorder } from './order.interface';

const orderSchema = new Schema<Iorder>(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true, default: "pending" },
  },
  { timestamps: true },
);

export const OrderModel = model<Iorder>('Order', orderSchema);
