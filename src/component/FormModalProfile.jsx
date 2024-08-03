import axios from "axios";
import React, { useState } from "react";
import Cookie from "js-cookie";
import { VerifyUser } from "../routes/route";
import { useLocation, useNavigate } from "react-router-dom";
import { useSurvei } from "../store/AppContext";
import Cookies from "js-cookie";
export const FormModalProfile = ({ clickOn, dataPar, closeOn }) => {
  const [datas, setData] = useState({
    username: null,
    email: null,
    password: null,
  });

  const postFormUsername = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/v1/auth/profile`, {
        username: datas.username,
      },{
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
      .then((res) => {
        alert("Berhasil edit profile");
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const postFormEmail = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/v1/auth/profile`, {
        username: datas.username,
      },{
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
      .then((res) => {
        alert("Berhasil edit profile");
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  const postFormPassword = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/v1/auth/profile`, {
        password: datas.password,
      },{
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
      .then((res) => {
        alert("Berhasil edit profile");
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      {clickOn.username || clickOn.email || clickOn.password ? (
        <div
          onClick={() =>
            closeOn({ username: false, email: false, password: false })
          }
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]"
        />
      ) : (
        ""
      )}
      {clickOn.username && (
        <div className=" z-[999]  fixed bottom-2 right-0 left-0   w-screen h-max ">
          <form
            onSubmit={postFormUsername}
            className="rounded-md bg-[#F5F7F8]   ring-1 ring-black py-6 px-4  mx-2 flex gap-4  flex-col"
          >
            <div className="font-['poppins'] mb-4  text-[23px] font-bold">
              <h1>Edit profile</h1>
            </div>
            <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
              <label className=" font-medium" htmlFor="">
                Username
              </label>
              <input
                onChange={(e) =>
                  setData({ ...datas, username: e.target.value })
                }
                defaultValue={dataPar[0].username}
                className=" ring-1 ring-black focus:shadow-md rounded-md h-8 px-2"
                type="text"
              />
            </div>

            <button
              type="submit"
              className=" shadow-md cursor-pointer  w-full px-4 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {clickOn.email && (
        <div className=" z-[999]  fixed bottom-2 right-0 left-0   w-screen h-max ">
          <form
            onSubmit={postFormEmail}
            className="rounded-md bg-[#F5F7F8]   ring-1 ring-black py-6 px-4  mx-2 flex gap-4  flex-col"
          >
            <div className="font-['poppins'] mb-4  text-[23px] font-bold">
              <h1>Edit profile</h1>
            </div>

            <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins'] ">
              <label className=" font-medium" htmlFor="">
                Email
              </label>
              <input
                onChange={(e) => setData({ ...datas, email: e.target.value })}
                defaultValue={dataPar[0].email}
                className=" ring-1 ring-black focus:shadow-md rounded-md h-8 px-2"
                type="text"
              />
            </div>

            <button
              type="submit"
              className=" shadow-md cursor-pointer  w-full px-4 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {clickOn.password && (
        <div className=" z-[999]  fixed bottom-2 right-0 left-0   w-screen h-max ">
          <form
            onSubmit={postFormPassword}
            className="rounded-md bg-[#F5F7F8]   ring-1 ring-black py-6 px-4  mx-2 flex gap-4  flex-col"
          >
            <div className="font-['poppins'] mb-4  text-[23px] font-bold">
              <h1>Edit profile</h1>
            </div>

            <div className="text-[17px] flex w-full gap-2 h-max flex-col font-['poppins'] ">
              <label className=" font-medium" htmlFor="">
                Password
              </label>
              <input
                onChange={(e) =>
                  setData({ ...datas, password: e.target.value })
                }
                
                className=" focus:shadow-md ring-1 ring-black rounded-md h-8 px-2"
                type="text"
              />
            </div>
            <button
              type="submit"
              className=" shadow-md cursor-pointer  w-full px-4 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};
