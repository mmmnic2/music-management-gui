"use client";

import { HomeChildren } from "@/components/home/HomeChildren";
import { MusicPlayer } from "@/components/musicPlayer/MusicPlayer";
import { MusicPlayerProvider } from "@/context/MusicPlayerContext";
export default function Home() {
  return (
    // <div className="min-h-screen relative">
    //   <div className="">
    //     {/* <Banner /> */}
    //     <Searchbar />
    //   </div>
    //   <MusicProvider />
    // </div>
    <div className="text-white flex-1">
      {/* <Sidebar /> */}
      <MusicPlayerProvider>
        <HomeChildren />
        <MusicPlayer />
      </MusicPlayerProvider>
    </div>
  );
}
