import React from 'react';
import './MainCanteen.css';
import welcome from "../../assets/welcome.jpg"
import rice from "../../assets/RIce.jpg"
const foodItems = Array(12).fill({
  name: 'Chicken Biryani',
  price: '$123',
  available: true,
  image: rice // Replace with actual image
});

export default function MainCanteen() {
  return (
    <div className="menu-container">
    <h2 className="menu-heading">Main Canteen</h2>

<div style={{ marginBottom: '1rem' }}>
  <input
    type="text"
    placeholder="Search"
    style={{
      width: '100%',
      padding: '10px 12px',
      borderRadius: '12px',
      border: '1px solid #ccc',
      fontSize: '14px',
    }}
  />
</div>

      <div className="food-grid">
        {foodItems.map((item, index) => (
          <div className="food-card" key={index}>
            <img src={item.image} alt={item.name} className="food-img" />
            <div className="food-details">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className={`availability ${item.available ? 'green' : 'red'}`}>
                {item.available ? '✅ Available' : '❌ Not Available'}
              </p>
              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-items">
          <img src={rice} alt="item" />
          <img src={rice} alt="item" />
          <img src={rice} alt="item" />
        </div>
        <div className="pay-row">
          <span>Price: $123</span>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </div>
  );
}
