import React, { createContext, useContext, useState } from 'react'

const SurveiContext = createContext();

export const AppContext = ({children}) => {
    const [survei, setSurvei] = useState([
        "bentuk_badan",
        "tingkat_fit_tubuh",
        "berat_badan",
        "tingkat_kelelahan",
      ]);
    const [weight, setWeight] = useState({
      "bentuk_badan":null,
      "tingkat_fit_tubuh":null,
      "berat_badan":null,
      "tingkat_kelelahan":null,});
      const [dataWorkout,setDataWorkout] = useState([])
  return (
    <SurveiContext.Provider value={{survei,setSurvei,weight,setWeight,dataWorkout,setDataWorkout}}>
        {children}
    </SurveiContext.Provider>
  )
}

export const useSurvei = () => useContext(SurveiContext)
