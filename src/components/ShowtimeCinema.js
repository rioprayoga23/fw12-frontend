import React from "react";
import { Link } from "react-router-dom";
import ebvId from "../assets/img/ebu.png";

const ShowtimeCinema = () => {
  return (
    <div className="bg-white w-85 pb-10 rounded-md">
      <div className="flex pt-5">
        <div className="flex-1 flex items-center justify-center">
          <div>
            <img src={ebvId} alt="" className="w-28 h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-2">ebv.id</h3>
          <p className="text-[#6E7191]">
            Whatever street No.12, South Purwokerto
          </p>
        </div>
      </div>
      <div className="border border-b-secondary mt-6"></div>
      <div className="px-10 flex flex-wrap gap-3 pt-5 text-[#6E7191">
        <div>08:30am</div>
        <div>10:30pm</div>
        <div className="text-primary">12:00pm</div>
        <div>02:00pm</div>
        <div>04:30pm</div>
        <div>07:00pm</div>
        <div>08:30pm</div>
      </div>
      <div className="flex px-10 py-9">
        <h3 className="flex-1 font-semibold text-[#6B6B6B] text-lg">Price</h3>
        <h3 className="font-semibold text-xl">$10.00/seat</h3>
      </div>
      <div className="px-10">
        <Link to="/order">
          <button className="w-full bg-primary py-2 shadow-primary rounded-md text-white">
            Book now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowtimeCinema;
