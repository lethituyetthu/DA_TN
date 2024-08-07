import React from "react";
import { useEffect } from "react";
import useFetchStaff from "../../hooks/getStaff";
import StaffList from "../../components/admin/staffList";
import { useAuth } from "../../components/context/AuthContext";

const Staff = () => {
  const { staff } = useFetchStaff();
  /*  console.log(staff) */

  const { token } = useAuth;
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("Token in local storage:", storedToken);
    console.log("Token from context:", token);
  }, [token]);
  return (
    <>
      <div className="container mt-5">
        <div className="row g-3">
          <StaffList staffs={staff} />
        </div>
      </div>
    </>
  );
};

export default Staff;
