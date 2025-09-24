import { Routes, Route } from 'react-router-dom';
import LandingPage from './Landingpage.jsx';
import LoginPage from './loginpg.jsx';
import SignUpPage from './signup.jsx';
import Dashboard from './dashboard.jsx';

function App() {
  return (
    // The Routes component wraps all your individual Route definitions
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;