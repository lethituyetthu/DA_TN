const categoryModel = require('../models/CategoryModel');
exports.getAll = async ()=>{
    //select * form categorys
    const categories = await categoryModel.find({});
    return categories;
}
exports.findById = async (id) => {
    const category = await categoryModel.findById( id );
    return category;
  };