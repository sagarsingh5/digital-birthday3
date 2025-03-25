import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import bulbPink from '../assets/bulb_pink.png';
import bulbGreen from '../assets/bulb_green.png';
import bulbBlue from '../assets/bulb_blue.png';
import bulbOrange from '../assets/bulb_orange.png';
import bulbRed from '../assets/bulb_red.png';
import bulbYellow from '../assets/bulb_yellow.png';

// Import Other Assets
import bannerImg from '../assets/banner.png';
import cakeImg from '../assets/cake.png';
import cakeLitImg from '../assets/cake1.png';
import singleBalloon from '../assets/Balloon-Border.png';

// Import Background Images
import home1 from '../assets/home1.jpeg';
import home2 from '../assets/home2.jpeg';
import home3 from '../assets/home3.jpeg';
import home4 from '../assets/home4.jpeg';
import home5 from '../assets/home5.jpeg';
import home6 from '../assets/home6.jpeg';
import home7 from '../assets/home7.jpeg';

import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';
import b5 from '../assets/b5.png';
import b6 from '../assets/b6.png';
import b7 from '../assets/b7.png';

// Import Audio
import song from '../assets/song.mp4';

const BulbScreen = ({setScreen}) => {
  const bulbImages = [bulbPink, bulbGreen, bulbBlue, bulbOrange, bulbRed, bulbYellow];

  // const navigate = useNavigate();

  const baloons = [b1,b2,b3,b4,b5,b6,b7]
  


  const [currentBulbIndex, setCurrentBulbIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [musicPlayed, setMusicPlayed] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showBannerAfterClick, setShowBannerAfterClick] = useState(false);
  const [showBalloonsButton, setShowBalloonsButton] = useState(false);
  const [showSingleBalloon, setShowSingleBalloon] = useState(false);
  const [showRoamingBalloons, setShowRoamingBalloons] = useState(false);
  const [roamingBalloons, setRoamingBalloons] = useState([]);
  const [showTempButton, setShowTempButton] = useState(true);
  const [showDeliciousCakeButton, setShowDeliciousCakeButton] = useState(false);
  const [showLightCandlesButton, setShowLightCandlesButton] = useState(false);
  const [showIamGre, setShowIamGre] = useState(false);
  const [candleImage, setCandleImage] = useState(cakeImg);
  const [showMessageButton, setShowMessageButton] = useState(false);
  const [isShowingMessage, setIsShowingMessage] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [messageAnimation, setMessageAnimation] = useState(false);

  const messages = [
    "Happy Birthday, my love! 💖 Today is all about you!",
    "Smriti, you are the light of my life! 🌟",
    "I hope this year brings you all the happiness you deserve! 🎉",
    "You are the most beautiful person, inside and out! 😘",
    "Every moment with you is magical! ✨",
    "I feel so lucky to have you in my life! 🍀",
    "Your smile is the sweetest gift I could ever receive! 😊",
    "You make my world brighter every single day! ☀️",
    "On this special day, I just want to say— I love you! 💕",
    "May your dreams come true, today and always! 🌠",
    "You are my happy place, Smriti! 🏡💖",
    "No distance can ever change how much I love you! 🌍❤️",
    "I can't wait for all the birthdays we will celebrate together! 🎂",
    "Your kindness, love, and care make the world a better place! 🌸",
    "You deserve all the love and joy in the world today! 🎁",
    "I wish I could hold you right now and whisper 'Happy Birthday' in your ear! 🤗",
    "This day is special because YOU are special! 🎊",
    "Smriti, you are my everything, now and forever! 💞",
    "May this birthday be just as sweet and amazing as you are! 🍰",
    "I promise to always cherish and celebrate you, my queen! 👑❤️"
  ];

  useEffect(() => {
    const bulbInterval = setInterval(() => {
      setCurrentBulbIndex((prevIndex) => (prevIndex + 1) % bulbImages.length);
    }, 3000);

    const musicButtonTimeout = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => {
      clearInterval(bulbInterval);
      clearTimeout(musicButtonTimeout);
    };
  }, [bulbImages.length]);

  useEffect(() => {
    if (showMessageButton) {
      setMessageAnimation(true);
    }

    return () => {
      setMessageAnimation(false);
    };
  }, [showMessageButton]);

  const backgrounds = [
    home1,
    home2,
    home3,
    home4,
    home5,
    home6,
    home7,
  ];
  
  
  
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [fade, setFade] = useState(false);



  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out

      setTimeout(() => {
        setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
        setFade(false); // Start fade-in
      }, 1000); // Match animation duration
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const audioRef = useRef(null);
  // const intervalRef = useRef(null);

  const handleTurnOnMusic = () => {
    audioRef.current = new Audio(song); // Use your desired song
    audioRef.current.play();

    setShowButton(false);
    setMusicPlayed(true);

    // Stop the song after 2 minutes (120,000 milliseconds)
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        // navigate('/'); // Navigate to the home page
        setScreen(true)
      }
    }, 236000); // Stop after 236 seconds (3 minutes and 56 seconds)

    setTimeout(() => {
      setShowButton(true);
      setShowBannerAfterClick(true);
    }, 15000);
  };

  const handleBanner = () => {
    setShowButton(false);
    setShowBalloonsButton(true);

    if (showBannerAfterClick) {
      setShowBanner(true);
    }
  };

  const handleFlySingleBalloon = () => {
    setShowSingleBalloon(true);
    setShowTempButton(false);

    setTimeout(() => {
      setShowSingleBalloon(false);
      setShowRoamingBalloons(true);

      setRoamingBalloons([...Array(7)].map((_, index) => ({
        id: index,
        image: baloons[index],
        position: {
          left: `${Math.random() * 90 + 5}%`,
          bottom: `${Math.random() * 50 + 50}%`,
        },
      })));
    }, 5000);

    setTimeout(() => {
      setShowDeliciousCakeButton(true);
    }, 10000);
  };

  const handleDeliciousCake = () => {
    console.log("Showing Delicious Cake!");
    setShowDeliciousCakeButton(false);
    setShowIamGre(true);
    setCandleImage(cakeImg);

    setTimeout(() => {
      setShowLightCandlesButton(true);
    }, 5000);
  };

  const handleLightCandle = () => {
    console.log("Light Up the Candles on Cake!");
    setShowLightCandlesButton(false);
    setShowIamGre(true);
    setCandleImage(cakeLitImg);

    setRoamingBalloons([...Array(7)].map((_, index) => ({
      id: index,
      image: baloons[index],
      position: {
        left: `${(index + 1) * 10}%`,
        bottom: '80%',
      },
    })));

    setShowMessageButton(true);
  };

  // const handleShowMessage = () => {
  //   setIsShowingMessage(true);
  //   const messageInterval = setInterval(() => {
  //     if (currentMessageIndex < messages.length) {
  //       setCurrentMessageIndex((prevIndex) => prevIndex + 1);
  //     } else {
  //       setIsShowingMessage(false);
  //       clearInterval(messageInterval);
  //       setShowMessageButton(true);
  //       setCurrentMessageIndex(0);
  //     }
  //   }, 3000);
  // };

  const handleShowMessage = () => {
    setIsShowingMessage(true);
  
    setInterval(() => {
      setCurrentMessageIndex((prevIndex) => 
        prevIndex + 1 < messages.length ? prevIndex + 1 : 0  // Reset index after last message
      );
    }, 3000);
  };

  return (
    <div className={`bulb-container ${showButton ? 'show-button' : ''}`}>

    {musicPlayed && (<div
      className={`background ${fade ? "fade-out" : "fade-in"}`}
      style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }}
    ></div>)}


      {bulbImages.map((imageName, index) => (
        <div key={index} className="bulb-wrapper">
          <img
            className={`bulb ${index === currentBulbIndex ? 'highlight' : ''}`}
            src={bulbImages[index]}
            alt="Bulb"
          />
        </div>
      ))}


      {showIamGre && (
        <div className="iamgre-container">
          <img className="iamgre-image" src={candleImage} alt="Iamgre" />
        </div>
      )}
      {showButton && !musicPlayed && (
        <div className="button-container">
          <button className="button" onClick={handleTurnOnMusic}>
            Turn On Music
          </button>
        </div>
      )}
      {showButton && musicPlayed && !showBanner && (
        <div className="button-container">
          <button className="button" onClick={handleBanner}>
            Let's Decorate
          </button>
        </div>
      )}
      {showBanner && (
        <div className="banner-container">
          <img className="banner" src={bannerImg} alt="Banner" />
        </div>
      )}
      {showBalloonsButton && showTempButton && (
        <div className="button-container">
          <button className="button" onClick={handleFlySingleBalloon}>
            Let's Fly Balloons
          </button>
        </div>
      )}
      {showSingleBalloon && (
        <div className="balloon-container">
          <img className="single-balloon" src={singleBalloon} alt="Single Balloon" />
        </div>
      )}
      {showRoamingBalloons && (
        <div className="balloon-container">
          {roamingBalloons.map((balloon) => (
            <img
              key={balloon.id}
              className="roaming-balloon"
              src={balloon.image}
              alt={`Roaming Balloon ${balloon.id}`}
              style={{ left: balloon.position.left, bottom: balloon.position.bottom }}
            />
          ))}
        </div>
      )}
      {showDeliciousCakeButton && (
        <div className="button-container">
          <button className="button" onClick={handleDeliciousCake}>
            Delicious Cake
          </button>
        </div>
      )}
      {showLightCandlesButton && (
        <div className="button-container">
          <button className="button" onClick={handleLightCandle}>
            Light Up Candles
          </button>
        </div>
      )}
      {showMessageButton && (
        <div className={`message-container ${isShowingMessage ? 'show-message' : ''}`}>
          {messages && messages.length > 0 && messages[currentMessageIndex] !== undefined &&
            messages[currentMessageIndex].split('\n').map((line, index) => (
              <p key={index} className="message-line">{line}</p>
          ))}
        </div>
      )}
      {showMessageButton && !isShowingMessage && (
        <div className="button-container">
          <button className="button" onClick={handleShowMessage}>
            Show Message
          </button>
        </div>
      )}
      {isShowingMessage && (
        <div className={`message-container ${isShowingMessage ? 'show-message' : 'hide-message'}`}>
        <p className="message-line">{messages[currentMessageIndex]}</p>
      </div>
      )}
    </div>
  );
};

export default BulbScreen;
