const productService = require("../service/ProductService");
exports.getAll = async () => {
  try {
    const products = await productService.getAll();
    return products.map((p) => ({
      id: p._id,
      title: p.title,
      img: p.img,
      author: p.author,
      quantity: p.quantity,
      price: p.price,
      categoryId: p.categoryId,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt
    }));
  } catch (error) {
    throw error;
  }
  à;
};

exports.findById = async (id) => {
  const product = await productService.findById(id);
  return product;
};
