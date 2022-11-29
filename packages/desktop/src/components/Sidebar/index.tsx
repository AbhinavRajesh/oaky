import { open } from "@tauri-apps/api/dialog"
import { useLiveQuery } from "dexie-react-hooks";

import SidebarButton from "./button";

import { createPlaylist } from "../../data/dexie/songs";
import { db, Playlist } from "../../data/dexie/db";
import { useGeneralStore } from "../../data/app/General";
import { log } from "../../utils/logger";

interface SidebarMenuItems extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  name: string;
  icon?: string;
}

const Sidebar = () => {
  const [, { setSelected, setSelectedPlaylistId }] = useGeneralStore();

  const sidebarMenuItems: SidebarMenuItems[] = [
    {
      name: "Home",
      onClick: () => setSelected(0)
    },
    {
      name: "Import songs",
      onClick: async () => {
        const selectedFilePath = await open({
          multiple: false,
          // TODO: set the filters for audio
          // filters: [{
          //   name: "Audio",
          //   extensions: ["mp3"]
          // }]
        })
        log("Path: ", selectedFilePath)
        if (selectedFilePath) {
          // TODO: Save the song
        }
      }
    }
  ]

  const playlists = useLiveQuery(() => db.playlists.toArray()) as Playlist[];

  return (
    <div className="flex flex-col max-w-[200px] w-full p-[20px] h-screen border-r border-gray-800">
      <div className="flex items-center justify-start">
        <img src="/logo.svg" alt="Oaky" height={20} className="h-[20px]" />
        <h1 className="font-bold text-[14px] ml-[10px]">Oaky</h1>
      </div>
      <div className="mt-[20px] space-y-[4px]">
        {sidebarMenuItems.map(({ name, icon, onClick }, key) => (
          <SidebarButton name={name} icon={icon} onClick={onClick} key={key} />
        ))}
      </div>
      <div className="w-full flex items-center px-[8px]">
        <div className="w-full h-[1px] rounded bg-white"></div>
        <div className="text-[20px] ml-[10px] cursor-pointer" onClick={createPlaylist}>+</div>
      </div>
      <div>
        {playlists?.map(({ id, name }) => (
          <SidebarButton name={name} key={id} onClick={() => {
            setSelected(1)
            setSelectedPlaylistId(id)
          }} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;