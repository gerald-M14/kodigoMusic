import React, { useState } from 'react'

function Search() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!query.trim()) {
      newErrors.query = 'Search query is required'
    }

    if (!type) {
      newErrors.type = 'Search type is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      console.log('Search submitted:', { query, type })
      // Here you would typically call an API to search for music
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Search Music</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="query" className="block mb-2">Search Query</label>
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.query && <p className="text-red-500 mt-1">{errors.query}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2">Search Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a type</option>
            <option value="track">Track</option>
            <option value="album">Album</option>
            <option value="artist">Artist</option>
          </select>
          {errors.type && <p className="text-red-500 mt-1">{errors.type}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
          Search
        </button>
      </form>
    </div>
  )
}

export default Search

