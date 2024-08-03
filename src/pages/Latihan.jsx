import React, { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar";
import { DataImage } from "../etc/img/DataImage";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RestLatihan } from "../component/RestLatihan";
import { useSurvei } from "../store/AppContext";
import { IoMdExit } from "react-icons/io";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { SelesaiLatihan } from "../component/SelesaiLatihan";

export const Latihan = () => {
  const { prev, next } = DataImage();
  const { weight, dataWorkout } = useSurvei();
  const { type } = useParams();
  const [restLatihan, setRestLatihan] = useState(false);
  const [selesaiLatihan, setselesaiLatihan] = useState(false);
  const [indexLatihan, SetindexLatihan] = useState(0);

  const NextLatihan = () => {
    if (dataWorkout.length - 1 !== indexLatihan) {
      setRestLatihan(!restLatihan);

      SetindexLatihan(indexLatihan + 1);
    }
  };
  const PrevLatihan = () => {
    if (indexLatihan !== 0) {
      SetindexLatihan(indexLatihan - 1);
    }
  };

  const postDataLatihan = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/user/latihan/activity`,
        {
          muscleGroup: type,
          point_activity: dataWorkout.length + 10,
          totals_excercise: dataWorkout.length,
          weight_body_current: weight,
        },
        {
          headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
        }
      )

      .then((res) => {})
      .catch((res) => {});
  };
const navigate = useNavigate()
  useEffect(()=>{
if (dataWorkout.length === 0) {
  alert("pilih type latihan dahulu")
  navigate('/dashboard')
}
  },[])
  return (
    <div className="p-4 h-screen">
      <Navbar />

      <main className="">
        {dataWorkout.map((res, index) => (
          <div
            key={res._id}
            className={`${
              index !== indexLatihan ? "hidden" : ""
            } relative w-full flex flex-col justify-between bg-cover p-4 font-['poppins'] h-[316px] rounded-md overflow-hidden`}
            style={{
              backgroundImage:
                res.contentUrl !== "null" ? `url(${res.contentUrl})` : "none",
            }}
          >
            <div className="absolute inset-0 bg-black  opacity-35 rounded-md"></div>
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black to-transparent opacity-50"></div>   */}
            <div className="relative z-10 flex justify-between">
              <h1 className="text-white  font-medium text-[20px] first-letter:uppercase">
                {res.name}
              </h1>
              <IoMdInformationCircleOutline className="text-white text-[30px]" />
            </div>
            <div className="relative z-10 flex justify-between">
              <h1 className="text-white">{res.reps} reps</h1>
              <h1 className="text-white">
                {res.time_training ? res.time_training : 0} Detik
              </h1>
            </div>
          </div>
        ))}

        <div className="w-full mt-10 flex justify-center">
          <button
            onClick={() => {
              if (indexLatihan === dataWorkout.length - 1) {
                setselesaiLatihan(true)
                postDataLatihan();
              }else{
              setRestLatihan(!restLatihan);
              NextLatihan();
              }
            }}
            className=" cursor-pointer  w-max px-4 pt-2 pb-2 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
          >
            selesai
          </button>
        </div>

        <div className="w-full">
          <div className="  gap-2 px-2  fixed bottom-0 py-2 bg-[#F5F7F8] left-0  shadow-[10px_0px_20px_-10px_rgba(0,0,0,0.3)] w-full flex ">
            <button
              onClick={() => {
                PrevLatihan();
              }}
              className="  gap-2 flex items-center text-[15px] cursor-pointer  flex-1 px-4 pt-2 pb-2   border-solid text-[#45474B] font-medium  font-[poppins]"
            >
              <img className="h-[25px]" src={prev} alt="prev_toggle" />
              <span>Sebelumnya</span>
            </button>

            <button
              onClick={() => {
                NextLatihan();
              }}
              className={`${
                indexLatihan === dataWorkout.length - 1 ? "hidden" : ""
              } gap-2 flex items-center justify-end text-[15px] cursor-pointer  flex-1 px-4 pt-2 pb-2   border-solid text-[#45474B] font-medium  font-[poppins]`}
            >
              <span>Berikutnya</span>
              <img className="h-[25px]" src={next} alt="prev_toggle" />
            </button>
            <button
              onClick={() => {
                // NextLatihan();
                setselesaiLatihan(true)
                postDataLatihan();
              }}
              className={`${
                indexLatihan === dataWorkout.length - 1 ? "" : "hidden"
              } gap-2 flex items-center justify-end text-[15px] cursor-pointer  flex-1 px-4 pt-2 pb-2   border-solid text-[#45474B] font-medium  font-[poppins]`}
            >
              <span>Selesai</span>
              <IoMdExit className="text-[20px]" />
            </button>
          </div>
        </div>
      </main>

      {selesaiLatihan && (
        <SelesaiLatihan initialSeconds={3} closeOn={setselesaiLatihan} />
      )}
      {restLatihan && (
        <RestLatihan initialSeconds={20} closeOn={setRestLatihan} />
      )}
    </div>
  );
};
