"use client";

import React, { useState } from "react";

export const InputField = ({
  type = "text",
  placeholder = "Text",
  value = "",
  props,
  className = "",
  onChange,
  name
}) => {
  
  return (
    <input
      className={`${className} text-textPrimary border-2 border-inputColor rounded-md p-2 focus:border-hoverColor focus:outline-none`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      {...props}
    />
  );
};
