const CategoryModel = require('../models/CategoryModel');
const categoryService = require('../service/CategoryService');
exports.getAll= async() =>{
    const categories = await categoryService.getAll();
    return categories.map((c) => ({
        id: c._id,
        name: c.name
    }));
}
exports.findById = async (id) => {
    const category = await categoryService.findById(id);
    return category
  };
exports.create = async (name) => {
    try{
        const category = await categoryService.create(name);
        return category;
    }catch (error){
        console.log(error)
    }
  };
  exports.update = async (id,name) =>{
    try{
        const category = await categoryService.update(id,name);
        return category;

    }catch(error){
        console.log(error);
    }
 }  
 exports.delete = async (id) => {
    await categoryService.delete(id);
  };