import { useMusicPlayer } from "@/context/MusicPlayerContext";
import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

export const SongCardV4 = ({ song, width = "w-full", height = "h-full" }) => {
  const [id, setId] = useState(0);
  const { setCurrentSong, setIsPlaying, isPlaying } = useMusicPlayer();

  const handleSongClick = () => {
    if (id === song.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setId(song.id);
      setCurrentSong(song);
      setIsPlaying(true);

      const storedSongs = JSON.parse(localStorage.getItem("recentlyPlayed")) || [];

      const songExists = storedSongs.some((s) => s.id === song.id);

      if (!songExists) {
        storedSongs.push(song);
        localStorage.setItem("recentlyPlayed", JSON.stringify(storedSongs));
      }
    }
  };

  return (
    <div
      className={`relative ${width} ${height} cursor-pointer`}
      onClick={handleSongClick}
    >
      <div className="relative w-full h-full">
        <Image
          src={"/assets/images/music_card_image.jpg"}
          alt="Music Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 rounded-xl"
        />
      </div>
      <div className="absolute top-2 right-2 text-4xl">
        <FontAwesomeIcon
          icon={id === song.id && isPlaying ? faCirclePause : faCirclePlay}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between glassmorphism-01 text-white p-2 rounded-b-xl">
        <div>
          <h3>{song?.title || "Title"}</h3>
        </div>
      </div>
    </div>
  );
};
