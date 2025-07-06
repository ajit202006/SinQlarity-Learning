const express=require('express');
const path= require('path');
const app = express();
//      path in url          func to join static path to js.png
app.use('/images',     express.static(path.join(__dirname,'Js.png')));
app.listen(3000);