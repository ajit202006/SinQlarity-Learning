import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Product from './model/product.js';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is working")
});

app.post('/product', async (req, res) => {
    const result = await Product.create(req.body);
    res.send(result);
});

app.get('/product',async (req,res)=>{
    try{
        console.log("Product fetching");
        const products=await Product.find({});
        res.send({status:"Success",data:products});
    }catch (error){
        console.log(error.message);
        res.send({status:"Fail",message: error.message});
    }
});

mongoose.connect(process.env.connectionString);

app.listen(3002, () => {
    console.log("Backend connected");
});
