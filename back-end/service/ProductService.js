const productModel = require('../models/ProductModel');
exports.getAll = async ()=>{
    //select * form products
    const products = await productModel.find();
    return products;
}
exports.findById = async (id) => {
    const product = await productModel.findById( id );
    return product;
  };