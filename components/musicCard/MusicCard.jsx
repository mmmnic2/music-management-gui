"use client";

import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

export const MusicCard = ({ data }) => {
  const [id, setId] = useState(0);
  const handleSongClick = () => {
    if (id === data.id) {
      setId(0);
    }
    setId(data.id);
  };
  return (
    <div
      className="basis-1/4 px-1 mb-2 group cursor-pointer"
      onClick={handleSongClick}
    >
      <div className="glassmorphism-01 rounded-md py-4 px-6">
        <div className="border rounded-md relative">
          <Image width={100} height={100} src={"/abc"} alt="card image" />
          <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500">
            {
              <FontAwesomeIcon
                icon={(id === data.id && faCirclePause) || faCirclePlay}
              />
            }
          </div>
        </div>
        <div className="mt-4">
          <h1 className="capitalize text-white font-bold text-xl mb-1">
            {data?.title}
          </h1>
          <p className="capitalize text-white text-sm">{data?.artist}</p>
        </div>
      </div>
    </div>
  );
};
