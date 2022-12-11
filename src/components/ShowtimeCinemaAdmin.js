import React from "react";
import ebvId from "../assets/img/ebu.png";

const ShowtimeCinema = () => {
  return (
    <div className="bg-white w-[350px] pb-10 rounded-lg border shadow-md lg:w-[300px]">
      <div className="flex pt-5 px-1">
        <div className="flex-1 flex items-center justify-center">
          <div>
            <img src={ebvId} alt="" className="w-28 h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-2">ebv.id</h3>
          <p className="text-[#6E7191]">Bandung Barat, Jawa-Barat 40553.</p>
        </div>
      </div>
      <div className="border border-b-secondary mt-6"></div>
      <div className="px-10 grid grid-cols-4 gap-4 pt-5 text-[#6E7191 md:px-5 md:grid-cols-3 lg:grid-cols-3">
        <div>08:30am</div>
        <div>10:30pm</div>
        <div className="text-primary">12:00pm</div>
        <div>02:00pm</div>
        <div>04:30pm</div>
        <div>07:00pm</div>
        <div>08:30pm</div>
      </div>
      <div className="flex px-10 py-9 md:px-5 lg:py-5 ">
        <h3 className="flex-1 font-semibold text-[#6B6B6B] text-lg">Price</h3>
        <h3 className="font-semibold text-xl">$10.00/seat</h3>
      </div>
      <div className="px-10 flex gap-2 md:px-5 md:flex-col mt-5">
        <button className="w-full border-2 border-primary py-2 shadow-primary rounded-md text-primary">
          Update
        </button>
        <button className="w-full border-2 border-red-500 py-2 shadow-primary rounded-md text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowtimeCinema;
