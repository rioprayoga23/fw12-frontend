// @ts-nocheck

import React, { Fragment, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { chooseSeat } from "../redux/reducers/transactions";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const OrderPage = () => {
  const { price } = useSelector((state) => state.transactions);
  const { bookingTime } = useSelector((state) => state.transactions);
  const { bookingDate } = useSelector((state) => state.transactions);
  const { title } = useSelector((state) => state.transactions);
  const { cinemaName } = useSelector((state) => state.transactions);
  const { cinemaPicture } = useSelector((state) => state.transactions);
  const [selectedSeat, setSelectedSeat] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const selectSeat = (seat) => {
    if (selectedSeat.includes(seat)) {
      setSelectedSeat([...selectedSeat.filter((i) => i !== seat)]);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
    }
  };

  const doCheckout = () => {
    if (selectedSeat.length) {
      dispatch(
        chooseSeat({
          seatNum: selectedSeat,
          total: selectedSeat?.length * price,
        })
      );
      navigate("/Payment");
    } else {
      MySwal.fire({
        title: <div className="text-red-500">Please choose seat</div>,
        icon: "warning",
      });
    }
  };
  return (
    <Fragment>
      <Navbar />
      <div className="bg-secondary px-24 pb-24 flex gap-5 font-Mulish md:px-5 md:flex-col-reverse lg:px-10 xxxl:px-[510px]">
        <div className="w-2/3 md:w-full">
          <div className="md:w-full">
            <h3 className="text-xl font-bold mt-10 mb-6">Movie Selected</h3>
            <div className="flex bg-white p-5 items-center rounded-md md:flex-col md:w-full md:gap-3">
              <h3 className="flex-1 text-xl font-bold md:text-lg ">{title}</h3>
              <Link to="/viewAll" className="md:w-full">
                <div className="bg-secondary p-3 rounded-lg text-primary font-semibold md:text-center">
                  Change movie
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-10 mb-6">Choose Your Seat</h3>
            <div className="bg-white rounded-md p-16 md:p-5 lg:p-5 xl:p-5">
              <div className="flex flex-col mb-5 items-center justify-center gap-3">
                <h5 className="font-semibold">Screen</h5>
                <div className="border-4 border-[#D6D8E7] w-full rounded-md"></div>
              </div>
              <div className="flex gap-9 md:overflow-scroll lg:overflow-scroll justify-between">
                <div className="md:flex-shrink-0 lg:flex-shrink-0">
                  <div className="grid grid-rows-8 gap-3">
                    {["A", "B", "C", "D", "E", "F", "G", " "].map(
                      (alpha, index) => {
                        return (
                          <div className="grid grid-cols-8 gap-3" key={index}>
                            {["0", "1", "2", "3", "4", "5", "6", "7"].map(
                              (num, index) => {
                                if (num > 0) {
                                  if (alpha !== " ") {
                                    const seatNum = `${alpha}${num}`;
                                    return (
                                      <button
                                        key={index}
                                        onClick={() => selectSeat(seatNum)}
                                        className={`hover:bg-primary h-8 w-8 md:h-6 md:w-6 xl:w-6 xl:h-6 rounded-sm ${
                                          (selectedSeat.includes(seatNum) &&
                                            " bg-primary") ||
                                          " bg-gray-100"
                                        }`}
                                      ></button>
                                    );
                                  } else {
                                    return (
                                      <div
                                        key={index}
                                        className="h-6 w-6 rounded-sm text-center"
                                      >
                                        {num}
                                      </div>
                                    );
                                  }
                                } else {
                                  return (
                                    <div
                                      key={index}
                                      className="h-6 w-6 rounded-sm text-center"
                                    >
                                      {alpha}
                                    </div>
                                  );
                                }
                              }
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                <div className="md:flex-shrink-0 lg:flex-shrink-0">
                  <div className="grid grid-rows-8 gap-3">
                    {["A", "B", "C", "D", "E", "F", "G", " "].map(
                      (alpha, index) => {
                        return (
                          <div className="grid grid-cols-8 gap-3" key={index}>
                            {["8", "9", "10", "11", "12", "13", "14"].map(
                              (num, index) => {
                                if (num > 0) {
                                  if (alpha !== " ") {
                                    const seatNum = `${alpha}${num}`;
                                    return (
                                      <button
                                        key={index}
                                        onClick={() => selectSeat(seatNum)}
                                        className={`hover:bg-primary h-8 w-8 md:h-6 md:w-6 xl:w-6 xl:h-6 rounded-sm ${
                                          (selectedSeat.includes(seatNum) &&
                                            " bg-primary") ||
                                          " bg-gray-100"
                                        }`}
                                      ></button>
                                    );
                                  } else {
                                    return (
                                      <div
                                        key={index}
                                        className="h-6 w-6 rounded-sm text-center"
                                      >
                                        {num}
                                      </div>
                                    );
                                  }
                                } else {
                                  return (
                                    <div
                                      key={index}
                                      className="h-6 w-6 rounded-sm text-center"
                                    >
                                      {alpha}
                                    </div>
                                  );
                                }
                              }
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Seating key</h3>
                <div className="flex gap-7 md:flex-col md:gap-0">
                  <div className="flex gap-3 items-center mt-3">
                    <div className="w-8 h-8 md:w-6 md:h-6 m-1 rounded-md bg-[#D6D8E7]"></div>
                    <div>Available</div>
                  </div>
                  <div className="flex gap-3 items-center mt-3">
                    <div className="w-8 h-8 md:w-6 md:h-6 m-1 rounded-md bg-primary"></div>
                    <div>Selected</div>
                  </div>
                  <div className="flex gap-3 items-center mt-3">
                    <div className="w-8 h-8 md:w-6 md:h-6 m-1 rounded-md bg-[#6E7191]"></div>
                    <div>Sold</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10 md:flex-col md:w-full md:gap-3 lg:w-full lg:gap-4">
            <Link
              to="/viewAll"
              className="p-3 w-2/6 text-center border-2 border-primary rounded-md text-primary font-semibold md:w-full lg:w-full"
            >
              Change your movie
            </Link>
            <button
              className="p-3 w-2/6 text-center bg-primary rounded-md text-white font-semibold md:w-full lg:w-full"
              onClick={doCheckout}
            >
              Checkout now
            </button>
          </div>
        </div>
        <div className="w-1/3 md:w-full">
          <h3 className="text-xl font-bold mt-10 mb-6">Order Info</h3>
          <div className="bg-white rounded-md p-5">
            <div className="flex flex-col items-center">
              <div className="py-3">
                <img src={cinemaPicture} alt="" />
              </div>
              <h3 className="text-2xl">{cinemaName}</h3>
            </div>

            <div className="py-5 flex flex-col gap-3">
              <div className="flex justify-between md:gap-3">
                <div className="text-[#6B6B6B]">Movie selected</div>
                <div className="font-semibold text-right">{title}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#6B6B6B]">{bookingDate}</div>
                <div className="font-semibold">
                  {new Date(`2023-01-01 ${bookingTime}`).toLocaleString(
                    "en-US",
                    {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#6B6B6B]">One ticket price</div>
                <div className="font-semibold">{price}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#6B6B6B]">Seat choosed</div>
                <div className="font-semibold flex">
                  {selectedSeat?.map((seat) => seat).join(", ")}
                </div>
              </div>
            </div>
            <div className="border border-b-[#E6E6E6] mt-3"></div>
            <div className="flex justify-between mt-7">
              <div className="text-lg font-bold">Total Payment</div>
              <div className="text-xl font-bold text-primary">
                {`${Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(selectedSeat?.length * price)}`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default OrderPage;
