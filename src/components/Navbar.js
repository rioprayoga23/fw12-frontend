import React from "react";
import BrandNav from "../assets/img/brand-small.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center py-5 px-24 font-Mulish font-semibold">
      <img src={BrandNav} alt="" />
      <li className="list-none flex-1 ml-20">
        <Link to="/" className="px-7">
          Home
        </Link>
        <Link to="/listMovie" className="px-7">
          List Movie
        </Link>
      </li>
      <Link to={"/signUp"}>
        <div className="bg-primary py-2 px-7 rounded-md text-white cursor-pointer text-sm">
          Sign Up
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
