import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VIewAll from "./pages/VIewAll";
import MovieDetails from "./pages/MovieDetails";
import OrderPage from "./pages/OrderPage";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import TicketResult from "./pages/TicketResult";
import TicketResultUsed from "./pages/TicketResultUsed";
import TicketResultExpired from "./pages/TicketResultExpired";
import ManageMovie from "./pages/ManageMovie";
import Dashboard from "./pages/Dashboard";
import ManageSchedule from "./pages/ManageSchedule";

function App() {
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
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/ticketResult" element={<TicketResult />} />
        <Route path="/ticketResultUsed" element={<TicketResultUsed />} />
        <Route path="/ticketResultExpired" element={<TicketResultExpired />} />

        <Route path="/admin/manageMovies" element={<ManageMovie />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/manageSchedule" element={<ManageSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
