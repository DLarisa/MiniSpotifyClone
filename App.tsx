import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContext } from './AppContext';
import PlayerWidget from './components/PlayerWidget';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId, setSongId] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [artist, setArtist] = useState<string | null>(null);
  const [input, setInput] = useState<string | null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
          <AppContext.Provider value={{
            songId: songId,
            title: title,
            artist: artist,
            setSongId: (id: string) => setSongId(id),
            setTitle: (title: string) => setTitle(title),
            setArtist: (artist: string) => setArtist(artist)
          }}>
            <Navigation colorScheme={colorScheme} />
            <PlayerWidget />
            <StatusBar />
          </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
