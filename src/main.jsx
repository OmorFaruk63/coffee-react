import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import GlobalContext from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext>
      <RouterProvider router={router}></RouterProvider>
    </GlobalContext>
  </React.StrictMode>
);
