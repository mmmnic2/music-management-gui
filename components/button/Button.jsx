import React from "react";

const Button = ({
  children,
  props,
  type,
  className,
}) => {
  return (
    <button
      className={`rounded-md py-1 px-2 cursor-pointer ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
