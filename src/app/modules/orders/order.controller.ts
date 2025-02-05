import { Request, Response } from 'express';
import { OrderServices } from './order.service';

//Create  Order
const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, product, quantity, totalPrice } = req.body;

    if (!email || !product || !quantity || !totalPrice) {
      return res.status(400).json({
        success: false,
        message: 'All fields are needed',
      });
    }

    const result = await OrderServices.createOrderIntoDB({
      email,
      product,
      quantity,
      totalPrice,
    });

    //send response
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'An error occurred while placing the order',
    });
  }
};

//Get All orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB();

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to fetch orders',
    });
  }
};

//Update order
const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Status is required',
      });
    }

    const result = await OrderServices.updateOrderStatusInDB(orderId, status);

    res.status(200).json({
      success: true,
      message: 'Order status updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to update order status',
    });
  }
};

//Delete orders
const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    const result = await OrderServices.deleteOrderFromDB(orderId);

    res.status(200).json({
      success: true,
      message: 'Order deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to delete order',
    });
  }
};

//Calculate Rvenew
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.calculateRevenueFromDB();

    res.status(200).json({
      message: 'Revenew calculated Successfully',
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message || 'fail to calculate reveneue',
      status: false,
    });
  }
};

export const OrderController = {
  createOrder,
  calculateRevenue,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
};
