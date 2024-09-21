import Image from "next/image";
import React from "react";
import defaultImage from "@/public/assets/images/music_card_image.jpg";

export const MusicPlayerInfo = ({ title, artist, srcImage }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 relative">
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Current Song Image"
          src={srcImage && srcImage || defaultImage}
          className="absolute"
        />
      </div>
      <div className="text-white">
        <h3>{title || "Title"}</h3>
        <span>{artist || "Artist"}</span>
      </div>
    </div>
  );
};
