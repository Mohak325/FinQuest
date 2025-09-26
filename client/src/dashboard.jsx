import React, { useState, useContext } from 'react'; // 1. Import useContext
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext'; // 2. Import the UserContext

// --- Helper Components (No Changes) ---
const Icon = ({ src, alt, className = '' }) => <img src={src} alt={alt} className={`w-8 h-8 ${className}`} />;

const NavLink = ({ children, onClick }) => (
  <a href="#" onClick={onClick} className="text-white uppercase tracking-widest hover:text-green-400 transition-colors duration-300">
    {children}
  </a>
);

const ActionButton = ({ children, onClick, className = '' }) => (
  <button onClick={onClick} className={`bg-black border-2 border-green-400 rounded-2xl text-white uppercase text-2xl tracking-widest py-28 px-6 hover:bg-green-900 hover:border-green-500 transition-all duration-300 w-full ${className}`}>
    {children}
  </button>
);


// --- Main Dashboard Component ---
export default function Dashboard() {
  const [progress, setProgress] = useState(33);
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // 3. Get the user object from the context

  const handleInvestmentClick = () => {
    navigate('/investment');
  };

  return (
    <div className="bg-black min-h-screen font-['VT323',_monospace] text-white p-4 sm:p-8">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');`}</style>
      
      <header className="flex justify-between items-center pb-8 border-b-2 border-gray-800">
        <Icon src="/mascot.png" alt="Mascot" className="w-12 h-12" />
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink onClick={() => navigate('/dashboard')}>Home</NavLink>
          <NavLink>Analysis</NavLink>
          <NavLink onClick={() => navigate('/investment')}>Investment</NavLink>
          <NavLink>Banking</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline uppercase tracking-widest text-lg">Profile</span>
          <Icon src="/profile.png" alt="Profile" className="w-10 h-10 invert" />
        </div>
      </header>

      <main className="mt-8">
        <section className="text-center mb-12">
          {/* 4. Display the user's name dynamically */}
          <h1 className="text-5xl tracking-widest uppercase">Welcome back, {user ? user.name : 'Player'}!</h1>
        </section>
        
        {/* All other sections of your dashboard remain unchanged */}
        <section className="mb-12">
          <h2 className="text-xl uppercase text-gray-400 tracking-widest mb-4">Your Journey:</h2>
          <div className="relative h-4 bg-gray-800 rounded-full">
            <div className="h-full bg-green-400 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            <div className="absolute top-1/2 -translate-y-1/2 transition-all duration-500" style={{ left: `calc(${progress}% - 20px)` }}>
              <img src="/loadingimg.png" alt="Progress Indicator" className="w-10 h-10" />
            </div>
          </div>
          <p className="text-center text-green-400 mt-2 text-lg">{progress}%</p>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-center mb-12 bg-gray-900/50 p-6 rounded-2xl">
          <div>
            <h2 className="text-xl uppercase text-gray-400 tracking-widest">Current Topic:</h2>
            <p className="text-2xl mt-1">basics of trading and analysing the stocks</p>
          </div>
          <button className="mt-6 md:mt-0 bg-transparent border-2 border-green-400 rounded-xl text-white uppercase text-lg tracking-widest py-3 px-8 hover:bg-green-900 transition-all duration-300 whitespace-nowrap">
            Continue Journey
          </button>
        </section>
        
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ActionButton onClick={handleInvestmentClick}>Investment</ActionButton>
          <ActionButton>Banking</ActionButton>
        </section>
      </main>
    </div>
  );
}