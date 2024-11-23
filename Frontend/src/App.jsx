import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./Pages/Verify";
import Collection from "./Pages/Collection";

const App = () => {
  const location = useLocation();
  // const LazyCollection = React.lazy(() => import("./Pages/Collection"));
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div className="flex flex-col justify-between min-h-screen relative overflow-x-hidden px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
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
        <Route path="/verify" element={<Verify />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
      <ToastContainer />

      <Footer />
    </div>
  );
};

export default App;
