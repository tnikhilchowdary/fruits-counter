import React, { useState } from 'react';
import './App.css';
import mangoImage from './mango.png'; 
import bananaImage from './banana.png'; 

function App() {
  const [eatMango, setEatMango] = useState(0);
  const [eatBanana, setEatBanana] = useState(0);

  const EatMango = (e) => {
    setEatMango(prevMango => prevMango + 1);
  }

  const EatBanana = (e) => {
    setEatBanana(prevEatBanana => prevEatBanana + 1);
  }

  return (
    <div className="app-container">
      <div className="content-box">
        <h1 className="heading">
          Nikhil Chowdary Thummalapalli ate <span className="fruit-count">{eatMango}</span> mangoes <span className="fruit-count">{eatBanana}</span> bananas
        </h1>
        <div className="fruit-section">
          <div className="fruit-card">
            <img src={mangoImage} alt="Mango" className="fruit-image" />
            <button className="eat-button" onClick={EatMango}>Eat Mango</button>
          </div>
          <div className="fruit-card">
            <img src={bananaImage} alt="Banana" className="fruit-image" />
            <button className="eat-button" onClick={EatBanana}>Eat Banana</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
