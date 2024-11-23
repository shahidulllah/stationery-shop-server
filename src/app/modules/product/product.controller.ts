import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req:Request, res:Response) =>{
   try{
    const {products: productData} = req.body;

    //call service to send data
    const result = await ProductServices.createProcutIntoDB(productData)

    //send response
    res.status(200).json({
        success: true,
        message: "Product created successfully",
        data: result,
    })
   }catch(err){
    console.log(err);
   }
}

export const ProductController = {
    createProduct,
}