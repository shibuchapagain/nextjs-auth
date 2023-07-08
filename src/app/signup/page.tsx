"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  console.log("one");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSignUp = async () => {
    // e.preventDefault();
    console.log(user, "onee");
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("User create successfully");
      router.push("/login");
      console.log(response?.data, "response");
    } catch (err: any) {
      toast.error(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen py-2 flex-col">
        <h3 className="py-3">{loading ? "Processing" : "Sign Up"}</h3>
        <hr />
        <div className="flex flex-col p-10">
          <label htmlFor="username" className="px-3 p-2 text-center">
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
            className="text-center border-blue-700 p-2 border"
          />

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
          style={
            buttonDisabled
              ? { opacity: "0.1" }
              : { opacity: 1, cursor: "pointer" }
          }
          onClick={onSignUp}
          // disabled={true}
          className="p-3 text-white bg-blue-800 rounded font-bold"
        >
          Sign Up
        </button>
        <Link className="p-5" href="/login">
          Visit Login
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
