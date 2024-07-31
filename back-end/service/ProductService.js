const productModel = require("../models/ProductModel");
exports.getAll = async () => {
  //select * form products
  const products = await productModel.find({});
  return products;
};
exports.findById = async (id) => {
  const product = await productModel.findById(id);
  return product;
};

exports.add = async (productData) => {
  try {
    console.log("service product:", productData);
    // Chuyển đổi quantity thành số nếu cần
    if (productData.quantity) {
      productData.quantity = Number(productData.quantity);
    }
    // Tạo một sản phẩm mới trong cơ sở dữ liệu
    const newProduct = await productModel.create(productData);
    return newProduct;
  } catch (error) {
    console.error("Error in add product:", error);
    throw error;
  }
};
