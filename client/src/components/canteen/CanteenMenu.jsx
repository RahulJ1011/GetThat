import React, { useState } from 'react';
import './canteenMenu.css';
import MainCanteen from "../../assets/MainCanteen.png"
import PannerRice from "../../assets/PannerRice.png"

const foodItems = [
  { id: 1, name: 'Paneer Fried Rice', image: PannerRice },
  { id: 2, name: 'Biryani', image: PannerRice },
  { id: 3, name: 'Paneer Fried Rice', image: PannerRice },
  { id: 4, name: 'Paneer Fried Rice', image: PannerRice },
  { id: 5, name: 'Paneer Fried Rice', image: PannerRice },
  { id: 6, name: 'Paneer Fried Rice', image: PannerRice },
  { id: 7, name: 'Paneer Fried Rice', image: PannerRice },
  { id: 8, name: 'Paneer Fried Rice', image: PannerRice }
];

function CanteenMenu() {
  const [cart, setCart] = useState([]);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const addToCart = (item) => {
    const updated = [...cart];
    const index = updated.findIndex(i => i.id === item.id);
    if (index !== -1) {
      updated[index].qty += 1;
    } else {
      updated.push({ ...item, qty: 1 });
    }
    setCart(updated);
    setOverlayVisible(true);
  };

  const updateQty = (id, delta) => {
    const updated = cart.map(i =>
      i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Main canteen</h2>
        <img
          className="canteen-img"
          src={MainCanteen}
          alt="Main Canteen"
        />
        <h4>What's Cooking? (Pick Before It's Gone!)</h4>
      </header>

      <div className="card-grid">
        {foodItems.map((item) => (
          <div className="card" key={item.id} onClick={() => addToCart(item)}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {overlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="overlay-header">
              <h3>Your Foods</h3>
              <button onClick={() => setOverlayVisible(false)}>❌</button>
            </div>
            {cart.map((item) => (
              <div className="food-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="food-details">
                  <p>{item.name}</p>
                  <div className="qty-controls">
                    <button onClick={() => updateQty(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove" onClick={() => removeItem(item.id)}>🗑️</button>
              </div>
            ))}
            <button className="confirm-btn">Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CanteenMenu;
