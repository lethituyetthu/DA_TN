// eslint-disable-next-line
import React, { useState } from "react";

import useFetchCate from "../../hooks/getCategory";
import useFetchProducts from "../../hooks/getProduct";

const ProductAdd = () => {
  const { cate } = useFetchCate();
  const { addProduct } = useFetchProducts();

  const [formData, setForm] = useState({
    title: "",
    author: "",
    img: "",
    price: "",
    quantity: "",
    categoryId: "",
    view: 0, 
    sold: 0, 
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* console.log(formData) */

    

    console.log(formData);
    addProduct(formData)

    /* try {
      const response = await fetch("http://localhost:3200/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Chỉ định kiểu dữ liệu là JSON
        },
        body: JSON.stringify(formData), // Chuyển đổi dữ liệu thành JSON
      });

      if (!response.ok) {
        const errorData = await response.text(); // Hoặc response.json() nếu máy chủ trả về JSON
        throw new Error(`Lỗi khi thêm sản phẩm: ${errorData}`);
      }

      const result = await response.json();
      console.log("Thêm sản phẩm thành công:", result);
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error.message);
    } */
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="container col-sm-8 mt-3 mb-3"
      >
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
          <label htmlFor="title" className="form-label col-sm-2">
            Tiêu Đề
          </label>
          <input
            type="text"
            className="form-control p-2"
            id="title"
            placeholder="Enter Tiêu Đề"
            name="title"
            value={formData.title}
            onChange={handleChange}
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
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        {/* === IMG === */}
        <div className="mb-3 d-flex">
          <label htmlFor="img" className="form-label fs-4 col-sm-2">
            IMG
          </label>
          <input
            type="text"
            className="form-control p-2"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </div>
        {/* === thông tin chi tiết  === */}
        <div className="mb-3 d-flex">
          <label htmlFor="description" className="form-label fs-4 col-sm-2">
          description
          </label>
          <input
            type="text"
            className="form-control p-2"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
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
            value={formData.price}
            onChange={handleChange}
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
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        {/* === THỂ LOẠI === */}
        <div className="mb-3 d-flex">
          <label htmlFor="category" className="form-label fs-4 col-sm-2">
            Thể Loại
          </label>
          <select
            className="form-select p-2"
            id="category"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
          >
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
          <button type="button" className="btn btn-danger p-2 w-25  m-3 ">
            Hủy
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductAdd;
