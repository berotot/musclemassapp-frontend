import React, { useState } from "react";
import { useSurvei } from "../store/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { DataImage } from "../etc/img/DataImage";
import { Navbar } from "../component/Navbar";
import { VerifyUser } from "../routes/route";
import { FormModalAuthLogin, FormModalAuthSign } from "../component/FormModalAuth";

export const Survei = () => {
  const { setWeight, weight } = useSurvei();
  const navigate = useNavigate();
  const { type, diff } = useParams();
  const { ectomorph, mesomorph, endomorph } = DataImage();
  const [indexSurvei, SetIndexSurvei] = useState(1);
  const [Bmi, setBmi] = useState({ b: 0, t: 0 });
  const { isSuccess, userses, isLoading, isError } = VerifyUser();


  const prevSurvei = () =>
    indexSurvei === 0 ? SetIndexSurvei(1) : SetIndexSurvei(indexSurvei - 1);
  const nextSurvei = () =>
    indexSurvei >= 3 ? SetIndexSurvei(1) : SetIndexSurvei(indexSurvei + 1);

  const handleWeightChange = (e) => {
    const newWeight = parseInt(e.target.value);
    const newHeight = Bmi.t;
    const newBmi = newHeight ? newWeight / (newHeight * newHeight) : 0;

    setBmi({
      ...Bmi,
      b: newWeight,
    });

    setWeight({
      ...weight,
      bmi: newBmi,
    });
  };

  const handleHeightChange = (e) => {
    const newHeight = parseInt(e.target.value) / 100; // konversi cm ke meter
    const newWeight = Bmi.b;
    const newBmi = newHeight ? newWeight / (newHeight * newHeight) : 0;

    setBmi({
      ...Bmi,
      t: newHeight,
    });

    setWeight({
      ...weight,
      bmi: newBmi,
    });
  };

  return (
    <div className="p-4 h-screen">
      <Navbar />
{isError && <FormModalAuthLogin />}
      <main>
        <div className="flex my-2 text-[#45474B] justify-between font-[poppins] text-[15px] font-semibold ">
          <button
            className={`${indexSurvei === 1 ? "invisible" : ""}`}
            onClick={prevSurvei}
          >
            {`<- `}Kembali
          </button>
          <button
            className={`${indexSurvei === 4 ? "invisible" : ""}`}
            onClick={nextSurvei}
          >
            Lanjut {` ->`}
          </button>
        </div>

        <div className="h-full w-full">
          {/*           
          <ul
            className={`${
              indexSurvei !== 1 ? "hidden" : ""
            }  list-inside  list-disc`}
          >
            <li className=" my-4 font-[poppins]">
              Kondisi badan mu saat ini, pilih 3 berikut dari gambar ini.
            </li>

            <div
              className={`w-full gap-2 my-4   list-none h-max flex flex-row flex-shrink-0`}
            >
              <div
                onClick={() => setWeight({ ...weight, tingkat_tubuh: 33 })}
                className="flex-1   h-[200px]"
              >
                <img
                  className={`w-full ${
                    weight.tingkat_tubuh === 33 ? "ring-2 ring-[#379777]" : ""
                  } rounded-md h-full`}
                  src={ectomorph}
                  alt="tubuh_biasa"
                />
              </div>
              <div
                onClick={() => setWeight({ ...weight, tingkat_tubuh: 63 })}
                className="flex-1  h-[200px]"
              >
                <img
                  className={`w-full rounded-md h-full ${
                    weight.tingkat_tubuh === 63 ? "ring-2 ring-[#379777]" : ""
                  }`}
                  src={endomorph}
                  alt="tubuh_bagus"
                />
              </div>

              <div
                onClick={() => setWeight({ ...weight, tingkat_tubuh: 93 })}
                className="flex-1  h-[200px]"
              >
                <img
                  className={`w-full rounded-md h-full ${
                    weight.tingkat_tubuh === 93 ? "ring-2 ring-[#379777]" : ""
                  }`}
                  src={mesomorph}
                  alt="tubuh_kurang"
                />
              </div>
            </div>
          </ul> */}

          <ul
            className={`${
              indexSurvei !== 1 ? "hidden" : ""
            } list-inside  list-disc my-4`}
          >
            <li className="font-[poppins] my-4">
              Tentukan berat badan dan tinggi badan mu
            </li>
            <div className={` w-full my-4 flex flex-col gap-4`}>
              <label htmlFor="">Berat Badan</label>
              <input
                defaultValue={Bmi.b}
                onChange={handleWeightChange}
                className=" font-[poppins] w-full rounded-md px-4  pt-2 pb-2 ring-1 ring-black"
                type="number"
              />
              <label htmlFor="">Tinggi Badan</label>
              <input
                defaultValue={Bmi.t}
                onChange={handleHeightChange}
                className=" font-[poppins] w-full rounded-md px-4  pt-2 pb-2 ring-1 ring-black"
                type="number"
              />
            </div>
          </ul>

          <ul
            className={`${
              indexSurvei !== 2 ? "hidden" : ""
            } list-inside list-disc my-4`}
          >
            <li className="font-[poppins] my-4">
              Tentukan seberapa lelah Anda ingin merasa setelah latihan
            </li>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.intensitas === 1}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    intensitas: 1,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />

              <label className=" font-[poppins]" htmlFor="">
                Sedikit lelah
              </label>
            </div>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.intensitas === 2}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    intensitas: 2,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              <label className=" font-[poppins]" htmlFor="">
                lelah
              </label>
            </div>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.intensitas === 3}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    intensitas: 3,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              <label className=" font-[poppins]" htmlFor="">
                Sangat Lelah
              </label>
            </div>
          </ul>

          <ul
            className={`${
              indexSurvei !== 3 ? "hidden" : ""
            } list-inside list-disc my-4`}
          >
            <li className="font-[poppins] my-4">
              Seberapa sering Anda melakukan latihan dalam seminggu
            </li>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.endurance === 1}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    endurance: 1,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />

              <label className=" font-[poppins]" htmlFor="">
                1-2 kali per minggu
              </label>
            </div>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.endurance === 2}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    endurance: 2,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              <label className=" font-[poppins]" htmlFor="">
                3-4 kali per minggu
              </label>
            </div>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.endurance === 3}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    endurance: 3,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              <label className=" font-[poppins]" htmlFor="">
                5-7 kali per minggu
              </label>
            </div>
          </ul>
        </div>

        <div
          className={`${
            weight.bmi && weight.intensitas && weight.endurance ? "" : "hidden"
          } flex justify-center`}
        >
          <button
            onClick={() => {
              navigate(`/programlatihan/${diff}/${type}`);
            }}
            className=" text-[15px] cursor-pointer  w-max px-4 pt-2 pb-2 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
          >
            kirim
          </button>
        </div>
      </main>
    </div>
  );
};
