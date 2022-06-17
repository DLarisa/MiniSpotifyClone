import React from "react";

const context = {
  songId: null,
  title: '',
  artist: '',
  setSongId: (id: string) => {},
  setTitle: (title: string) => {},
  setArtist: (artist: string) => {}
}

export const AppContext = React.createContext(context);