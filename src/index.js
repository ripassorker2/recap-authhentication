import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthContext from "./AuthContext/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AuthContext>
      <ToastContainer position="top-center" />
      <App />
    </AuthContext>
  </>
);
