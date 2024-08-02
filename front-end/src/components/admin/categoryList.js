import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryList = ({ categories, deleteCate }) => {
  const handleDelete = async (id) => {
    try {
      await deleteCate(id);
      console.log(id);
    } catch (error) {
      console.error("lỗi khi xóa danh mục: ", error.message);
    }
  };

  return (
    <tbody>
      {categories.map((cate, index) => (
        <tr key={index}>
          <td>{cate.id}</td>
          <td>{cate.name}</td>
          <td>
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Thao Tác
            </button>
            <ul
              className="dropdown-menu p-0 ro"
              style={{ backgroundColor: "#d9d9d9" }}
            >
              <li>
                <button
                  onClick={() => handleDelete(cate.id)}
                  className="dropdown-item bg-danger rounded-top-1 text-light"
                >
                  Xóa SP
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item rounded-bottom-1 bg-warning "
                >
                  Sửa SP
                </button>
              </li>
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CategoryList;
