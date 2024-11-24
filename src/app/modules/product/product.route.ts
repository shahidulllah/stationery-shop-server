import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

//call the controller func
router.post('/', ProductController.createProduct);

//get all products
router.get('/', ProductController.getAllProducts);

//get single product
router.get('/:productId', ProductController.getSingleProduct);

//update product
router.put('/:productId', ProductController.updateProduct);

//Delete product
router.delete('/:productId', ProductController.deleteProduct);

export const ProductRoutes = router;
