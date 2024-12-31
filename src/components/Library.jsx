import React from 'react'
import { useMusicContext } from '../context/MusicContext'
import { FaHeart } from 'react-icons/fa'

function Library() {
  const { userPlaylists, removePlaylistFromLibrary } = useMusicContext() // Obtener las playlists y la función para eliminar del contexto

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Your Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userPlaylists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow">
            <img src={playlist.coverUrl} alt={playlist.name} className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="text-lg font-semibold text-white">{playlist.name}</h3>
            <p className="text-gray-400 mb-2">{playlist.songCount} songs</p>
            <div className="flex justify-end">
              <button
                onClick={() => removePlaylistFromLibrary(playlist.id)} // Función para eliminar de la biblioteca
                className="text-red-500 hover:text-red-700"
              >
                <FaHeart className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Library
