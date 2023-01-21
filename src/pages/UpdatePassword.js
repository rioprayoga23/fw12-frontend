// @ts-nocheck

import React, { useState } from "react";
import brand from "../assets/img/brand.png";
import { useNavigate } from "react-router-dom";

import FormLabel from "../components/form/FormLabel";
import { useLocation } from "react-router-dom";
import http from "../helpers/http";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Eye, EyeOff } from "react-feather";
YupPassword(Yup); // extend yup

const updatePasswordSchema = Yup.object().shape({
  code: Yup.string().required("Required"),
  password: Yup.string()
    .password()
    .min(6, "Min length 6")
    .minLowercase(1, "Min Lowecase 1")
    .minUppercase(1, "Min Uppercase 1")
    .minSymbols(1, "Min Symbols 1")
    .minNumbers(1, "Min Numbers 1")
    .required("Required"),
  confirmPassword: Yup.string()
    .password()
    .min(6, "Min length 6")
    .minLowercase(1, "Min Lowecase 1")
    .minUppercase(1, "Min Uppercase 1")
    .minSymbols(1, "Min Symbols 1")
    .minNumbers(1, "Min Numbers 1")
    .required("Required"),
});

const UpdatePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [typeInput, setTypeInput] = useState("password");

  const [showPassword2, setShowPassword2] = useState(false);
  const [typeInput2, setTypeInput2] = useState("password");

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;

  const handlerShowPassword = () => {
    if (showPassword === false) {
      setShowPassword(true);
      setTypeInput("text");
    } else {
      setShowPassword(false);
      setTypeInput("password");
    }
  };

  const handlerShowPassword2 = () => {
    if (showPassword2 === false) {
      setShowPassword2(true);
      setTypeInput2("text");
    } else {
      setShowPassword2(false);
      setTypeInput2("password");
    }
  };

  const updatePassword = async (value) => {
    try {
      const form = new URLSearchParams({
        email,
        code: value.code,
        password: value.password,
        confirmPassword: value.confirmPassword,
      });
      setIsLoading(true);
      const { data } = await http().post("/auth/resetPassword", form);
      setMessage(data.message);
      setTimeout(() => {
        navigate("/signIn");
      }, 2000);
      setIsLoading(false);
    } catch (error) {
      const { data } = error.response;
      setMessage(data.message);
    }
  };

  const doUpdatePassword = (value) => {
    updatePassword(value);
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
          <Formik
            initialValues={{
              code: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={updatePasswordSchema}
            onSubmit={doUpdatePassword}
          >
            {({ errors, touched, dirty }) => (
              <Form>
                <div className="flex flex-col">
                  <FormLabel for={"code"} name="code" />
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="code"
                      placeholder="Write Your Code"
                      className={`border-2 p-4 rounded-2xl focus:outline-none w-full ${
                        errors.code && touched.code && "border-red-500"
                      } ${!errors.code && touched.code && "border-primary"}`}
                    />
                    {errors.code && touched.code && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.code}
                        </span>
                      </label>
                    )}
                  </div>
                  <FormLabel for={"password"} name="Password" />
                  <div className="mb-4 relative">
                    <Field
                      type={typeInput}
                      name="password"
                      placeholder="Write your password"
                      className={`border-2 p-4 rounded-2xl w-full focus:outline-none ${
                        errors.password && touched.password && "border-red-500"
                      } ${
                        !errors.password && touched.password && "border-primary"
                      }`}
                    />
                    {showPassword ? (
                      <Eye
                        className="absolute right-4 top-5 cursor-pointer"
                        onClick={handlerShowPassword}
                      />
                    ) : (
                      <EyeOff
                        className="absolute right-4 top-5 cursor-pointer"
                        onClick={handlerShowPassword}
                      />
                    )}
                    {errors.password && touched.password && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.password}
                        </span>
                      </label>
                    )}
                  </div>
                  <FormLabel for={"confirmPassword"} name="Confirm Password" />
                  <div className="mb-4 relative">
                    <Field
                      type={typeInput2}
                      name="confirmPassword"
                      placeholder="Write your Confirm Password"
                      className={`border-2 p-4 rounded-2xl w-full focus:outline-none ${
                        errors.confirmPassword &&
                        touched.confirmPassword &&
                        "border-red-500"
                      } ${
                        !errors.confirmPassword &&
                        touched.confirmPassword &&
                        "border-primary"
                      }`}
                    />
                    {showPassword2 ? (
                      <Eye
                        className="absolute right-4 top-5 cursor-pointer"
                        onClick={handlerShowPassword2}
                      />
                    ) : (
                      <EyeOff
                        className="absolute right-4 top-5 cursor-pointer"
                        onClick={handlerShowPassword2}
                      />
                    )}
                    {errors.confirmPassword && touched.confirmPassword && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.confirmPassword}
                        </span>
                      </label>
                    )}
                  </div>
                </div>
                <button
                  disabled={!dirty || isLoading}
                  type="submit"
                  className={`bg-primary w-full p-4 mt-4 rounded-2xl text-white font-Mulish font-semibold btn btn-success border-primary shadow-md ${
                    isLoading && "loading"
                  }`}
                >
                  Reset
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
