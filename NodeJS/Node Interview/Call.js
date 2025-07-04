function product(productName,price){
    this.productName = productName;
    this.price = price;
}

function student(productName,price,sname){
    product.call(this,productName,price);
    this.sname=sname;
}

let st=new student("Somthing",65555,"Someone");

console.log(st);