import React, { useState } from "react";
import { Link } from "react-router-dom";
import ebvId from "../assets/img/ebu.png";

const ShowtimeCinema = ({ data, fn }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState("");

  const selectTime = (time, cinema) => {
    setSelectedTime(time);
    setSelectedCinema(cinema);
    fn(selectedTime, selectedCinema);
  };

  return (
    <div className="bg-white w-[350px] pb-10 rounded-lg border shadow-md lg:w-[300px]">
      <div className="flex pt-5 px-1">
        <div className="flex-1 flex items-center justify-center">
          <div>
            <img src={ebvId} alt="" className="w-28 h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-2">{data.name}</h3>
          <p className="text-[#6E7191]">{data.city}</p>
          <p className="text-[#6E7191]">{data.address}</p>
        </div>
      </div>
      <div className="border border-b-secondary mt-6"></div>
      <div className="px-10 grid grid-cols-4 gap-4 pt-5 text-[#6E7191 md:px-5 md:grid-cols-3 lg:grid-cols-3">
        {data.time.map((item) => (
          <button
            key={item}
            className={`${
              data.id === selectedCinema &&
              item === selectedTime &&
              "text-primary font-semibold"
            }`}
            onClick={() => selectTime(item, data.id)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex px-10 py-9 md:px-5 lg:py-5 ">
        <h3 className="flex-1 font-semibold text-[#6B6B6B] text-lg">Price</h3>
        <h3 className="font-semibold text-xl">{`${data.price}/seat`}</h3>
      </div>
      <div className="px-10 md:px-5 ">
        <Link to="/order">
          <button
            className="w-full bg-primary py-2 shadow-primary rounded-md text-white"
            disabled={selectedCinema !== data.id}
          >
            Book now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowtimeCinema;
