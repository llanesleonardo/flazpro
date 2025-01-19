import React from 'react';

const Reviews = () => {
  return (
    <div id="reviews" className="bg-gray-100 py-10">
      <div className="mx-auto flex items-center justify-center space-x-4 bg-gray-100 p-10 rounded-lg shadow-md max-w-[350px]">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Rate Us
        </h2>

        {/* Google Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          ></path>
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          ></path>
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          ></path>
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          ></path>
          <path d="M1 1h22v22H1z" fill="none"></path>
        </svg>

        {/* Stars */}
        <div className="relative flex items-center">
          {/* Filled stars */}
          <div
            className="absolute top-0 left-0 flex text-yellow-400 overflow-hidden"
            style={{ width: '96%' }}
          >
            <span>★★★★★</span>
          </div>
          {/* Empty stars */}
          <div className="text-gray-300">
            <span>★★★★★</span>
          </div>
        </div>
      </div>

      {/* Link to Google Review */}
      <div className="text-center mt-4">
        <a
          href="https://www.google.com/search?q=fl+az+pro+landscaping&oq=fl+az+pro+&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgoIAhAAGIAEGKIEMgcIAxAAGO8FMgcIBBAAGO8FMgcIBRAAGO8FMgcIBhAAGO8FMgYIBxBFGDzSAQgxOTA5ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x4b2591468a3f815f:0x115c72dedeaa86e3,3,,,,,"
          target="_blank"
          className="text-blue-500 underline"
        >
          Leave a Google Review
        </a>
      </div>
    </div>
  );
};

export default Reviews;
