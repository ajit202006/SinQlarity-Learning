const express=require('express');

const app = express();

const userRouter=require('./routers/user');
const productRouter=require('./routers/product');

app.use('/user',userRouter);
app.use('/product',productRouter);

app.listen(3000);