import React from "react";

const NewsletterBox = () => {
  return (
    <div className="flex flex-col justify-center items-center text-slate-400 gap-10 mt-10 mb-10">
      <p className="text-xl sm:text-2xl text-slate-700 font-bold">
        Subscripe now & get 20% off
      </p>
      <p className="w-3/4 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
        similique, consequatur amet fugiat recusandae maiores reprehenderit.
      </p>
      <form className="flex w-11/12 h-8 sm:h-12 justify-center">
        <input
          className="border-2 flex-1 sm:flex-none text-sm sm:text-base sm:w-[18rem] sm:h-12 outline-none px-2"
          type="email"
          placeholder="Enter you email"
          required
        />
        <button className="bg-black text-white px-4 sm:h-12 sm:w-44 text-xs">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
