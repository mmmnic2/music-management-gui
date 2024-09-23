import React from "react";
import { MusicDesk } from "./MusicDesk";
import { RecentlyPlayed } from "./RecentlyPlayed";

export const Sidebar = () => {
  return (
    <div className="basis-1/4">
      <MusicDesk />
      <RecentlyPlayed />
    </div>
  );
};
