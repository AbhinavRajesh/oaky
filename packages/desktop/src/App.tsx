import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";

import { log } from "./utils/logger";
import { useGeneralStore } from "./data/app/General";
import "./App.css";
import Home from "./pages";
import WelcomeToTauri from "./pages/welcomeToTauri";
import Playlist from "./pages/playlist";
import { checkOnBoardingStatus } from "./utils/auth";
import OnBoarding from "./pages/onboarding";


function App() {
  const [{ selectedPage }, { setSelected }] = useGeneralStore()

  const displayPage = (): JSX.Element => {
    switch (selectedPage) {
      case 1: return <Home />
      case 2: return <Playlist />
      default: return <WelcomeToTauri />
    }
  }

  useEffect(() => {
    (async () => {
      const onBoarded = await checkOnBoardingStatus()
      if (!onBoarded) setSelected(0)
    })()
  }, [])

  return (
    <div className="relative flex h-full bg-[#191919] text-white">
      {selectedPage === 0 ? (
        <OnBoarding />
      ) : (
        <>
          <Sidebar />
          {displayPage()}
        </>
      )}
    </div>
  );
}

export default App;
