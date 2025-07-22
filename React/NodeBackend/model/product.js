import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: String,
    image: String,
    price: Number,
    description: String
});

export default mongoose.model('Product', ProductSchema);