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
