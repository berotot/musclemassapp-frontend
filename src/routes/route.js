import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { KelolaLatihan } from "../pages/KelolaLatihan";
import { Latihan } from "../pages/Latihan";
import { LeaderboardScore } from "../pages/LeaderboardScore";
import { Profile } from "../pages/Profile";
import { ProgramLatihan } from "../pages/ProgramLatihan";
import { Survei } from "../pages/Survei";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <ProgramLatihan />,
    path: "/programlatihan",
  },
  {
    element: <Latihan />,
    path: "/latihan",
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
    path: "/survei",
  },
]);

export default router;
