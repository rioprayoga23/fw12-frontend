import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

import { logout as logoutAction } from "../redux/reducers/auth";
import { getProfileAction } from "../redux/actions/profile";
import { clearProfileAction } from "../redux/reducers/profile";

import brandNav from "../assets/img/brand-small.png";
import profileImg from "../assets/img/profile-blank.png";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { picture } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

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

  useEffect(() => {
    if (token) dispatch(getProfileAction());
  }, [dispatch, token]);

  return (
    <nav className="flex items-center py-5 px-24 font-Mulish font-semibold md:px-5 lg:px-10 xxxl:px-[510px]">
      <div className="md:flex-1">
        <img src={brandNav} alt="brand" className="w-36" />
      </div>
      <li className="list-none flex-1 ml-20 md:hidden lg:ml-10">
        <Link to="/" className="px-7 md:px-0">
          Home
        </Link>

        <Link to="/viewAll" className="px-7 md:px-0">
          List Movie
        </Link>
      </li>

      {token ? (
        <div className="flex items-center gap-10 md:hidden">
          <div className="dropdown dropdown-end">
            {picture ? (
              <div className="avatar cursor-pointer">
                <div className="w-14 rounded-full">
                  <img src={picture} tabIndex={0} alt="img" />
                </div>
              </div>
            ) : (
              <div className="avatar cursor-pointer">
                <div className="w-14 rounded-full">
                  <img src={profileImg} tabIndex={0} alt="img" />
                </div>
              </div>
            )}
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button type="button" onClick={handlerLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <Link to={"/signIn"} className="md:px-0 md:hidden">
            <div className="bg-white border-2 border-emerald-600 py-2 px-7 rounded-md text-primary cursor-pointer text-sm md:w-full md:text-center">
              Sign In
            </div>
          </Link>
          <Link to={"/signUp"} className="md:px-0 md:hidden">
            <div className="bg-primary border-2 border-primary py-2 px-7 rounded-md text-white cursor-pointer text-sm md:w-full md:text-center">
              Sign Up
            </div>
          </Link>
        </div>
      )}

      {/* DROPDOWN MOBILE */}
      <div className="dropdown dropdown-end md:block lg:hidden xl:hidden xxl:hidden xxxl:hidden xxll:hidden">
        <div tabIndex={0} className="py-2 px-3 rounded-md bg-primary m-1">
          {<Menu color="white" />}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content p-2 shadow bg-base-100 rounded-box w-[270px]"
        >
          <li className="list-none flex-1 ml-20 md:ml-0 md:flex-col md:flex md:gap-4 p-3">
            <Link to="/" className="px-7 md:px-0">
              Home
            </Link>

            <Link to="/viewAll" className="px-7 md:px-0">
              List Movie
            </Link>

            {token ? (
              <div>
                <Link to="/profile" className="px-7 md:px-0 md:block lg:hidden">
                  Profile
                </Link>

                {/* <div className="w-full mt-5">
                  <div className="form-control">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search…"
                        className="input input-bordered focus:outline-none w-full"
                      />
                      <button className="bg-primary btn-square flex justify-center items-center">
                        <Search color="white" />
                      </button>
                    </div>
                  </div>
                </div> */}

                <div className="flex items-center gap-10 md:hidden">
                  {/* <div>
                    <Search />
                  </div> */}
                  <div className="dropdown dropdown-end">
                    <img
                      src={profileImg}
                      alt=""
                      tabIndex={0}
                      className="m-1 cursor-pointer"
                    ></img>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <button type="submit">Logout</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link to={"/signUp"} className="md:px-0">
                <div className="bg-primary py-2 px-7 rounded-md text-white cursor-pointer text-sm md:w-full md:text-center">
                  Sign Up
                </div>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
