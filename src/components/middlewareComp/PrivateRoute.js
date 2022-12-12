// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return children;
  } else {
    return <Navigate to="/signIn" />;
  }
}

export default PrivateRoute;
