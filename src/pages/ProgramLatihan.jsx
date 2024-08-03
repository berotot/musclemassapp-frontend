import React, { useEffect, useState } from "react";
import { useSurvei } from "../store/AppContext";
import { Navbar } from "../component/Navbar";
import axios from "axios";
import { ListProgramLatihan } from "../component/ListProgramLatihan";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Cookies from 'js-cookie';

export const ProgramLatihan = () => {
  const { type, diff } = useParams();
  const { weight } = useSurvei();

  const { setDataWorkout } = useSurvei();
  const navigate = useNavigate();
  const [totalLatihan, setTotalLatihan] = useState(0);
  const getDataLatihan = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/user/latihan/recomended/${diff}/${type}`,
        weight,
        {
          headers: { Authorization: `Bearer ${Cookies.get('accessToken')}` },
        }
      )
      .then((res) => {
        setDataWorkout(res.data.data);
        const total = res.data.data.length;
        setTotalLatihan(total);
      })
      .catch((res) => {});
  };

  useEffect(() => {
    getDataLatihan();
  }, []);
  return (
    <div className="p-4 h-screen">
      <Navbar />

      <main className=" h-full   w-full gap-8 ">
        <div className="h-[136px] mb-6 bg-[#45474B] w-full rounded-md"></div>
        <div className="w-full text-[#45474B] mb-8 font-[poppins]  flex-none font-semibold border-l-[5px] pl-2  border-[#45474B]">
          <p>{`${totalLatihan} Latihan`}</p>
        </div>

        <ul className=" mb-  w-full gap-6 flex flex-col  ">
          <ListProgramLatihan />
        </ul>
        <div className="w-full">
          <div className="  fixed bottom-0 py-2 bg-[#F5F7F8] left-0  shadow-[10px_0px_20px_-10px_rgba(0,0,0,0.3)] w-full flex justify-center">
            <button
              onClick={() => navigate(`/latihan/${diff}/${type}`)}
              className=" text-[15px] cursor-pointer  w-max px-4 pt-2 pb-2 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
            >
              latihan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
