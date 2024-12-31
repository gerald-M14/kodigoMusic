import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaMusic, FaSearch } from 'react-icons/fa'

function Header() {
  const location = useLocation()

  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto px-4 flex items-center">
        {/* Logo/Nombre */}
        <Link to="/" className="text-2xl font-bold text-blue-400 flex items-center space-x-2">
          <FaMusic className="text-3xl" /> {/* Icono de música */}
          <span>Kodigo Music</span>
        </Link>

        {/* Enlaces de navegación */}
        <ul className="flex space-x-6 ml-auto"> {/* ml-auto para alinear a la derecha */}
          <li>
            <Link
              to="/"
              className={`flex items-center space-x-2 hover:text-blue-400 transition-colors ${location.pathname === '/' ? 'text-blue-400' : ''}`}
            >
              <FaHome /> {/* Icono de inicio */}
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className={`flex items-center space-x-2 hover:text-blue-400 transition-colors ${location.pathname === '/library' ? 'text-blue-400' : ''}`}
            >
              <FaMusic /> {/* Icono de biblioteca */}
              <span>Library</span>
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className={`flex items-center space-x-2 hover:text-blue-400 transition-colors ${location.pathname === '/search' ? 'text-blue-400' : ''}`}
            >
              <FaSearch /> {/* Icono de búsqueda */}
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
