const productService = require('../service/ProductService');
exports.getAll= async() =>{
    const products = await productService.getAll();
    return products;
}
exports.findById = async (id) => {
    const product = await productService.findById(id);
    return product;
  };