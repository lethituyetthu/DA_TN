import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import useFetchCate from "../../hooks/getCategory";

import CategoryList from "../../components/admin/categoryList";

const Categories = () => {
  const { cate,deleteCate,addCate,updateCate } = useFetchCate();

  /* ===== thêm danh mục ===== */
  const [newCate, setCate] = useState("")
  const handleChange = (e) =>{
    setCate(e.target.value)
  }
  const handleSubmit = async (event) =>{
    event.preventDefault();
    if(newCate.trim() === ""){
      alert ("tên danh mục không thể được để trống")
      return
    }

    await addCate({name : newCate})
    setCate("")
  }
  /* ========== */
  
  /* ===== cập nhật danh mục ===== */

  /* ========== */
  
  /* ===== tìm kiếm danh mục theo tên ===== */
  const [search, setSearch] = useState("");
  const timkiem = (event) => {
    setSearch(event.target.value);
  };
  const fillterCate = cate.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );
  /* ========== */
  return (
    <>
      <main>
        <div className="container-fluid px-4 mt-4">
          <p htmlFor="newCategory" className="form-label fs-5 text-dark fw-bold">
          Add Category
          </p>
          <form onSubmit={handleSubmit} className="mb-4 d-flex">
            <div className="mb-3 col-sm-5">
              <input
                type="text"
                className="form-control"
                id="newCate"
                value={newCate}
                onChange={handleChange}
                placeholder="Nhập tên thể loại mới"
                required
              />
            </div>
            <div className="mb-3 ms-2">
              <button type="submit" className="btn btn-primary me-3">
                Xác Nhận
              </button>
            </div>
          </form>

          {/* === input tìm kiếm sp === */}
          
          <div className="card mb-4 ">
            <div className="card-header d-flex align-items-center ">
              <i className="fas fa-table me-1" /> {"  "}
              Danh sách thể loại
              <input type="text" className="form-control w-25 ms-5" placeholder="Bạn muốn tìm thể loại sách nào ??" value={search} onChange={timkiem}/>
            </div>
            <div className="card-body">
                <CategoryList categories={search ? fillterCate : fillterCate} deleteCate={deleteCate} updateCate={updateCate} />
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Categories;
