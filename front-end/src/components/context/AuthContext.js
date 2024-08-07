import React, { useContext, useState, createContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const [staffName, setStaffname] = useState(
    localStorage.getItem("staffName") || ""
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("staffName", staffName);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("staffName");
    }
  }, [token, staffName]);

  const logIn = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3200/staff/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Lỗi đăng nhập: " + response.statusText);
      }
      const data = await response.json();
      console.log(data.staff.name);
      console.log(data.token);
      setToken(data.token);
      setStaffname(data.staff.name);

      return data.token;
    } catch (error) {
      console.error("lỗi :", error.message);
    }
  };

  const logOut = () => {
    setToken(null);
    setStaffname("");
  };

  return (
    <AuthContext.Provider value={{ logIn, logOut, token, staffName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
