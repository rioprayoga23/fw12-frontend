/* eslint-disable react/prop-types */
// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRouteLogin({ children }) {
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default PrivateRouteLogin;
