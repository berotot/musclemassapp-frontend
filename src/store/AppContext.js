import React, { createContext, useContext, useState } from 'react'

const SurveiContext = createContext();

export const AppContext = ({children}) => {
    const [survei, setSurvei] = useState([
        "bmi",
        "intesitas",
        "endurance",
      ]);
    const [weight, setWeight] = useState({
      "bmi":null,
      "intensitas":null,
      "endurance":null,});
  const [verify,setverify] = useState({ isSuccess: false, userses: false, isLoading: false, isError: false });
      
      const [dataWorkout,setDataWorkout] = useState([])
  return (
    <SurveiContext.Provider value={{verify,setverify,survei,setSurvei,weight,setWeight,dataWorkout,setDataWorkout}}>
        {children}
    </SurveiContext.Provider>
  )
}

export const useSurvei = () => useContext(SurveiContext)
