import React, { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar";
import { DataImage } from "../etc/img/DataImage";
import axios from "axios";
import { ListLeaderScore } from "../component/ListLeaderScore";
import { useSurvei } from "../store/AppContext";

export const LeaderboardScore = () => {
  const { armMuscle } = DataImage();
  const {userses} = useSurvei();
  const [myscores,setmyscore] = useState({})
  const [data, setdata] = useState([]);
  const getDataLatihan = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/user/leaderboard`)
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((res) => {});
  };
  useEffect(()=>{
    getDataLatihan()
  },[])
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
                {userses.username}
              </p>
              <p className="font-[poppins] font-medium text-[15px]">
                <span>🙈 </span>{myscores.point}
              </p>
            </div>
          </div>
          <p className=" font-[poppins] text-[20px] font-bold">#{myscores.posisi}</p>
        </div>

        <div className=" my-4 h-[165px] w-full rounded-md bg-black"></div>

        <div className="w-full text-[#45474B] mt-8 font-[poppins]  flex-none font-semibold border-l-[5px] pl-2  border-[#45474B]">
          <p>{`LEADERBOARD SCORE`}</p>
        </div>

        <ul className="my-4">

        <ListLeaderScore dataScore={data} setmyscore={setmyscore} />
        </ul>
      </main>
    </div>
  );
};
