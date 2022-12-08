import React from "react";
import brandNav from "../assets/img/brand-small.png";
import profileImg from "../assets/img/Ellipse 11.png";
import { Link } from "react-router-dom";
import { Search } from "react-feather";

const NavbarAdmin = (props) => {
  return (
    <nav className="flex items-center py-5 px-24 font-Mulish font-semibold">
      <img src={brandNav} alt="" />
      <li className="list-none flex-1 ml-20">
        <Link to="/admin/dashboard" className="px-5">
          Dashboard
        </Link>
        <Link to="/admin/manageMovies" className="px-5">
          Manage Movie
        </Link>
        <Link to="/admin/manageSchedule" className="px-5">
          Manage Schedule
        </Link>
      </li>

      <div className="flex items-center gap-10">
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
              <Link to="/signIn">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
