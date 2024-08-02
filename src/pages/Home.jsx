import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "../component/Navbar";
import { FormModalAuthSignup } from "../component/FormModalAuth";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 h-screen">
      <Navbar />
      <main className="">
        <div className="flex gap-4  flex-col items-center h-[440px] justify-center">
          <h2 className=" text-center font-bold text-[40px] text-[#45474B] font-[poppins] ">
            Ayo Berotot Dengan Kami
          </h2>
          <button
            onClick={() => navigate("/dashboard")}
            className=" shadow-md cursor-pointer  w-max px-4 pt-2 pb-2 bg-[#379777] border-2 rounded-md text-[#F5F7F8] border-solid border-[#45474B] font-medium  font-[poppins]"
          >
            mulai
          </button>
        </div>
  
        <section className="w-full py-12 md:py-24 lg:py-32 mt-24 font-['poppins']">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Buka Potensi Untuk Otot Anda</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Berotot menawarkan pendekatan yang sesuai untuk kebugaran dan otot, menggabungkan intensitas
                latihan kekuatan, dan rekomendasi latihan yang cocok untuk anda.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Rekomenasi latihan yang sesuai</h3>
                  <p className="text-muted-foreground">
                    Kami memberikan rekomendasi latihan yang sesuai dengan porsi anda
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Latihan kekuatan</h3>
                  <p className="text-muted-foreground">
                  Tingkatkan kekuatan Anda dan bangun otot dengan latihan kekuatan yang ditargetkan, yang dirancang
                  untuk menantang Anda di setiap level.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Mudah di gunakan</h3>
                  <p className="text-muted-foreground">
                    Kami memberikan kemudahan untuk anda melakukan latihan dengan fitur fitur kami
                  </p>
                </div>
              </div>
           
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Berotot. soxo developer</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
         
        </nav>
      </footer>
      </main>
   
    </div>
  );
};
