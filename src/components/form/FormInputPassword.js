import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";

const InputPasswordAuth = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [typeInput, setTypeInput] = useState("password");

  const handlerShowPassword = () => {
    if (showPassword === false) {
      setShowPassword(true);
      setTypeInput("text");
    } else {
      setShowPassword(false);
      setTypeInput("password");
    }
  };

  return (
    <div className="flex relative">
      <input
        type={typeInput}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className="border-2 p-4 rounded-2xl mb-5 w-full"
      />
      {showPassword ? (
        <Eye
          className="absolute right-4 top-5 cursor-pointer"
          onClick={handlerShowPassword}
        />
      ) : (
        <EyeOff
          className="absolute right-4 top-5 cursor-pointer"
          onClick={handlerShowPassword}
        />
      )}
    </div>
  );
};

export default InputPasswordAuth;
