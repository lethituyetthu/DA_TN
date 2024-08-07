var express = require("express");
var router = express.Router();
const staffController = require("../controller/StaffController");

// Các route API
// Lấy danh sách nhân viên
// http://localhost:3200/staff
router.get("/", async function (req, res, next) {
  console.log("GET /staff endpoint hit");
  try {
    const result = await staffController.getAll();

    if (result) {
      console.log("Danh sách nhân viên đã được lấy thành công:", result);
      res.status(200).json(result);
    } else {
      console.log("Không tìm thấy nhân viên");
      res.status(404).json({ error: "Không tìm thấy nhân viên" });
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách nhân viên:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// POST /staff - Thêm nhân viên mới
router.post("/", async function (req, res, next) {
  console.log("POST /staff endpoint hit");
  try {
    const { name, email, role, password, phone } = req.body;

    // Log dữ liệu nhận được
    console.log("Dữ liệu nhận được:", req.body);

    // Tạo đối tượng nhân viên từ dữ liệu nhận được
    const staffData = {
      name,
      email,
      role,
      password,
      phone,
    };

    // Gọi hàm tạo nhân viên trong controller
    const staff = await staffController.create(staffData);
    res.status(200).json(staff);
  } catch (error) {
    console.error("Lỗi khi tạo nhân viên:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Xóa nhân viên
// http://localhost:3200/staff/:id
router.delete("/:id", async function (req, res, next) {
  console.log("DELETE /staff/:id endpoint hit");
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Thiếu tham số yêu cầu: id" });
    }

    const result = await staffController.delete(id);

    if (!result) {
      return res.status(404).json({ error: "Nhân viên không tìm thấy" });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Lỗi khi xóa nhân viên:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// POST /staff/login - Đăng nhập nhân viên
router.post("/login", async function (req, res, next) {
  console.log("POST /staff/login endpoint hit");
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Thiếu email hoặc mật khẩu" });
    }

    const result = await staffController.login(email, password);

    res.status(200).json({
      staff: result.staff,
      token: result.token,
    });
  } catch (error) {
    // Phân tích lỗi và trả về thông báo chi tiết hơn
    let errorMessage = "Đăng nhập không thành công.";
    if (error.message.includes("Nhân viên không tồn tại")) {
      errorMessage = "Nhân viên với email này không tồn tại.";
    } else if (error.message.includes("Mật khẩu không chính xác")) {
      errorMessage = "Mật khẩu không chính xác.";
    } else {
      errorMessage = `Lỗi không xác định: ${error.message}`;
    }

    res.status(401).json({ error: errorMessage });
    console.error("Lỗi đăng nhập:", error.message);
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
