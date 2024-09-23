"use client";
import { MusicPlayerProvider } from "@/context/MusicPlayerContext";
import React from "react";
import { MusicPlayer } from "./musicPlayer/MusicPlayer";

const MusicProviderV2 = () => {
  return (
    <MusicPlayerProvider>
      <MusicPlayer />
    </MusicPlayerProvider>
  );
};

export default MusicProviderV2;
