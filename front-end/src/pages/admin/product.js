import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/product-admin.css"
// eslint-disable-next-line
import React, { useEffect, useState } from "react";

import ProductList from "../../components/admin/productList";
import useFetchProducts from "../../hooks/getProduct";
import useFetchCate from "../../hooks/getCategory";
import { Link } from "react-router-dom";

const Products = () => {

  const {products, deletePro} = useFetchProducts();
  const {getCateNameById} = useFetchCate();
  const [search, setSearch] = useState("");

 
  const timkiem = (event) =>{
    setSearch(event.target.value);
  };
  /* console.log(products) */


 

  const fillterPro = Array.isArray(products) ? products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  ):[];



  return (
    <>
      <main>
        <div className="container-fluid px-4 mt-4">
          <Link to="/admin/products/add  " className="btn btn-primary mb-4">Nhập Hàng Mới</Link>
            
          {/* === input tìm kiếm sp === */}
          <input
              type="text"
              className="form-control w-25 mb-4"
              placeholder="Bạn Muốn Tìm Sách Gì ??"
              value={search}
              onChange={timkiem}
            />


          <div className="card mb-4 ">
            <div className="card-header">
              <i className="fas fa-table me-1" />
              Danh sách sản phẩm
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={{width:"100px"}}>Mã Sách</th>
                    <th style={{width:"200px"}}>Tiêu Đề</th>
                    <th style={{width:"100px"}}>Tác Giả</th>
                    <th style={{width:"100px"}}>Giá Tiền</th>
                    <th>thời gian</th>  
                    
                    <th style={{width:"100px"}}>Thể Loại</th>
                    <th style={{width:"100px"}}>Số Lượng</th>
                    <th>Thao Tác</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Tổng Tiền: </th>
                    <th></th>
                    <th></th>
                  </tr>
                </tfoot>
                {/* componenent show sản phẩm - admin */}
                <ProductList products={search ? fillterPro : products} getCateNameById = {getCateNameById} deletePro = {deletePro}/>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
