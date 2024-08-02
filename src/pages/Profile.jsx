import React from "react";
import { Navbar } from "../component/Navbar";
import { MdEdit } from "react-icons/md";

export const Profile = () => {
  return (
    <div className="p-4 h-screen">
      <Navbar />
      <main className="p-4 h-screen">
        <div className=" flex flex-col  items-center w-full  gap-3">
          <div className="h-[120px] mb-8  w-[120px] animate-pulse rounded-full   bg-slate-300 " />
          <div className=" bg-white ring-1 ring-slate-300 py-4 rounded-md px-2 flex justify-between items-center w-full">
            <p className="text-[15px] font-semibold font-['poppins']">
              Username
            </p>
            <div className="flex items-center gap-2">
              <div className="h-[15px] w-[96px] bg-slate-300 animate-pulse rounded-md"></div>
              {/* <p className=" text-[15px] font-['poppins']">Anjayaani</p> */}
              <MdEdit />
            </div>
          </div>
          <div className=" bg-white ring-1 ring-slate-300  py-4 rounded-md px-2 flex justify-between items-center w-full">
            <p className="text-[15px] font-semibold font-['poppins']">Email</p>
            <div className="flex items-center gap-2">
              <div className="h-[15px] w-[70px] bg-slate-300 animate-pulse rounded-md"></div>
              {/* <p className=" text-[15px] font-['poppins']">Anjayaani</p> */}
              <MdEdit />
            </div>
          </div>
          <div className=" bg-white py-4 ring-1 ring-slate-300  rounded-md px-2 flex justify-between items-center w-full">
            <p className="text-[15px] font-semibold font-['poppins']">
              Password
            </p>
            <div className="flex items-center gap-2">
              <div className="h-[15px] w-[100px] bg-slate-300 animate-pulse rounded-md"></div>
              {/* <p className=" text-[15px] font-['poppins']">*******</p> */}
              <MdEdit />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
