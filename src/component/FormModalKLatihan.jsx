import React, { useState } from "react";
import axios from "axios";
export const FormModalKLatihan = ({ clickOn, clickOut }) => {
  const [form, setform] = useState({
    name: null,
    description: null,
    muscleGroup: null,
    reps: null,
    weight_criteria: null,
    c1: null,
    c2: null,
    c3: null,
    c4: null,
    time_training: null,
    difficulty: null,
    contentPath: null,
  });

  
const handleSubmit = (e) => {
  e.preventDefault(); // Memperbaiki typo

  // const formData = new FormData();
  
  // // Pastikan untuk menambahkan file hanya jika ada
  // if (form.contentPath && form.contentPath.length > 0) {
  //   formData.append("contentPath", form.contentPath[0]);
  // }
  
  // formData.append("name", form.name);
  // formData.append("description", form.description);
  // formData.append("muscleGroup", form.muscleGroup);
  // formData.append("reps", form.reps);
  // formData.append("c1", form.c1);
  // formData.append("c2", form.c2);
  // formData.append("c3", form.c3);
  // formData.append("c4", form.c4);
  // formData.append("time_training", form.time_training);
  // formData.append("difficulty", form.difficulty);

  axios
    .post(`${process.env.REACT_APP_API_URL}/api/v1/admin/latihan`, form)
    .then((res) => {
      alert("berhasil menambahkan latihan");
    })
    .catch((err) => {
      console.log(err.response.data);
      alert(err.response.data.message);
    });
};
  return (
    <>
      <div
        onClick={() => clickOn(!clickOn)}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]"
      />
      <div className="fixed bottom-2 right-0 left-0 w-screen h-[320px] overflow-y-scroll z-[100]">
        <form
          onSubmit={handleSubmit}
          className="rounded-md bg-[#F5F7F8] h-full overflow-y-auto ring-1 ring-black py-6 px-4 mx-2 flex gap-4 items-center flex-col"
        >
          <div className="font-['poppins'] mb-4 text-[17px] font-bold">
            <h1>Tambah latihan</h1>
          </div>

          <div className="flex text-[17px] w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Nama Latihan
            </label>
            <input
              onChange={(e) => setform({ ...form, name: e.target.value })}
              className="rounded-md h-8 px-2 ring-1 ring-black"
              type="text"
            />
          </div>

          <div className="flex text-[17px] w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Fokus otot
            </label>
            <select
              onChange={(e) =>
                setform({ ...form, muscleGroup: e.target.value })
              }
              className="rounded-md h-8 px-2 ring-1 ring-black"
            >
              <option value="">Pilih otot</option>
              <option value="lengan">Lengan</option>
            </select>
          </div>

          <div className="flex text-[17px] w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Deskripsi
            </label>
            <textarea
              onChange={(e) =>
                setform({ ...form, description: e.target.value })
              }
              className="rounded-md h-14 py-1 px-2 ring-1 ring-black"
              type="text"
            />
          </div>

          <div className="text-[17px] flex w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Reps
            </label>
            <input
              onChange={(e) => setform({ ...form, reps: e.target.value })}
              className="rounded-md h-8 px-2 ring-1 ring-black"
              type="number"
            />
          </div>

          <div className="text-[17px] flex w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Waktu latihan
            </label>
            <input
              onChange={(e) =>
                setform({ ...form, time_training: e.target.value })
              }
              className="rounded-md h-8 px-2 ring-1 ring-black"
              type="number"
            />
          </div>

          <div className="text-[17px] flex w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Tingkatan Latihan
            </label>
            <select
              onChange={(e) => setform({ ...form, difficulty: e.target.value })}
              className="rounded-md h-8 px-2 ring-1 ring-black"
            >
              <option value="">Pilih tingkatan</option>
              <option value="pemula">Pemula</option>
              <option value="menengah">Menengah</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <div className="text-[17px] flex w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Bobot kriteria 1
            </label>
            <select
              onChange={(e) => setform({ ...form, c1: e.target.value })}
              className="rounded-md h-8 px-2 ring-1 ring-black"
            >
              <option value="">Pilih bobot</option>
              <option value="3">baik</option>
              <option value="2">cukup</option>
              <option value="1">kurang</option>
            </select>
          </div>
          <div className="text-[17px] flex w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Bobot kriteria 2
            </label>
            <select
              onChange={(e) => setform({ ...form, c2: e.target.value })}
              className="rounded-md h-8 px-2 ring-1 ring-black"
            >
              <option value="">Pilih bobot</option>
              <option value="3">baik</option>
              <option value="2">cukup</option>
              <option value="1">kurang</option>
            </select>
          </div>
          <div className="text-[17px] flex w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Bobot kriteria 3
            </label>
            <select
              onChange={(e) => setform({ ...form, c3: e.target.value })}
              className="rounded-md h-8 px-2 ring-1 ring-black"
            >
              <option value="">Pilih bobot</option>
              <option value="3">baik</option>
              <option value="2">cukup</option>
              <option value="1">kurang</option>
            </select>
          </div>
          <div className="text-[17px] flex w-full gap-2 flex-col font-['poppins']">
            <label className="font-medium" htmlFor="">
              Bobot kriteria 4
            </label>
            <select
              onChange={(e) => setform({ ...form, c4: e.target.value })}
              className="rounded-md h-8 px-2 ring-1 ring-black optional:text-[17px]"
            >
              <option value="">Pilih bobot</option>
              <option value="3">baik</option>
              <option value="2">cukup</option>
              <option value="1">kurang</option>
            </select>
          </div>
          <div className="text-[17px]  w-full gap-2 flex-col font-['poppins'] hidden">
            <label className="font-medium" htmlFor="">
              Konten
            </label>
            <input
              disabled
              onChange={(e) =>
                setform({ ...form, contentPath: [e.target.files[0]] })
              }
              className="rounded-md h-8 px-2 ring-1 ring-black"
              type="file"
            />
          </div>

          <div className="font-['poppins'] text-[15px]">
            <button className="cursor-pointer w-max px-4 pt-2 pb-2 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
