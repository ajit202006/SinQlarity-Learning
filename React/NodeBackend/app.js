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
    console.log(result);
    res.send(result);
});

mongoose.connect(process.env.connectionString);

app.listen(3002, () => {
    console.log("Backend connected");
});
