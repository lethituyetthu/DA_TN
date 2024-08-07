import { useState, useEffect, useCallback } from "react";

const useFetchStaff = () =>{
    const [staff, setStaff] = useState([])
    
    const fetchStaff = useCallback( async () =>{
        try {
            const response = await fetch ("http://localhost:3200/staff")
            if(!response.ok){
                throw new Error("không lấy được dữ liệu staff")
            }
            const data = await response.json()
            /* console.log(data) */
            setStaff(data)
        } catch (error) {
            console.error("lỗi khi lấy dữ liệu staff",error)
            
        }
    },[] )

    useEffect(()=>{
        fetchStaff();
    },[fetchStaff])

   
    return{ staff, fetchStaff}
}

export default useFetchStaff;