import { Schema, model } from 'mongoose';
import { IProduct, ProductCategory } from './product.interface';

//Staionary Product Schema
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      required: true,
      enum: Object.values(ProductCategory),
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true, default: true },
    image: {type: String},
  },
  {
    timestamps: true,
  },
);

//Staionary Product Model
export const ProductModel = model<IProduct>('Product', productSchema);
