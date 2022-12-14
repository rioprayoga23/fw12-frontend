// @ts-nocheck

import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logoBCA from "../assets/img/Bank BCA Logo (SVG-240p) - FileVector69 1.png";
import logoBRI from "../assets/img/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.png";
import logoDana from "../assets/img/Logo DANA (PNG-240p) - FileVector69 1.png";
import logoGoPay from "../assets/img/Logo GoPay (SVG-240p) - FileVector69 1.png";
import logoGooglePay from "../assets/img/logos_google-pay.png";
import logoPaypal from "../assets/img/logos_paypal.png";
import logoVisa from "../assets/img/logos_visa.png";
import logoOvo from "../assets/img/Vector.png";
import logoWarning from "../assets/img/warning.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentMethod from "../components/PaymentMethod";
import FormLabel from "../components/form/FormLabel";
import { useSelector, useDispatch } from "react-redux";
import { createTransaction } from "../redux/actions/transactions";

const Payment = () => {
  const token = useSelector((state) => state.auth.token);
  const data = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    paymentMethodId: 2,
  });

  const cb = () => {
    navigate("/ticketResult");
  };

  const pay = () => {
    dispatch(createTransaction({ data, form, token, cb }));
  };

  return (
    <Fragment>
      <Navbar login={token} />
      <div className="bg-secondary px-24 pb-24 flex gap-5 font-Mulish md:px-5 lg:px-10 md:flex-col-reverse">
        <div className="w-2/3 md:w-full">
          <div>
            <h3 className="text-xl font-bold mt-10 mb-6">Movie Selected</h3>
            <div className="bg-white p-5 rounded-md">
              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="text-[#6B6B6B] text-lg">Date & time</div>
                  <div className="font-semibold text-lg text-right">
                    Tuesday, 07 July 2020 at 02:00
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full mt-4"></div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="text-[#6B6B6B] text-lg">Movie title</div>
                  <div className="font-semibold text-lg text-right">
                    Spider-Man: Homecoming
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full mt-4"></div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="text-[#6B6B6B] text-lg">Cinema name</div>
                  <div className="font-semibold text-lg text-right">
                    CineOne21 Cinema
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
                    3 pieces
                  </div>
                </div>
                <div className="border border-[#E6E6E6] w-full mt-4"></div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <div className="text-[#6B6B6B] text-lg">Total payment</div>
                  <div className="font-semibold text-lg text-right">$30,00</div>
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
              <div className="grid grid-cols-4 gap-3 md:grid-cols-2">
                <PaymentMethod image={logoBCA} />
                <PaymentMethod image={logoBRI} />
                <PaymentMethod image={logoDana} />
                <PaymentMethod image={logoGoPay} />
                <PaymentMethod image={logoGooglePay} />
                <PaymentMethod image={logoPaypal} />
                <PaymentMethod image={logoVisa} />
                <PaymentMethod image={logoOvo} />
              </div>
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
              className="p-3 w-2/6 text-center bg-primary rounded-md text-white font-semibold md:w-full"
              onClick={pay}
            >
              Pay your order
            </button>
          </div>
        </div>

        <div className="w-1/3 md:w-full">
          <h3 className="text-xl font-bold mt-10 mb-6">Personal Info</h3>
          <div className="bg-white rounded-md p-7 ">
            <div>
              <FormLabel for="Full Name" />
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
              <FormLabel for="Email" />
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
              />
            </div>

            <div>
              <FormLabel for="Phone Number" />
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
