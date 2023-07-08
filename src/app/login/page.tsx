// const LoginPage = () => {
//   return (
//     <>
//       <h2>LoginPage</h2>
//     </>
//   );
// };

// export default LoginPage;

"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async (e: any) => {
    e.preventDefault();
    // console.log(user, "hello data");
    try {
      const response: any = await axios.post("/api/users/login", user);
      // const response = await axios.post(
      //   "https://intosoft.localto.net/camera/api/v1/auth/login",
      //   user
      // );
      console.log(response, "haha");
      if (response?.data?.success) {
        toast.success(response?.message);
        router.push("/profile");
      } else {
        toast.error(response?.data?.error);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen py-2 flex-col">
        <h3 className="py-3">Login</h3>
        <hr />
        <div className="flex flex-col p-10">
          <label htmlFor="email" className="px-3 p-2 text-center">
            Email:
          </label>
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
            className="text-center border-blue-700 p-2 border"
          />
          <label htmlFor="password" className="px-3 p-2 text-center">
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            className="text-center border-blue-700 p-2 border"
          />
        </div>
        <button
          onClick={onLogin}
          className="p-3 text-white bg-blue-800 rounded font-bold"
        >
          Login
        </button>
        <Link className="p-5" href="/signup">
          Visit Sign Up
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
