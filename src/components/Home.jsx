import React, { useState } from 'react'
import { useMusicContext } from '../context/MusicContext'
import { FaPlay, FaHeart, FaPause, FaVolumeUp } from 'react-icons/fa'

function Home() {
  const { featuredPlaylists, userPlaylists, addPlaylistToLibrary } = useMusicContext()
  const [playingPlaylistId, setPlayingPlaylistId] = useState(null) // Playlist actual
  const [showFooter, setShowFooter] = useState(false)

  // Función para agregar o quitar una playlist de la biblioteca
  const handleAddToLibrary = (playlist) => {
    const playlistExists = userPlaylists.some(p => p.id === playlist.id)

    if (!playlistExists) {
      addPlaylistToLibrary(playlist) // Agregar a la biblioteca si no está presente
    } else {
      // Eliminar de la biblioteca si ya está
      addPlaylistToLibrary(userPlaylists.filter(p => p.id !== playlist.id))
    }
  }

  // Función para manejar el estado de play/pause
  const handlePlayPause = (playlistId) => {
    if (playingPlaylistId === playlistId) {
      setPlayingPlaylistId(null) // Pausar la playlist actual
      setShowFooter(false) // Ocultar footer cuando la música se pausa
    } else {
      setPlayingPlaylistId(playlistId) // Reproducir la playlist seleccionada
      setShowFooter(true) // Mostrar el footer con los controles de reproducción
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Welcome to Kodigo Music</h1>

      {/* Secciones de categorías */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Browse Categories</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-blue-400 text-white py-3 px-6 rounded-full cursor-pointer">Podcast</div>
          <div className="bg-green-400 text-white py-3 px-6 rounded-full cursor-pointer">Música para Programar</div>
          <div className="bg-yellow-400 text-white py-3 px-6 rounded-full cursor-pointer">Música Alegre</div>
          <div className="bg-red-400 text-white py-3 px-6 rounded-full cursor-pointer">Salsa</div>
          <div className="bg-purple-400 text-white py-3 px-6 rounded-full cursor-pointer">Top Más Escuchados</div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center">Featured Playlists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredPlaylists.map((playlist) => {
          const isPlaylistInLibrary = userPlaylists.some(p => p.id === playlist.id) // Verificar si la playlist ya está en la biblioteca
          
          return (
            <div key={playlist.id} className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition-shadow">
              <img src={playlist.coverUrl} alt={playlist.name} className="w-full h-40 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-semibold text-white">{playlist.name}</h3>
              <p className="text-gray-400 mb-2">{playlist.description}</p>
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => handlePlayPause(playlist.id)} 
                  className="text-blue-400 hover:text-blue-500"
                >
                  {playingPlaylistId === playlist.id ? (
                    <FaPause className="text-xl" />
                  ) : (
                    <FaPlay className="text-xl" />
                  )}
                </button>
                <button
                  onClick={() => handleAddToLibrary(playlist)} // Agregar o quitar de la biblioteca
                  className={`text-xl ${isPlaylistInLibrary ? 'text-red-500' : 'text-gray-400'}`} // Cambia el color a rojo si está en la biblioteca
                  disabled={isPlaylistInLibrary} // Deshabilita el botón si está en la biblioteca
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {showFooter && playingPlaylistId && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=50&width=50" alt="Playlist cover" className="w-12 h-12 object-cover rounded-md" />
            <div className="text-white">
              <p className="font-semibold">Now Playing: {featuredPlaylists.find(p => p.id === playingPlaylistId)?.name}</p>
              <p className="text-sm text-gray-400">Song Title - Artist</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-gray-400">
              <FaPlay className="text-xl" />
            </button>
            <button className="text-white hover:text-gray-400">
              <FaPause className="text-xl" />
            </button>
            <button className="text-white hover:text-gray-400">
              <FaVolumeUp className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
