const staffService = require('../service/StaffService ');

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
      createdAt: s.createdAt,
      updatedAt: s.updatedAt,
    }));
  } catch (error) {
    throw error;
  }
  ;
};
// Thêm nhân viên mới
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
