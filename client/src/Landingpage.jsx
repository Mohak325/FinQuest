import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const LandingPage = () => {
  const navigate = useNavigate(); // 2. Get the navigate function

  // 3. This function will now handle the navigation
  const handleGetStarted = () => {
    navigate('/signup'); // Navigate to the /signup route
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Left Arm Image */}
      <img
        src="/left-arm.png"
        alt="Hand holding money"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/3 max-w-xs md:max-w-sm lg:max-w-md z-10"
      />

      {/* Right Arm Image */}
      <img
        src="/right-arm.png"
        alt="Hand holding a lightbulb"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/3 max-w-xs md:max-w-sm lg:max-w-md z-10"
      />

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="FinQuest Logo"
          className="w-48 sm:w-56 md:w-64 lg:w-72 mb-8"
        />

        {/* Get Started Button */}
        <button
          onClick={handleGetStarted} // 4. Call the new handler function
          className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-8 rounded-full hover:bg-green-500 hover:text-black transition duration-300 ease-in-out"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default LandingPage;