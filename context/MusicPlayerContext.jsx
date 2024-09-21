import { createContext, useState, useContext } from 'react';

const MusicPlayerContext = createContext(null);

export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MusicPlayerContext.Provider value={{ currentSong, setCurrentSong, isPlaying, setIsPlaying }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => useContext(MusicPlayerContext);
