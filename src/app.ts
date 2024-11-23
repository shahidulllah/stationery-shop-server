import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';


const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//Application route
app.use('/api/products', ProductRoutes)


export default app;
