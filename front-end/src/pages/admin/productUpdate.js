// eslint-disable-next-line
import React, { useEffect, useState } from "react";

import useFetchCate from "../../hooks/getCategory";
import useFetchProducts from "../../hooks/getProduct";
import { useNavigate, useParams } from "react-router-dom";

const ProductUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cate } = useFetchCate();
  const { updatePro, fetchProductById } = useFetchProducts();

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

  // load sp chi tiết
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const product = await fetchProductById(id);
        // add thông tin so vào form
        setForm(product);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      }
    };
    loadProduct();
  }, [id, fetchProductById]);
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
    try {
      await updatePro(id, formData);
      navigate("/admin/products");
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="container col-sm-8 mt-3 mb-3"
      >
        <div
          className=" text-dark  pb-2 mb-4 mt-2 fs-4 fw-bold"
          style={{
            backgroundColor: "#fff",
            borderBottom: "2px solid #000", // Đường dưới chữ
            textAlign: "left", // Căn lề trái
          }}
        >
          Product Edit
        </div>
        <div className="d-flex ">
          <div className="mb-3 col-6">
            {/* === TIÊU ĐỀ === */}
            <label
              htmlFor="title"
              className="form-label col-sm-3 fs-5 fw-normal"
            >
              Tiêu Đề
            </label>
            <input
              type="text"
              className="form-control p-2 input-gray mb-2"
              id="title"
              placeholder="Enter Tiêu Đề"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={{ backgroundColor: "#f0f0f0" }}
            />
            {/* === TÁC GIẢ === */}
            <label
              htmlFor="author"
              className="form-label col-sm-3 fs-5 fw-normal"
            >
              Tác Giả
            </label>
            <input
              type="text"
              className="form-control p-2 mb-2"
              id="author"
              placeholder="Enter Tác Giả"
              name="author"
              value={formData.author}
              onChange={handleChange}
              style={{ backgroundColor: "#f0f0f0" }}
            />
            {/* === GIÁ TIỀN === */}
            <label htmlFor="price" className="form-label fs-5 col-sm-3">
              Giá Tiền
            </label>
            <input
              type="text"
              className="form-control p-2 mb-2"
              id="price"
              placeholder="Enter giá tiền"
              name="price"
              value={formData.price}
              onChange={handleChange}
              style={{ backgroundColor: "#f0f0f0" }}
            />
            {/* === SỐ LƯỢNG === */}
            <label htmlFor="quantity" className=" form-label fs-5 col-sm-3">
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
              style={{ backgroundColor: "#f0f0f0" }}
            />
          </div>
          <div className="ms-5 ps-3 mb-3 d-flex col-6 ">
              <img src={formData.img} alt="Example" style={{ width: '200px', height: 'auto' }}/>
          </div>
        </div>
        

        <div className="mb-3 ">
          {/* === IMG === */}
          <label htmlFor="img" className="form-label fs-4 col-sm-2 fs-5">
            Img
          </label>
          <br></br>
          <input
            type="text"
            className="form-control p-2"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            placeholder="Enter hình ảnh"
            style={{ backgroundColor: "#f0f0f0" }}
          />
        </div>
        {/* === thông tin chi tiết  === */}
        <div className="mb-3 ">
          <label htmlFor="description" className="form-label fs-5">
            Thông Tin Chi Tiết
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control p-2"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Thông Tin Chi Tiết"
            style={{ height: "150px", backgroundColor: "#f0f0f0" }}
          ></textarea>
        </div>

        {/* === THỂ LOẠI === */}
        <div className="mb-3 ">
          <label htmlFor="category" className="form-label fs-4 col-sm-2">
            Thể Loại
          </label>
          <select
            className="form-select p-2"
            id="category"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            style={{ backgroundColor: "#f0f0f0" }}
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
          <button type="submit" className="btn btn-primary p-2 w-25 m-3 ms-0 ">
            Cập Nhật
          </button>
          <button
            type="button"
            className="btn btn-danger p-2 w-25  m-3 "
            onClick={() => navigate("/admin/products")}
          >
            Hủy
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductUpdate;
