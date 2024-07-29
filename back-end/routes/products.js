var express = require('express');
var router = express.Router();
const productController = require('../controller/ProductController');

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
        res.status(200).json({ data: product });
      } else {
        res.status(404).json({ error: `No product found with id: ${id}` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;
