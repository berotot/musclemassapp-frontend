import React from "react";
import { Navbar } from "../component/Navbar";
import { DataImage } from "../etc/img/DataImage";
import { useNavigate } from "react-router-dom";
import { VerifyUser } from "../routes/route";
import {
  FormModalAuthLogin,
  FormModalAuthSign,
  FormModalAuthSignup,
} from "../component/FormModalAuth";
import { useSurvei } from "../store/AppContext";

export const Dashboard = () => {
  const { authsign} = useSurvei();
  const { punggungMuscle, bahuMuscle, chestMuscle } = DataImage();
  const { isSuccess, userses, isLoading, isError } = VerifyUser();
  const navigate = useNavigate();
  // console.log(userses);
  return (
    <>
      {isError && <FormModalAuthLogin />}
      {authsign && <FormModalAuthSignup />}

      <div className="p-4 h-screen">
        <Navbar />
        <a className=" font-['poppins'] underline  font-semibold" href="https://forms.gle/kG31tQcpTcF7CLGW8">bantu developer isi questioner yuk 🙇‍♂️</a>

        <main>
          <div className="  my-8 w-full h-max items-center flex text-[#45474B] justify-between">
            <div>
              {userses[0].username !== null ? (
                <p className=" font-[poppins] first-letter:uppercase font-semibold text-[20px]">
                  {userses[0].username}
                </p>
              ) : (
                <div className=" font-[poppins] font-semibold w-[100px] animate-pulse rounded-md bg-slate-300 h-[20px]"></div>
              )}
              {userses[0].totalPoints || userses[0].totalPoints === 0 ? (
                <p className="font-[poppins] font-medium text-[15px]">
                  <span>🙈 </span>
                  {userses[0].totalPoints ? userses[0].totalPoints : 0}
                </p>
              ) : (
                <div className="font-[poppins] font-medium rounded-md bg-slate-300 animate-pulse  mt-1 w-[70px] h-[15px]"></div>
              )}
            </div>

            <div className="ring-1 ring-black rounded-full w-[50px] h-[50px] overflow-hidden ">
              <img src="" alt="" />
            </div>
            
          </div>

          <div className=" my-4 h-[165px] w-full rounded-md hidden bg-black"></div>

          <div className="w-full text-[#45474B] mt-8 font-[poppins]  flex-none font-semibold border-l-[5px] pl-2  border-[#45474B]">
            <p>{`PEMULA`}</p>
          </div>

          {userses[0].username ? (
            <ul className="my-4 flex  flex-col gap-3">
              <li
                onClick={() => navigate("/survei/pemula/bahu")}
                className="h-[84px] shadow-md p-4 ring-1 group overflow-hidden bg-center bg-cover ring-[#45474B] rounded-md relative"
              >
                <div
                  style={{ backgroundImage: `url(${bahuMuscle})` }}
                  className="absolute inset-0 bg-center bg-cover brightness-75 z-0"
                />
                <p className="relative uppercase z-10 font-[poppins] group-hover:brightness-100  tracking-[1px] font-bold text-[19px]   text-[#F5F7F8]">
                  OTOT BAHU
                </p>
              </li>

              <li
                onClick={() => navigate("/survei/pemula/punggung")}
                className="h-[84px] shadow-md p-4 ring-1 group bg-center bg-cover ring-[#45474B] rounded-md relative overflow-hidden"
              >
                <div
                  style={{ backgroundImage: `url(${punggungMuscle})` }}
                  className="absolute inset-0 bg-center bg-cover brightness-75 z-0"
                />
                <p className="relative uppercase z-10 font-[poppins] group-hover:brightness-100  tracking-[1px] font-bold text-[19px]   text-[#F5F7F8]">
                  OTOT PUNGGUNG
                </p>
              </li>

              <li
                onClick={() => navigate("/survei/pemula/dada")}
                className="h-[84px] shadow-md p-4 ring-1 group bg-center bg-cover ring-[#45474B] rounded-md relative overflow-hidden"
              >
                <div
                  style={{ backgroundImage: `url(${chestMuscle})` }}
                  className="absolute inset-0 bg-center bg-cover brightness-75 z-0"
                />
                <p className="relative uppercase z-10 font-[poppins] group-hover:brightness-100  tracking-[1px] font-bold text-[19px]   text-[#F5F7F8]">
                  OTOT DADA
                </p>
              </li>
            </ul>
          ) : (
            <ul className="my-4 flex flex-col gap-3">
              <li className="h-[84px]  p-4    bg-slate-300 animate-pulse  w-full rounded-md relative"></li>
              <li className="h-[84px]  p-4    bg-slate-300 animate-pulse  w-full rounded-md relative"></li>
              <li className="h-[84px]  p-4    bg-slate-300 animate-pulse  w-full rounded-md relative"></li>
            </ul>
          )}
        </main>
      </div>
    </>
  );
};
