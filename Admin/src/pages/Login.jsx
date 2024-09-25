import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const submit = await axios.post(`${backendUrl}/api/user/admin-login`, {
        email,
        password,
      });
      if (submit.data.success) {
        setToken(submit.data.token);
        toast.success("Login Successfully");
        setEmail("");
        setPassword("");
        localStorage.setItem("token", submit.data.token);
      } else {
        toast.error("Wrong Credential");
      }
    } catch (error) {
      console.log("err:", error.message);
      toast.error("Wrong Credential");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="shadow-lg p-8 w-[90%] sm:max-w-96 ">
        <span className="text-xl font-bold ">Admin Panel</span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mt-2 text-gray-700"
        >
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-1 border-2 rounded mb-2"
            id="email"
            type="email"
            placeholder="admin@email.com"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 py-1 border-2 rounded mb-2"
            id="password"
            type="password"
            placeholder="password"
            required
          />
          <button className="bg-black text-white py-3 rounded-lg" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;