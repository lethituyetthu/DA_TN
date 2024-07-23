var express = require('express');
var router = express.Router();

var categoryModel = require ('../model/category')

router.get('/', async function (req, res, next) {
    const datas = await categoryModel.find();
    data = datas.map((p) => {
      return {
        id: p._id,
        name: p.name,      
      }
    })
    res.json(data);     
});

module.exports = router;
