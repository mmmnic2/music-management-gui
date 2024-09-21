import { Banner } from "@/components/Banner";
import { Searchbar } from "@/components/common/navbar/Searchbar";
import MusicProvider from "@/components/MusicProvider";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="">
        <Banner />
        <Searchbar />
      </div>
      <MusicProvider />
    </div>
  );
}
