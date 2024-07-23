const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const staffModel = new Schema({
  id: { type: ObjectId }, // khóa chính
  name: { type: String },
  password: {type : String},
  role: {
    type: String,
    required: true,
    enum: ["quản lý", "nhân viên"], // Giá trị của role phải nằm trong danh sách này xác định là quản lý hay nhân viên
  }, 
});

module.exports = mongoose.model('Staff', staffModel);/* 
module.exports =
  mongoose.models.staff || mongoose.model("staff", staffModel); */
// category -----> categories
