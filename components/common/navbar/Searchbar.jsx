import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Searchbar = ({
  onChange,
  placeholder = "Search",
  props,
  value = "",
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        class="w-full p-3 glassmorphism text-white placeholder-white rounded-full focus:outline-none"
        {...props}
        onChange={onChange}
        value={value}
      />
      {/* <div className="text-xl">
        <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="100%" size="16px" />
      </div> */}
    </div>
  );
};
