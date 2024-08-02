const productService = require("../service/ProductService");
exports.getAll = async () => {
  try {
    const products = await productService.getAll();
    return products.map((p) => ({
      id: p._id,
      title: p.title,
      price: p.price ,
      description: p.description,
      img: p.img ,
      author: p.author,
      quantity: p.quantity ,
      sold: p.sold ,
      view: p.view,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
      categoryId: p.categoryId,
    }));
  } catch (error) {
    throw error;
  }
  ;
};

exports.findById = async (id) => {
  const product = await productService.findById(id);
  return product;
};

// Thêm sản phẩm mới
exports.create = async (productData) => {
  try {
    productData.createdAt = new Date();
    productData.updatedAt = new Date();

    const newProduct = await productService.create(productData);
    return newProduct;
  } catch (error) {
    throw new Error(`Error creating product: ${error.message}`);
  }
};
exports.delete = async (id) => {
  await productService.delete(id);
};

// Cập nhật sản phẩm
exports.update = async (id, productData) => {
  try {
    productData.updatedAt = new Date();
    const product = await productService.update(id, productData);
    return product;
  } catch (error) {
    throw new Error(`Error updating product: ${error.message}`);
  }
};