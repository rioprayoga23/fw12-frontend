// @ts-nocheck
import React, { Fragment } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import dashboardImg from "../assets/img/Dashboard.png";
import ButtonMediumPrimary from "../components/ButtonMediumPrimary";
import ButtonMediumOutline from "../components/ButtonMediumOutline";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <Fragment>
      <NavbarAdmin />
      <div className="flex font-Mulish px-24 bg-secondary py-16 gap-5 md:px-5 md:flex-col lg:px-5">
        <div className="w-3/4 md:w-full lg:w-2/3">
          <h3 className="font-semibold text-lg">Dashboard</h3>
          <div className="mt-7">
            <img src={dashboardImg} alt="" />
          </div>
        </div>
        <div className="w-1/4 md:w-full lg:w-1/3">
          <h3 className="font-semibold text-lg">Filtered</h3>
          <div className="bg-white mt-7 p-5 rounded-md flex flex-col gap-5">
            <select className="select select-bordered w-full max-w-xs focus:outline-none">
              <option disabled selected>
                Select Movie
              </option>
              <option>Spiderman</option>
              <option>Thor</option>
            </select>
            <select className="select select-bordered w-full max-w-xs focus:outline-none">
              <option disabled selected>
                Select Premiere
              </option>
              <option>CineOne 21</option>
              <option>Hiflix</option>
            </select>
            <select className="select select-bordered w-full max-w-xs focus:outline-none">
              <option disabled selected>
                Select Location
              </option>
              <option>Bandung</option>
              <option>Semarang</option>
            </select>
            <div className="w-full">
              <ButtonMediumPrimary name={"Filter"} />
            </div>
            <ButtonMediumOutline name={"Reset"} />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
