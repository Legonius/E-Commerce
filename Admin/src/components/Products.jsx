import React from "react";

const Products = ({ item, token }) => {
  return (
    <div className="py-2 px-2 my-2 h-20 grid grid-cols-[minmax(100px,_1fr)_minmax(300px,_3fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)]  border-0 bg-none md:bg-blue-100  md:border-2 items-center">
      <div className="w-full h-full overflow-hidden">
        <img className="h-full object-contain" src={item.image[0].url} />
      </div>
      <span>{item.name}</span>
      <span>{item.category}</span>
      <span>{item.price}</span>
      <div className="text-center">
        <span
          title="Delete"
          className="px-4 py-3 transition-colors shadow-lg bg-red-100 aspect-square rounded-full border-2 hover:border-slate-50 hover:bg-red-600 hover:text-white "
        >
          {"X"}
        </span>
      </div>
    </div>
  );
};

export default Products;
