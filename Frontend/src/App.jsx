import React from "react";
import { Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
};

export default App;
