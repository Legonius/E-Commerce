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
  console.log(backendUrl);
  return (
    <div className="min-h-screen w-screen overflow-x-hidden px-2 md:px-8 lg:px-12">
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="w-full min-h-full flex">
            <Sidebars />
            <Routes>
              <Route path="/add-items" element={<AddItems />} />
              <Route path="/list-items" element={<ListItems />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
