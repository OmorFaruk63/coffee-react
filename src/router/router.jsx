import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import AllProduct from "./../page/All Product/AllProduct";
import AvailableNow from "./../page/Available Now/AvailableNow";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllProduct />,
      },
      {
        path: "/availableNow",
        element: <AvailableNow />,
      },
    ],
  },
]);
