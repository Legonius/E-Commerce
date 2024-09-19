import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebars from "./components/Sidebars";
import { Route, Routes } from "react-router-dom";
import AddItems from "./pages/AddItems";
import ListItems from "./pages/ListItems";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="min-h-screen w-screen overflow-x-hidden px-2 md:px-8 lg:px-12 flex flex-col">
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex-1 flex flex-col min-h-[100%]">
          <Navbar setToken={setToken} />
          <div className="flex flex-1">
            <Sidebars />
            <Routes>
              <Route path="/" element={<AddItems token={token} />} />
              <Route path="/list-items" element={<ListItems token={token} />} />
              <Route path="/orders" element={<Orders token={token} />} />
            </Routes>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
