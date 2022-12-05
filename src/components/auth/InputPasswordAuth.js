import React from "react";
import { Eye } from "react-feather";

const InputPasswordAuth = (props) => {
  return (
    <div className="flex relative">
      <input
        type={props.id}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        className="border-2 p-4 rounded-2xl mb-5 w-full"
      />
      <Eye className="absolute right-4 top-5" />
    </div>
  );
};

export default InputPasswordAuth;
