import {Router} from 'express';
import {allProducts,detailProduct} from '../controller/products.controller.js';

const productsRoutes = Router()


productsRoutes.get('/allProducts',(req,res) =>{
    let products = allProducts()
    res.json(products)
})


productsRoutes.get('/detailProduct/:Link',(req,res)=> {
    const Link = req.params.Link;
    const products = detailProduct(Link)
  res.json({products})
})
   


export { productsRoutes }


