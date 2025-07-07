


import { getProducts,createProduct } from '../controllers/product.controller.js';

import express from 'express'
const  productRouter = express.Router();


productRouter.post('/products',createProduct);
productRouter.get('/products', getProducts);


export default productRouter;



