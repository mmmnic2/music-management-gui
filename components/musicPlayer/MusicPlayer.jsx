"use client";
import React, { useEffect, useState, useRef } from "react";
import { MusicPlayerActions } from "./MusicPlayerActions";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumnControl";
import { MusicPlayerInfo } from "./MusicPlayerInfo";
import { useMusicPlayer } from "@/context/MusicPlayerContext";
import { Howl } from "howler";

export const MusicPlayer = () => {
  const { currentSong, isPlaying, setIsPlaying } = useMusicPlayer();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(10);
  const [isMute, setIsMute] = useState(false);
  const soundRef = useRef(null);
  const [currentSongUrl, setCurrentSongUrl] = useState(null);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        if (soundRef.current) {
          setCurrentTime(soundRef.current.seek());
        }
      }, 1000);
    } else if (!isPlaying && interval) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.play();
      } else {
        soundRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentSong) {
      if (!soundRef.current || currentSongUrl !== currentSong) {
        if (soundRef.current) {
          soundRef.current.unload();
        }

        soundRef.current = new Howl({
          src: [currentSong],
          volume: volume / 100,
          onload: () => {
            setDuration(soundRef.current.duration());
          },
          onend: () => {
            setIsPlaying(false);
            setCurrentTime(0);
          },
        });

        soundRef.current.play();
        setIsPlaying(true);
        setCurrentSongUrl(currentSong);
      }
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleTimeChange = (value) => {
    if (soundRef.current) {
      soundRef.current.seek(value);
      setCurrentTime(value);
    }
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    if (soundRef.current) {
      soundRef.current.volume(value / 100);
    }
  };

  const handleMute = () => {
    setIsMute(!isMute);
    if (soundRef.current) {
      soundRef.current.mute(!isMute);
    }
  };

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
