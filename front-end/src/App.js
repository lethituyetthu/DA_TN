import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoute";
import UserRoutes from "./routes/UserRoute";
import { AuthProvider } from "./components/context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

import Login from "./pages/admin/login";

const AdminLoginRoute = () => (
  <Routes>
    <Route path="/" element={<Login />} />
  </Routes>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/admin/*"
            element={
              // kiểm tra trang web đã đăng nhập hay chưa
              <PrivateRoute>
                <AdminRoutes />
              </PrivateRoute>
            }
          />
          <Route path="/admin" element={<AdminLoginRoute />} />
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
