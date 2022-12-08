import React from "react";
import brandNav from "../assets/img/brand-small.png";
import profileImg from "../assets/img/Ellipse 11.png";
import { Link } from "react-router-dom";
import { Search } from "react-feather";

const Navbar = (props) => {
  const login = props.login;
  return (
    <nav className="flex items-center py-5 px-24 font-Mulish font-semibold">
      <img src={brandNav} alt="" />
      <li className="list-none flex-1 ml-20">
        <Link to="/" className="px-7">
          Home
        </Link>
        <Link to="/viewAll" className="px-7">
          List Movie
        </Link>
      </li>
      {login ? (
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
      ) : (
        <Link to={"/signUp"}>
          <div className="bg-primary py-2 px-7 rounded-md text-white cursor-pointer text-sm">
            Sign Up
          </div>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
