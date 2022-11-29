import { useLiveQuery } from "dexie-react-hooks";
import { useGeneralStore } from "../data/app/General";
import { db } from "../data/dexie/db";

const Playlist = () => {
  const [{ selectedPlaylistId }] = useGeneralStore();
  const playlist = useLiveQuery(() => db.playlists.get(selectedPlaylistId), [selectedPlaylistId]);

  return (
    <div>
      <h1>
        This is the playlist page
      </h1>
      <p>And you have selected: {JSON?.stringify(playlist)}</p>
    </div>
  )
}

export default Playlist;