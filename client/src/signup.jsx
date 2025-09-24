import React from "react";

export default function SignUpPage() {
  return (
    <div className="h-full w-full bg-black text-gray-100 flex items-center justify-center sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
      <div className="bg-black flex flex-col md:flex-row w-full max-w-sm md:max-w-6xl rounded-lg shadow-lg overflow-hidden border border-green-700/50 mx-4 sm:mx-6 md:mx-0">
        
        {/* Left Section: Logo and Slogan */}
        <div className="md:w-1/2 bg-[#1A1A1A] p-6 sm:p-8 flex flex-col items-center justify-center space-y-3 sm:space-y-4 border-b md:border-b-0 md:border-r border-green-700/50">
          <img
            src="/logo.png" // This path points to the 'public' folder
            alt="FinQuest Logo"
            className="w-36 sm:w-48 md:w-56 lg:w-64 h-auto mb-3"
          />
        </div>

        {/* RIGHT SIDE: Sign Up Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0 p-6">
          <form className="w-full space-y-5 max-w-md">
            <h1 className="text-2xl md:text-3xl font-mono font-bold text-center text-white">
              SIGN UP
            </h1>

            <div>
              <label className="block text-sm font-arcadeclassic text-green-500 mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 bg-white text-black border border-green-700 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-arcadeclassic text-green-500 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 bg-white text-black border border-green-700 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-arcadeclassic text-green-500 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 bg-white text-black border border-green-700 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-arcadeclassic py-3 rounded-md transition duration-200 ease-in-out text-md"
            >
              SIGN UP
            </button>
            <div className="flex items-center space-x-2 my-3">
              <span className="flex-grow border-t border-gray-700"></span>
              <span className="text-gray-500 text-xs font-mono">or</span>
              <span className="flex-grow border-t border-gray-700"></span>
            </div>

            {/* GOOGLE SIGN UP BUTTON */}
            <button className="w-full bg-transparent border border-gray-700 hover:border-green-500 text-white font-mono font-bold py-2.5 rounded-md flex items-center justify-center space-x-2 transition duration-300 ease-in-out text-sm">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.94 0 6.64 1.7 8.16 3.13l6-6C34.18 3.13 29.5 1 24 1 14.94 1 7.16 6.7 3.5 14.44l7.06 5.5C12.36 13.9 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.5 24.5c0-1.64-.15-3.2-.43-4.7H24v9h12.75c-.55 2.9-2.2 5.35-4.68 7.06l7.19 5.6C43.2 38.4 46.5 32 46.5 24.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.56 28.06c-.5-1.48-.78-3.06-.78-4.56s.28-3.08.78-4.56l-7.06-5.5C2.55 15.7 2 19.75 2 23.5s.55 7.8 1.5 11.06l7.06-5.5z"
                />
                <path
                  fill="#4285F4"
                  d="M24 47c6.5 0 11.94-2.16 15.93-5.9l-7.19-5.6c-2.1 1.4-4.78 2.25-8.74 2.25-6.26 0-11.64-4.4-13.44-10.44l-7.06 5.5C7.16 41.3 14.94 47 24 47z"
                />
              </svg>
              <span>Sign up with Google</span>
            </button>

            {/* FOOTER */}
            <p className="text-xs text-center text-gray-400 font-mono">
              Already have an account?{" "}
              <a href="#" className="text-green-400 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}