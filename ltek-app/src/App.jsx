import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "../../LanguageContext.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import RegistrationForm from "./pages/Registration/Registration.jsx";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState(null);

  const handleRegister = (user) => {
    setUser(user);
    setIsRegistered(true);
  };

  const handleSkip = () => {
    setIsRegistered(true);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navbar />
          <LanguageSwitcher />
          {!isRegistered ? (
            <RegistrationForm onRegister={handleRegister} onSkip={handleSkip} />
          ) : (
            <>
              <Banner />
              <Home user={user} />
              <Routes>
                <Route
                  path="/learn-more"
                  element={<div>Learn More Page</div>}
                />
                <Route path="/join-us" element={<div>Join Us Page</div>} />
                {/* Add other routes as needed */}
              </Routes>
            </>
          )}
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
