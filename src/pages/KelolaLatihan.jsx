import React, { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar";
import { DataImage } from "../etc/img/DataImage";
import axios from "axios";
import { FormModalKLatihan } from "../component/FormModalKLatihan";
import { MdAdd } from "react-icons/md";
import { ListLatihanKelola } from "../component/ListLatihanKelola";
import Cookies from 'js-cookie'
export const KelolaLatihan = () => {
  document.title = "Kelola Latihan"
  const { armMuscle } = DataImage();
  const [clickForm, setClickForm] = useState(false);
  const [data, setdata] = useState([]);

  const getDataLatihan = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/latihan`,
        {
          headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
        }
      )
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((res) => {});
  };

  const [showLatihan, setShowLatihan] = useState({
    perut: false,
    dada: false,
    lengan: false,
  });
  const handleShowLatihan = (latihan) => {
    setShowLatihan((prevShowLatihan) => ({
      perut: latihan === 'perut' ? !prevShowLatihan.perut : false,
      dada: latihan === 'dada' ? !prevShowLatihan.dada : false,
      lengan: latihan === 'lengan' ? !prevShowLatihan.lengan : false,
    }));
  };
  const deleteDataLatihan = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/api/v1/admin/latihan/${id}`, {
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
      .then((res) => {
        getDataLatihan();
      })
      .catch((res) => {});
  };
  useEffect(() => {
    if (showLatihan && data.length === 0) {
      getDataLatihan();
    }
  }, [showLatihan,clickForm]);
  return (
    <div className="p-4 h-screen">
      <Navbar />

      <main>
        <div className=" my-8 w-full h-max items-center flex text-[#45474B] justify-between">
          <div>
            <p className=" font-[poppins] font-semibold text-[20px]">
              Soerahmat
            </p>
            <p className="font-[poppins] font-medium text-[15px]">
              <span>🙈 </span>23999
            </p>
          </div>

          <div className="ring-1 ring-black rounded-full w-[50px] h-[50px] overflow-hidden ">
            <img src="" alt="" />
          </div>
        </div>

        <div className=" my-4 h-max w-full  text-[14px] font-medium font-['poppins'] flex justify-end">
          <button
            onClick={() => setClickForm(!clickForm)}
            className=" flex items-center gap-1 cursor-pointer  px-2 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B]  "
          >
            <MdAdd className=" text-[18px] " />

            <p>latihan</p>
          </button>
        </div>

        <div className="w-full text-[#45474B] mt-8 font-[poppins]  flex-none font-semibold border-l-[5px] pl-2  border-[#45474B]">
          <p>{`PEMULA`}</p>
        </div>

        <ul className="my-4 ">
          <li
            onClick={() => handleShowLatihan('lengan')}
            className="h-[84px]  p-4 ring-1 group bg-center bg-cover ring-[#45474B] rounded-md relative"
          >
            <div
              style={{ backgroundImage: `url(${armMuscle})` }}
              className="absolute inset-0 bg-center bg-cover brightness-75 z-0"
            />
            <p className="relative z-0 font-[poppins] group-hover:brightness-100  tracking-[1px] font-bold text-[19px]   text-[#F5F7F8]">
              OTOT LENGAN
            </p>
          </li>

          {showLatihan.lengan && (
            <ListLatihanKelola
              deleteDataLatihan={deleteDataLatihan}
              data={data}
              typeLatihan={"lengan"}
            />
          )}

<li
            onClick={() => handleShowLatihan('perut')}
            className="h-[84px]  p-4 my-4 ring-1 group bg-center bg-cover ring-[#45474B] rounded-md relative"
          >
            <div
              style={{ backgroundImage: `url(${armMuscle})` }}
              className="absolute inset-0 bg-center bg-cover brightness-75 z-0"
            />
            <p className="relative z-0 font-[poppins] group-hover:brightness-100  tracking-[1px] font-bold text-[19px]   text-[#F5F7F8]">
              OTOT PERUT
            </p>
          </li>

          {showLatihan.perut && (
            <ListLatihanKelola
              deleteDataLatihan={deleteDataLatihan}
              data={data}
              typeLatihan={"perut"}
            />
          )}
        </ul>
      </main>

      {clickForm && (
        <FormModalKLatihan clickOn={setClickForm} clickOut={clickForm} />
      )}
    </div>
  );
};
