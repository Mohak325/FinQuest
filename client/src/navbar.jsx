import React, { useState } from 'react';

// --- Reusable Helper Components ---

// Icon component for the mascot and profile images
const Icon = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} className={`h-8 w-8 object-contain ${className}`} />
);

// Navigation link component
const NavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="text-white uppercase tracking-widest hover:text-green-400 transition-colors duration-300"
  >
    {children}
  </button>
);

// --- Main Navbar Component ---

export default function Navbar({
  onNavigateToHome,
  onNavigateToAnalysis,
  onNavigateToInvestment,
  onNavigateToBanking,
  onNavigateToProfile,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // The <style> tag imports the VT323 font. It's best to move this to a global CSS file (like index.css) for better performance.
    <nav className="bg-[#2D2D2D] font-['VT323',_monospace] border-b-4 border-blue-500">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');`}
      </style>
      
      {/* --- Desktop Navbar --- */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Mascot Icon */}
          <div className="flex-shrink-0">
            <Icon src="/mascot.png" alt="Finquest Mascot" className="h-12 w-12" />
          </div>

          {/* Center: Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink onClick={onNavigateToHome}>Home</NavLink>
            <NavLink onClick={onNavigateToAnalysis}>Analysis</NavLink>
            <NavLink onClick={onNavigateToInvestment}>Investment</NavLink>
            <NavLink onClick={onNavigateToBanking}>Banking</NavLink>
          </div>

          {/* Right Side: Profile (hidden on mobile) */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink onClick={onNavigateToProfile}>Profile</NavLink>
            <Icon src="/profile.png" alt="Profile Icon" className="h-10 w-10" />
          </div>

          {/* --- Mobile Menu Button (Hamburger) --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for hamburger menu */}
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu (Dropdown) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2D2D2D] border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <NavLink onClick={() => { onNavigateToHome(); toggleMobileMenu(); }}>Home</NavLink>
            <NavLink onClick={() => { onNavigateToAnalysis(); toggleMobileMenu(); }}>Analysis</NavLink>
            <NavLink onClick={() => { onNavigateToInvestment(); toggleMobileMenu(); }}>Investment</NavLink>
            <NavLink onClick={() => { onNavigateToBanking(); toggleMobileMenu(); }}>Banking</NavLink>
            <NavLink onClick={() => { onNavigateToProfile(); toggleMobileMenu(); }}>Profile</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}