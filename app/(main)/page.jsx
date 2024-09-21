import { Banner } from "@/components/Banner";
import { Searchbar } from "@/components/common/navbar/Searchbar";
import { MusicPlayer } from "@/components/musicPlayer/MusicPlayer";
import SongList from "@/components/SongList";

const songs = [
  {
    id: 1,
    title: "song1",
    artist: "artist1",
  },
  {
    id: 4,
    title: "song1",
    artist: "artist1",
  },
  {
    id: 3,
    title: "song1",
    artist: "artist1",
  },
  {
    id: 2,
    title: "song1",
    artist: "artist1",
  },
  {
    id: 5,
    title: "song1",
    artist: "artist1",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Banner />
        <Searchbar />
        <SongList />
      </div>
      <div>
        <MusicPlayer />
      </div>
    </div>
  );
}
