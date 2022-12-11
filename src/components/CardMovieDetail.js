import React from "react";
import spiderman from "../assets/img/spidermen.png";

const CardMovieDetail = ({ img }) => {
  return (
    <div className="p-5 border-2 border-secondary rounded-xl h-fit flex w-fit">
      <div>
        {img ? (
          <img
            src={`http://localhost:8888/uploads/${img}`}
            alt=""
            className="w-46 h-64 bg-cover"
          />
        ) : (
          <img src={spiderman} alt="" className="w-46 h-64 bg-cover" />
        )}
      </div>
    </div>
  );
};

export default CardMovieDetail;
