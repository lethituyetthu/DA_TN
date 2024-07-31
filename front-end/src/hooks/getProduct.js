import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; 

const useFetchProducts = () => {
  const [products, setPro] = useState([]);
  const navigate = useNavigate(); 
  
  // SHOW
  const fetchPro = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3200/products");
      if (!response.ok) {
        throw new Error("ko lấy được dữ liệu");
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setPro(data);
      } else {
        setPro([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
    }
  }, []);

  useEffect(() => {
    fetchPro();
  }, [fetchPro]);

  // LẤY CHI TIẾT SP
  const fetchProductById = useCallback( async (id) => {
    try {
      const response = await fetch(`http://localhost:3200/products/${id}`);
      if (!response.ok) {
        throw new Error("Không thể tải sản phẩm");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
      throw error;
    }
  },[]);

  // THÊM SP
  const addProduct = async (product) => {
    try {
      const response = await fetch("http://localhost:3200/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Lỗi khi thêm sản phẩm: ${errorData}`);
      }else {
        alert("đã thêm sản phẩm thành công")
      }

      const result = await response.json();
      console.log("Thêm sản phẩm thành công:", result);
      fetchPro(); // Tải lại sản phẩm sau khi thêm
      navigate("/admin/products"); 
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error.message);
    }
  };
  
  // UPDATE
  const updatePro = async (id, updateProduct) =>{
    try{
      const response = await fetch (`http://localhost:3200/products/update/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      });

      if(!response.ok){
        const errorData = await response.text();
        throw new Error(`Lỗi khi sửa sản phẩm: ${errorData}`);
      } else {
        alert("Sản phẩm đã được cập nhật thành công");
      }
      
      const result = await response.json()
      console.log("sản phẩm đã được cập nhật thành công:", result)
      fetchPro()
    }catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error.message);
    }
  }

  // DELETE
  const deletePro = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3200/products/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Lỗi khi xóa sản phẩm: ${errorData}`);
      } else {
        alert(`Sản phẩm xóa thành công`);
        fetchPro(); // Tải lại sản phẩm sau khi xóa
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error.message);
    }
  };

  return { products, addProduct, deletePro, updatePro, fetchProductById };
};

export default useFetchProducts;
