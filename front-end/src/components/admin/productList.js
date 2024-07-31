import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const ProductList = ({ products, getCateNameById, deletePro }) => {

  
  const handleDelete = async (id) => {
    try {
      await deletePro(id);
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error.message);
    }
  };

  return (
    <tbody>
      {products.map((product, index) => (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.author}</td>
          <td>{product.price}</td>
          <td>{product.createdAt}</td>
          <td>{product.updatedAt}</td>
          <td>{getCateNameById(product.categoryId)}</td>
          <td>{product.quantity}</td>
          <td >
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Thao Tác
            </button>
            <ul className="dropdown-menu p-0 ro" style={{backgroundColor: "#d9d9d9"}}>
              <li>
                <button onClick={() => handleDelete(product.id)} className="dropdown-item bg-danger rounded-top-1 text-light" to="/">
                  Xóa SP
                </button>
              </li>
              <li>
              <Link className="dropdown-item rounded-bottom-1 bg-warning " to="/">
                  Sửa SP
                </Link>
              </li>
              
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ProductList;
