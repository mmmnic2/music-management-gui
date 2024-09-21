"use client";
import { MusicPlayerProvider } from "@/context/MusicPlayerContext";
import React from "react";
import SongList from "./SongList";
import { MusicPlayer } from "./musicPlayer/MusicPlayer";

const MusicProvider = () => {
  return (
    <div className="flex flex-col h-full">
      <MusicPlayerProvider>
        <div className="flex-grow">
          <SongList />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <MusicPlayer />
        </div>
      </MusicPlayerProvider>
    </div>
  );
};

export default MusicProvider;
