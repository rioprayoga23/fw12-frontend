import React from "react";
import brandNav from "../assets/img/brand-small.png";
import profileImg from "../assets/img/Ellipse 11.png";
import { Link } from "react-router-dom";
import { Search, Menu } from "react-feather";

const Navbar = () => {
  return (
    <nav className="flex items-center py-5 px-24 font-Mulish font-semibold md:px-5 lg:px-10">
      <div className="md:flex-1 lg:flex-1">
        <img src={brandNav} alt="" className="" />
      </div>
      <li className="list-none flex-1 ml-20 md:hidden lg:ml-10 lg:hidden">
        <Link to="/admin/dashboard" className="px-7 md:px-0">
          Dashboard
        </Link>

        <Link to="/admin/manageMovies" className="px-7 md:px-0">
          Manage Movie
        </Link>

        <Link to="/admin/manageSchedule" className="px-7 md:px-0">
          Manage Schedule
        </Link>
      </li>

      <div className="flex items-center gap-10 md:hidden lg:hidden">
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
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* DROPDOWN MOBILE */}
      <div className="dropdown dropdown-end md:block lg:block xl:hidden xxl:hidden">
        <div tabIndex={0} className="py-2 px-3 rounded-md bg-primary m-1">
          {<Menu color="white" />}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content p-2 shadow bg-base-100 rounded-box w-[270px]"
        >
          <li className="list-none flex-1 ml-20 md:ml-0 md:flex-col md:flex md:gap-4 lg:flex lg:flex-col lg:ml-0 lg:gap-4">
            <Link to="/admin/dashboard" className="px-7 md:px-0 lg:px-0">
              Dashboard
            </Link>

            <Link to="/admin/manageMovies" className="px-7 md:px-0 lg:px-0">
              Manage Movie
            </Link>

            <Link to="/admin/manageSchedule" className="px-7 md:px-0 lg:px-0">
              Manage Schedule
            </Link>

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
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
