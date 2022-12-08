import React from "react";

const Pagination = () => {
  return (
    <div className="px-24 mt-10 flex justify-center">
      <div className="flex gap-2">
        <button className="py-2 px-4 bg-primary rounded-md text-white">
          1
        </button>
        <button className="py-2 px-4 bg-white rounded-md">2</button>
        <button className="py-2 px-4 bg-white rounded-md">3</button>
        <button className="py-2 px-4 bg-white rounded-md">4</button>
      </div>
    </div>
  );
};

export default Pagination;
