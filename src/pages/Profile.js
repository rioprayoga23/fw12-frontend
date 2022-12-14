// @ts-nocheck

import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/img/profile.png";

import Footer from "../components/Footer";
import FormInputPassword from "../components/form/FormInputPassword";
import FormLabel from "../components/form/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { logout as logoutAction } from "../redux/reducers/auth";

const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const [dataUser, setDataUser] = useState();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogout = () => {
    dispatch(logoutAction());
    navigate("/signIn");
  };

  const updateProfile = async (firstName, lastName, email, phoneNumber) => {
    try {
      const { data } = await axios.patch(
        "https://fw12-backend-roan.vercel.app/profile",
        { firstName, lastName, email, phoneNumber },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  const updatePassword = async (password) => {
    try {
      const { data } = await axios.patch(
        "https://fw12-backend-roan.vercel.app/profile",
        { password },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  const getUserProfile = async () => {
    const { data } = await axios.get(
      `https://fw12-backend-roan.vercel.app/profile`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const { results } = data;
    setDataUser(results);
  };

  const handlerDetailInformation = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    updateProfile(firstName, lastName, email, phoneNumber);
  };

  const handlerUpdatePassword = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
      updatePassword(password);
    } else {
      setMessage("Password not match");
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <Fragment>
      <Navbar login={token} />

      <div className="bg-secondary px-24 pb-24 flex gap-5 font-Mulish md:px-5 lg:px-10 md:flex-col">
        <div className="w-1/4 md:w-full lg:w-1/3">
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
              <button
                className="w-full bg-primary py-3 rounded-lg text-white"
                onClick={handlerLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/4 md:w-full lg:w-2/3">
          <div className="mt-10">
            <div className="bg-white p-7 items-center rounded-md md:flex md:flex-col md:gap-3">
              <Link
                to="/profile"
                className="text-primary font-semibold mr-10 md:mr-0"
              >
                Account Settings
              </Link>
              <Link to="/orderHistory" className="text-[#AAAAAA] font-semibold">
                Order History
              </Link>
            </div>
          </div>
          <div className="mt-9 lg:w-full">
            {message && (
              <div
                className={`p-4 ${
                  message.includes("Profile updated")
                    ? `bg-green-200 border-2 border-green-300`
                    : `bg-red-200 border-2 border-red-300`
                }  rounded-xl mb-5 text-center`}
              >
                {message}
              </div>
            )}
            <form onSubmit={handlerDetailInformation}>
              <div className="bg-white rounded-md p-7 md:w-full">
                <h3 className="font-semibold">Details Information</h3>
                <div className="border border-b my-5"></div>
                <div className="flex gap-4 md:flex-col lg:w-full lg:flex-col">
                  <div className="flex flex-col flex-1 lg:w-full">
                    <FormLabel for="firstName" name="First Name" />
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      className="border-2 p-4 rounded-2xl mb-5 focus:outline-none"
                      defaultValue={dataUser?.firstName}
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1 lg:w-full">
                    <FormLabel for="lastName" name="Last Name" />
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      className="border-2 p-4 rounded-2xl mb-5 focus:outline-none"
                      defaultValue={dataUser?.lastName}
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-4 md:flex-col lg:flex-col">
                  <div className="flex flex-col flex-1">
                    <FormLabel for="email" name="Email" />
                    <input
                      id="email"
                      type="text"
                      name="email"
                      className="border-2 p-4 rounded-2xl mb-5 focus:outline-none"
                      defaultValue={dataUser?.email}
                      required
                    />
                  </div>

                  <div className="flex flex-col flex-1 ">
                    <FormLabel for="phoneNumber" name="Phone Number" />
                    <div className="flex border-2 p-4 rounded-2xl w-full">
                      <input
                        type="text"
                        placeholder="+62"
                        className="w-10 focus:outline-none"
                        disabled
                      />
                      <div className="border border-l-[#DEDEDE]"></div>
                      <input
                        type="text"
                        name="phoneNumber"
                        className="w-full focus:outline-none ml-4"
                        defaultValue={dataUser?.phoneNumber}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-80 p-4 rounded-lg bg-primary mt-5 text-white md:w-full">
                Update changes
              </button>
            </form>
          </div>
          <div className="mt-9 md:w-full">
            <form onSubmit={handlerUpdatePassword}>
              <div className="bg-white rounded-md p-7">
                <h3 className="font-semibold">Account and Privacy</h3>
                <div className="border border-b my-5"></div>
                <div className="flex gap-4 md:flex-col lg:flex-col">
                  <div className="flex flex-col flex-1 ">
                    <FormLabel for="password" name="New Password" />
                    <FormInputPassword
                      id={"password"}
                      type={"password"}
                      name={"password"}
                      placeholder={"Write your password"}
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <FormLabel for="confirmPassword" name="Confirm Password" />
                    <FormInputPassword
                      id={"confirmPassword"}
                      type={"password"}
                      name={"confirmPassword"}
                      placeholder={"Confirm your password"}
                    />
                  </div>
                </div>
              </div>
              <button className="w-80 p-4 rounded-lg bg-primary mt-5 text-white md:w-full">
                Update changes
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
