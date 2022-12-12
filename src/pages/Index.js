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

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />
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
        <Route path="/profile" element={<Profile />} />
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
              <TicketResult />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticketResultUsed"
          element={
            <PrivateRoute>
              <TicketResultUsed />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticketResultExpired"
          element={
            <PrivateRoute>
              <TicketResultExpired />
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
