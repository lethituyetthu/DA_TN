const staffModel = require('../models/StaffModel');

exports.getAll = async () => {
  try {
    // Lấy tất cả nhân viên từ cơ sở dữ liệu
    const staffList = await staffModel.find({});
    return staffList;
  } catch (error) {
    throw error;
  }
};
  // Thêm nhân viên mới
  exports.create = async (  name, email, role, password, phone) => {
    try {
        const newStaff = new staffModel(  name, email, role, password, phone); // Tạo đối tượng sản phẩm mới
        await newStaff.save(); // Lưu sản phẩm vào cơ sở dữ liệu
        return newStaff; // Trả về sản phẩm vừa tạo
      } catch (error) {
        throw new Error(`Error creating staff: ${error.message}`);
      }
    };

    exports.delete = async (id) => {
      try {
        const result = await staffModel.deleteOne({ _id: id });
        
        if (result.deletedCount === 0) {
          return null; // Không tìm thấy bản ghi để xóa
        }
        
        return { message: 'nv được xóa thành công' }; // Trả về thông báo thành công
      } catch (error) {
        throw new Error(`Error deleting staff: ${error.message}`);
      }
    };