import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import PlaceOrder from "./Pages/PlaceOrder";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import FourOFour from "./Pages/FourOFour";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div className="min-h-screen relative overflow-x-hidden px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
