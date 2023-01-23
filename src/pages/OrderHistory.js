// @ts-nocheck

import React, { Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../helpers/http";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import ebvId from "../assets/img/ebu.png";
import profileImg from "../assets/img/profile-blank.png";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import { clearProfileAction } from "../redux/reducers/profile";
import { getProfileAction } from "../redux/actions/profile";
import { Edit } from "react-feather";

const OrderHistory = () => {
  const { token } = useSelector((state) => state.auth);
  const { picture } = useSelector((state) => state.profile);
  const { firstName } = useSelector((state) => state.profile);
  const { lastName } = useSelector((state) => state.profile);

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

      <div className="bg-secondary px-24 pb-24 flex gap-5 font-Mulish md:px-5 md:flex-col">
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
                      className="rounded-full w-32 h-32 bg-contain"
                    />
                  )}
                  {isLoadingPicture && (
                    <div className="absolute top-[40px] left-[45px] w-full">
                      <svg
                        aria-hidden="true"
                        className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-300 fill-primary"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
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
        <div className="w-3/4 md:w-full">
          <div className="mt-10 mb-9">
            <div className="bg-white p-7 items-center rounded-md md:flex md:flex-col md:gap-3">
              <Link to="/profile" className="font-semibold mr-10 md:mr-0">
                Account Settings
              </Link>
              <Link to="/orderHistory" className=" text-primary font-semibold">
                Order History
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md p-7 mb-7">
            <div className="flex md:flex-col-reverse md:items-center md:gap-5">
              <div className="flex-1 mb-5 md:text-center">
                <h5 className="text-[#AAAAAA] text-sm mb-2">
                  Tuesday, 07 July 2020 - 04:30pm
                </h5>
                <h3 className="text-2xl font-semibold">
                  Spider-Man: Homecoming
                </h3>
              </div>
              <div>
                <img src={ebvId} alt="" />
              </div>
            </div>
            <div className="border border-b mb-5"></div>
            <div className="flex justify-between items-center md:flex-col md:gap-4">
              <div className="w-48 bg-[#00BA88] text-center p-2 rounded-md text-white md:w-full">
                Ticket in active
              </div>
              <Link to="/ticketResult" className="text-[#AAAAAA]">
                See Details
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md p-7 mb-7">
            <div className="flex md:flex-col-reverse md:items-center md:gap-5">
              <div className="flex-1 mb-5 md:text-center">
                <h5 className="text-[#AAAAAA] text-sm mb-2">
                  Monday, 14 June 2020 - 02:00pm
                </h5>
                <h3 className="text-2xl font-semibold">Avengers: End Game</h3>
              </div>
              <div>
                <img src={ebvId} alt="" />
              </div>
            </div>
            <div className="border border-b mb-5"></div>
            <div className="flex justify-between items-center md:flex-col md:gap-4">
              <div className="w-48 bg-[#6E7191] text-center p-2 rounded-md text-white md:w-full">
                Ticket Used
              </div>
              <Link to="/ticketResultUsed" className="text-[#AAAAAA]">
                See Details
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md p-7 mb-7">
            <div className="flex md:flex-col-reverse md:items-center md:gap-5">
              <div className="flex-1 mb-5 md:text-center">
                <h5 className="text-[#AAAAAA] text-sm mb-2">
                  Monday, 10 March 2020 - 04:00pm
                </h5>
                <h3 className="text-2xl font-semibold">Thor: Ragnarok</h3>
              </div>
              <div>
                <img src={ebvId} alt="" />
              </div>
            </div>
            <div className="border border-b mb-5"></div>
            <div className="flex justify-between items-center md:flex-col md:gap-4">
              <div className="w-48 bg-red-500 text-center p-2 rounded-md text-white md:w-full">
                Ticket Expired
              </div>
              <Link to="/ticketResultExpired" className="text-[#AAAAAA]">
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default OrderHistory;
