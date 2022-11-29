import { log } from "../../utils/logger";
import { db } from "./db";

export const createPlaylist = async () => {
  log("Creating playlist...");
  const playlistCount = await db.playlists.count();
  const newPlaylistId = await db.playlists.add({
    id: playlistCount,
    name: `Playlist #${playlistCount}`,
  });
  log(`Playlist created with ID: ${newPlaylistId}`);
};
