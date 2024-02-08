import express from 'express';
import { productsRoutes } from './src/routes/Products.Routes.js';

const app = express()
const port = 3040;



app.use(express.json())

app.use( productsRoutes)



app.listen(port,()=>{
  console.log( `Servidor on ${port}`)
})


