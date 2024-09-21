import React from "react";

const Button = ({ children, type, className, ...props }) => {
  console.log(props);
  return (
    <button
      className={`rounded-md py-1 px-2 cursor-pointer ${
        (props.disabled && "bg-gray-300 cursor-not-allowed") || className
      }`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
