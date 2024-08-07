var express = require("express");
var router = express.Router();
const categoryController = require("../controller/CategoryController");
const categoryModel = require("../models/CategoryModel");
const productModel = require("../models/ProductModel");

// Routers for API
// Get products listing
// http://localhost:3000/categories
router.get("/", async function (req, res, next) {
  console.log("GET /categories endpoint hit");
  try {
    const result = await categoryController.getAll();
    if (result) {
      console.log(" ok :", result);
      res.status(200).json(result);
    } else {
      console.log("No category found");
      res.status(404).json({ error: "No categories found" });
    }
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    res.status(500).json({ error: error.message });
  }
});
// GET /categories/:id - Lấy chi tiết sản phẩm theo ID
router.get("/:id", async (req, res) => {
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
router.post("/", async function (req, res, next) {
  console.log("Post /category endpoint hit");
  try {
    let { name } = req.body;
    // Kiểm tra trùng tên danh mục
    const existingCategory = await categoryModel.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ error: "danh mục đã tồn tại" });
    }

    const category = await categoryController.create(name);
    res.status(200).json(category);
  } catch (error) {
    console.error("Error fetching :", error.message);
    // Đảm bảo phản hồi lỗi 500 cho các lỗi khác
    res.status(500).json({ error: "Lỗi server: " + error.message });
  }
});
// Update category
// http://localhost:3200/categories/:id
router.put("/:id", async function (req, res, next) {
  console.log("PUT /categories/:id endpoint hit");
  try {
    const { id } = req.params;
    let { name } = req.body;

    if (!id || !name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // If name is an array, join it into a single string
    if (Array.isArray(name)) {
      name = name.join(", ");
    }

    const category = await categoryController.update(id, name);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Delete category
// http://localhost:3200/categories/:id
// xóa sp
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pro = await productModel.find({ categoryId: id });

    if (pro.length > 0) {
      throw new Error("ko thể xóa danh mục chứa sách");
    }
    const result = await categoryModel.findByIdAndDelete(id);

    if (result) {
      res.status(200).json({ message: `sp ${id} xóa thành công` });
    } else {
      res.status(404).json({ error: `không tìm thấy sp: ${id}` });
    }
  } catch (error) {
    console.error("lỗi khi xóa sp: ", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
