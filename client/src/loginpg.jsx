import React from 'react';

const LoginPage = () => {
  return (
    // This parent div centers the container on the screen and adds padding
    <div className="h-full w-full bg-black text-gray-100 flex items-center justify-center sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
      <div className="bg-black flex flex-col md:flex-row w-full max-w-sm md:max-w-6xl rounded-lg shadow-lg overflow-hidden border border-green-700/50 mx-4 sm:mx-6 md:mx-0">
        
        {/* Left Section: Logo and Slogan */}
        <div className="md:w-1/2 bg-[#1A1A1A] p-6 sm:p-8 flex flex-col items-center justify-center space-y-3 sm:space-y-4 border-b md:border-b-0 md:border-r border-green-700/50">
          <img
            src="/logo.png"
            alt="FinQuest Logo"
            className="w-36 sm:w-48 md:w-56 lg:w-64 h-auto mb-3"
          />
        </div>

        {/* Right Section: Login Form */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center space-y-4 sm:space-y-5">
          <h1 className="text-2xl sm:text-3xl font-mono font-bold text-center text-white mb-1 sm:mb-2">FINQUEST</h1>
          <p className="text-xs sm:text-sm font-mono text-center text-gray-400 mb-4 sm:mb-6">JOIN THOUSANDS LEARNING...</p>

          {/* Email/Username Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-mono text-gray-300 mb-1">EMAIL / USERNAME</label>
            <input
              type="text"
              id="email"
              className="w-full p-2.5 bg-[#171717] border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white font-mono text-sm"
              placeholder=""
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-mono text-gray-300 mb-1">PASSWORD</label>
            <input
              type="password"
              id="password"
              className="w-full p-2.5 bg-[#171717] border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white font-mono text-sm"
              placeholder=""
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-[#008000] hover:bg-[#006400] text-white font-mono font-bold py-2.5 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
            LOGIN
          </button>

          {/* Forgot Password */}
          <a href="#" className="text-xs font-mono text-gray-500 hover:text-green-500 text-center mt-1">
            Forgot password?
          </a>

          {/* OR Divider */}
          <div className="flex items-center space-x-2 my-3">
            <span className="flex-grow border-t border-gray-700"></span>
            <span className="text-gray-500 text-xs font-mono">or continue with</span>
            <span className="flex-grow border-t border-gray-700"></span>
          </div>

          {/* Sign in with Google Button */}
          <button className="w-full bg-transparent border border-gray-700 hover:border-green-500 text-white font-mono font-bold py-2.5 rounded-md flex items-center justify-center space-x-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
            {/* Google Logo */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.94 2.42 30.39 0 24 0 14.62 0 6.44 5.38 2.56 13.22l7.98 6.19C12.36 13.17 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.5 24.5c0-1.57-.14-3.08-.39-4.5H24v9h12.7c-.55 2.82-2.2 5.2-4.7 6.8l7.23 5.62C43.79 37.34 46.5 31.36 46.5 24.5z"/>
              <path fill="#FBBC05" d="M10.54 28.59c-.63-1.82-.99-3.76-.99-5.59s.36-3.77.99-5.59l-7.98-6.19C.92 15.7 0 19.71 0 23c0 3.29.92 7.3 2.56 11.19l7.98-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.9-2.13 15.87-5.81l-7.23-5.62c-2.07 1.39-4.73 2.23-8.64 2.23-6.26 0-11.64-3.67-13.46-8.81l-7.98 6.19C6.44 42.62 14.62 48 24 48z"/>
            </svg>
            <span>SIGN IN WITH GOOGLE</span>  
          </button>

          {/* New User? Create Account */}
          <p className="text-xs font-mono text-gray-500 text-center mt-3">
            new user? <a href="#" className="text-green-500 hover:underline">create account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;