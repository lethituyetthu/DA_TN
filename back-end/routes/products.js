var express = require("express");
var router = express.Router();
const path = require('path');

var productModel = require("../model/product");

var multer = require("multer");

// Cấu hình multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images"); // thư mục lưu trữ file upload
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // đặt tên file upload
  },
});

var upload = multer({ storage: storage });

router.get("/", async function (req, res, next) {
  const datas = await productModel.find();

  data = datas.map((p) => {
    return {
      id: p._id,
      title: p.title,
      img: p.img,
      author: p.author,
      quantity: p.quantity,
      price: p.price,
      category: p.category,
    };
  });

  res.json(data);
});

router.post("/add", upload.single("img"), async function (req, res, next) {
  try {
    let { _id, title, author, quantity, price, category } = req.body;

    if (!title || !author || !quantity || !price || !category) {
      return res.status(400).json({ status: 400, message: 'Vui lòng điền đầy đủ thông tin sản phẩm' });
    }

    let img = req.file ? req.file.filename : "";

    console.log('Uploaded file:', req.file); // In thông tin file upload
    console.log('File path:', path.join(__dirname, '../public/images', img)); // In đường dẫn file lưu trữ

    const data = await productModel.create({
      _id,
      title,
      img,
      author,
      quantity,
      price,
      category,
    });

    const saveProduct = await data.save();

    res.json({ status: 200, message: "thêm thành công", data:saveProduct });
  } catch (error) {
    console.error('Error:', error); // In chi tiết lỗi ra console
    res.status(500).json({ status: 500, message: 'Thêm Thất Bại !!!!', error: error.message });
  }
});

module.exports = router;
