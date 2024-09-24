import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Products = ({ item, token, setProducts }) => {
  const [loading, setLoading] = useState(false);

  const delProduct = async () => {
    setLoading(true);
    const images = [
      item.image[0]?.fileId,
      item.image[1]?.fileId,
      item.image[2]?.fileId,
      item.image[3]?.fileId,
    ];
    try {
      const deleted = await axios.delete(
        backendUrl + "/api/product/remove-product",
        { headers: { token }, data: { id: item._id, images } }
      );
      if (deleted.data.success) {
        setProducts((prev) =>
          prev.filter((prevItem) => prevItem._id !== item._id)
        );
        toast.success(deleted.data.message);
      } else {
        toast.error(deleted.data.message);
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="py-2 px-2 my-2 h-20 grid grid-cols-[minmax(100px,_1fr)_minmax(300px,_3fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)]  border-0 bg-none md:bg-blue-100  md:border-2 items-center">
      <div className="w-full h-full overflow-hidden">
        <img className="h-full object-contain" src={item.image[0]?.url} />
      </div>
      <span>{item.name}</span>
      <span>{item.category}</span>
      <span>{item.price}</span>
      <div className="text-center">
        <button
          onClick={() => delProduct()}
          title="Delete"
          disabled={loading}
          className="disabled:opacity-75 disabled:hover:cursor-progress px-4 py-3 transition-colors shadow-lg bg-red-100 aspect-square rounded-full border-2 hover:border-slate-50 hover:bg-red-500 hover:text-white hover:cursor-pointer "
        >
          {"X"}
        </button>
      </div>
    </div>
  );
};

export default Products;
