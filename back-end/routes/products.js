var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductController');

// Routers for API
// Get products listing
// http://localhost:3000/products
// GET /products - Lấy danh sách sản phẩm
router.get('/', async function(req, res, next) {
  console.log('GET /products endpoint hit');
  try {
      // Gọi controller để lấy tất cả sản phẩm
      const result = await productController.getAll();
      
      // Kiểm tra xem result có phải là một mảng hay không
      if (Array.isArray(result) && result.length > 0) {
          // Định dạng dữ liệu theo yêu cầu
          const formattedData = result.map(e => ({
              id: e._id,
              title: e.title,
              /* author */
              img: e.img,
              price: e.price,
              quantity: e.quantity,
              description: e.description,
              createdAt: e.createdAt,
              updatedAt: e.updatedAt,
              category: e.category
          }));
          
          console.log('Products fetched successfully:', formattedData);
          res.status(200).json( formattedData);
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


module.exports = router;
