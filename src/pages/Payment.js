// @ts-nocheck

import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logoWarning from "../assets/img/warning.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentMethod from "../components/PaymentMethod";
import FormLabel from "../components/form/FormLabel";
import { useSelector, useDispatch } from "react-redux";
import http from "../helpers/http";
import Spinner from "../components/Spinner";
import { transactionAction } from "../redux/actions/transactions";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Payment = () => {
  const { total } = useSelector((state) => state.transactions);
  const { bookingDate } = useSelector((state) => state.transactions);
  const { movieId } = useSelector((state) => state.transactions);
  const { title } = useSelector((state) => state.transactions);
  const { cinemaId } = useSelector((state) => state.transactions);
  const { cinemaName } = useSelector((state) => state.transactions);
  const { bookingTime } = useSelector((state) => state.transactions);
  const { seatNum } = useSelector((state) => state.transactions);
  const { isLoadingBtn } = useSelector((state) => state.transactions);

  const [isLoading, setIsLoading] = useState(false);
  const [dataPaymentMethod, setDataPaymentMethods] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const cb = async () => {
    const alert = await MySwal.fire({
      title: <div className="text-green-500">Your order is success</div>,
      html: "You can check your ticket in order history page",
      icon: "success",
      confirmButtonText: "Oke",
    });
    if (alert.isConfirmed) {
      navigate("/orderHistory");
    }
    if (alert.dismiss) {
      navigate("/orderHistory");
    }
  };

  const pay = () => {
    if (selectedPayment) {
      const dataTrx = {
        bookingDate,
        movieId,
        cinemaId,
        email: form.email,
        fullName: form.fullName,
        paymentMethodId: selectedPayment,
        phoneNumber: form.phoneNumber,
        seatNum: seatNum,
        total,
        bookingTime,
      };

      dispatch(transactionAction({ dataTrx, cb }));
    } else {
      MySwal.fire({
        title: <div className="text-red-500">Please choose payment method</div>,
        icon: "warning",
      });
    }
  };

  const getPaymentMethod = async () => {
    try {
      setIsLoading(true);
      const { data } = await http().get("/paymentMethod");
      setIsLoading(false);
      setDataPaymentMethods(data.results);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPaymentMethod();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="bg-secondary px-24 pb-24 flex gap-5 font-Mulish md:px-5 lg:px-10 md:flex-col-reverse xxxl:px-[510px]">
        <div className="w-2/3 md:w-full">
          <div>
            <h3 className="text-xl font-bold mt-10 mb-6">Movie Selected</h3>
            <div className="bg-white p-5 rounded-md">
              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="text-[#6B6B6B] text-lg">Date & time</div>
                  <div className="font-semibold text-lg text-right">
                    {bookingDate} at{" "}
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
                <div className="border border-[#E6E6E6] w-full mt-4"></div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="text-[#6B6B6B] text-lg">Movie title</div>
                  <div className="font-semibold text-lg text-right">
                    {title}
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full mt-4"></div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="text-[#6B6B6B] text-lg">Cinema name</div>
                  <div className="font-semibold text-lg text-right">
                    {cinemaName} Cinema
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full mt-4"></div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="text-[#6B6B6B] text-lg">
                    Number of tickets
                  </div>
                  <div className="font-semibold text-lg text-right">
                    {seatNum.length} pieces
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full mt-4"></div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="text-[#6B6B6B] text-lg">Total payment</div>
                  <div className="font-semibold text-lg text-right">{`${Intl.NumberFormat(
                    "id-ID",
                    {
                      style: "currency",
                      currency: "IDR",
                    }
                  ).format(total)}`}</div>
                </div>
                <div className="border border-[#E6E6E6] w-full mt-4"></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mt-10 mb-6">
              Choose a Payment Method
            </h3>
            <div className="bg-white rounded-md p-16 md:p-5 lg:p-5">
              {isLoading ? (
                <div className="flex w-full justify-center">
                  <Spinner />
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3 md:grid-cols-2">
                  {dataPaymentMethod?.map((item) => (
                    <div
                      onClick={() => setSelectedPayment(item.id)}
                      className={`border-2 border-[#DEDEDE] flex justify-center items-center py-2 rounded-lg cursor-pointer ${
                        selectedPayment === item.id
                          ? "border-green-600"
                          : "border-[#DEDEDE]"
                      }`}
                      key={item.id}
                    >
                      <PaymentMethod data={item} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-10 md:w-full md:flex-col md:gap-3">
            <Link
              to="/order"
              className="p-3 w-2/6 text-center border-2 border-primary rounded-md text-primary font-semibold md:w-full"
            >
              Prvious step
            </Link>
            <button
              disabled={isLoadingBtn}
              className={`btn p-3 w-2/6 text-center bg-primary btn-success rounded-md text-white font-semibold md:w-full ${
                isLoadingBtn && "loading"
              }`}
              onClick={pay}
            >
              {!isLoadingBtn && "Pay your order"}
            </button>
          </div>
        </div>

        <div className="w-1/3 md:w-full">
          <h3 className="text-xl font-bold mt-10 mb-6">Personal Info</h3>
          <div className="bg-white rounded-md p-7 ">
            <div>
              <FormLabel name="Full Name" for="fullName" />
              <input
                type="text"
                name="fullName"
                className="w-full border border-[#DEDEDE] p-3 mt-2 mb-4 rounded-md focus:outline-none"
                onChange={(e) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
                placeholder="Jonas El Rodriguez"
              />
            </div>
            <div>
              <FormLabel name="Email" for="email" />
              <input
                type="email"
                name="email"
                className="w-full border border-[#DEDEDE] p-3 mt-2 mb-4 rounded-md focus:outline-none"
                onChange={(e) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
                placeholder="Jonas@gmail.com"
                required
              />
            </div>

            <div>
              <FormLabel name="Phone Number" for="phoneNumber" />
              <div className="flex w-full border border-[#DEDEDE] p-3 mt-2 mb-4 rounded-md">
                <input
                  type="text"
                  placeholder="+62"
                  className="w-10 focus:outline-none"
                />
                <div className="border border-l-[#DEDEDE]"></div>
                <input
                  type="email"
                  name="phoneNumber"
                  className="focus:outline-none ml-3 md:w-full lg:w-full"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="089876456777"
                />
              </div>
              <div className="flex gap-5 bg-[#F4B7404D] p-4 items-center mt-7 md:p-2">
                <div>
                  <img src={logoWarning} alt="" />
                </div>
                <span className="text-[#4E4B66]">
                  Fill your data correctly.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Payment;
