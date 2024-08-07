import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/admin/header';
import Navbar from '../components/admin/navbar';
import Footer from '../components/admin/footer';
import Home from '../pages/admin/home';
import Products from '../pages/admin/product';
import Categories from '../pages/admin/category';
import ProductAdd from '../pages/admin/productAdd';
import ProductUpdate from '../pages/admin/productUpdate';
import Staff from '../pages/admin/staff';

const AdminRoutes = () => (
  <>
    <Header />
    <div id="layoutSidenav">
      <Navbar />
      <div id="layoutSidenav_content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route path="/products/update/:id" element={<ProductUpdate />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </div>
    </div>
    <Footer />
  </>
);

export default AdminRoutes;
