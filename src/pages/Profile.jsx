import React, { useState } from "react";
import { Navbar } from "../component/Navbar";
import { MdEdit } from "react-icons/md";
import { VerifyUser } from "../routes/route";
import { FormModalAuthLogin } from "../component/FormModalAuth";
import { FormModalProfile } from "../component/FormModalProfile";

export const Profile = () => {
  document.title = "Profile"
  const {userses, isError} = VerifyUser()
  const [modal,setModal] = useState({username:false,email:false,password:false})

  const handleOpenModal = (name) => {
    setModal((prev) => {
      const newModalState = { username: false, email: false, password: false };
      newModalState[name] = !prev[name];  
      return newModalState;
    });
  };

  return (
    <div className="p-4 h-screen">
      <Navbar />
      <FormModalProfile clickOn={modal} dataPar={userses} closeOn={setModal} />  

      {isError && <FormModalAuthLogin/>}
      
      <main className="p-4 h-screen">
        <div className=" flex flex-col  items-center w-full  gap-3">
          <div className="h-[120px] mb-8  w-[120px] animate-pulse rounded-full   bg-slate-300 " />
          <div className=" bg-white ring-1 ring-slate-300 py-4 rounded-md px-2 flex justify-between items-center w-full">
            <p className="text-[15px] font-semibold font-['poppins']">
              Username
            </p>
            <div onClick={()=>handleOpenModal('username')} className="flex items-center gap-2">
              {userses[0].username ? 
              <p className=" text-[15px] font-['poppins']">{userses[0].username}</p>
              :  <div className="h-[15px] w-[96px] bg-slate-300 animate-pulse rounded-md"></div>
            }
            <MdEdit />
            </div>
          </div>
          <div className=" bg-white ring-1 ring-slate-300  py-4 rounded-md px-2 flex justify-between items-center w-full">
            <p className="text-[15px] font-semibold font-['poppins']">Email</p>
            <div onClick={()=>handleOpenModal('email')} className="flex items-center gap-2">
              {userses[0].email ?
              <p className=" text-[15px] font-['poppins']">{userses[0].email}</p>
              :<div className="h-[15px] w-[70px] bg-slate-300 animate-pulse rounded-md"></div>
              }
              <MdEdit />
            </div>
          </div>
          <div className=" bg-white py-4 ring-1 ring-slate-300  rounded-md px-2 flex justify-between items-center w-full">
            <p className="text-[15px] font-semibold font-['poppins']">
              Password
            </p>
            <div onClick={()=>handleOpenModal('password')} className="flex items-center gap-2">
              {userses[0].email ?
              <p className=" text-[15px] font-['poppins']">*******</p>
              :<div className="h-[15px] w-[100px] bg-slate-300 animate-pulse rounded-md"></div>
              }<MdEdit />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
