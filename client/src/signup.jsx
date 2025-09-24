import React from "react";

// Added props to handle navigation
export default function SignUpPage({ onSwitchToLogin, onSignUpSuccess }) {
  return (
    <div className="min-h-screen min-w-screen bg-black text-gray-100 flex items-center justify-center sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
      <div className="bg-black flex flex-col md:flex-row w-full max-w-sm md:max-w-6xl rounded-lg shadow-lg overflow-hidden border border-green-700/50 mx-4 sm:mx-6 md:mx-0">
        <div className="md:w-1/2 bg-[#1A1A1A] p-6 sm:p-8 flex flex-col items-center justify-center space-y-3 sm:space-y-4 border-b md:border-b-0 md:border-r border-green-700/50">
          <img
            src="/logo.png"
            alt="FinQuest Logo"
            className="w-36 sm:w-48 md:w-56 lg:w-64 h-auto mb-3"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0 p-6">
          <form className="w-full space-y-4 sm:space-y-5 text-sm sm:text-base" onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Create Account</h1>
            <div className="relative">
                <input placeholder="Username" type="text" className="w-full bg-transparent border-b-2 border-gray-600 focus:border-green-500 outline-none py-2 transition-colors duration-300"/>
            </div>
            <div className="relative">
                <input placeholder="Email" type="email" className="w-full bg-transparent border-b-2 border-gray-600 focus:border-green-500 outline-none py-2 transition-colors duration-300"/>
            </div>
            <div className="relative">
                <input placeholder="Password" type="password" className="w-full bg-transparent border-b-2 border-gray-600 focus:border-green-500 outline-none py-2 transition-colors duration-300"/>
            </div>
            {/* Added onClick to trigger navigation to the dashboard */}
            <button type="button" onClick={onSignUpSuccess} className="w-full bg-green-600 hover:bg-green-700 text-white font-mono font-bold py-2.5 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500">
              Sign Up
            </button>
            <div className="text-center text-gray-400">or</div>
            <button type="button" className="w-full bg-transparent border border-gray-700 hover:border-green-500 text-white font-mono font-bold py-2.5 rounded-md flex items-center justify-center space-x-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.94 0 6.64 1.7 8.16 3.13l6-6C34.18 3.13 29.5 1 24 1 14.94 1 7.16 6.7 3.5 14.44l7.06 5.5C12.36 13.9 17.74 9.5 24 9.5z"/><path fill="#34A853" d="M46.5 24.5c0-1.64-.15-3.2-.43-4.7H24v9h12.75c-.55 2.9-2.2 5.35-4.68 7.06l7.19 5.6C43.2 38.4 46.5 32 46.5 24.5z"/><path fill="#FBBC05" d="M10.56 28.06c-.5-1.48-.79-3.04-.79-4.68s.29-3.2.79-4.68l-7.06-5.5C1.63 16.16 0 20.44 0 24.5s1.63 8.34 3.5 11.12l7.06-5.56z"/><path fill="#4285F4" d="M24 48c6.48 0 11.93-2.13 15.89-5.82l-7.19-5.6c-2.11 1.42-4.79 2.28-7.7 2.28-6.26 0-11.64-4.4-13.44-10.38L3.5 35.56C7.16 43.3 14.94 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                <span>Sign up with Google</span>
            </button>
            <div className="text-center mt-4 text-xs sm:text-sm">
              Already have an account? {/* Added onClick to switch to the login page */}
              <button type="button" onClick={onSwitchToLogin} className="text-green-400 hover:underline">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}