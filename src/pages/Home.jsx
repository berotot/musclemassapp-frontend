import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "../component/Navbar";
import { FormModalAuthSignup } from "../component/FormModalAuth";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 h-screen">
      <Navbar />
      <main className="">
        <div className="flex gap-4  flex-col items-center h-[440px] justify-center">
          <h2 className=" text-center font-bold text-[40px] text-[#45474B] font-[poppins] ">
            Let's Build Muscle Mass
          </h2>
          <button
            onClick={() => navigate("/dashboard")}
            className=" shadow-md cursor-pointer  w-max px-4 pt-2 pb-2 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
          >
            start
          </button>
        </div>
      </main>
    </div>
  );
};
