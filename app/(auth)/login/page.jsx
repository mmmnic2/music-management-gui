"use client";

import Button from "@/components/button/Button";
import { InputField } from "@/components/form/inputFields/InputField";
import React, { useState } from "react";

const LoginPage = () => {
  const [formValue, setformValue] = useState({
    userName: "",
    password: "",
  });
  const handleOnChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <div className=" glassmorphism py-4 px-8">
      <h1 className="font-bold text-white text-2xl mb-4">Login</h1>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <InputField
          type="text"
          placeholder="User name"
          name="userName"
          onChange={handleOnChange}
          value={formValue.userName}
        />
        <InputField
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
          value={formValue.password}
        />
        <Button type={"submit"} className={"text-white"} bgColor="bg-actions">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
