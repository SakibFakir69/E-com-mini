import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'



import productRoute from './app/routes/product.route.js';


const app = express();


// convert to json

app.use(express.json());

// cors
app.use(cors({
    origin:['http://localhost:5173']
}))

// api
app.use('/api',productRoute)








app.get('/', async(req,res)=>{
    res.send('ok');

})


export default app;








