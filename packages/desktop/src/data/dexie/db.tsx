import Dexie, { Table } from "dexie";

export interface Song {
  id: string;
  path: string;
  fileName: string;
  title: string;
  artist: string;
  album: string;
  year: string;
}

export interface Playlist {
  id: number;
  name: string;
}

export class DexieDB extends Dexie {
  songs!: Table<Song>;
  playlists!: Table<Playlist>;

  constructor() {
    super("oaky");
    this.version(1).stores({
      songs: "id, fileName, title, artist, album, year",
      playlists: "id, name",
    });
  }
}

export const db = new DexieDB();
