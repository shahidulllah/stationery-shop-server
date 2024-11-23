import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

//call the controller func
router.post('/', ProductController.createProduct);

//get all products
router.get('/', ProductController.getAllProducts);

export const ProductRoutes = router;
