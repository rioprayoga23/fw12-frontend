import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import profile from "../assets/img/profile.png";

import Footer from "../components/Footer";
import FormInputPassword from "../components/form/FormInputPassword";
import FormLabel from "../components/form/FormLabel";
import FormInput from "../components/form/FormInput";

const Profile = () => {
  return (
    <Fragment>
      <Navbar login={true} />

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
              <button className="w-full bg-primary py-3 rounded-lg text-white">
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
            <div className="bg-white rounded-md p-7 md:w-full">
              <h3 className="font-semibold">Details Information</h3>
              <div className="border border-b my-5"></div>
              <div className="flex gap-4 md:flex-col lg:w-full lg:flex-col">
                <div className="flex flex-col flex-1 lg:w-full">
                  <FormLabel for="firstName" name="First Name" />
                  <FormInput
                    id={"firstName"}
                    type={"text"}
                    name={"firstName"}
                    placeholder={"Write your email"}
                  />
                </div>
                <div className="flex flex-col flex-1 lg:w-full">
                  <FormLabel for="lastName" name="Last Name" />
                  <FormInput
                    id={"lastName"}
                    type={"text"}
                    name={"lastName"}
                    placeholder={"Write your last name"}
                  />
                </div>
              </div>
              <div className="flex gap-4 md:flex-col lg:flex-col">
                <div className="flex flex-col flex-1">
                  <FormLabel for="email" name="Email" />
                  <FormInput
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    placeholder={"Write your email"}
                  />
                </div>

                <div className="flex flex-col flex-1 ">
                  <FormLabel for="phoneNumber" name="Phone Number" />
                  <div className="flex border-2 p-4 rounded-2xl w-full">
                    <input
                      type="text"
                      placeholder="+62"
                      className="w-10 focus:outline-none"
                    />
                    <div className="border border-l-[#DEDEDE]"></div>
                    <input
                      type="text"
                      className="w-full focus:outline-none ml-4"
                      placeholder="81445687121"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="w-80 p-4 rounded-lg bg-primary mt-5 text-white md:w-full">
              Update changes
            </button>
          </div>
          <div className="mt-9 md:w-full">
            <div className="bg-white rounded-md p-7">
              <h3 className="font-semibold">Account and Privacy</h3>
              <div className="border border-b my-5"></div>
              <div className="flex gap-4 md:flex-col lg:flex-col">
                <div className="flex flex-col flex-1 ">
                  <FormLabel for="firstName" name="New Password" />
                  <FormInputPassword
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"Write your password"}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <FormLabel for="lastName" name="Confirm Password" />
                  <FormInputPassword
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"Confirm your password"}
                  />
                </div>
              </div>
            </div>
            <button className="w-80 p-4 rounded-lg bg-primary mt-5 text-white md:w-full">
              Update changes
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
