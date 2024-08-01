import React, { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar";
import { DataImage } from "../etc/img/DataImage";
import axios from "axios";
import { ListLeaderScore } from "../component/ListLeaderScore";
import Cookies from "js-cookie";
import { ListActivity } from "../component/ListActivity";
import { VerifyUser } from "../routes/route";
import { FormModalAuthSign } from "../component/FormModalAuth";

export const AktivitasLatihan = () => {
  const { armMuscle } = DataImage();
  const [data, setdata] = useState([]);
  const { isSuccess, userses, isLoading, isError } = VerifyUser();
  const getDataLatihan = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/v1/user/latihan/activitycurrent`,
        {
          headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
        }
      )
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((res) => {});
  };
  useEffect(() => {
    getDataLatihan();
  }, []);
  return (
    <div className="p-4 h-screen">
      <Navbar />
{isError && <FormModalAuthSign />}
      <main className="">
        
      <a className=" font-['poppins'] underline  font-semibold" href="https://forms.gle/kG31tQcpTcF7CLGW8">bantu developer isi questioner yuk 🙇‍♂️</a>

        <div className=" my-4 h-[165px] w-full rounded-md bg-black"></div>

        <div className="w-full uppercase text-[#45474B] mt-8 font-[poppins]  flex-none font-semibold border-l-[5px] pl-2  border-[#45474B]">
          <p>{`AKTIVITAS LATIHAN`}</p>
        </div>

        <ul className="my-4">
         

          <ListActivity dataScore={data} />
        </ul>
      </main>
    </div>
  );
};
