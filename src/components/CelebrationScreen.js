import React, { useEffect } from 'react';
import '../styles/styles.css'; // Import the styles

const CelebrationScreen = ({setScreen}) => {
  
  useEffect(() => {
    document.body.classList.add('celebration-screen');
    return () => {
      document.body.classList.remove('celebration-screen');
    };
  }, []);

  const handleCelebrateClick = () => {
    setScreen(false)
  };

  return (
    <div className="container">
      <h1 className="header">✨ Smriti, It's Your Special Day! ✨</h1>
      <p className="subtext">The world shines brighter today because it's your birthday! 🎂💖</p>
      <div className="button-container">
        <button className="button" onClick={handleCelebrateClick}>
          Light Up Your Day 🎇
        </button>
      </div>
    </div>
  );
};

export default CelebrationScreen;