import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import UpdatePassword from "./UpdatePassword";
import VIewAll from "./VIewAll";
import MovieDetails from "./MovieDetails";
import OrderPage from "./OrderPage";
import Payment from "./Payment";
import Profile from "./Profile";
import OrderHistory from "./OrderHistory";
import TicketResult from "./TicketResult";
import TicketResultUsed from "./TicketResultUsed";
import TicketResultExpired from "./TicketResultExpired";
import ManageMovie from "./ManageMovie";
import Dashboard from "./Dashboard";
import ManageSchedule from "./ManageSchedule";
import PrivateRoute from "../components/middlewareComp/PrivateRoute";
import PrivateRouteUpdatePassword from "../components/middlewareComp/PrivateRouteTicketResult";
import PrivateRouteLogin from "../components/middlewareComp/PrivateRouteLogin";
import PrivateRouteTicketResult from "../components/middlewareComp/PrivateRouteTicketResult";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signIn"
          element={
            <PrivateRouteLogin>
              <SignIn />
            </PrivateRouteLogin>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/updatePassword"
          element={
            <PrivateRouteUpdatePassword>
              <UpdatePassword />
            </PrivateRouteUpdatePassword>
          }
        />
        <Route path="/viewAll" element={<VIewAll />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/orderHistory"
          element={
            <PrivateRoute>
              <OrderHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticketResult"
          element={
            <PrivateRoute>
              <PrivateRouteTicketResult>
                <TicketResult />
              </PrivateRouteTicketResult>
            </PrivateRoute>
          }
        />
        <Route
          path="/ticketResultUsed"
          element={
            <PrivateRoute>
              <PrivateRouteTicketResult>
                <TicketResultUsed />
              </PrivateRouteTicketResult>
            </PrivateRoute>
          }
        />
        <Route
          path="/ticketResultExpired"
          element={
            <PrivateRoute>
              <PrivateRouteTicketResult>
                <TicketResultExpired />
              </PrivateRouteTicketResult>
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/manageMovies"
          element={
            <PrivateRoute>
              <ManageMovie />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/manageSchedule"
          element={
            <PrivateRoute>
              <ManageSchedule />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
