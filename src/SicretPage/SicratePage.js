import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserConText } from "../AuthContext/AuthContext";

const SicratePage = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user, loader } = useContext(UserConText);
  if (loader) {
    return <div>Loading.....</div>;
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SicratePage;
