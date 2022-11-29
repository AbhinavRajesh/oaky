import { useEffect, useState } from "react";
import { listen } from "@tauri-apps/api/event";

import Sidebar from "./components/Sidebar";
import Dropbox from "./components/Dropbox";

import { log } from "./utils/logger";
import { useGeneralStore } from "./data/app/General";
import "./App.css";
import Home from "./pages";
import WelcomeToTauri from "./pages/welcomeToTauri";
import Playlist from "./pages/playlist";


function App() {
  const [showDropbox, setShowDropbox] = useState<boolean>(false);
  const [{ selectedPage }, { setSelected }] = useGeneralStore()

  useEffect(() => {
    const fileDropHoverEvent = listen("tauri://file-drop-hover", (event) => {
      setShowDropbox(true);
    });
    const fileDropEvent = listen("tauri://file-drop", (event) => {
      setShowDropbox(false);
      if ((event.payload as string[]).length > 0) {
        log(event);
        // handleDrop(event);
      } else {
        // TODO: Internal movement
        log("Internal movement it seems...");
      }
      // if (event.payload)
    });
    const fileDropCancelledEvent = listen(
      "tauri://file-drop-cancelled",
      (event) => {
        setShowDropbox(false);
      }
    );

    return () => {
      fileDropHoverEvent.then((f) => f());
      fileDropEvent.then((f) => f());
      fileDropCancelledEvent.then((f) => f());
    };
  }, []);

  const displayPage = (): JSX.Element => {
    switch (selectedPage) {
      case 0: return <Home />
      case 1: return <Playlist />
      default: return <WelcomeToTauri />
    }
  }

  return (
    <div className="relative flex h-full bg-[#191919] text-white">
      <Sidebar />
      {showDropbox && <Dropbox />}
      {displayPage()}
    </div>
  );
}

export default App;
