import React, { useEffect, useState } from "react";
import { useSurvei } from "../store/AppContext";

export const ListProgramLatihan = () => {
  const { dataWorkout } = useSurvei();
  return (
    <>
      {dataWorkout.map((res) => {
        if (res.score > 0.41) {
          return (
            <li
              key={res._id}
              className="w-full text-[#45474B] py-4 px-2 rounded-md font-[poppins] ring-1 ring-[#45474B]"
            >
              <div>
                <h2>{res.name}</h2>
              </div>
            </li>
          );
        }
      })}
    </>
  );
};
