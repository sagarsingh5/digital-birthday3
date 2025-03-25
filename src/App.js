import React, { useState } from 'react';
import CelebrationScreen from './components/CelebrationScreen';
import BulbScreen from './components/BulbScreen';

const App = () => {
  const [screen, setScreen] = useState(true)
  return (
    <div>
        {screen === true ? <CelebrationScreen setScreen ={setScreen}/> : <BulbScreen setScreen ={setScreen}/> }
    </div>
  );
};

export default App;