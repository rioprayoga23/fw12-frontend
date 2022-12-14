// @ts-nocheck
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRouteUpdatePassword({ children }) {
  const location = useLocation();
  if (location.state) {
    return children;
  } else {
    return <Navigate to="/forgotPassword" />;
  }
}

export default PrivateRouteUpdatePassword;
