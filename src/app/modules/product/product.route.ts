import express from 'express'
import { ProductController } from './product.controller'

const router = express.Router()

//call the controller func
router.post('/', ProductController.createProduct);

export const ProductRoutes = router;
