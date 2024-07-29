import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ProductList = ({ products, getCateNameById }) => {
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
                <Link className="dropdown-item bg-danger rounded-top-1 text-light" to="/">
                  Xóa SP
                </Link>
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
