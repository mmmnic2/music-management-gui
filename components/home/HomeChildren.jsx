import React from "react";
import { SongCardV3 } from "../songCard/SongCardV3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Genres } from "./Categories";
import SongList from "../SongList";

export const HomeChildren = () => {
  return (
    <div className="glassmorphism px-4">
      <div className="py-6">Main Nav bar</div>
      <div className="grid grid-cols-2 grid-rows-4 gap-10">
        <div className="row-span-4">
          <SongCardV3 song={{ title: "Chill Mix", subtitle: "21 Tracks" }} />
        </div>
        <div className="flex flex-col cursor-pointer">
          <h2 className="text-2xl">Discover</h2>
          <FontAwesomeIcon icon={faArrowRight} fontSize={20} />
        </div>
        <div className="row-span-3">
          <SongCardV3 />
        </div>
      </div>
      <div className="py-8">
        <h3 className="mb-3">Genres</h3>
        <Genres />
      </div>
      <div>
        <h3 className="mb-3">Popular</h3>
        <SongList />
      </div>
    </div>
  );
};
