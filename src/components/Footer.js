import React from "react";
import EbuId from "../assets/img/ebu.png";
import CineOne from "../assets/img/cine.png";
import Hiflix from "../assets/img/hiflix.png";
import BrandNav from "../assets/img/brand-small.png";

import { Facebook, Instagram, Twitter, Youtube } from "react-feather";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 font-Mulish">
      <div className="px-24 flex justify-between">
        <div className="text-[#6E7191]">
          <img src={BrandNav} alt="" />
          <p className="pt-5">Stop waiting in line. Buy tickets</p>
          <p className="pt-2">conveniently, watch movies quietly.</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-black font-bold">Explore</h3>
          <div className="mt-5 flex flex-col gap-3 text-[#6E7191]">
            <Link to="/">Home</Link>
            <Link to="/listMovie">List Movie</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-black font-bold">Our Sponsor</h3>
          <div className="mt-3">
            <img src={EbuId} alt="" />
          </div>
          <div>
            <img src={CineOne} alt="" />
          </div>
          <div>
            <img src={Hiflix} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-black font-bold">Follow Us</h3>
          <li className="list-none">
            <div className="flex flex-col gap-5 text-[#6E7191]">
              <a href="#" className="flex mt-5">
                <Facebook />
                <span className="ml-4">Tickitz Cinema id</span>
              </a>
              <a href="#" className="flex">
                <Instagram />
                <span className="ml-4">tickitz.id</span>
              </a>
              <a href="#" className="flex">
                <Twitter />
                <span className="ml-4">tickitz.id</span>
              </a>
              <a href="#" className="flex">
                <Youtube />
                <span className="ml-4">Tickitz Cinema id</span>
              </a>
            </div>
          </li>
        </div>
      </div>
      <div className="text-[#4E4B66] text-sm px-24 text-center mt-14">
        © 2022 Tickitz. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
