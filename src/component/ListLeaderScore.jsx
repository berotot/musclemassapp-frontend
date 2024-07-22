import React from "react";

export const ListLeaderScore = () => {
  return (
    <li className=" rounded-md p-2 px-4 ring-1  ring-[#45474B] my-8 w-full h-max items-center flex text-[#45474B] justify-between">
      <div className="flex items-center gap-2">
        <div className="ring-1 ring-black rounded-full w-[50px] h-[50px] overflow-hidden ">
          <img src="" alt="" />
        </div>

        <div>
          <p className=" font-[poppins] font-semibold text-[20px]">Soerahmat</p>
          <p className="font-[poppins] font-medium text-[15px]">
            <span>🙈 </span>23999
          </p>
        </div>
      </div>
      <p className=" font-[poppins] text-[20px] font-bold">#12</p>
    </li>
  );
};
