import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from "./components/LandingPage.jsx";
import LoginHandler from './components/LoginHandler.jsx';
import RegisterHandler from './components/RegisterHandler.jsx';
import FarmerRegister from './components/FarmerRegister.jsx';
import TraderRegister from './components/TraderRegister.jsx';
import ContactForm from './components/ContactForm.jsx';
import Loader from './components/Loader.jsx';
import Footer from './components/Footer.jsx';
import FarmerDashboard from './components/FarmerDashboard.jsx';
import TraderDashboard from './components/TraderDashboard.jsx';


function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); // loader timer
    return () => clearTimeout(timer);
  }, [location.key]); // Trigger on every route change

  return (
    <div className='w-full relative min-h-screen scroll-smooth '>
      {/* Force 1-second loader on every route change */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <Loader />
        </div>
      )}

      <Routes location={location}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginHandler />} />
        <Route path='/register' element={<RegisterHandler />} />
        <Route path='/register-farmer' element={<FarmerRegister />} />
        <Route path='/register-trader' element={<TraderRegister />} />
        <Route path='/contact-us' element={<ContactForm />} />
        <Route path='/farmer-dashboard' element={<FarmerDashboard/>} />
        <Route path='/trader-dashboard' element={<TraderDashboard/>} />
        
      </Routes>

      <Footer />


    </div>
  );
}

export default AppWrapper;