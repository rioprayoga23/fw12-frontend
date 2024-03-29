/* eslint-disable react/prop-types */
import React from "react";

const InputAuth = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      className="border-2 p-4 rounded-2xl mb-5 focus:outline-none"
      required
    />
  );
};

export default InputAuth;
