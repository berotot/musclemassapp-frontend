import React from "react";

export const FormModalAuthLogin = () => {
  return (
    <div className=" z-auto  fixed bottom-2 right-0 left-0   w-screen h-max ">
      <div className="rounded-md bg-[#F5F7F8]   ring-1 ring-black py-6 px-4  mx-2 flex gap-4  items-center flex-col">
        <div className="font-['poppins'] mb-4  text-[23px] font-bold">
          <h1>Login</h1>
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
  );
};

export const FormModalAuthSignup = () => {
  return (
    <div className=" z-auto  fixed bottom-2 right-0 left-0   w-screen h-max ">
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
  );
};
