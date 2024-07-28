import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useLanguage } from "../../../../LanguageContext.jsx";
import { translations } from "../../../../translations.jsx";

const Banner = () => {
  const { language } = useLanguage();
  const { welcome, description, learnMore, joinUs } = translations[language];

  return (
    <div className="relative w-full h-64 md:h-96 bg-purple-800">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2PhqXt9xCXPT8mHhO0r_EfniJa8SZWi7OQ&s"
        alt="Banner"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {welcome}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {description}
        </motion.p>
        <div className="flex space-x-4">
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/learn-more">{learnMore}</Link>
          </motion.button>
          <motion.button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/join-us">{joinUs}</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
