import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StaffList = ({ staffs }) => {
    const formatDateTime = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(date).toLocaleDateString('vi-VN', options);
      };
  return (
    <>
      {staffs && staffs.map((staff, index) => (
        <div className="col-md-4" key={index}>
          <div className="card">
            <div className={ `card-header ${staff.role === 'quản lý' ? 'bg-warning' : 'bg-success'}`}>{staff.role}</div>
            <div className="card-body">
              <p><b>Họ Và Tên:</b> {staff.name}</p>
              <p><b>SĐT:</b> {staff.phone}</p>
              <p><b>Mail:</b> {staff.email}</p>
              <div>
               <b> Ngày vào làm:</b> {formatDateTime(staff.createdAt)}
              </div>
              {/* <div><b>Ngày cập nhật thông tin:</b> {formatDateTime(staff.updatedAt)}</div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StaffList;
