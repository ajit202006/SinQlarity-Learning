// Export all functions to import from router

// Add function
module.exports.add = (req,res) =>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    res.send(`${n1} + ${n2} = ${n1+n2}`);
};

// Subtract function
module.exports.subtract = (req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    res.send(`${n1} - ${n2} = ${n1-n2}`);
};

// MUltiply function
module.exports.multiply = (req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    res.send(`${n1} * ${n2} = ${n1*n2}`);
};

// Divide function
module.exports.divide = (req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.num2;
    res.send(`${n1} / ${n2} = ${n1/n2}`);
};