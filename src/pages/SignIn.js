// @ts-nocheck

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormLabel from "../components/form/FormLabel";

import { loginAction } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

import { Eye, EyeOff } from "react-feather";
import brand from "../assets/img/brand.png";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [typeInput, setTypeInput] = useState("password");

  const { isLoading } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerShowPassword = () => {
    if (showPassword === false) {
      setShowPassword(true);
      setTypeInput("text");
    } else {
      setShowPassword(false);
      setTypeInput("password");
    }
  };

  const cb = () => {
    navigate("/");
  };

  const doLogin = async (value) => {
    dispatch(loginAction({ value, cb }));
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
        <div className="w-full px-14 md:px-7 lg:px-32 lg:my-16 xl:px-10">
          <div className="font-Inter">
            <h1 className="text-5xl font-semibold mb-4">Sign In</h1>
            <p className="text-[#AAAAAA] text-md mb-9">
              Sign in with your data that you entered during your registration
            </p>

            {message && (
              <div className="p-4 bg-red-200 border-2 border-red-300 rounded-xl mb-5 text-center">
                {message}
              </div>
            )}
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={doLogin}
          >
            {({ errors, touched, dirty }) => (
              <Form>
                <div className="flex flex-col">
                  <FormLabel for={"email"} name="Email" />
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Write Your Email"
                      className={`border-2 p-4 rounded-2xl focus:outline-none w-full ${
                        errors.email && touched.email && "border-red-500"
                      } ${!errors.email && touched.email && "border-primary"}`}
                    />
                    {errors.email && touched.email && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.email}
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
                </div>
                <button
                  disabled={!dirty || isLoading}
                  type="submit"
                  className={`bg-primary w-full p-4 mt-4 rounded-2xl text-white font-Mulish font-semibold btn btn-success border-primary shadow-md ${
                    isLoading && "loading"
                  }`}
                >
                  Sign In
                </button>
              </Form>
            )}
          </Formik>

          <div className="flex flex-col items-center mt-7 gap-2 text-[#8692A6]">
            <p>
              Forgot your password?
              <span>
                <Link to="/forgotPassword" className="text-primary underline">
                  Reset Now
                </Link>
              </span>
            </p>
            <p>
              Don't have an account?
              <span>
                <Link to="/signUp" className="text-primary underline">
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
