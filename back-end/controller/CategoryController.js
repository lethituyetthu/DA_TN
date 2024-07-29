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