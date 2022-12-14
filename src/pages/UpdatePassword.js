// @ts-nocheck

import React, { useState } from "react";
import brand from "../assets/img/brand.png";
import { useNavigate } from "react-router-dom";

import FormInputPassword from "../components/form/FormInputPassword";
import FormInput from "../components/form/FormInput";
import FormLabel from "../components/form/FormLabel";
import ButtonAction from "../components/form/ButtonAction";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;

  const [message, setMessage] = useState("");

  const updatePassword = async (code, password, confirmPassword) => {
    try {
      const form = new URLSearchParams({
        email,
        code,
        password,
        confirmPassword,
      });

      const { data } = await axios.post(
        "https://fw12-backend-roan.vercel.app/auth/resetPassword",
        form
      );
      setMessage(data.message);

      setTimeout(() => {
        navigate("/signIn");
      }, 3000);
    } catch (error) {
      const { data } = error.response;
      setMessage(data.message);
    }
  };

  const handlerUpdatePassword = (event) => {
    event.preventDefault();
    const code = event.target.code.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    updatePassword(code, password, confirmPassword);
  };

  return (
    <div className="flex">
      <div className="bg-hero bg-cover w-3/4 lg:hidden">
        <div className="bg-colorAuth/80 flex flex-col justify-center min-h-screen">
          <div className="px-24">
            <img src={brand} alt="" className="w-60 pb-12" />
            <div className="font-Inter text-5xl text-white pb-5">
              Lets reset your password
            </div>
            <p className="font-Mulish text-2xl text-white/70 pb-10">
              To be able to use your account again, please complete the
              following steps.
            </p>
            <div>
              <li className="list-none font-Mulish">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center relative">
                    <p className="text-white">1</p>
                    <div className="border-l-2 h-8 border-white absolute -bottom-8"></div>
                  </div>
                  <div className="text-white font-semibold">
                    Fill your complete email
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center relative mt-7">
                    <p className="text-white">2</p>
                    <div className="border-l-2 h-8 border-white absolute -bottom-8"></div>
                  </div>
                  <div className="text-white font-semibold mt-8">
                    Check your email
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center relative mt-7">
                    <p className="text-primary">3</p>
                    <div className="border-l-2 h-8 border-white absolute -bottom-7"></div>
                  </div>
                  <div className="text-white font-semibold mt-8">
                    Enter your new password
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center relative mt-7">
                    <p className="text-white">4</p>
                  </div>
                  <div className="text-white font-semibold mt-8">Done</div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-2/4 lg:w-full">
        <div className="w-full px-14 md:px-7 md:mt-20 md:my-16 lg:px-32 lg:my-28">
          <div className="font-Inter">
            <h1 className="text-2xl font-semibold mb-4">
              Fill your complete email
            </h1>
            <p className="text-[#AAAAAA] text-md mb-9">
              we'll send a link to your email shortly
            </p>
            {message && (
              <div
                className={`p-4 ${
                  message.includes("Password updated, please relogin")
                    ? `bg-green-200 border-2 border-green-300`
                    : `bg-red-200 border-2 border-red-300`
                }  rounded-xl mb-5 text-center`}
              >
                {message}
              </div>
            )}
          </div>
          <form onSubmit={handlerUpdatePassword}>
            <div className="flex flex-col">
              <FormLabel for={"Code"} />
              <FormInput
                id={"code"}
                name={"code"}
                placeholder={"Write your code"}
              />

              <FormLabel for={"Password"} />
              <FormInputPassword
                id={"password"}
                name={"password"}
                placeholder={"Write your password"}
              />

              <FormLabel for={"Confirm Password"} />
              <FormInputPassword
                id={"confirmPassword"}
                name={"confirmPassword"}
                placeholder={"Write your confirm password"}
              />
            </div>
            <ButtonAction name={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
