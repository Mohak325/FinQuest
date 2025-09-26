import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/userContext.jsx';
import LandingPage from './Landingpage.jsx';
import LoginPage from './loginpg.jsx';
import SignUpPage from './signup.jsx';
import Dashboard from './dashboard.jsx';
import Investment from './Investment.jsx';
import Stocks from './Stocks.jsx'; // 1. Import the new Stocks component

function App() {
  return (
   <UserProvider>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/investment" element={<Investment />} />
      {/* 2. Add the new route for the Stocks page */}
      <Route path="/investment/stocks" element={<Stocks />} /> 
    </Routes>
   </UserProvider>
  );
}

export default App;