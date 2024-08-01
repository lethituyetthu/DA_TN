var express = require('express');
var router = express.Router();
const categoryController = require('../controller/CategoryController');

// Routers for API
// Get products listing
// http://localhost:3000/categories
router.get('/', async function(req, res, next) {
    console.log('GET /categories endpoint hit');
    try {
        const result = await categoryController.getAll();
        if (result) {
            console.log('Category fetched successfully:', result);
            res.status(200).json( result );
        } else {
            console.log('No category found');
            res.status(404).json({ error: 'No categories found' });
        }
    } catch (error) {
        console.error('Error fetching categories:', error.message);
        res.status(500).json({ error: error.message });
    }
});
// GET /categories/:id - Lấy chi tiết sản phẩm theo ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const category = await categoryController.findById(id);
      if (category) {
        res.status(200).json({ data: category });
      } else {
        res.status(404).json({ error: `No category found with id: ${id}` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
// Post new category
// http://localhost:3000/categories
router.post('/', async function(req, res, next) {
  console.log('Post /category endpoint hit');
  try {
    let{name}=req.body;
      const category = await await categoryController.create(name);
          res.status(200).json( category );
      
  } catch (error) {
      console.error('Error fetching :', error.message);
      res.status(500).json({ error: error.message });
  }
});
// Update category
// http://localhost:3200/categories/:id
router.put('/:id', async function(req, res, next) {
  console.log('PUT /categories/:id endpoint hit');
  try {
    const { id } = req.params;
    let { name } = req.body;

    if (!id || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // If name is an array, join it into a single string
    if (Array.isArray(name)) {
      name = name.join(', ');
    }

    const category = await categoryController.update(id, name);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error('Error updating category:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Delete category
// http://localhost:3200/categories/:id
router.delete('/:id', async function(req, res, next) {
  console.log('DELETE /categories/:id endpoint hit');
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Missing required parameter: id' });
    }

    const category = await categoryController.delete(id);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error('Error deleting category:', error.message);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
