"use client"; // Đảm bảo rằng component này chạy trên client

import { SongCardV2 } from "@/components/songCard/SongCardV2";
import React, { useEffect, useState } from "react";

export const RecentlyPlayed = () => {
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState([]);

  useEffect(() => {
    const storedSongs =
      JSON.parse(localStorage.getItem("recentlyPlayed")) || [];
    setRecentlyPlayedSongs(storedSongs);
  }, []);

  return (
    <div className="glassmorphism py-4 px-2">
      <h3 className="text-white text-lg font-semibold mb-2">Recently played</h3>
      <div className="">
        {recentlyPlayedSongs.length > 0 ? (
          recentlyPlayedSongs.map((song, index) => (
            <SongCardV2 key={index} song={song} />
          ))
        ) : (
          <p className="text-white">No recently played songs.</p>
        )}
      </div>
    </div>
  );
};
