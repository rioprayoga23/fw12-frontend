import React from "react";

const InputAuth = (props) => {
  return (
    <input
      type={props.id}
      id={props.id}
      name={props.id}
      placeholder={props.placeholder}
      className="border-2 p-4 rounded-2xl mb-5"
    />
  );
};

export default InputAuth;
