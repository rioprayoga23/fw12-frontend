import React from "react";

const ButtonAuth = (props) => {
  return (
    <button
      type="submit"
      className="bg-primary w-full p-4 mt-4 rounded-2xl text-white font-Mulish font-semibold btn btn-square loading"
    >
      {props.name}
    </button>
  );
};

export default ButtonAuth;
