import React from "react";

const LabelAuth = (props) => {
  return (
    <label htmlFor={props.for} className="mb-2 font-Mulish">
      {props.for}
    </label>
  );
};

export default LabelAuth;
