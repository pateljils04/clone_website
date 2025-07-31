import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
   <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 text-base sm:text-lg"
      >
        Go Back Home
      </Link>

      {/* Optional image */}
      <img
        src="https://thvnext.bing.com/th/id/OIP.3_D6Cl2xR5Fc202Yh4k5FQHaE9?cb=thvnext&rs=1&pid=ImgDetMain"
        alt="Not Found"
        className="mt-10 w-60 sm:w-72 md:w-96"
      />
    </div>
  )
}

export default NotFound
