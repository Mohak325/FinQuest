import { useState } from 'react';
import LandingPage from './Landingpage.jsx';
import LoginPage from './loginpg.jsx';
import SignUpPage from './signup.jsx';

function App() {
  // State to control which page is visible: 'landing', 'signup', or 'login'
  const [currentPage, setCurrentPage] = useState('landing');

  // Functions to switch between pages
  const showSignUpPage = () => setCurrentPage('signup');
  const showLoginPage = () => setCurrentPage('login');

  // Function to render the correct page based on the state
  const renderPage = () => {
    switch (currentPage) {
      case 'signup':
        return <SignUpPage onSwitchToLogin={showLoginPage} />;
      case 'login':
        return <LoginPage onSwitchToSignUp={showSignUpPage} />;
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