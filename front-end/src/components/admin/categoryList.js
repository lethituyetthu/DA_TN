import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryList = ({ categories }) => {
    return (

        <tbody>
                  {categories.map((cate, index) => (
                    <tr key={index}>
                      <td>{cate.id}</td>
                      <td>{cate.name}</td>
        
                      <td><button type="button" className="btn btn-danger">Delete</button> <button type="button" className="btn btn-warning">edit</button> <button type="button" className="btn btn-info">+</button></td>
                    </tr>
                  ))}
                </tbody>

    )
}

export default CategoryList ;