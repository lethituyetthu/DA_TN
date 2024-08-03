var express = require('express');
var router = express.Router();
const staffController = require('../controller/StaffController');

// Routers for API
// Get staff listing
// http://localhost:3200/staff
router.get('/', async function(req, res, next) {
    console.log('GET /staff endpoint hit');
    try {
        const result = await staffController.getAll();

        if (result) {
            console.log('Staff fetched successfully:', result);
            res.status(200).json(result);
        } else {
            console.log('No staff found');
            res.status(404).json({ error: 'No staff found' });
        }
    } catch (error) {
        console.error('Error fetching staff:', error.message);
        res.status(500).json({ error: error.message });
    }
});
// POST /staff - Thêm nhân viên mới
router.post('/', async function(req, res, next) {
    console.log('Post /staff endpoint hit');
    try {
      const { name, email, role, password, phone } = req.body;
  
      // Log the received data
      console.log('Received data:', req.body);
  
      // Tạo đối tượng nhân viên từ dữ liệu nhận được
      const staffData = {
        name,
        email,
        role,
        password,
        phone
      };
  
      // Gọi hàm tạo nhân viên trong controller
      const staff = await await staffController.create(staffData);
      res.status(200).json(staff);
  
    } catch (error) {
      console.error('Error creating staff:', error.message);
      res.status(500).json({ error: error.message }); 
    }
  });
// Xóa nhân viên
// http://localhost:3200/staff/:id
router.delete('/:id', async function(req, res, next) {
    console.log('DELETE /staff/:id endpoint hit');
    try {
      const { id } = req.params;
  
      if (!id) {
        return res.status(400).json({ error: 'Missing required parameter: id' });
      }
  
      const result = await staffController.delete(id);
  
      if (!result) {
        return res.status(404).json({ error: 'Staff not found' });
      }
  
      res.status(200).json(result);
    } catch (error) {
      console.error('Error deleting staff:', error.message);
      res.status(500).json({ error: error.message });
    }
  });
  
  

module.exports = router;
