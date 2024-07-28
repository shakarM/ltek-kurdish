// src/components/RegistrationForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const RegistrationForm = ({ onRegister, onSkip }) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Math.floor(Math.random() * 1000000); // Generate a random ID
    onRegister({ nickname, id: userId });
  };

  return (
    <motion.div
      className="registration-form bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-2xl font-bold text-purple-800 mb-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Register
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <motion.div
          className="mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-purple-600 font-semibold mb-2">
            Nickname:
          </label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
            className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
          />
        </motion.div>
        <motion.div
          className="mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-purple-600 font-semibold mb-2">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
          />
        </motion.div>
        <motion.div
          className="flex justify-between"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-700 transition-colors duration-300"
          >
            Register
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition-colors duration-300"
          >
            Skip
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
