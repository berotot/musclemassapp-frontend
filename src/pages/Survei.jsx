import React, { useState } from "react";
import { useSurvei } from "../store/AppContext";
import { useNavigate } from "react-router-dom";
import { DataImage } from "../etc/img/DataImage";
import { Navbar } from "../component/Navbar";

export const Survei = () => {
  const { setWeight, weight } = useSurvei();
  const navigate = useNavigate();

  const { ectomorph, mesomorph, endomorph } = DataImage();

  const [indexSurvei, SetIndexSurvei] = useState(1);
  const prevSurvei = () =>
    indexSurvei === 0 ? SetIndexSurvei(1) : SetIndexSurvei(indexSurvei - 1);
  const nextSurvei = () =>
    indexSurvei >= 4 ? SetIndexSurvei(1) : SetIndexSurvei(indexSurvei + 1);

  return (
    <div className="p-4 h-screen">
      <Navbar />

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
          </ul>

          <ul
            className={`${
              indexSurvei !== 2 ? "hidden" : ""
            } list-inside  list-disc`}
          >
            <li className="font-[poppins] my-4">
              Tentukan fit tubuh mu hari ini
            </li>

            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.tingkat_fit_tubuh === 30}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    tingkat_fit_tubuh: 30,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              <label className=" font-[poppins]" htmlFor="">
                Kurang fit
              </label>
            </div>

            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.tingkat_fit_tubuh === 60}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    tingkat_fit_tubuh: 60,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              <label className=" font-[poppins]" htmlFor="">
                Biasa saja
              </label>
            </div>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.tingkat_fit_tubuh === 90}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    tingkat_fit_tubuh: 90,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              <label className=" font-[poppins]" htmlFor="">
                Sangat fit
              </label>
            </div>
          </ul>

          <ul
            className={`${
              indexSurvei !== 3 ? "hidden" : ""
            } list-inside  list-disc`}
          >
            <li className="font-[poppins] my-4">Tentukan berat badanmu</li>
            <div className={` w-full my-4`}>
              <input
                defaultValue={weight.berat_badan}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    berat_badan: parseInt(e.target.value),
                  })
                }
                className=" font-[poppins] w-full rounded-md px-4  pt-2 pb-2 ring-1 ring-black"
                type="number"
              />
            </div>
          </ul>

          <ul
            className={`${
              indexSurvei !== 4 ? "hidden" : ""
            } list-inside list-disc`}
          >
            <li className="font-[poppins] my-4">
              Tentukan tingkat kelelahan latihan.
            </li>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.tingkat_kelelahan === 30}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    tingkat_kelelahan: 30,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              
              <label className=" font-[poppins]" htmlFor="">
                Biasa saja
              </label>
            </div>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.tingkat_kelelahan === 60}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    tingkat_kelelahan: 60,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              <label className=" font-[poppins]" htmlFor="">
                Sulit
              </label>
            </div>
            <div className={`my-4 w-full flex gap-2`}>
              <input
                checked={weight.tingkat_kelelahan === 90}
                onChange={(e) =>
                  setWeight({
                    ...weight,
                    tingkat_kelelahan: 90,
                  })
                }
                className=" font-[poppins]    "
                type="radio"
              />
              <label className=" font-[poppins]" htmlFor="">
                Sangat Sulit
              </label>
            </div>
          </ul>
        </div>

        <div
          className={`${
            weight.berat_badan &&
            weight.tingkat_tubuh &&
            weight.tingkat_fit_tubuh &&
            weight.tingkat_kelelahan
              ? ""
              : "hidden"
          } flex justify-center`}
        >
          <button
            onClick={() => {
              navigate("/programlatihan");
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
