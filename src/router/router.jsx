import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Wallet from "../components/Wallet";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Login from "../components/Login";
import SicratePage from "../SicretPage/SicratePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "wallet",
        element: (
          <SicratePage>
            <Wallet />
          </SicratePage>
        ),
      },
      {
        path: "profile",
        element: (
          <SicratePage>
            <Profile />
          </SicratePage>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/resister", element: <Register /> },
    ],
  },
]);
