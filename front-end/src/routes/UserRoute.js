import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home_shop from '../pages/user/home';

const UserRoutes = () => (
  <Routes>
    <Route path="/" element={<Home_shop />} />
  </Routes>
);

export default UserRoutes;
