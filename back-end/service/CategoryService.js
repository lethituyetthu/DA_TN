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
 exports.create = async (name) =>{
    const model = new categoryModel({name});
    await model.save();
    return model;
 } 
 exports.update = async (id,name) =>{
    const model = await categoryModel.findByIdAndUpdate(id,
        {name});
    return model;
 }  
 exports.delete = async (id) => {
    await categoryModel.deleteOne( {_id:id} );
  };