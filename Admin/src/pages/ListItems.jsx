import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import Products from "../components/Products";

const ListItems = ({ token }) => {
  const [products, setProducts] = useState([]);
  const items = async () => {
    try {
      const getItems = await axios.get(
        backendUrl + "/api/product/list-product"
      );
      if (getItems.data.success) {
        setProducts(getItems.data.message);
      } else {
        toast.error(getItems.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    items();
  }, []);
  return (
    <div className="w-full   pl-6 py-5">
      <p className="font-extrabold text-lg sm:text-xl mb-3">
        All Products List
      </p>
      <div className="w-full  min-w-[20rem] overflow-x-scroll">
        <div className=" py-2 grid grid-cols-[minmax(100px,_1fr)_minmax(300px,_3fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)]  font-semibold border-0 bg-none md:bg-slate-100  md:border-2">
          <span className="px-2">Image</span>
          <span className="px-2">Name</span>
          <span className="px-2">Category</span>
          <span className="px-2">Price</span>
          <span className="px-2 text-center">Delete</span>
        </div>
        {products.map((item) => {
          return <Products key={item._id} item={item} token={token} />;
        })}
      </div>
    </div>
  );
};

export default ListItems;
