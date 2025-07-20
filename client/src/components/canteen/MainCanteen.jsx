import React from 'react';
import './MainCanteen.css';

const foodItems = new Array(8).fill({
  name: 'Chicken Biryani',
  price: '$123',
  code: 'S123',
  availability: 'Available',
  image: 'https://i.imgur.com/nJ2K2kU.png', 
});

export default function MainCanteen() {
  return (
    <div className="canteen-container">
      <header className="canteen-header">
        <span className="back-arrow">←</span>
        <h2>Main canteen</h2>
      </header>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <span className="search-icon">🔍</span>
      </div>

      <div className="food-grid">
        {foodItems.map((item, index) => (
          <div key={index} className="food-card">
            <img src={item.image} alt="Biryani" />
            <h4>{item.name}</h4>
            <p>Price: <span className="green">{item.price}</span></p>
            <p>Code: {item.code}</p>
            <p className="availability">{item.availability}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      <footer className="canteen-footer">
        <div className="cart-preview">
          <img src="https://i.imgur.com/nJ2K2kU.png" alt="item" />
          <img src="https://i.imgur.com/nJ2K2kU.png" alt="item" />
          <img src="https://i.imgur.com/nJ2K2kU.png" alt="item" />
        </div>
        <div className="price-section">
          <span>Price : $123</span>
          <button className="pay-now">Paynow</button>
        </div>
      </footer>
    </div>
  );
}
