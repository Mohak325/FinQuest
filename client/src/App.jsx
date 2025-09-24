import { useState } from 'react';
import LandingPage from './Landingpage.jsx';
import LoginPage from './loginpg.jsx';
import SignUpPage from './signup.jsx';
import Dashboard from './dashboard.jsx';

function App() {
  // This state controls which page is visible: 'landing', 'signup', 'login', or 'dashboard'
  const [currentPage, setCurrentPage] = useState('landing');

  // These functions update the state to switch between pages
  const showSignUpPage = () => setCurrentPage('signup');
  const showLoginPage = () => setCurrentPage('login');
  const showDashboard = () => setCurrentPage('dashboard');

  // This function renders the correct component based on the current state
  const renderPage = () => {
    switch (currentPage) {
      case 'signup':
        return <SignUpPage onSwitchToLogin={showLoginPage} onSignUpSuccess={showDashboard} />;
      case 'login':
        return <LoginPage onSwitchToSignUp={showSignUpPage} onLoginSuccess={showDashboard} />;
      case 'dashboard':
        return <Dashboard />;
      case 'landing':
      default:
        return <LandingPage onGetStarted={showSignUpPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;