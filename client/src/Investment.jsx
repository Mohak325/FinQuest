import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Investment = () => {
  const navigate = useNavigate();

  const options = [
    "BONDS",
    "STOCK",
    "EXCHANGE-TRADED FUNDS",
    "MUTUAL FUNDS",
  ];

  const handleNavigateBack = () => navigate("/dashboard");

  // 1. Function to handle clicks on investment options
  const handleOptionClick = (option) => {
    if (option === 'STOCK') {
      navigate('/investment/stocks'); // Navigate to the stocks page
    } else {
      // You can add navigation for other options here later
      alert(`${option} page is not yet implemented.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-['VT323',_monospace]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');`}</style>
      <h1 className="text-4xl font-bold mb-10 tracking-widest uppercase">Investment Options</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-6">
        {options.map((item, index) => (
          // 2. Add onClick to each motion.div
          <motion.div
            key={index}
            onClick={() => handleOptionClick(item)} 
            className="flex items-center justify-center border-2 border-green-500 rounded-lg p-10 text-xl font-semibold tracking-widest cursor-pointer hover:bg-green-900 hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.8)",
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
      <button
        onClick={handleNavigateBack}
        className="mt-12 px-8 py-3 bg-transparent border-2 border-gray-500 hover:border-green-500 text-gray-300 hover:text-white rounded-md transition-colors duration-300 text-lg tracking-widest"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Investment;