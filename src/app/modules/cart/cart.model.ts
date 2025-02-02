import mongoose, { Schema } from 'mongoose';
import { ICart } from './cart.interface';

const CartSchema = new Schema<ICart>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
});

export default mongoose.model<ICart>('Cart', CartSchema);
