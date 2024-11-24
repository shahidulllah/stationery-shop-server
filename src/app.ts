import express, { Application } from 'express';
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

export default app;
