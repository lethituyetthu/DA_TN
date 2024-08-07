import React, { useState } from "react";
import useFetchCate from "../../hooks/getCategory";
import useFetchProducts from "../../hooks/getProduct";
import "../../assets/css/styles.css";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const { cate } = useFetchCate();
  const { addProduct } = useFetchProducts();
  const navigate = useNavigate();

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.title) newErrors.title = "Tiêu đề là bắt buộc";
    if (!formData.author) newErrors.author = "Tác giả là bắt buộc";
    if (!formData.img) newErrors.img = "Hình ảnh là bắt buộc";
    if (!formData.price) {
      newErrors.price = "Giá tiền là bắt buộc";
    } else if (isNaN(formData.price)) {
      newErrors.price = "Giá tiền phải là số";
    }
    if (!formData.quantity) {
      newErrors.quantity = "Số lượng là bắt buộc";
    } else if (isNaN(formData.quantity)) {
      newErrors.quantity = "Số lượng phải là số";
    }
    if (!formData.categoryId) newErrors.categoryId = "Thể loại là bắt buộc";
    if (!formData.description)
      newErrors.description = "Thông tin chi tiết là bắt buộc";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      addProduct(formData);
      navigate("/admin/products");
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
            borderBottom: "2px solid #000",
            textAlign: "left",
          }}
        >
          Add Product
        </div>
        <div className="d-flex ">
          <div className="mb-3 col-6">
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
            {errors.title && <div className="text-danger">{errors.title}</div>}

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
            {errors.author && (
              <div className="text-danger">{errors.author}</div>
            )}

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
            {errors.price && <div className="text-danger">{errors.price}</div>}

            <label htmlFor="quantity" className=" form-label fs-5 col-sm-3">
              Số Lượng
            </label>
            <input
              type="number"
              className="form-control p-2 "
              id="quantity"
              placeholder="Enter số lượng"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              style={{ backgroundColor: "#f0f0f0" }}
            />
            {errors.quantity && (
              <div className="text-danger">{errors.quantity}</div>
            )}
          </div>
          <div className="ms-5 ps-3 mb-3 d-flex col-6 ">
            {formData.img && (
              <img
                src={formData.img}
                alt="Preview"
                style={{ width: "200px", height: "auto", borderRadius: "8px" }}
              />
            )}
          </div>
        </div>

        <div className="mb-3 ">
          <label htmlFor="img" className="form-label fs-4 col-sm-2 fs-5 ">
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
          {errors.img && <div className="text-danger">{errors.img}</div>}
        </div>

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
          {errors.description && (
            <div className="text-danger">{errors.description}</div>
          )}
        </div>

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
            <option value="">Chọn thể loại</option>
            {cate.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <div className="text-danger">{errors.categoryId}</div>
          )}
        </div>

        <div className="d-flex">
          <button type="submit" className="btn btn-primary p-2 w-25 m-3 ms-0 ">
            Nhập Hàng
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

export default ProductAdd;
