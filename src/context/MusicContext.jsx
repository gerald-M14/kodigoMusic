import React, { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [featuredPlaylists] = useState([
    { 
      id: 1, 
      name: "Top Hits", 
      description: "The hottest tracks right now", 
      coverUrl: "https://i.scdn.co/image/ab67616d0000b273674ee85ea544f17b5726c54b"
    },
    { 
      id: 2, 
      name: "Chill Vibes", 
      description: "Relax and unwind", 
      coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/06/1c/7d/061c7df8-a009-a444-b3cf-d456d5278db5/8052869019138.jpg/1200x1200bb.jpg"
    },
    { 
      id: 3, 
      name: "Workout Mix", 
      description: "Get pumped and motivated", 
      coverUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8451894f88d85e7cf210d6b6b0"
    },
    { 
      id: 4, 
      name: "Indie Discoveries", 
      description: "Fresh indie tracks", 
      coverUrl: "https://i.scdn.co/image/ab67616d0000b273bb22f631220e5769b1de26cc"
    },
    { 
      id: 5, 
      name: "Morning Coffee", 
      description: "Perfect for your morning routine", 
      coverUrl: "https://images.stockcake.com/public/c/5/e/c5e8d692-9689-4c80-971d-dbada6effd18_large/autumn-morning-coffee-stockcake.jpg"
    },
    { 
      id: 6, 
      name: "Summer Vibes", 
      description: "Feel the summer breeze", 
      coverUrl: "https://i.scdn.co/image/ab67616d0000b27346e4e8079743a66a5467d091"
    },
    { 
      id: 7, 
      name: "90s Classics", 
      description: "The best of the 90s", 
      coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiA8zqHnl6XAr6CgK5vTui1OmsHpVEulzmxQ&s"
    },
    { 
      id: 8, 
      name: "Electronic Beats", 
      description: "Dance your heart out", 
      coverUrl: "https://i.scdn.co/image/ab67616d0000b27395f6550998b5dc24c5af6805"
    }
  ]);

  const [userPlaylists, setUserPlaylists] = useState([]);

  const addPlaylistToLibrary = (playlist) => {
    setUserPlaylists((prevPlaylists) => [...prevPlaylists, playlist]);
  };

  const removePlaylistFromLibrary = (playlistId) => {
    setUserPlaylists((prevPlaylists) =>
      prevPlaylists.filter((playlist) => playlist.id !== playlistId)
    );
  };

  return (
    <MusicContext.Provider value={{ featuredPlaylists, userPlaylists, addPlaylistToLibrary, removePlaylistFromLibrary }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusicContext() {
  return useContext(MusicContext);
}
