const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, required: true, unique:true,trim:true, minlength:3, maxlenghth:50, default:"no name" },
    


});
module.exports = mongoose.model('category', CategorySchema);