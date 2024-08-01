var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductController');
const productModel = require("../models/ProductModel")
// Routers for API
// Get products listing
// http://localhost:3000/products
router.get('/', async function(req, res, next) {
    console.log('GET /products endpoint hit');
    try {
        const result = await productController.getAll();

       
        if (result) {
            console.log('Products fetched successfully:', result);
            res.status(200).json( result );
        } else {
            console.log('No products found');
            res.status(404).json({ error: 'No products found' });
        }
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: error.message });
    }
});
// GET /products/:id - Lấy chi tiết sản phẩm theo ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const product = await productController.findById(id);
      if (product) {
        res.status(200).json( product );
      } else {
        res.status(404).json({ error: `No product found with id: ${id}` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Post new product
// http://localhost:3200/products
router.post('/', async function(req, res, next) {
  console.log('Post /products endpoint hit');
  try {
    const { title, price, description, img, author, categoryId, quantity, sold, view } = req.body;
  // Log the received data
  console.log('Received data:', req.body);

    // Tạo đối tượng sản phẩm từ dữ liệu nhận được
    const productData = {
      title,
      price: Number(price),
      description,
      img,
      author,
      categoryId,
      quantity: Number(quantity),
      sold: Number(sold),
      view: Number(view)
    };
    const product = await await productController.create( productData);
    res.status(200).json(product);

  } catch (error) {
    console.error('Error creating product:', error.message);
    res.status(500).json({ error: error.message });
  }
});
// xóa sp
router.delete("/delete/:id", async(req,res)=>{
  const {id} = req.params;
  try {

    const result = await productModel.findByIdAndDelete(id);

    if (result){
      res.status(200).json({ message: `sp ${id} xóa thành công` })
    }else {
      res.status(404).json({ error: `không tìm thấy sp: ${id}` });
    }
    
  } catch (error) {
    console.error("lỗi khi xóa sp: ", error.message);
    res.status(500).json({ error: error.message });
  }
})

// Cập nhật sản phẩm
// http://localhost:3200/products/:id
router.put('/update/:id', async (req, res, next) => {
  console.log('PUT /products/:id endpoint hit');
  try {
    const { id } = req.params;
    const { title, price, description, img, author, categoryId, quantity, sold, view } = req.body;

    // Log dữ liệu nhận được
    console.log('Received data:', req.body);

    // Tạo đối tượng sản phẩm từ dữ liệu nhận được
    const productData = {
      title,
      price: Number(price),
      description,
      img,
      author,
      categoryId,
      quantity: Number(quantity),
      sold: Number(sold),
      view: Number(view)
    };

    // Gọi phương thức update từ productController với id và đối tượng productData
    const product = await productController.update(id, productData);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).json({ error: error.message });
  }
})



module.exports = router;
