// @ts-nocheck

import React, { Fragment, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import FormLabel from "../components/form/FormLabel";

import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import { getProfileAction } from "../redux/actions/profile";

import http from "../helpers/http";

import profileImg from "../assets/img/profile-blank.png";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Eye, EyeOff, Edit } from "react-feather";

import { clearProfileAction } from "../redux/reducers/profile";
import Spinner from "../components/Spinner";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup); // extend yup

const detailAccountSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Min numbers is 10")
    .max(13, "Max numbers is 13")
    .required("Required"),
});

const updatePasswordSchema = Yup.object().shape({
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

const Profile = () => {
  const { token } = useSelector((state) => state.auth);
  const { picture } = useSelector((state) => state.profile);
  const { firstName } = useSelector((state) => state.profile);
  const { lastName } = useSelector((state) => state.profile);
  const { email } = useSelector((state) => state.profile);
  const { phoneNumber } = useSelector((state) => state.profile);

  const [showPassword, setShowPassword] = useState(false);
  const [typeInput, setTypeInput] = useState("password");
  const [showPassword2, setShowPassword2] = useState(false);
  const [typeInput2, setTypeInput2] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTwo, setIsLoadingTwo] = useState(false);
  const [isLoadingPicture, setIsLoadingPicture] = useState(false);

  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerLogout = async () => {
    const alert = await MySwal.fire({
      title: <div className="text-red-500">Log out</div>,
      html: "Are you sure you want log out?",
      icon: "warning",
      confirmButtonText: "Yes",
      showCancelButton: true,
    });
    if (alert.isConfirmed) {
      dispatch(logoutAction());
      dispatch(clearProfileAction());
      navigate("/signIn");
    }
  };

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

  const doUpdateDetailAccount = async (value) => {
    try {
      const form = {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        phoneNumber: value.phoneNumber,
      };
      setIsLoading(true);
      const { data } = await http(token).patch("/profile", form);
      await dispatch(getProfileAction());
      MySwal.fire({
        title: <div className="text-primary">{data.message}</div>,
        icon: "success",
      });
      setIsLoading(false);
    } catch (err) {
      setIsLoadingTwo(false);
      MySwal.fire({
        title: <div className="text-red-500">{err.response.data.message}</div>,
        icon: "error",
      });
    }
  };

  const doUpdatePassword = async (value) => {
    const password = value.password;
    const confirmPassword = value.confirmPassword;

    if (password === confirmPassword) {
      const form = {
        password: value.password,
        confirmPassword: value.confirmPassword,
      };
      try {
        setIsLoadingTwo(true);
        const { data } = await http(token).patch("/profile", form);
        MySwal.fire({
          title: <div className="text-primary">{data.message}</div>,
          html: "Your password has been updated",
          icon: "success",
        });
        setIsLoadingTwo(false);
      } catch (err) {
        setIsLoadingTwo(false);
        MySwal.fire({
          title: (
            <div className="text-red-500">{err.response.data.message}</div>
          ),
          icon: "error",
        });
      }
    } else {
      MySwal.fire({
        title: <div className="text-red-500">Password Not Matches</div>,
        html: "Please check your password and confirm password",
        icon: "error",
      });
    }
  };

  const inputFile = useRef(null);
  const openFile = () => {
    inputFile.current.click();
  };

  const doChangePicture = async (e) => {
    const format = ["image/jpg", "image/png", "image/jpeg"];

    const picture = e.target.files[0];
    if (picture) {
      if (format.includes(picture.type)) {
        if (picture.size < 2000000) {
          let dataForm = new FormData();
          dataForm.append("picture", picture);
          try {
            setIsLoadingPicture(true);
            const { data } = await http(token).patch("/profile", dataForm, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            await dispatch(getProfileAction());
            setIsLoadingPicture(false);
            MySwal.fire({
              title: <div className="text-primary">{data.message}</div>,
              icon: "success",
            });
          } catch (err) {
            setIsLoadingPicture(false);
            MySwal.fire({
              title: (
                <div className="text-red-500">{err.response.data.message}</div>
              ),
              icon: "error",
            });
          }
        } else {
          MySwal.fire({
            html: (
              <div className="text-red-500">
                Image file size must be less than 2mb
              </div>
            ),
            icon: "error",
          });
        }
      } else {
        MySwal.fire({
          html: <div className="text-red-500">File type must be images</div>,
          icon: "error",
        });
      }
    }
  };

  return (
    <Fragment>
      <Navbar />

      <div className="bg-secondary px-24 pb-24 flex gap-5 font-Mulish md:px-5 lg:px-10 md:flex-col">
        <div className="w-1/4 md:w-full lg:w-1/3">
          <div className="bg-white rounded-md mt-10">
            <div className="p-8">
              <h5>INFO</h5>
              <div className="flex flex-col items-center mt-4">
                <input
                  type="file"
                  name="picture"
                  id="picture"
                  ref={inputFile}
                  className="hidden"
                  onChange={doChangePicture.bind(this)}
                />
                <div
                  className="flex flex-col items-center relative cursor-pointer"
                  onClick={openFile}
                >
                  {picture ? (
                    <img
                      src={picture}
                      alt=""
                      className="rounded-full w-32 h-32 bg-contain"
                    />
                  ) : (
                    <img
                      src={profileImg}
                      alt=""
                      className="rounded-full w-32 h-32 lg:w-28 lg:h-28 bg-contain"
                    />
                  )}
                  {isLoadingPicture && (
                    <div className="absolute top-[40px] left-[45px] w-full">
                      <Spinner />
                    </div>
                  )}

                  <div className="absolute bottom-[-10px] bg-white p-1 rounded-full">
                    <Edit color="black" />
                  </div>
                </div>

                <div className="flex flex-col items-center mt-5">
                  <h2 className="font-semibold">{`${firstName} ${lastName}`}</h2>
                  <p>Moviegoers</p>
                </div>
              </div>
            </div>
            <div className="border border-b w-full mb-5"></div>
            <div className="px-8 pb-8">
              <button
                className="w-full bg-primary py-3 rounded-lg text-white"
                onClick={handlerLogout}
              >
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
            <Formik
              initialValues={{
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
              }}
              validationSchema={detailAccountSchema}
              onSubmit={doUpdateDetailAccount}
            >
              {({ errors, touched, dirty }) => (
                <Form>
                  <div className="bg-white rounded-md p-7 md:w-full">
                    <h3 className="font-semibold">Details Information</h3>
                    <div className="border border-b my-5"></div>
                    <div className="flex gap-4 md:flex-col lg:w-full lg:flex-col">
                      <div className="flex flex-col flex-1 lg:w-full mb-5">
                        <FormLabel for="firstName" name="First Name" />
                        <Field
                          id="firstName"
                          type="text"
                          name="firstName"
                          className={`border-2 p-4 rounded-2xl focus:outline-none ${
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
                      <div className="flex flex-col flex-1 lg:w-full mb-5">
                        <FormLabel for="lastName" name="Last Name" />
                        <Field
                          id="lastName"
                          type="text"
                          name="lastName"
                          disabled={isLoading}
                          className={`border-2 p-4 rounded-2xl focus:outline-none ${
                            errors.lastName &&
                            touched.lastName &&
                            "border-red-500"
                          } ${
                            !errors.lastName &&
                            touched.lastName &&
                            "border-primary"
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
                    </div>
                    <div className="flex gap-4 md:flex-col lg:flex-col">
                      <div className="flex flex-col flex-1">
                        <FormLabel for="email" name="Email" />
                        <Field
                          id="email"
                          type="text"
                          name="email"
                          disabled={isLoading}
                          className={`border-2 p-4 rounded-2xl focus:outline-none ${
                            errors.email && touched.email && "border-red-500"
                          } ${
                            !errors.email && touched.email && "border-primary"
                          }`}
                        />
                        {errors.email && touched.email && (
                          <label className="label">
                            <span className="label-text-alt text-red-500">
                              {errors.email}
                            </span>
                          </label>
                        )}
                      </div>

                      <div className="flex flex-col flex-1 ">
                        <FormLabel for="phoneNumber" name="Phone Number" />
                        <div
                          className={`flex border-2 p-4 rounded-2xl w-full ${
                            errors.phoneNumber &&
                            touched.phoneNumber &&
                            "border-red-500"
                          } ${
                            !errors.phoneNumber &&
                            touched.phoneNumber &&
                            "border-primary"
                          }`}
                        >
                          <input
                            type="text"
                            placeholder="+62"
                            className="w-10 focus:outline-none"
                            disabled
                          />
                          <div className="border border-l-[#DEDEDE]"></div>
                          <Field
                            id="phoneNumber"
                            type="text"
                            name="phoneNumber"
                            disabled={isLoading}
                            className="w-full focus:outline-none ml-4"
                          />
                        </div>
                        {errors.phoneNumber && touched.phoneNumber && (
                          <label className="label">
                            <span className="label-text-alt text-red-500">
                              {errors.phoneNumber}
                            </span>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    disabled={!dirty || isLoading}
                    type="submit"
                    className={`btn border-none btn-success w-80 p-4 rounded-lg bg-primary mt-5 text-white md:w-full ${
                      isLoading && "loading"
                    }`}
                  >
                    Update changes
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="mt-9 md:w-full">
            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              validationSchema={updatePasswordSchema}
              onSubmit={doUpdatePassword}
            >
              {({ errors, touched, dirty }) => (
                <Form>
                  <div className="bg-white rounded-md p-7">
                    <h3 className="font-semibold">Account and Privacy</h3>
                    <div className="border border-b my-5"></div>
                    <div className="flex gap-4 md:flex-col lg:flex-col">
                      <div className="flex flex-col flex-1 ">
                        <FormLabel for="password" name="New Password" />
                        <div className="mb-4 relative">
                          <Field
                            type={typeInput}
                            name="password"
                            placeholder="Write your password"
                            disabled={isLoadingTwo}
                            className={`border-2 p-4 rounded-2xl w-full focus:outline-none ${
                              errors.password &&
                              touched.password &&
                              "border-red-500"
                            } ${
                              !errors.password &&
                              touched.password &&
                              "border-primary"
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
                      <div className="flex flex-col flex-1">
                        <FormLabel
                          for="confirmPassword"
                          name="Confirm Password"
                        />
                        <div className="mb-4 relative">
                          <Field
                            type={typeInput2}
                            name="confirmPassword"
                            placeholder="Write your Confirm Password"
                            disabled={isLoadingTwo}
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
                          {errors.confirmPassword &&
                            touched.confirmPassword && (
                              <label className="label">
                                <span className="label-text-alt text-red-500">
                                  {errors.confirmPassword}
                                </span>
                              </label>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    disabled={!dirty || isLoadingTwo}
                    type="submit"
                    className={`btn border-none btn-success w-80 p-4 rounded-lg bg-primary mt-5 text-white md:w-full ${
                      isLoadingTwo && "loading"
                    }`}
                  >
                    Update changes
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
