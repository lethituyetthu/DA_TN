
const staffService = require('../service/StaffService ');
const Staff = require('../models/StaffModel')
const jwt = require('jsonwebtoken');


exports.getAll = async () => {
  try {
    // Lấy tất cả nhân viên từ dịch vụ
    const staffList = await staffService.getAll();

    // Chuyển đổi dữ liệu nhân viên thành định dạng yêu cầu
     return staffList.map((s) => ({
      id: s._id,
      name: s.name,
      email: s.email,
      role: s.role,
      phone: s.phone,
      password:s.password,
      createdAt: s.createdAt,
      updatedAt: s.updatedAt,
    }));
  } catch (error) {
    throw error;
  }
  ;
};

exports.create = async (staffData) => {
  try {
    
    const newStaff = await staffService.create(staffData);
    return newStaff;
  } catch (error) {
    throw new Error(`Error creating staff: ${error.message}`);
  }
};
exports.delete = async (id) => {
  try {
    const result = await staffService.delete(id);
    
    if (!result) {
      return null; // Không tìm thấy bản ghi để xóa
    }
    
    return result;
  } catch (error) {
    throw new Error(`Error deleting staff: ${error.message}`);
  }
};

exports.login = async (email, password) => {
  try {
    const staff = await Staff.findOne({ email });
    if (!staff) {
      throw new Error('Nhân viên không tồn tại');
    }

    // So sánh mật khẩu nhập vào với mật khẩu lưu trữ
    if (password !== staff.password) {
      throw new Error('Mật khẩu không chính xác');
    }

    const token = jwt.sign({ id: staff.id, email: staff.email }, 'your_jwt_secret', { expiresIn: '1h' });
    return { staff, token };
  } catch (error) {
    throw new Error(`Lỗi đăng nhập: ${error.message}`);
  }
};