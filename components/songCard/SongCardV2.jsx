import { faEllipsisVertical, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export const SongCardV2 = ({ song, noHover = true }) => {
  return (
    <div className="space-y-2 cursor-pointer text-white">
      <div
        className={`flex justify-between items-center rounded ${
          noHover && "hover:active-background"
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-[50%] relative">
            <Image
              layout="fill"
              src="/assets/images/music_card_image.jpg"
              alt="Starboy"
              objectFit="cover"
              quality={100}
              className="rounded-[50%]"
            />
          </div>
          <div>
            <h3 className="text-xl">{song?.title || "Title"}</h3>
            <span className="text-xs text-text-secondary">
              {song?.subtitle || "Subtitle"}
            </span>
          </div>
        </div>
        <div className="flex space-x-4 relative pr-2">
          <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
