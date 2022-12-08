import React from "react";

const ButtonMediumPrimary = ({ name }) => {
  return (
    <button className="border-2 border-primary bg-primary text-center p-2 w-full rounded-md text-white">
      {name}
    </button>
  );
};

export default ButtonMediumPrimary;
