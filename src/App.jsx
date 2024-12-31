import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Library from './components/Library'
import Search from './components/Search'
import { MusicProvider } from './context/MusicContext'

function App() {
  return (
    <MusicProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </div>
    </MusicProvider>
  )
}

export default App

