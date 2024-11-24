import { Types } from "mongoose";

export interface Iorder {
    email:string;
    product: Types.ObjectId;
    quantity: number;
    totalPrice: number;
}