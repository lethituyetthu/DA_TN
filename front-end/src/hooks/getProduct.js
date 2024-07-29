import { useState, useEffect } from "react";
const useFetchProducts  =() => {
    const [ products, setPro] = useState([])  
    
    useEffect(()=>{
        const fetchPro = async () =>{
          try {
            const response = await fetch("http://localhost:3200/products")
            if (!response.ok){
              throw new Error ("ko lấy được dữ liệu")
            }
            const data = await response.json();
            if (Array.isArray(data)) {
              setPro(data);
            } else {
              setPro([]);
            }
            setPro(data)

          }catch (error) {
            console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
          }
    
    
        };
    
        fetchPro()
    },[]);
    /* console.log("b",products) */

    const addProduct = async (product) => {
      try {
        const response = await fetch("http://localhost:3000/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        if (!response.ok) {
          throw new Error("Không thể thêm sản phẩm");
        }

        const newProduct = await response.json();

        setPro((e) => [...e, newProduct]);
      } catch (error) {
          console.error("Lỗi khi thêm sản phẩm:", error);
      }
    };
    
    
    return {products, addProduct} ;
}

export default useFetchProducts;