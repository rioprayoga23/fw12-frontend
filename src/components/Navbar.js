import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

import { logout as logoutAction } from "../redux/reducers/auth";
import { getProfileAction } from "../redux/actions/profile";
import { clearProfileAction } from "../redux/reducers/profile";

import brandNav from "../assets/img/brand-small.png";
import profileImg from "../assets/img/profile-blank.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { picture } = useSelector((state) => state.profile);

  const handlerLogout = () => {
    dispatch(logoutAction());
    dispatch(clearProfileAction());
    navigate("/signIn");
  };

  useEffect(() => {
    if (token) dispatch(getProfileAction());
  }, [dispatch, token]);

  return (
    <nav className="flex items-center py-5 px-24 font-Mulish font-semibold md:px-5 lg:px-10">
      <div className="md:flex-1">
        <img src={brandNav} alt="" className="" />
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
          <div>
            <Search />
          </div>
          <div className="dropdown dropdown-end">
            {picture ? (
              <div className="avatar cursor-pointer">
                <div className="w-14 rounded-full">
                  <img src={picture} tabIndex={0} />
                </div>
              </div>
            ) : (
              <div className="avatar cursor-pointer">
                <div className="w-14 rounded-full">
                  <img src={profileImg} tabIndex={0} />
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
        <Link to={"/signUp"} className="md:px-0 md:hidden">
          <div className="bg-primary py-2 px-7 rounded-md text-white cursor-pointer text-sm md:w-full md:text-center">
            Sign Up
          </div>
        </Link>
      )}

      {/* DROPDOWN MOBILE */}
      <div className="dropdown dropdown-end md:block lg:hidden xl:hidden xxl:hidden">
        <div tabIndex={0} className="py-2 px-3 rounded-md bg-primary m-1">
          {<Menu color="white" />}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content p-2 shadow bg-base-100 rounded-box w-[270px]"
        >
          <li className="list-none flex-1 ml-20 md:ml-0 md:flex-col md:flex md:gap-4">
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

                <div className="w-full mt-5">
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
                </div>

                <div className="flex items-center gap-10 md:hidden">
                  <div>
                    <Search />
                  </div>
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
