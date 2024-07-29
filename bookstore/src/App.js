import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import "./assets/css/styles.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Footer from "./components/footer/footer";
import Products from "./pages/product";

function App() {
  return (
    <Router>
      <Header />
      <div id="layoutSidenav">
        <Navbar />
        <div id="layoutSidenav_content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />\
            <Route path="/product" element={<Products/>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
