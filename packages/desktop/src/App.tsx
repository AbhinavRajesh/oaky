import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Sidebar from "./components/Sidebar";

import { forage } from "@tauri-apps/tauri-forage"


function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
    await forage.setItem({
      key: "user",
      value: { name: name}
    } as any)()
  }

  useEffect(() => {
    (async () => {
      const storedName = await forage.getKeyValue({
        key: "user",
        value: "name"
      })() as string;

      if (storedName) setName(storedName)
    })();
  }, [])

  return (
    <div className="flex h-full bg-[#191919] text-white">
      <Sidebar />
      <div>

      <h1 className="text-[32px] mb-[50px] font-bold">Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <br />
      <p className="">Name: {name}!</p>
      <br />

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
            />
          <button type="button" onClick={() => greet()}>
            Greet
          </button>
        </div>
      </div>
      <p>{greetMsg}</p>
      </div>
    </div>
  );
}

export default App;
