import { useEffect, useState } from "react";

const useFetchCate = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
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

    fetchCate();
  }, []);
  const getCateNameById = (id) => {
    const category = cate.find((c) => c.id === id);
    return category ? category.name : null;
  };


  /* add cate */

  const addCate = async (cate)=>{
    try {
      const response = await fetch("http://localhost:3000/category/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cate),
    });
    
    if (!response.ok){
      throw new Error ("Không Thể Thêm Thể Loại")
    }

    const newCate = await response.json();

    setCate((e) => [...e, newCate]);
    } catch (error) {

      console.error("lỗi khi thêm sản phẩm: ", error)
      
    }

  }
  return { cate, getCateNameById, addCate };
};

export default useFetchCate;
