import React from "react";
import brand from "../assets/img/brand.png";
import { Link, useNavigate } from "react-router-dom";

import FormInput from "../components/form/FormInput";
import FormInputPassword from "../components/form/FormInputPassword";
import FormLabel from "../components/form/FormLabel";
import ButtonAction from "../components/form/ButtonAction";

const SignIn = () => {
  const navigate = useNavigate();

  const handlerLogin = () => {
    navigate("/");
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
      <div className="flex flex-col justify-center w-2/4 lg:w-full">
        <div className="w-full px-24 md:px-7 lg:px-32 lg:my-16 xl:px-10">
          <div className="font-Inter">
            <h1 className="text-5xl font-semibold mb-4">Sign In</h1>
            <p className="text-[#AAAAAA] text-md mb-9">
              Sign in with your data that you entered during your registration
            </p>
          </div>
          <form onSubmit={handlerLogin}>
            <div className="flex flex-col">
              <FormLabel for={"email"} name="Email" />
              <FormInput
                id={"email"}
                type={"email"}
                name={"email"}
                placeholder={"Write your email"}
              />

              <FormLabel for={"password"} name="Password" />
              <FormInputPassword
                id={"password"}
                type={"password"}
                name={"password"}
                placeholder={"Write your password"}
              />
            </div>
            <ButtonAction name={"Sign In"} />
            <div className="flex flex-col items-center mt-7 gap-2 text-[#8692A6]">
              <p>
                Forgot your password?
                <span>
                  <Link
                    to="/forgotPassword"
                    className="text-[#5F2EEA] underline"
                  >
                    Reset Now
                  </Link>
                </span>
              </p>
              <p>
                Don't have an account?
                <span>
                  <Link to="/signUp" className="text-[#5F2EEA] underline">
                    Sign Up
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

export default SignIn;
