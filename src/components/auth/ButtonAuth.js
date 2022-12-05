import React from "react";

const ButtonAuth = (props) => {
  return (
    <button
      type="submit"
      className="bg-[#5F2EEA] w-full p-4 mt-4 rounded-2xl text-white font-Mulish font-semibold"
    >
      {props.name}
    </button>
  );
};

export default ButtonAuth;
