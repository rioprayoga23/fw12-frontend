// @ts-nocheck

import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import brandSmall from "../assets/img/brand-white.png";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import http from "../helpers/http";
import Spinner from "../components/Spinner";

const TicketResultExpired = (props) => {
  const token = useSelector((state) => state.auth.token);

  const [isLoading, setIsLoading] = useState(false);
  const [dataTicket, setDataTicket] = useState({});

  const location = useLocation();
  const { trxId } = location.state;

  useEffect(() => {
    try {
      const getTicketResult = async () => {
        setIsLoading(true);
        const { data } = await http(token).get(`/ticket/${trxId}`);
        setDataTicket(data.results);
        setIsLoading(false);
      };
      getTicketResult();
    } catch (error) {
      setIsLoading(false);
    }
  }, [token, trxId]);

  return (
    <Fragment>
      <Navbar />

      <div className="bg-secondary py-20 px-64 font-Mulish md:px-5 lg:px-5 xl:px-10">
        <div className="bg-white flex flex-col items-center p-10 md:p-5">
          <h3 className="text-lg font-semibold mb-10 md:mb-0">
            Proof of Payment
          </h3>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="w-full relative overflow-hidden ">
              <div className="bg-primary pl-20 py-3 flex items-center rounded-t-2xl md:hidden lg:pl-10">
                <div className="flex-1">
                  <img src={brandSmall} alt="" />
                </div>
                <div className="text-lg text-white mr-10">Admit One</div>
                <div className="flex-1 flex justify-end mr-16">
                  <img src={brandSmall} alt="" />
                </div>
                <div className="flex flex-col h-full items-center absolute top-0 right-64">
                  <div className="w-[1px] border border-dashed h-full absolute top-0"></div>
                  <div className="w-16 h-16 rounded-full border-2 border-dashed bg-white absolute -top-7"></div>
                  <div className="w-16 h-16 rounded-full border-2 border-dashed bg-white  absolute -bottom-7"></div>
                </div>
              </div>
              <div className="pl-10 flex items-center border rounded-b-2xl pb-10 md:flex-col-reverse md:pl-0 md:border-none md:w-full lg:pl-5">
                <div className="flex-1 md:w-full md:m-auto">
                  <div className="mb-4 mt-5 md:mb-3">
                    <p className="text-[#AAAAAA]">Movie</p>
                    <h3 className="font-semibold">{dataTicket.title}</h3>
                  </div>
                  <div className="flex mb-4 gap-9 md:gap-3 md:w-full md:flex-col lg:gap-4">
                    <div className="flex-1 md:w-full">
                      <p className="text-[#AAAAAA]">Date</p>
                      <h3 className="font-semibold">
                        {dataTicket.bookingDate}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#AAAAAA]">Time</p>
                      <h3 className="font-semibold">
                        {new Date(dataTicket.bookingTime).toLocaleString(
                          "en-US",
                          {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          }
                        )}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#AAAAAA]">Category</p>
                      <h3 className="font-semibold">{dataTicket.genre}</h3>
                    </div>
                  </div>
                  <div className="flex gap-9 md:gap-3 md:flex-col lg:gap-4">
                    <div className="flex-1">
                      <p className="text-[#AAAAAA]">Count</p>
                      <h3 className="font-semibold">
                        {dataTicket.count} pieces
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#AAAAAA]">Seats</p>
                      <h3 className="font-semibold">{dataTicket.seatNum}</h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#AAAAAA]">Price</p>
                      <h3 className="font-semibold text-primary">
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(dataTicket.total)}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex w-[35%] justify-end mr-10 md:m-auto md:justify-center">
                  <div className="w-[171px] h-[171px] bg-[#F5F6F8] flex items-center justify-center font-semibold px-5 text-center mt-10">
                    Ticket Expired
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TicketResultExpired;
