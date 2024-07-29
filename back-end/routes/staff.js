var express = require('express');
var router = express.Router();

const staffModel = require('../model/staff')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  const datas = await staffModel.find();
  data = datas.map((p) => {
    return {
      id: p._id,
      name: p.name, 
      password : p.password ,    
      role : p.role     
    }
  })
  res.json(data);     
});
module.exports = router;
