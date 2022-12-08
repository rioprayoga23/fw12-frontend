import React from "react";
import Brand from "../assets/img/brand.png";
import { useNavigate } from "react-router-dom";

import FormInput from "../components/form/FormInput";
import FormLabel from "../components/form/FormLabel";
import ButtonAction from "../components/form/ButtonAction";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handlerForgotPassword = () => {
    navigate("/updatePassword");
  };

  return (
    <div className="flex">
      <div className="bg-hero bg-cover w-3/4 lg:hidden">
        <div className="bg-colorAuth/80 flex flex-col justify-center min-h-screen">
          <div className="px-24">
            <img src={Brand} alt="" className="w-60 pb-12" />
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
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center relative">
                    <p className="text-primary">1</p>
                    <div className="border-l-2 h-8 border-white absolute -bottom-7"></div>
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
                  <div className="w-9 h-9 rounded-full border-white border-2 flex items-center justify-center relative mt-7">
                    <p className="text-white">3</p>
                    <div className="border-l-2 h-8 border-white absolute -bottom-8"></div>
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
      <div className="flex flex-col justify-center w-2/4 lg:w-full lg:mt-20">
        <div className="w-full px-14 md:px-7 lg:px-32 lg:my-4">
          <div className="font-Inter">
            <h1 className="text-2xl font-semibold mb-4">
              Fill your complete email
            </h1>
            <p className="text-[#AAAAAA] text-md mb-9">
              we'll send a link to your email shortly
            </p>
          </div>
          <form onSubmit={handlerForgotPassword}>
            <div className="flex flex-col">
              <FormLabel for={"email"} name="Email" />
              <FormInput
                id={"email"}
                type={"email"}
                name={"email"}
                placeholder={"Write your email"}
              />
            </div>
            <ButtonAction name={"Send"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
