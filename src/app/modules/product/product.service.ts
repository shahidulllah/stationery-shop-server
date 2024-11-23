import { ProductModel } from "../product.model";
import { IProduct } from "./product.interface";

const createProcutIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product)
  return result;
}
const getProcutFromDB = async () => {
  const result = await ProductModel.find()
  return result;
}

export const ProductServices = {
    createProcutIntoDB,
    getProcutFromDB,
}