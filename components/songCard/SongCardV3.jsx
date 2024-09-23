import Image from "next/image";
import React from "react";

export const SongCardV3 = ({ song, width, height }) => {
  return (
    <div className={`relative ${width || "w-full"} ${height || "h-full"}`}>
      <div className="relative w-full h-full aspect-w-1 aspect-h-1">
        <Image
          src={"/assets/images/music_card_image.jpg"}
          alt="Music Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 rounded-xl"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between glassmorphism-01 text-white p-2 rounded-b-xl">
        <div>
          <h3>{song?.title || "Title"}</h3>
          <span className="text-text-secondary text-xs">{song?.subtitle || "subtitle"}</span>
        </div>
        <span>View all</span>
      </div>
    </div>
  );
};
