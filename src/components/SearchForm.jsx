import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically call an API to search for music
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 gradient-text">Search Music</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="query" className="block mb-2">Search Query</label>
          <input
            type="text"
            id="query"
            {...register("query", { required: "Search query is required" })}
            className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          {errors.query && <p className="text-red-500 mt-1">{errors.query.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2">Search Type</label>
          <select
            id="type"
            {...register("type", { required: "Search type is required" })}
            className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          >
            <option value="">Select a type</option>
            <option value="track">Track</option>
            <option value="album">Album</option>
            <option value="artist">Artist</option>
          </select>
          {errors.type && <p className="text-red-500 mt-1">{errors.type.message}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;

