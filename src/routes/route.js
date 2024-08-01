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
  const [token, settoken] = useState(null);

  useEffect(() => {
    setverify({
      isSuccess: false,
      userses: [],
      isLoading: true,
      isError: false,
    });

    const accessUser = Cookie.get("accessUser");
    if (accessUser) {
      const decode = JSON.parse(decodeURIComponent(accessUser));
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/v1/auth/login`, {
          email: decode.email,
          password: decode.password,
        })
        .then((resi) => {
          Cookie.set("accessToken", resi.data.data.token, {
            expires: 6000000,
          });

          settoken(resi.data.data.token);
          setverify((prev) => ({
            ...prev,
            isSuccess: true,
            isLoading: false,
            isError: false,
          }));
        })
        .catch((err) => {
          setverify({
            isSuccess: false,
            userses: [],
            isLoading: false,
            isError: true,
          });
        });
    } else {
      setverify({
        isSuccess: false,
        userses: [],
        isLoading: false,
        isError: true,
      });
    }
  }, [setverify]);

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setverify((prev) => ({
            ...prev,
            userses: res.data.data[0],
          }));
        })
        .catch((err) => {
          setverify({
            isSuccess: false,
            userses: [],
            isLoading: false,
            isError: true,
          });
        });
    }
  }, [token, setverify]);

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
