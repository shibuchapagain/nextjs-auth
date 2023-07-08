"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [data, setData]: any = useState("");
  const router = useRouter();
  const logout = () => {
    try {
      axios.get("/api/users/logout");
      toast.success("Logout successfully");
      router.push("/login");
    } catch (err: any) {
      console.log(err.message);
      toast.error(err.message);
    }
  };
  const getUserDetails = async () => {
    try {
      const response = await axios.get("/api/users/me");
      setData(response?.data?.data);
      const id = response?.data?.data?._id;
      router.push(`/profile/${id}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   getUserDetails();
  // }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h2>Profile</h2>
        <hr />
        <p>Profile Page</p>
        <hr />
        <h3>{data && data?.username}</h3>
        <hr />
        <button
          onClick={getUserDetails}
          className="bg-green-700 mt-4 hover:bg-green-900 p-2 font-bold rounded text-white"
        >
          Get Profile
        </button>
        <hr />
        <button
          onClick={logout}
          className="bg-blue-700 mt-4 hover:bg-blue-900 p-2 font-bold rounded text-white"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
