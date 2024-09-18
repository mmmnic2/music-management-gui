"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Searchbar = ({
  onChange,
  placeholder = "Search",
  props,
  value = "",
}) => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="my-4 relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-3 glassmorphism text-white placeholder-white rounded-full focus:outline-none"
        {...props}
        onChange={handleSearch}
        value={search}
      />
      <div className="text-xl text-white absolute right-5 top-1/2 -translate-y-1/2">
        <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="100%" size="16px" />
      </div>
      <div className="w-[1px] h-1/2 absolute bg-white right-12 top-1/2 -translate-y-1/2"></div>
    </div>
  );
};
