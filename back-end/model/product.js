const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const productModel = new Schema({
    id: { type: ObjectId }, 
    title: { type: String, required: true }, // Tên sản phẩm, bắt buộc phải có
    img: { type: String }, // Đường dẫn đến hình ảnh của sản phẩm
    author: { type: String }, // Tác giả của sản phẩm (kiểu dữ liệu có thể cần điều chỉnh, ví dụ là String)
    quantity: { type: Number, default: 0 }, // Số lượng sản phẩm có sẵn, mặc định là 0
    price: { type: Number, required: true }, // Giá của sản phẩm, bắt buộc phải có
    category: { type: ObjectId, ref: "category" },
});
module.exports = mongoose.models.product || mongoose.model('product', productModel);