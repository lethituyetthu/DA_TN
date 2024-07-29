import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import useFetchCate from "../../hooks/getCategory";

import CategoryList from "../../components/admin/categoryList";

const Categories = () => {
  const { cate } = useFetchCate();
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
          <p htmlFor="newCategory" className="form-label fs-5 text-danger">
          Thể Loại Mới
          </p>
          <form /* onSubmit={handleSubmitNewCategory} */ className="mb-4 d-flex">
            <div className="mb-3 col-sm-5">
              <input
                type="text"
                className="form-control"
                id="newCategory"
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
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Mã </th>
                    <th>Tên</th>
                    <th>Thao Tác</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>

                <CategoryList categories={search ? fillterCate : fillterCate} />
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Categories;
