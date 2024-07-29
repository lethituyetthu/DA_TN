// eslint-disable-next-line 
import React, { useState } from "react";

import useFetchCate from "../../hooks/getCategory";

const ProductAdd = () => {
  const { cate } = useFetchCate();

  /* const [formData, setForm] = useState({
    title: "",
    author: "",
    img: null,
    price: "",
    quantity: "",
    category: "",
  });
 */


  return (
    <>
      <form action="" className="container col-sm-8 mt-3 mb-3">
        
        <div
          className=" text-danger  pb-2 mb-4 mt-2 fs-4 fw-bold"
          style={{
            backgroundColor: "#fff",
            borderBottom: "2px solid #000", // Đường dưới chữ
            textAlign: "left", // Căn lề trái
          }}
        >
          
          Nhập Hàng Mới
        </div>
        {/* === TIÊU ĐỀ === */}
        <div className="mb-3 d-flex">
          <label htmlFor="tilte" className="form-label col-sm-2">
            Tiêu Đề
          </label>
          <input
            type="text"
            className="form-control p-2"
            id="tilte"
            placeholder="Enter Tiêu Đề"
            name="tilte"
          />
        </div>
        {/* === TÁC GIẢ === */}
        <div className="mb-3 d-flex">
          <label htmlFor="author" className="form-label fs-4 col-sm-2">
            Tác Giả
          </label>
          <input
            type="text"
            className="form-control p-2"
            id="author"
            placeholder="Enter Tác Giả"
            name="author"
          />
        </div>
        {/* === IMG === */}
        <div className="mb-3 d-flex">
          <label htmlFor="img" className="form-label fs-4 col-sm-2">
            IMG
          </label>
          <input type="file" className="form-control p-2" id="img" name="img" />
        </div>
        {/* === GIÁ TIỀN === */}
        <div className="mb-3 d-flex">
          <label htmlFor="price" className="form-label fs-4 col-sm-2">
            Giá Tiền
          </label>
          <input
            type="text"
            className="form-control p-2"
            id="price"
            placeholder="Enter giá tiền"
            name="price"
          />
        </div>
        <div className="mb-3 d-flex">
          <label htmlFor="quantity" className="form-label fs-4 col-sm-2">
            Số Lượng
          </label>
          <input
            type="number"
            className="form-control p-2"
            id="quantity"
            placeholder="Enter số lượng"
            name="quantity"
          />
        </div>
        {/* === THỂ LOẠI === */}
        <div className="mb-3 d-flex">
          <label htmlFor="category" className="form-label fs-4 col-sm-2">
            Thể Loại
          </label>
          <select className="form-select p-2" id="category" name="category">
            {cate.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        {/* === BUTTON === */}
        <div className="d-flex">
          <button type="submit" className="btn btn-primary p-2 w-25 m-3 ">
            Nhập Hàng
          </button>
          <button type="submit" className="btn btn-danger p-2 w-25  m-3 ">
            Hủy
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductAdd;
