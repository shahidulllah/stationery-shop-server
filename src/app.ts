import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/orders/order.route';
import authRoutes from './app/auth/auth.route';
import dashboardRoutes from './app/dashboard/dashboard.route';
import CartRoutes from './app/modules/cart/cart.route'

const app: Application = express();

//parser
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true,
}));

//Application route
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/cart', CartRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my Stationary shop');
});

export default app;
