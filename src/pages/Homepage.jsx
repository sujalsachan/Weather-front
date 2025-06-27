import React from 'react'
import SearchBar from '../components/SearchBar'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center px-4">
      <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">☁️ SkyLite Weather</h1>
        <p className="text-gray-600 mb-6">Get current weather and forecasts for any city worldwide.</p>
        <SearchBar />
      </div>
    </div>
  )
}
