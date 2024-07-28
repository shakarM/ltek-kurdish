import React from "react";
import { useLanguage } from "../../../LanguageContext.jsx";
import { translations } from "../../../translations.jsx";

const Home = ({ user }) => {
  const { language } = useLanguage();
  const { paragraph, title } = translations[language];
  return (
    <div className="home-page">
      <h1>Welcome to LTEK</h1>
      {user && (
        <div className="user-info">
          <p>
            Your User ID:{" "}
            <span className="text-purple-600 font-bold">{user.id}</span>
          </p>
        </div>
      )}
      {/* Rest of the Home component */}
    </div>
  );
};

export default Home;
