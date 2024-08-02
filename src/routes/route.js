import {
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import Cookie from "js-cookie";
import { AktivitasLatihan } from "../pages/AktivitasLatihan";
import { PageNot } from "../pages/PageNot";

export const VerifyUser = () => {
  const { verify, setverify } = useSurvei();
  const token = Cookie.get("accessToken");

  useEffect(() => {
    setverify({
      isSuccess: false,
      userses: [{ username: null, totalPoints: null }],
      isLoading: true,
      isError: false,
    });

    if (token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          alert("sudah berhasil")
          setverify({
            isSuccess: true,
            userses: res.data.data,
            isLoading: false,
            isError: false,
          });
        })
        .catch((err) => {
          alert(err.response.data.message);
          setverify({
            isSuccess: false,
            userses: [{ username: null, totalPoints: null }],
            isLoading: false,
            isError: true,
          });
        });
    } else {
      setverify({
        isSuccess: false,
        userses: [{ username: null, totalPoints: null }],
        isLoading: false,
        isError: true,
      });
    }
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
  // {
  //   element: <KelolaLatihan />,
  //   path: "/kelolalatihan",
  // },

  {
    element: <AktivitasLatihan />,
    path: "/aktivitas",
  },
  {
    element: <Profile />,
    path: "/profile",
  },
  {
    element: <Survei />,
    path: "/survei/:diff/:type",
  },
  {
    element: <PageNot />,
    path: "/*",
  },
]);

export default router;
