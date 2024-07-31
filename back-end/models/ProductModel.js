const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    id:{type:ObjectId},
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    author: { type: String, required: true },
    categoryId: { type: ObjectId, ref:"category" },
    quantity: { type: Number, required: true },
    sold: { type: Number, required: true },
    view: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


// Cập nhật updatedAt mỗi khi tài liệu được lưu
ProductSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});
module.exports = mongoose.model('product', ProductSchema);