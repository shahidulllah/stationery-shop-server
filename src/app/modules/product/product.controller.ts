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

//get single products
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = (req.params.productId)
    const result = await ProductServices.getSingleProcutFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get update products
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = (req.params.productId)
    const update = req.body;
    const result = await ProductServices.updateProdutFromDB(productId, update);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//Delete products
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = (req.params.productId)
    const result = await ProductServices.deleteProdutFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product Deleted successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
