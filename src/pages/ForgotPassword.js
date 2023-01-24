// @ts-nocheck

import React, { useState } from "react";
import Brand from "../assets/img/brand.png";
import { useNavigate } from "react-router-dom";

import FormLabel from "../components/form/FormLabel";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import http from "../helpers/http";

const forgotSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendCodeToEmail = async (value) => {
    try {
      const form = new URLSearchParams({
        email: value.email,
      });
      setIsLoading(true);
      const { data } = await http().post("/auth/forgotPassword", form);
      setMessage(data.message);
      setIsLoading(false);
      setTimeout(() => {
        navigate("/updatePassword", { state: { email: value.email } });
        setMessage("");
      }, 2000);
    } catch (error) {
      const { data } = error.response;
      setMessage(data.message);
    }
  };

  const doForgotPassword = (value) => {
    sendCodeToEmail(value);
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
              we will send a link to your email shortly
            </p>
            {message && (
              <div className="p-4 bg-green-200 border-2 border-green-300 rounded-xl mb-5 text-center">
                {message}
              </div>
            )}
          </div>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={forgotSchema}
            onSubmit={doForgotPassword}
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
                </div>
                <button
                  disabled={!dirty || isLoading}
                  type="submit"
                  className={`bg-primary w-full p-4 mt-4 rounded-2xl text-white font-Mulish font-semibold btn btn-success border-primary shadow-md ${
                    isLoading && "loading"
                  }`}
                >
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
