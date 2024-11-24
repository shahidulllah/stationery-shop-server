import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/orders/order.route';


const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//Application route
app.use('/api/products', ProductRoutes);

app.use('/api/orders', OrderRoutes);

app.get('/', (req:Request, res:Response)=>{
    res.send("Welcome to my Stationary shop")
})

export default app;
