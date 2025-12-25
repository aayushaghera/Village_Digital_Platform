import React, { useState } from "react";
import Header from "../components/Common/Header";

const MainLayout = ({ children }) => {
  const [currentModule, setCurrentModule] = useState('dashboard');
  const [language, setLanguage] = useState('en');

  const handleNavigate = (module) => {
    setCurrentModule(module);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <Header 
        currentModule={currentModule}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      <main className="min-h-screen px-4 py-6 bg-gray-50 mt-16">
        {children}
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
