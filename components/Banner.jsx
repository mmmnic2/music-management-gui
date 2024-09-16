import React from "react";
import banner from "../public/assets/images/music_banner.jpg";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-screen h-[450px] relative">
      <Image width={"100%"} height={"100%"} src={banner} alt="music banner" />
      <p className="absolute w-50 top-1/2 left-[10%] transform -translate-y-1/2 text-center font-semibold text-xl">
        Your Music, Your World <br /> Discover Endless Tunes!
      </p>
      <p className="absolute w-40 top-1/2 right-[10%] transform -translate-y-1/2 text-center font-semibold text-xl">
        Feel the Vibes <br /> Listen to Great Music Anytime, Anywhere!
      </p>
    </div>
  );
};
