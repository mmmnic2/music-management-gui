"use client";
import React, { useEffect, useState } from "react";
import { MusicPlayerActions } from "./MusicPlayerActions";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumnControl";
import { MusicPlayerInfo } from "./MusicPlayerInfo";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(240);
  const [volume, setVolume] = useState(20);
  const [isMute, setIsMute] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime < duration) {
            return prevTime + 1;
          } else {
            setIsPlaying(false);
            return prevTime;
          }
        });
      }, 1000);
    } else if (!isPlaying && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, duration]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (value) => {
    setCurrentTime(value);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);

    console.log("Volume:", value);
  };

  const handleMute = () => {
    setIsMute(!isMute);
  };

  useEffect(() => {
    if (volume === 0) {
      setIsMute(true);
    }
    setIsMute(false);
  }, [volume]);

  return (
    <div className="flex items-center gap-3 glassmorphism">
      <div className="flex items-center gap-3 justify-between basis-3/4">
        <MusicPlayerActions
          isPlaying={isPlaying}
          onPlayPause={togglePlayPause}
        />
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onTimeChange={handleTimeChange}
        />
        <VolumeControl
          volume={volume}
          onVolumeChange={handleVolumeChange}
          isMute={isMute}
          onMute={handleMute}
        />
      </div>
      <div className="basis-1/4">
        <MusicPlayerInfo />
      </div>
    </div>
  );
};
