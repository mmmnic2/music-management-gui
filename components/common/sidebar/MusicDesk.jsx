"use client";
import { faBookmark, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import React from "react";

export const MusicDesk = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="glassmorphism text-white py-4 px-2 mb-4">
      <h2 className="mb-4 text-xl font-semibold">Music Desk</h2>
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faHouse} className="inline-block w-5 h-5" />
          <span className="flex-grow">Home</span>
        </p>
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBookmark} className="inline-block w-5 h-5" />
          <span className="flex-grow">My Library</span>
        </p>
      </div>
    </div>
  );
};
