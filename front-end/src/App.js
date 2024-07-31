import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/css/styles.css";
import Header from "./components/admin/header";
import Navbar from "./components/admin/navbar";
import Footer from "./components/admin/footer";
import Home from "./pages/admin/home";
import Products from "./pages/admin/product";
import Categories from "./pages/admin/category";
import ProductAdd from "./pages/admin/productAdd";
import ProductUpdate from "./pages/admin/productUpdate";
import Home_shop from "./pages/user/home";


// Component cho các route sử dụng chung Header và Footer
const AdminRoutes = () => (
  <>
    <Header />
    <div id="layoutSidenav">
      <Navbar />
      <div id="layoutSidenav_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/update/:id" element={<ProductUpdate />} />
        </Routes>
      </div>
    </div>
    <Footer />
  </>
);

// Component cho route /shop không sử dụng chung Header và Footer
const UserRoute = () => (
  <Routes>
    <Route path="/" element={<Home_shop />} />
  </Routes>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<UserRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
