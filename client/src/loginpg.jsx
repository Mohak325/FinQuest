import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from './services/authService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, password);
      navigate('/dashboard');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred during login.';
      alert(`Login Failed: ${errorMessage}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-gray-100 flex items-center justify-center sm:px-4 md:px-6 py-2 sm:py-4 md:py-6">
      <div className="bg-black flex flex-col md:flex-row w-full max-w-sm md:max-w-6xl rounded-lg shadow-lg overflow-hidden border border-green-700/50 mx-4 sm:mx-6 md:mx-0">
        <div className="md:w-1/2 bg-[#1A1A1A] p-6 sm:p-8 flex flex-col items-center justify-center space-y-3 sm:space-y-4 border-b md:border-b-0 md:border-r border-green-700/50">
          <img src="/logo.png" alt="FinQuest Logo" className="w-36 sm:w-48 md:w-56 lg:w-64 h-auto mb-3" />
        </div>
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center space-y-4 sm:space-y-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Login</h1>
          <form className="w-full space-y-4 sm:space-y-5 text-sm sm:text-base" onSubmit={handleLogin}>
            <div className="relative">
              <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-transparent border-b-2 border-gray-600 focus:border-green-500 outline-none py-2 transition-colors duration-300"/>
            </div>
            <div className="relative">
              <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-transparent border-b-2 border-gray-600 focus:border-green-500 outline-none py-2 transition-colors duration-300"/>
            </div>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-mono font-bold py-2.5 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500">
              Login
            </button>
            <div className="text-center text-gray-400">or</div>
            <button type="button" className="w-full bg-transparent border border-gray-700 hover:border-green-500 text-white font-mono font-bold py-2.5 rounded-md flex items-center justify-center space-x-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.94 2.42 30.39 0 24 0 14.62 0 6.44 5.38 2.56 13.22l7.98 6.19C12.36 13.17 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.57-.14-3.08-.39-4.5H24v9h12.7c-.55 2.82-2.2 5.2-4.7 7.08l7.87 6.13C43.18 39.88 46.5 32.73 46.5 24.5z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.3 0 24.5s.92 8.04 2.55 11.28l7.98-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.82l-7.87-6.13c-2.15 1.45-4.92 2.3-7.92 2.3-6.04 0-11.22-3.83-13.08-9.02l-7.98 6.19C6.44 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                <span>Login with Google</span>
            </button>
            <div className="text-center mt-4 text-xs sm:text-sm">
              Don't have an account? <Link to="/signup" className="text-green-400 hover:underline">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;