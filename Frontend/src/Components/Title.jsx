import React from "react";

const Title = ({ text1, text2, font }) => {
  return (
    <div className="flex items-center gap-2">
      <h1
        className={`text-lg text-slate-500 ${
          font === "small" ? "sm:text-base" : "sm:text-xl"
        }  ${font === "small" ? "md:text-lg" : "md:text-2xl"}`}
      >
        {text1}
        <span className="font-bold text-black ml-1">{text2}</span>
      </h1>
      <p className="h-[1.5px] border-none bg-black w-8 sm:w-10 md:w-12"></p>
    </div>
  );
};

export default Title;
