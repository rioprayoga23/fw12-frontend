// @ts-nocheck
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRouteTicketResult({ children }) {
  const location = useLocation();
  if (location.state) {
    return children;
  } else {
    return <Navigate to="/orderHistory" />;
  }
}

export default PrivateRouteTicketResult;
