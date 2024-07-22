import React from "react";
import { Navbar } from "../component/Navbar";
import { DataImage } from "../etc/img/DataImage";

export const LeaderboardScore = () => {
  const { armMuscle } = DataImage();
  return (
    <div className="p-4 h-screen">
      
      <Navbar />

      <main className="">
        <div className=" rounded-md p-2 px-4 ring-1  ring-[#45474B] my-8 w-full h-max items-center flex text-[#45474B] justify-between">
          <div className="flex items-center gap-2">
            <div className="ring-1 ring-black rounded-full w-[50px] h-[50px] overflow-hidden ">
              <img src="" alt="" />
            </div>

            <div>
              <p className=" font-[poppins] font-semibold text-[20px]">
                Soerahmat
              </p>
              <p className="font-[poppins] font-medium text-[15px]">
                <span>🙈 </span>23999{" "}
              </p>
            </div>
          </div>
          <p className=" font-[poppins] text-[20px] font-bold">#12</p>
        </div>
        <div className=" my-4 h-[165px] w-full rounded-md bg-black"></div>

        <div className="w-full text-[#45474B] mt-8 font-[poppins]  flex-none font-semibold border-l-[5px] pl-2  border-[#45474B]">
          <p>{`LEADERBOARD SCORE`}</p>
        </div>

        <ul className="my-4">
          <li className="h-[84px] p-4 ring-1 group bg-center bg-cover ring-[#45474B] rounded-md relative">
            <div
              style={{ backgroundImage: `url(${armMuscle})` }}
              className="absolute inset-0 bg-center bg-cover brightness-75 z-0"
            />
            <p className="relative z-10 font-[poppins] group-hover:brightness-100  tracking-[1px] font-bold text-[19px]   text-[#F5F7F8]">
              OTOT LENGAN
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
};
