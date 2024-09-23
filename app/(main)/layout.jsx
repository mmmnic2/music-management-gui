import { NavBar } from "@/components/common/navbar/NavBar";
import { Sidebar } from "@/components/common/sidebar/Sidebar";
import MusicProviderV2 from "@/components/MusicProviderV2";

export const metadata = {
  title: "Music Management | Home",
  description: "Generated by create next app",
};

export default function HomeLayout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/music_background.jpg')" }}
    >
      <div className="w-full h-screen lg:max-w-[80%] mx-auto flex flex-col justify-between py-8">
        {/* <NavBar /> */}
        <div className="flex gap-4">
          <Sidebar />
          {children}
          <div className="">
            <NavBar />
          </div>
        </div>
        <div>{/* <MusicProviderV2 /> */}</div>
      </div>
    </div>
  );
}
