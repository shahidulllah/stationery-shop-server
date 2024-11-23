import { Request, Response } from 'express';
import { ProductServices } from './product.service';


//Create  product
const createProduct = async (req: Request, res: Response) => {
  try {
    const { products: productData } = req.body;

    //call service to send data
    const result = await ProductServices.createProcutIntoDB(productData);

    //send response
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//GetAll Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProcutFromDB();

   
    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
};
