import React, { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar";
import { DataImage } from "../etc/img/DataImage";
import axios from "axios";
import { ListLeaderScore } from "../component/ListLeaderScore";
import { VerifyUser } from "../routes/route";
import { FormModalAuthSign } from "../component/FormModalAuth";

export const LeaderboardScore = () => {
  const { armMuscle } = DataImage();
  const [myscores, setmyscore] = useState({ username: null, point: null, posisi: null });
  const [data, setdata] = useState([]);
  const { isSuccess, userses, isLoading, isError } = VerifyUser();

  useEffect(() => {
    const getDataLatihan = async () => {

      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/user/leaderboard`);
        setdata(res.data.data);
      } catch (error) {
        alert("Error fetching data");
      }
    };

    getDataLatihan();
  }, []);

  return (
    <div className="p-4 h-screen">
      <Navbar />
      {isError && <FormModalAuthSign />}

      <main className="">
        <div className="rounded-md p-2 px-4 ring-1 ring-[#45474B] my-8 w-full h-max items-center flex text-[#45474B] justify-between">
          <div className="flex items-center gap-2">
            <div className="ring-1 ring-black rounded-full w-[50px] h-[50px] overflow-hidden">
              {/* <img src={myscores.profilPath} alt={myscores.username} /> */}
            </div>

            <div>
              <p className="font-[poppins] font-semibold text-[20px]">
                {myscores.username ? myscores.username : ""}
              </p>
              <p className="font-[poppins] font-medium text-[15px]">
                <span>🙈 </span>{myscores.point ? myscores.point : null}
              </p>
            </div>
          </div>
          <p className="font-[poppins] text-[20px] font-bold">#
            {myscores.posisi ? myscores.posisi : ""}
          </p>
        </div>

        <div className="my-4 h-[165px] w-full rounded-md bg-black"></div>

        <div className="w-full text-[#45474B] mt-8 font-[poppins] flex-none font-semibold border-l-[5px] pl-2 border-[#45474B]">
          <p>{`LEADERBOARD SCORE`}</p>
        </div>

        <ul className="my-4">
          <ListLeaderScore dataScore={data} setmyscore={setmyscore} />
        </ul>
      </main>
    </div>
  );
};
