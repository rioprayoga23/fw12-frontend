import React from "react";

const CardMovieDetail = ({ img }) => {
  return (
    <div className="p-5 border-2 border-secondary rounded-xl h-fit flex w-fit">
      <div>
        {img ? (
          <img src={img} alt="" className="w-46 h-64 bg-contain" />
        ) : (
          <div className="w-46 h-64 bg-gray-300"></div>
        )}
      </div>
    </div>
  );
};

export default CardMovieDetail;
