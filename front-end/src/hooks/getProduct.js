import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; 

const useFetchProducts = () => {
  const [products, setPro] = useState([]);
  const navigate = useNavigate(); 
  
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

  return { products, addProduct, deletePro };
};

export default useFetchProducts;
