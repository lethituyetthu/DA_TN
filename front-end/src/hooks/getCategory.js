import { useEffect, useState } from "react";

const useFetchCate = () => {
  const [cate, setCate] = useState([]);

  const fetchCate = async () => {
    try {
      const response = await fetch("http://localhost:3200/categories");
      if (!response.ok) {
        throw new Error("ko lấy được dữ liệu");
      }
      const data = await response.json();
      setCate(data);
    } catch (error) {
      console.log("lỗi khi lấy dữ liệu từ api:", error);
    }
  };

  useEffect(() => {
    fetchCate();
  }, []);


  const getCateNameById = (id) => {
    const category = cate.find((c) => c.id === id);
    return category ? category.name : null;
  };


  /* add cate */

  const addCate = async (cate)=>{
    try {
      const response = await fetch("http://localhost:3200/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cate),
    });
    
    if (!response.ok){
      alert("lỗi")
      throw new Error ("Không Thể Thêm Thể Loại")
    }else{
      alert("Thêm cate thành công")
      fetchCate()
  
    }

    const newCate = await response.json();

    setCate((e) => [...e, newCate]);
    } catch (error) {

      console.error("lỗi khi thêm sản phẩm: ", error)
      
    }

  }

    // DELETE
    const deleteCate = async (id) => {
      try {
        const response = await fetch(
          `http://localhost:3200/categories/delete/${id}`,
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
          fetchCate()
        }
      } catch (error) {
        if (error.message.includes("ko thể xóa danh mục chứa sách")) {
          alert("Không thể xóa danh mục có chứa sách");
        } else {
          console.error("Lỗi khi xóa danh mục:", error.message);
          alert(`Lỗi khi xóa danh mục: ${error.message}`);
        }
      }
    };
  return { cate, getCateNameById, addCate, deleteCate };
};

export default useFetchCate;
