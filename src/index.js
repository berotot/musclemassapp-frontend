import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import route  from "./routes/route";
import { AppContext } from "./store/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContext >
    <RouterProvider router={route} />
    </AppContext>
  </React.StrictMode>
);

