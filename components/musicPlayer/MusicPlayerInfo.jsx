import Image from "next/image";
import React from "react";
import defaultImage from "@/public/assets/images/music_card_image.jpg";
import { SongCardV2 } from "../songCard/SongCardV2";

export const MusicPlayerInfo = ({ title, artist, srcImage }) => {
  return (
    <div className="pr-2">
      {/* <div className="w-10 h-10 relative">
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Current Song Image"
          src={srcImage && srcImage || defaultImage}
          className="absolute"
        />
      </div>
      <div>
        <h3 cl>{title || "Title"}</h3>
        <span>{artist || "Artist"}</span>
      </div> */}
      <SongCardV2 noHover={false} />
    </div>
  );
};
