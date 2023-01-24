/* eslint-disable react/prop-types */
import React from "react";

const ButtonMediumOutline = (props) => {
  return (
    <button className="border-2 border-primary text-center p-2 w-full rounded-md text-primary">
      {props?.name}
    </button>
  );
};

export default ButtonMediumOutline;
