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
