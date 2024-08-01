const productModel = require('../models/ProductModel')
exports.getAll = async ()=>{
    //select * form products
    const products = await productModel.find({});
    return products;
}
exports.findById = async (id) => {
    const product = await productModel.findById( id );
    return product;
  };

  // Thêm sản phẩm mới
  exports.create = async ( title, price, description, img, author, categoryId, quantity, sold, view) => {
    try {
        const newProduct = new productModel( title, price, description, img, author, categoryId, quantity, sold, view); // Tạo đối tượng sản phẩm mới
        await newProduct.save(); // Lưu sản phẩm vào cơ sở dữ liệu
        return newProduct; // Trả về sản phẩm vừa tạo
    } catch (error) {
        throw new Error(`Error creating product: ${error.message}`);
    }
};
exports.delete = async (id) => {
    await productModel.deleteOne( {_id:id} );
  };

  exports.update = async (id, productData) => {
    try {
      // Sử dụng tùy chọn { new: true } để trả về tài liệu đã được cập nhật
      const model = await productModel.findByIdAndUpdate(id, productData, { new: true });
      return model;
    } catch (error) {
      throw new Error(`Error updating product: ${error.message}`);
    }
  };