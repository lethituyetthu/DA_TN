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

exports.add = async (productData) =>{
  try {
    const newProduct = await productService.add(productData);
    return newProduct;
  } catch (error) {
    console.error("controller", error.message);
    throw error;
  }
}