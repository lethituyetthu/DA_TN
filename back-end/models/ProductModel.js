const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    id:{type:ObjectId},
    title: { type: String, required: true },
    img: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    
    categoryId: { type: ObjectId, ref:"category" },
    description: { type: String, required: true },
    
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
    
});
module.exports = mongoose.model('product', ProductSchema);