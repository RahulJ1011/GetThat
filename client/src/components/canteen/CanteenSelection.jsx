import React from 'react';
import './canteenSelection.css';
import MainCanteen from "../../assets/MainCanteen.png"
import Canteen1 from "../../assets/Canteen1.png"
import Canteen2 from "../../assets/Canteen2.png"
import Canteen3 from "../../assets/Canteen3.png"
const canteens = [
  { title: 'Main canteen', subtitle: 'Open now', image: MainCanteen },
  { title: 'Canteen 1', subtitle: 'Open now', image: Canteen1 },
  { title: 'Canteen 2', subtitle: 'Open now', image: Canteen2 },
  { title: 'Canteen 3', subtitle: 'Open now', image: Canteen3 }
];

const CanteenSelection = () => {
  return (
    <div className="home-container">
      <header className="top-header">
        <div>
          <h2>Hey John,</h2>
          <p>Good morning</p>
        </div>
        <div className="icons">
          <span>🔔</span>
          <span>⚙️</span>
        </div>
      </header>

      <div className="canteen-section">
        {canteens.map((item, index) => (
          <div className="canteen-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="canteen-text">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="bottom-nav">
        <div className="nav-item active">🏠</div>
        <div className="nav-item">❤️</div>
        <div className="nav-item">👤</div>
        <div className="nav-item">⚙️</div>
      </footer>
    </div>
  );
};

export default CanteenSelection;
