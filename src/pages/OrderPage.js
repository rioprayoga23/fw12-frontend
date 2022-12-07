import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import ebvId from "../assets/img/ebu.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const OrderPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="bg-secondary px-24 pb-24 flex gap-5 font-Mulish">
        <div className="w-2/3">
          <div>
            <h3 className="text-xl font-bold mt-10 mb-6">Movie Selected</h3>
            <div className="flex bg-white p-5 items-center rounded-md">
              <h3 className="flex-1 text-xl font-bold ">
                Spider-Man: Homecoming
              </h3>
              <Link to="/viewAll">
                <div className="bg-secondary p-3 rounded-lg text-primary font-semibold">
                  Change movie
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mt-10 mb-6">Choose Your Seat</h3>
            <div className="bg-white rounded-md p-16">
              <div className="flex flex-col mb-5 items-center justify-center gap-3">
                <h5 className="font-semibold">Screen</h5>
                <div className="border-4 border-[#D6D8E7] w-full rounded-md"></div>
              </div>
              <div className="flex gap-9">
                <div>
                  <div className="grid grid-cols-8">
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      A
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      B
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      C
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      D
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      E
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      F
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      G
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      1
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      2
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      3
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      4
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      5
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      6
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      7
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-7">
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7] hover:bg-primary cursor-pointer"></div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      8
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      9
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      10
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      11
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      12
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      13
                    </div>
                    <div className="w-8 h-8 m-1 rounded-md bg-transparent cursor-pointer flex items-center justify-center">
                      14
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Seating key</h3>
                <div className="flex gap-7">
                  <div className="flex gap-3 items-center mt-3">
                    <div className="w-8 h-8 m-1 rounded-md bg-[#D6D8E7]"></div>
                    <div>Available</div>
                  </div>
                  <div className="flex gap-3 items-center mt-3">
                    <div className="w-8 h-8 m-1 rounded-md bg-primary"></div>
                    <div>Selected</div>
                  </div>
                  <div className="flex gap-3 items-center mt-3">
                    <div className="w-8 h-8 m-1 rounded-md bg-[#6E7191]"></div>
                    <div>Sold</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <Link
              to="/viewAll"
              className="p-3 w-2/6 text-center border-2 border-primary rounded-md text-primary font-semibold"
            >
              Change your movie
            </Link>
            <Link
              to="/payment"
              className="p-3 w-2/6 text-center bg-primary rounded-md text-white font-semibold"
            >
              Checkout now
            </Link>
          </div>
        </div>
        <div className="w-1/3">
          <h3 className="text-xl font-bold mt-10 mb-6">Order Info</h3>
          <div className="bg-white rounded-md p-5">
            <div className="flex flex-col items-center">
              <div className="py-3">
                <img src={ebvId} alt="" />
              </div>
              <h3 className="text-2xl">ebv.id cinema</h3>
            </div>

            <div className="py-5 flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="text-[#6B6B6B]">Movie selected</div>
                <div className="font-semibold">Spider-Man: Homecoming</div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#6B6B6B]">Tuesday, 07 July 2020</div>
                <div className="font-semibold">02:00</div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#6B6B6B]">One ticket price</div>
                <div className="font-semibold">$10</div>
              </div>
              <div className="flex justify-between">
                <div className="text-[#6B6B6B]">Seat choosed</div>
                <div className="font-semibold">C4, C5, C6</div>
              </div>
            </div>
            <div className="border border-b-[#E6E6E6] mt-3"></div>
            <div className="flex justify-between mt-7">
              <div className="text-lg font-bold">Total Payment</div>
              <div className="text-2xl font-bold text-primary">$30</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default OrderPage;
