import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import brandSmall from "../assets/img/brand-white.png";
import Footer from "../components/Footer";

const TicketResultExpired = () => {
  return (
    <Fragment>
      <Navbar login={true} />

      <div className="bg-secondary py-20 px-64 font-Mulish">
        <div className="bg-white flex flex-col items-center p-10">
          <h3 className="text-lg font-semibold mb-10">Proof of Payment</h3>
          <div className="w-full relative overflow-hidden">
            <div className="bg-primary pl-20 py-3 flex items-center rounded-t-2xl">
              <div className="flex-1">
                <img src={brandSmall} alt="" />
              </div>
              <div className="text-lg text-white mr-10">Admit One</div>
              <div className="flex-1 flex justify-center">
                <img src={brandSmall} alt="" />
              </div>
              <div className="flex flex-col h-full items-center absolute top-0 right-64">
                <div className="w-[1px] border border-dashed h-full absolute top-0"></div>
                <div className="w-16 h-16 rounded-full border-2 border-dashed bg-white absolute -top-7"></div>
                <div className="w-16 h-16 rounded-full  border-2 border-dashed bg-white  absolute -bottom-7"></div>
              </div>
            </div>
            <div className="pl-20 flex items-center border rounded-b-2xl pb-10">
              <div className="flex-1">
                <div className="mb-4 mt-5">
                  <p className="text-[#AAAAAA]">Movie</p>
                  <h3 className="font-semibold">Spider-Man: Homecoming</h3>
                </div>
                <div className="flex mb-4 gap-9">
                  <div className="flex-1">
                    <p className="text-[#AAAAAA]">Date</p>
                    <h3 className="font-semibold">07 July</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#AAAAAA]">Time</p>
                    <h3 className="font-semibold">02:00pm</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#AAAAAA]">Category</p>
                    <h3 className="font-semibold">Action</h3>
                  </div>
                </div>
                <div className="flex gap-9">
                  <div className="flex-1">
                    <p className="text-[#AAAAAA]">Count</p>
                    <h3 className="font-semibold">3 pieces</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#AAAAAA]">Seats</p>
                    <h3 className="font-semibold">C4, C5, C6</h3>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#AAAAAA]">Price</p>
                    <h3 className="font-semibold text-xl">$30.00</h3>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-end mr-10">
                <div className="w-[171px] h-[171px] bg-[#F5F6F8] flex items-center justify-center font-semibold px-5 text-center mt-10">
                  Ticket Expired
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TicketResultExpired;
