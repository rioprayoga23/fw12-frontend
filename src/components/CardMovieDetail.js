import React from "react";

const CardMovieDetail = ({ img }) => {
  return (
    <div className="p-5 border-2 border-secondary rounded-xl h-fit flex w-fit">
      <div>
        {img ? (
          <img
            src={`https://fw12-backend-roan.vercel.app/uploads/${img}`}
            alt=""
            className="w-46 h-64 bg-cover"
          />
        ) : (
          <div className="w-46 h-64 bg-gray-300"></div>
        )}
      </div>
    </div>
  );
};

export default CardMovieDetail;
