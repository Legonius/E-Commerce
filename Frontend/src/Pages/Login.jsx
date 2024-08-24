import React, { useState } from "react";

const Login = () => {
  const [header, setHeader] = useState("Sign Up");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-10">
      <div className="inline-flex justify-center items-center gap-1">
        <p className=" dancing-script  text-2xl sm:text-3xl md:text-4xl text-slate-600">
          {header}
        </p>
        <hr className="w-10 h-1 bg-slate-500" />
      </div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="inline-flex flex-col  gap-3 w-[90%] sm:w-80 md:min-w-96"
      >
        {header === "Login" ? (
          ""
        ) : (
          <input
            className={` px-3 py-2 h-10 border-2 outline-gray-900`}
            type="text"
            placeholder="Name"
            required
          />
        )}

        <input
          className="px-3 py-2 h-10 border-2 outline-gray-900 "
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="px-3 py-2 h-10 border-2 outline-gray-900"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
        />
        <div className="inline-flex justify-between  text-slate-600">
          <p className="hover:text-blue-500 cursor-pointer">
            Forgot your password?
          </p>
          <p
            className="hover:text-blue-500 cursor-pointer"
            onClick={() =>
              header === "Login" ? setHeader("Sign Up") : setHeader("Login")
            }
          >
            {header === "Sign Up" ? "Login Here" : "Create account"}
          </p>
        </div>
        <button className="m-auto py-3 px-5 bg-black text-white w-1/3 mt-5">
          {header === "Sign Up" ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
