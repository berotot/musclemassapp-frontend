import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
export const ListLatihanKelola = ({data,deleteDataLatihan}) => {
  
  
  return (
    <>
    {data.map((res) =>
      res.muscleGroup === "lengan" ? (
        <li className=" shadow-md h-max items-center font-['poppins'] flex flex-row justify-between my-4 p-2 ring-1  bg-center bg-cover ring-[#45474B] rounded-md ">
          <div>
            <h1 className=" text-[18px] font-extrabold first-letter:uppercase">
              {res.name}
            </h1>
            <div className="flex items-center">
              <p className=" font-semibold text-[13px] ">
                {res.reps} Reps
              </p>
              <div className="w-[2px] mx-2 h-[14px]  bg-black " />
              <p className=" font-semibold text-[13px] ">
                {res.time_training} Detik
              </p>
            </div>
          </div>
          <div className="h-full flex flex-col gap-2">
            <button
              onClick={() => deleteDataLatihan(res._id)}
              className="cursor-pointer h-full  px-2 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] "
            >
              <MdDelete className=" w-[23px] " />
            </button>
            <button className="cursor-pointer h-full  px-2 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] ">
              <MdEdit className=" w-[23px] " />
            </button>
          </div>
        </li>
      ) : (
        ""
      )
    )}
     </>
  );
};
