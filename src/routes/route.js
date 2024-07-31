import { createBrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { KelolaLatihan } from "../pages/KelolaLatihan";
import { Latihan } from "../pages/Latihan";
import { LeaderboardScore } from "../pages/LeaderboardScore";
import { Profile } from "../pages/Profile";
import { ProgramLatihan } from "../pages/ProgramLatihan";
import { Survei } from "../pages/Survei";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSurvei } from "../store/AppContext";

export const VerifyUser = () => {
const {verify,setverify} = useSurvei()
  useEffect(() => {
    setverify({ isSuccess: false, userses: false, isLoading: true, isError: false });
    axios.get('http://localhost:8080/api/v1/user/profile')  // Ubah URL endpoint sesuai kebutuhan Anda
      .then((res) => {
        setverify({ isSuccess: true, userses: res.data.data, isLoading: false, isError: false });
      })
      .catch((err) => {
        setverify({ isSuccess: false, userses: false, isLoading: false, isError: true });
      });
  }, []);

  return verify;
};

// const PrivateRoute = ({ element, RoleAllowed, fallbackPath }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { isSuccess, userses, isLoading, isError } = VerifyUser();

//   useEffect(() => {
//     if (!isLoading) {
//       if (isError) {
//         navigate('/login', { state: { from: location } });
//       } else if (userses?.role !== RoleAllowed) {
//         navigate(fallbackPath, { state: { from: location } });
//       }
//     }
//   }, [isLoading, isError, userses, RoleAllowed, navigate, location, fallbackPath]);

//   if (isLoading) {
//     alert("aa")
//     // return <div>Loading...</div>;  // Tampilkan loading spinner atau elemen lain saat sedang memuat
//   }

//   if (isSuccess && userses?.role === RoleAllowed) {
//     return element;
//   }

//   return null;  
// };


const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <ProgramLatihan />,
    path: "/programlatihan/:diff/:type",
  },
  {
    element: <Latihan />,
    path: "/latihan/:diff/:type",
  },
  {
    element: <LeaderboardScore />,
    path: "/leaderboard",
  },
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    element: <KelolaLatihan />,
    path: "/kelolalatihan",
  },
  {
    element: <Profile />,
    path: "/profile",
  },
  {
    element: <Survei />,
    path: "/survei/:diff/:type",
  },
]);

export default router;
