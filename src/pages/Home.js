import React from "react";
import BrandNav from "../assets/img/brand-small.png";
import Poster from "../assets/img/img-header.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
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
        <div className="bg-primary py-2 px-7 rounded-md text-white cursor-pointer text-sm">
          Sign Up
        </div>
      </nav>
      <header className="flex items-center">
        <section className="font-Mulish flex-1 text-center">
          <p className="text-xl text-[#A0A3BD]">
            Nearest Cinema, Newest Movie,
          </p>
          <p className="text-5xl font-bold text-primary">Find out now!</p>
        </section>
        <section className="flex-1">
          <img src={Poster} alt="" />
        </section>
      </header>
    </div>
  );
};

export default Home;
