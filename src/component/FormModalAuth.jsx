import axios from "axios";
import React, { useState } from "react";
import Cookie from "js-cookie";
import { VerifyUser } from "../routes/route";
import { useLocation, useNavigate } from "react-router-dom";
import { useSurvei } from "../store/AppContext";

export const FormModalAuthLogin = () => {
  const [datas, setData] = useState({ email: null, password: null });
  const navigate = useNavigate();
  const { authsign, setauthsign } = useSurvei();

  const postFormSign = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/auth/login`, {
        email: datas.email,
        password: datas.password,
      })
      .then((res) => {
        // alert(res.data.message);
        Cookie.set("accessToken", res.data.data.token, {
          expires: 6000000,
        });
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]" />
      <div className=" z-[999]  fixed bottom-2 right-0 left-0   w-screen h-max ">
        <form
          onSubmit={postFormSign}
          className="rounded-md bg-[#F5F7F8]   ring-1 ring-black py-6 px-4  mx-2 flex gap-4  items-center flex-col"
        >
          <div className="font-['poppins'] mb-4  text-[23px] font-bold">
            <h1>Login</h1>
          </div>

          <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Email
            </label>
            <input
              onChange={(e) => setData({ ...datas, email: e.target.value })}
              className=" ring-1 ring-black focus:shadow-md rounded-md h-8 px-2"
              type="text"
            />
          </div>

          <div className="text-[17px] flex w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Password
            </label>
            <input
              onChange={(e) => setData({ ...datas, password: e.target.value })}
              className=" focus:shadow-md ring-1 ring-black rounded-md h-8 px-2"
              type="password"
            />
          </div>
          <button
            type="submit"
            className=" shadow-md cursor-pointer  w-full px-4 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
          >
            Login
          </button>
          <div className="font-['poppins'] text-[15px]">
            <p>
              Belum punya akun ?{" "}
              <span
                onClick={() => setauthsign(true)}
                className="  font-semibold"
              >
                signup
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export const FormModalAuthSignup = () => {
  
  const locationNow = useLocation();
  const [datas, setData] = useState({
    username: null,
    email: null,
    password: null,
  });
  
  const navigate = useNavigate();
  const { setauthsign,setverify} = useSurvei();


  const postFormSignup = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/auth/signup`, datas)
      .then((res) => {
        alert(res.data.message);
     
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]" />
      <div className=" z-[999]  fixed bottom-2 right-0 left-0   w-screen h-max ">
        <form  onSubmit={postFormSignup} className="rounded-md bg-[#F5F7F8]  ring-1 ring-black py-6 px-4  mx-2 flex gap-4  items-center flex-col">
          <div className="font-['poppins'] mb-4  text-[23px] font-bold">
            <h1>Signup</h1>
          </div>
          <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Username
            </label>
            <input
              onChange={(e) => setData({ ...datas, username: e.target.value })}
              className=" ring-1 ring-black focus:shadow-md rounded-md h-8 px-2"
              type="text"
            />
          </div>

          <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Email
            </label>
            <input
              onChange={(e) => setData({ ...datas, email: e.target.value })}
              className=" ring-1 ring-black focus:shadow-md rounded-md h-8 px-2"
              type="text"
            />
          </div>

          <div className="text-[17px] flex w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Password
            </label>
            <input
              onChange={(e) => setData({ ...datas, password: e.target.value })}
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
          <div className="font-['poppins'] text-[15px]">
            <p>
              Belum punya akun ? <span
              onClick={()=>{setauthsign(false)

              }}
              className="  font-semibold">Login</span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export const FormModalAuthSign = () => {
  const locationNow = useLocation();
  const [datas, setData] = useState({
    username: null,
    email: null,
    password: null,
  });
  const navigate = useNavigate();
  const { authsign, setauthsign } = useSurvei();

  const postFormSignupv2 = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v2/auth/signupv2`, datas)
      .then((res) => {
        alert(res.data.message);
        Cookie.set("accessUser", JSON.stringify(res.data.data[0]), {
          expires: 6000000,
        });
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[99]" />
      <div className=" z-[999]  fixed bottom-2 right-0 left-0   w-screen h-max ">
        <form
          onSubmit={postFormSignupv2}
          className="rounded-md bg-[#F5F7F8]  ring-1 ring-black py-6 px-4  mx-2 flex gap-4  items-center flex-col"
        >
          <div className="font-['poppins'] mb-4  text-[23px] font-bold">
            <h1>Signup</h1>
          </div>
          <div className="flex text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Username
            </label>
            <input
              onChange={(e) => setData({ ...datas, username: e.target.value })}
              className=" ring-1 ring-black focus:shadow-md rounded-md h-8 px-2"
              type="text"
            />
          </div>

          <div className=" text-[17px] w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Email
            </label>
            <input className="rounded-md h-8 px-2" type="text" />
          </div>

          <div className="text-[17px]   w-full gap-2 h-max flex-col font-['poppins']">
            <label className=" font-medium" htmlFor="">
              Password
            </label>
            <input className=" rounded-md h-8 px-2" type="text" />
          </div>
          <button
            type="submit"
            className=" shadow-md cursor-pointer  w-full px-4 py-1 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
          >
            Submit
          </button>
          <div className="font-['poppins'] text-[15px] ">
            <p>
              Belum punya akun ?{" "}
              <span
                // onClick={() => setauthsign(false)}
                className="  font-semibold"
              >
                signup
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
