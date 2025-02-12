import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.interface";



interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String},
    role: { type: String, enum: ["user", "admin"], default: "user" },
    shippingAddress: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model<IUserModel>("User", UserSchema);
