import axios from "axios";
import React, { useState } from "react";
import Cookie from "js-cookie";
import { VerifyUser } from "../routes/route";
export const FormModalAuthLogin = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]" />
      <div className=" z-[999]  fixed bottom-2 right-0 left-0   w-screen h-max ">
        <form className="rounded-md bg-[#F5F7F8]   ring-1 ring-black py-6 px-4  mx-2 flex gap-4  items-center flex-col">
          <div className="font-['poppins'] mb-4  text-[23px] font-bold">
            <h1>Login</h1>
          </div>

          <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Email
            </label>
            <input
              className=" ring-1 ring-black focus:shadow-md rounded-md h-8 px-2"
              type="text"
            />
          </div>

          <div className="text-[17px] flex w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Password
            </label>
            <input
              className=" focus:shadow-md ring-1 ring-black rounded-md h-8 px-2"
              type="text"
            />
          </div>
          <button
            type="submit"
            className=" shadow-md cursor-pointer  w-full px-4 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
          >
            Login
          </button>
          <div className="font-['poppins'] text-[15px]">
            <p>
              Belum punya akun ? <span className="  font-semibold">signup</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export const FormModalAuthSignup = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]" />
      <div className=" z-[999]  fixed bottom-2 right-0 left-0   w-screen h-max ">
        <div className="rounded-md bg-[#F5F7F8]  ring-1 ring-black py-6 px-4  mx-2 flex gap-4  items-center flex-col">
          <div className="font-['poppins'] mb-4  text-[23px] font-bold">
            <h1>Signup</h1>
          </div>
          <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Username
            </label>
            <input className="rounded-md h-8 px-2" type="text" />
          </div>

          <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Email
            </label>
            <input className="rounded-md h-8 px-2" type="text" />
          </div>

          <div className="text-[17px] flex w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Password
            </label>
            <input className=" rounded-md h-8 px-2" type="text" />
          </div>
          <div className="font-['poppins'] text-[15px]">
            <p>
              Belum punya akun ? <span className="  font-semibold">signup</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const FormModalAuthSign = () => {
  const [data, setData] = useState({ username: null });

  const postFormSignupv2 = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v2/auth/signupv2`, data)
      .then((res) => {
        alert(res.data.message);
        Cookie.set("accessUser", JSON.stringify(res.data.data[0]), {
          expires: 6000000,
        });
        VerifyUser()
       
      }).catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]" />
      <div className=" z-[999]  fixed bottom-2 right-0 left-0   w-screen h-max ">
        <form
          onSubmit={postFormSignupv2}
          className="rounded-md bg-[#F5F7F8]  ring-1 ring-black py-6 px-4  mx-2 flex gap-4  items-center flex-col"
        >
          <div className="font-['poppins'] mb-4  text-[23px] font-bold">
            <h1>Signup</h1>
          </div>
          <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Username
            </label>
            <input
              onChange={(e) => setData({ ...data, username: e.target.value })}
              className=" ring-1 ring-black focus:shadow-md rounded-md h-8 px-2"
              type="text"
            />
          </div>

          <div className="hidden text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Email
            </label>
            <input className="rounded-md h-8 px-2" type="text" />
          </div>

          <div className="text-[17px]  hidden w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Password
            </label>
            <input className=" rounded-md h-8 px-2" type="text" />
          </div>
          <button
            type="submit"
            className=" shadow-md cursor-pointer  w-full px-4 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
          >
            Submit
          </button>
          <div className="font-['poppins'] text-[15px] hidden">
            <p>
              Belum punya akun ? <span className="  font-semibold">signup</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
