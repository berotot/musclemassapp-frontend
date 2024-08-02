import React from "react";
import { MdDateRange } from "react-icons/md";
import moment from 'moment'

export const ListActivity = ({ dataScore }) => {
  return (
    <>
      {dataScore.map((res, index) => (
         <li
      
         className="shadow-md rounded-md p-2 px-4 ring-1 ring-[#45474B] my-4 w-full h-max items-center flex text-[#45474B] justify-between"
       >
         <div className="flex items-center gap-2">
           <div>
             <div className="flex items-center gap-1">
             <MdDateRange />
               <p className=" font-['poppins']  text-[13px] font-bold">
               {moment(res.date_activity).format('DD-MM-YYYY')}
             </p>
               </div>

             <p className="font-[poppins] font-medium text-[15px]">
               Otot {res.muscleGroup}
             </p>
             <p className=" font-['poppins']  text-[13px] font-medium">
               🙈 {res.point_activity}
             </p>
           </div>
         </div>
         <p className="font-[poppins] text-[14px] font-bold">{res.totals_excercise} Latihan</p>
       </li>
      ))}
    </>
  );
};
