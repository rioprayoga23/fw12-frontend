import React from "react";
import brand from "../assets/img/brand.png";

import { Link, useNavigate } from "react-router-dom";

import FormInput from "../components/form/FormInput";
import FormInputPassword from "../components/form/FormInputPassword";
import FormLabel from "../components/form/FormLabel";
import ButtonAction from "../components/form/ButtonAction";

const SignUp = () => {
  const navigate = useNavigate();

  const handlerSignUp = () => {
    navigate("/signIn");
  };

  return (
    <div className="flex">
      <div className="bg-hero bg-cover w-3/4 lg:hidden">
        <div className="bg-colorAuth/80 flex flex-col justify-center items-center min-h-screen">
          <img src={brand} alt="" />
          <div className="font-Inter text-4xl text-white">
            wait, watch, wow!
          </div>
        </div>
      </div>
      <div className="flex flex-col w-2/4 max-h-screen overflow-y-scroll lg:w-full">
        <div className="w-full px-14 pb-20 md:px-7 lg:px-32">
          <div className="font-Inter">
            <h1 className="text-5xl font-semibold mb-4 pt-24 md:pt-16 lg:pt-24">
              Sign Up
            </h1>
            <p className="text-[#AAAAAA] text-md mb-9">Fill your additional</p>
          </div>
          <form onSubmit={handlerSignUp}>
            <div className="flex flex-col">
              <FormLabel for={"firstName"} name="First Name" />
              <FormInput
                id={"firstName"}
                type={"text"}
                name={"firstName"}
                placeholder={"Write your first name"}
              />

              <FormLabel for={"lastName"} name="Last Name" />
              <FormInput
                id={"lastName"}
                type={"text"}
                name={"lastName"}
                placeholder={"Write your last name"}
              />

              <FormLabel for={"phoneNumber"} name="Phone Number" />
              <FormInput
                id={"phoneNumber"}
                type={"text"}
                name={"phoneNumber"}
                placeholder={"Write your phone number"}
              />

              <FormLabel for={"email"} name="Email" />
              <FormInput
                id={"email"}
                type={"email"}
                name={"email"}
                placeholder={"Write your email"}
              />

              <FormLabel for={"Password"} name="Password" />
              <FormInputPassword
                id={"password"}
                type={"password"}
                name={"password"}
                placeholder={"Write your password"}
              />
            </div>
            <ButtonAction name={"Sign Up"} />
            <div className="flex flex-col items-center mt-7 gap-2">
              <p className="text-[#8692A6]">
                Already have account?
                <span>
                  <Link to="/signIn" className="text-[#5F2EEA] underline">
                    Sign In
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
