import Image from "next/image";
import React from "react";

export const MusicPlayerInfo = ({ title, artist, srcImage }) => {
  return (
    <div className="flex gap-2">
      <div className="w-10 h-10 relative">
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Current Song Image"
          src={"/abc"}
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
