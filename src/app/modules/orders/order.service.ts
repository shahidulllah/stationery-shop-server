
import { ProductModel } from "../product/product.model";
import { Iorder } from "./order.interface";
import { OrderModel } from "./order.model";

//Create Product
const createOrderIntoDB = async (orderData: Iorder) => {

    const product = await ProductModel.findById(orderData.product);

    if (!product) {
      throw new Error('Product not found');
    }

    if (product.quantity < orderData.quantity) {
      throw new Error('Insufficient stock available');
    }

    product.quantity -= orderData.quantity;
    if (product.quantity === 0) {
      product.inStock = false;
    }
    await product.save();

    const result = await OrderModel.create(orderData)
    return result;
  }

  export const OrderServices = {
    createOrderIntoDB
  }