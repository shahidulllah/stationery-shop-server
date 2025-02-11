import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

//Create Product
const createProcutIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

//Get All Products
const getProductFromDB = async (filter = {}) => {
  const result = await ProductModel.find(filter);
  return result;
};

//get single products
const getSingleProcutFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};
//update products
const updateProdutFromDB = async (id: string, update: IProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, update, {new: true});
  return result;
};

//delete products
const deleteProdutFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProcutIntoDB,
  getProductFromDB,
  getSingleProcutFromDB,
  updateProdutFromDB,
  deleteProdutFromDB,
};
