import React from "react";

export const ListLeaderScore = ({ dataScore }) => {
  return (
    <>
      {dataScore.map((res, index) => (
        <li
          key={index}
          className="shadow-md rounded-md p-2 px-4 ring-1 ring-[#45474B] my-8 w-full h-max items-center flex text-[#45474B] justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="ring-1 ring-black rounded-full w-[50px] h-[50px] overflow-hidden">
              <img src={res.profilPath} alt={res.username} />
            </div>
            <div>
              <p className="font-[poppins] font-semibold text-[20px]">
                {res.username}
              </p>
              <p className="font-[poppins] font-medium text-[15px]">
                <span role="img" aria-label="score">
                  🙈
                </span>
                {res.total_points}
              </p>
            </div>
          </div>
          <p className="font-[poppins] text-[20px] font-bold">#{index + 1}</p>
        </li>
      ))}
    </>
  );
};
