import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import profile from "../assets/img/profile.png";

import Footer from "../components/Footer";
import ebvId from "../assets/img/ebu.png";

const OrderHistory = () => {
  return (
    <Fragment>
      <Navbar login={true} />
      <div className="bg-secondary px-24 pb-24 flex gap-5 font-Mulish">
        <div className="w-1/4">
          <div className="bg-white rounded-md mt-10">
            <div className="p-8">
              <h5>INFO</h5>
              <div className="flex flex-col items-center mt-4">
                <img
                  src={profile}
                  alt=""
                  className="rounded-full w-25 h-25 bg-contain"
                />
                <div className="flex flex-col items-center  ">
                  <h2 className="font-semibold">Jonas El Rodriguez</h2>
                  <p>Moviegoers</p>
                </div>
              </div>
            </div>
            <div className="border border-b w-full mb-5"></div>
            <div className="px-8 pb-8">
              <button className="w-full bg-primary py-3 rounded-lg text-white">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="mt-10 mb-9">
            <div className="bg-white p-7 items-center rounded-md">
              <Link to="/profile" className="font-semibold mr-10">
                Account Settings
              </Link>
              <Link to="/orderHistory" className=" text-primary font-semibold">
                Order History
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md p-7 mb-7">
            <div className="flex">
              <div className="flex-1 mb-5">
                <h5 className="text-[#AAAAAA] text-sm mb-2">
                  Tuesday, 07 July 2020 - 04:30pm
                </h5>
                <h3 className="text-2xl font-semibold">
                  Spider-Man: Homecoming
                </h3>
              </div>
              <div>
                <img src={ebvId} alt="" />
              </div>
            </div>
            <div className="border border-b mb-5"></div>
            <div className="flex justify-between items-center">
              <div className="w-48 bg-[#00BA88] text-center p-2 rounded-md text-white">
                Ticket in active
              </div>
              <Link to="/ticketResult" className="text-[#AAAAAA]">
                See Details
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md p-7 mb-7">
            <div className="flex">
              <div className="flex-1 mb-5">
                <h5 className="text-[#AAAAAA] text-sm mb-2">
                  Monday, 14 June 2020 - 02:00pm
                </h5>
                <h3 className="text-2xl font-semibold">Avengers: End Game</h3>
              </div>
              <div>
                <img src={ebvId} alt="" />
              </div>
            </div>
            <div className="border border-b mb-5"></div>
            <div className="flex justify-between items-center">
              <div className="w-48 bg-[#6E7191] text-center p-2 rounded-md text-white">
                Ticket used
              </div>
              <Link to="/ticketResultUsed" className="text-[#AAAAAA]">
                See Details
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md p-7 mb-7">
            <div className="flex">
              <div className="flex-1 mb-5">
                <h5 className="text-[#AAAAAA] text-sm mb-2">
                  Monday, 10 March 2020 - 04:00pm
                </h5>
                <h3 className="text-2xl font-semibold">Thor: Ragnarok</h3>
              </div>
              <div>
                <img src={ebvId} alt="" />
              </div>
            </div>
            <div className="border border-b mb-5"></div>
            <div className="flex justify-between items-center">
              <div className="w-48 bg-red-500 text-center p-2 rounded-md text-white">
                Ticket expired
              </div>
              <Link to="/ticketResultExpired" className="text-[#AAAAAA]">
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default OrderHistory;
