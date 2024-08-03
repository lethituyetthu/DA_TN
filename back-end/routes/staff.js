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

module.exports = router;
