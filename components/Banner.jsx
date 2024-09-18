import React from "react";
import banner from "../public/assets/images/music_banner.jpg";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative h-96">
      <Image
        src={banner}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <p className="absolute w-50 top-1/2 left-[10%] transform -translate-y-1/2 text-center font-semibold text-xl">
          Your Music, Your World <br /> Discover Endless Tunes!
        </p>
        <p className="absolute w-40 top-1/2 right-[10%] transform -translate-y-1/2 text-center font-semibold text-xl">
          Feel the Vibes <br /> Listen to Great Music Anytime, Anywhere!
        </p>
      </div>
    </div>
  );
};
