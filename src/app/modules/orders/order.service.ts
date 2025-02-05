import { ProductModel } from '../product/product.model';
import { Iorder } from './order.interface';
import { OrderModel } from './order.model';

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

  const result = await OrderModel.create(orderData);
  return result;
};

//Get all orders
const getAllOrdersFromDB = async (): Promise<Iorder[]> => {
  const result = await OrderModel.find();
  return result;
};

//Update orders
const updateOrderStatusInDB = async (
  orderId: string,
  status: string,
): Promise<Iorder | null> => {
  const result = await OrderModel.findByIdAndUpdate(
    orderId,
    { status },
    { new: true },
  );
  return result;
};

//Dlete orders
const deleteOrderFromDB = async (orderId: string): Promise<Iorder | null> => {
  const result = await OrderModel.findByIdAndDelete(orderId);
  return result;
};

//Calculate revenw from DB
const calculateRevenueFromDB = async (): Promise<number> => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return result.length > 0 ? result[0] : 0;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  calculateRevenueFromDB,
  updateOrderStatusInDB,
  deleteOrderFromDB
};
