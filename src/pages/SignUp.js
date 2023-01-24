import React, { useState } from "react";
import brand from "../assets/img/brand.png";

import { Link, useNavigate } from "react-router-dom";

import FormLabel from "../components/form/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/actions/auth";

import { Eye, EyeOff } from "react-feather";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup); // extend yup

const signUpSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Min numbers is 10")
    .max(13, "Max numbers is 13")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .password()
    .min(6, "Min length 6")
    .minLowercase(1, "Min Lowecase 1")
    .minUppercase(1, "Min Uppercase 1")
    .minSymbols(1, "Min Symbols 1")
    .minNumbers(1, "Min Numbers 1")
    .required("Required"),
});

const SignUp = () => {
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

  const doSignUp = (value) => {
    dispatch(registerAction({ value, cb }));
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
      <div className="flex flex-col w-2/4 max-h-screen overflow-y-scroll lg:w-full xxxl:justify-center">
        <div className="w-full px-14 pb-20 md:px-7 lg:px-32">
          <div className="font-Inter">
            <h1 className="text-5xl font-semibold mb-4 pt-24 md:pt-16 lg:pt-24">
              Sign Up
            </h1>
            <p className="text-[#AAAAAA] text-md mb-9">Fill your additional</p>
            {message && (
              <div className="p-4 bg-red-200 border-2 border-red-300 rounded-xl mb-5 text-center">
                {message}
              </div>
            )}
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phoneNumber: "",
              email: "",
              password: "",
            }}
            validationSchema={signUpSchema}
            onSubmit={doSignUp}
          >
            {({ errors, touched, dirty }) => (
              <Form>
                <div className="flex flex-col">
                  <FormLabel for={"firstName"} name="First Name" />
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Write Your First Name"
                      className={`border-2 p-4 rounded-2xl focus:outline-none w-full ${
                        errors.firstName &&
                        touched.firstName &&
                        "border-red-500"
                      } ${
                        !errors.firstName &&
                        touched.firstName &&
                        "border-primary"
                      }`}
                    />
                    {errors.firstName && touched.firstName && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.firstName}
                        </span>
                      </label>
                    )}
                  </div>
                  <FormLabel for={"lastName"} name="Last Name" />
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Write Your Last Name"
                      className={`border-2 p-4 rounded-2xl focus:outline-none w-full ${
                        errors.lastName && touched.lastName && "border-red-500"
                      } ${
                        !errors.lastName && touched.lastName && "border-primary"
                      }`}
                    />
                    {errors.lastName && touched.lastName && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.lastName}
                        </span>
                      </label>
                    )}
                  </div>
                  <FormLabel for={"phoneNumber"} name="Phone Number" />
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="Write Your Phone Number"
                      className={`border-2 p-4 rounded-2xl focus:outline-none w-full ${
                        errors.phoneNumber &&
                        touched.phoneNumber &&
                        "border-red-500"
                      } ${
                        !errors.phoneNumber &&
                        touched.phoneNumber &&
                        "border-primary"
                      }`}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <label className="label">
                        <span className="label-text-alt text-red-500">
                          {errors.phoneNumber}
                        </span>
                      </label>
                    )}
                  </div>
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
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>

          <div className="flex flex-col items-center mt-7 gap-2">
            <p className="text-[#8692A6]">
              Already have account?
              <span>
                <Link to="/signIn" className="text-primary underline">
                  Sign In
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
