"use client";

import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import defaultImage from "@/public/assets/images/music_card_image.jpg";
import { useMusicPlayer } from "@/context/MusicPlayerContext";

export const SongCard = ({ data }) => {
  const [id, setId] = useState(0);
  const { setCurrentSong, setIsPlaying, isPlaying } = useMusicPlayer();

  const handleSongClick = () => {
    if (id === data.id) {
      setIsPlaying(prev => !prev);
    } else {
      setId(data.id);
      setCurrentSong(data);
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="basis-1/4 px-1 mb-2 group cursor-pointer"
      onClick={handleSongClick}
    >
      <div className="glassmorphism-01 rounded-md py-4 px-6">
        <div className="border rounded-md relative">
          <div className="w-full min-h-28">
            <Image
              layout="fill"
              src={(data?.image && data?.image) || defaultImage}
              quality={100}
              objectFit="fill"
              alt="card image"
            />
          </div>
          <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 text-white text-4xl">
            <FontAwesomeIcon
              icon={id === data.id && isPlaying ? faCirclePause : faCirclePlay}
            />
          </div>
        </div>
        <div className="mt-4">
          <h1 className="capitalize text-white font-bold text-xl mb-1">
            {data?.title || "Song Title"}
          </h1>
          <p className="capitalize text-white text-sm">{data?.artist || "Artist"}</p>
        </div>
      </div>
    </div>
  );
};
