// @ts-nocheck

import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../helpers/http";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import profileImg from "../assets/img/profile-blank.png";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import { clearProfileAction } from "../redux/reducers/profile";
import { getProfileAction } from "../redux/actions/profile";
import { Edit } from "react-feather";
import Spinner from "../components/Spinner";

const OrderHistory = () => {
  const { token } = useSelector((state) => state.auth);
  const { picture } = useSelector((state) => state.profile);
  const { firstName } = useSelector((state) => state.profile);
  const { lastName } = useSelector((state) => state.profile);

  const [isLoadingPicture, setIsLoadingPicture] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataHistory, setDataHistory] = useState([]);

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

  useEffect(() => {
    const getTrxHistory = async () => {
      try {
        setIsLoading(true);
        const { data } = await http(token).get("/transactions/history");
        setDataHistory(data.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getTrxHistory();
  }, [token]);

  return (
    <Fragment>
      <Navbar />

      <div className="bg-secondary px-24 pb-24 flex gap-5 font-Mulish md:px-5 md:flex-col lg:px-10 xxxl:px-[510px]">
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
        <div className="w-3/4 md:w-ful lg:w-2/3">
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
          {isLoading ? (
            <div className="w-full flex justify-center">
              <Spinner />
            </div>
          ) : (
            dataHistory?.map((item) => (
              <div className="bg-white rounded-md p-7 mb-7" key={item.id}>
                <div className="flex md:flex-col-reverse md:items-center md:gap-5">
                  <div className="flex-1 mb-5 md:text-center">
                    <h5 className="text-[#AAAAAA] text-sm mb-2">
                      {item.bookingDate} -{" "}
                      {new Date(
                        `2023-03-03 ${item.bookingTime}`
                      ).toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </h5>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  <div>
                    <img src={item.picture} alt="" />
                  </div>
                </div>
                <div className="border border-b mb-5"></div>
                <div className="flex justify-between items-center md:flex-col md:gap-4">
                  {new Date(item.bookingDateOri).getFullYear() +
                    new Date(item.bookingDateOri).getMonth() +
                    new Date(item.bookingDateOri).getDate() ===
                  new Date().getFullYear() +
                    new Date().getMonth() +
                    new Date().getDate() ? (
                    <>
                      <div className="w-48 bg-[#00BA88] text-center p-2 rounded-md text-white md:w-full">
                        Ticket in active
                      </div>
                      <div
                        className="text-[#AAAAAA] cursor-pointer"
                        onClick={() =>
                          navigate("/ticketResult", {
                            state: { trxId: item.id },
                          })
                        }
                      >
                        See Details
                      </div>
                      {/* <Link
                        to={`/ticketResult/${item.id}`}
                        className="text-[#AAAAAA]"
                      ></Link> */}
                    </>
                  ) : (
                    <>
                      <div className="w-48 bg-red-500 text-center p-2 rounded-md text-white md:w-full">
                        Ticket Expired
                      </div>
                      <div
                        className="text-[#AAAAAA] cursor-pointer"
                        onClick={() =>
                          navigate("/ticketResultExpired", {
                            state: { trxId: item.id },
                          })
                        }
                      >
                        See Details
                      </div>
                      {/* <Link
                        to={`/ticketResultExpired/${item.id}`}
                        className="text-[#AAAAAA]"
                      >
                        See Details
                      </Link> */}
                    </>
                  )}
                </div>
              </div>
            ))
          )}

          {/* <div className="bg-white rounded-md p-7 mb-7">
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
          </div> */}

          {/* <div className="bg-white rounded-md p-7 mb-7">
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
          </div> */}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default OrderHistory;
