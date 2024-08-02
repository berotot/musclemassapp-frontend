import React, { useEffect, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const SelesaiLatihan = ({ initialSeconds, closeOn }) => {
  const navigate = useNavigate()
  
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds === 0) {
      setTimeout(() => {
       
        navigate('/aktivitas')
      }, 1000);
    }

    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]" />
      <div className="fixed bottom-2 right-0 left-0 w-screen h-[220px] overflow-y-scroll z-[100]">
        <div className=" rounded-xl  bg-[#F5F7F8] h-full overflow-y-auto ring-1 ring-black py-6 px-4 mx-2 flex gap-4 items-center justify-center flex-col">
          <div className="w-full  text-center  font-['poppins'] ">
            {/* <IoMdInformationCircleOutline className=" text-[25px] absolute right-6 -mt-2" /> */}
            <h1 className=" font-semibold">Keren kamu telah menyelesaikan latihan🎉</h1>
            {/* <h1 className="text-[40px] font-bold my-2">
              {formatTime(seconds)}
            </h1> */}
          </div>

          <div className="font-['poppins'] text-[15px]">
            <button
              onClick={() => navigate('/aktivitas')}
              className="cursor-pointer w-max px-4 pt-2 pb-2 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium"
            >
              Cek latihan kamu 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
