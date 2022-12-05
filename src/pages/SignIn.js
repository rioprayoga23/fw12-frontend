import React from "react";
import Brand from "../assets/img/brand.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import InputAuth from "../components/auth/InputAuth";
import InputPasswordAuth from "../components/auth/InputPasswordAuth";
import LabelAuth from "../components/auth/LabelAuth";
import ButtonAuth from "../components/auth/ButtonAuth";

const SignIn = () => {
  const navigate = useNavigate();

  const handlerLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex">
      <div className="bg-hero bg-cover w-3/4">
        <div className="bg-colorAuth/80 flex flex-col justify-center items-center min-h-screen">
          <img src={Brand} alt="" />
          <div className="font-Inter text-4xl text-white">
            wait, watch, wow!
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-full px-14">
          <div className="font-Inter">
            <h1 className="text-5xl font-semibold mb-4">Sign In</h1>
            <p className="text-[#AAAAAA] text-md mb-9">
              Sign in with your data that you entered during your registration
            </p>
          </div>
          <form onSubmit={handlerLogin}>
            <div className="flex flex-col">
              <LabelAuth for={"Email"} />
              <InputAuth id={"email"} placeholder={"Write your email"} />

              <LabelAuth for={"Password"} />
              <InputPasswordAuth
                id={"password"}
                placeholder={"Write your password"}
              />
            </div>
            <ButtonAuth name={"Sign In"} />
            <div className="flex flex-col items-center mt-7 gap-2">
              <p>
                htmlForgot your password?
                <span>
                  <Link
                    to="/resetPassword"
                    className="text-[#5F2EEA] underline"
                  >
                    Reset Now
                  </Link>
                </span>
              </p>
              <p>
                Don't have an account?
                <span>
                  <Link
                    to="/resetPassword"
                    className="text-[#5F2EEA] underline"
                  >
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
