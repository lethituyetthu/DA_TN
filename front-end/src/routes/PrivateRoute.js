import { Navigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";

const PrivateRoute = ({children}) => {
    const {token} = useAuth()
    const storedToken = localStorage.getItem('token');
  console.log("Token in local storage:", storedToken);

    if(!token && !storedToken){
      return  <Navigate to="/admin"/>
    }
    return children ;
}

export default PrivateRoute;