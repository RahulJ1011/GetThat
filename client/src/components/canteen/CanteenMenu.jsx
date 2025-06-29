import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./canteen.css"
export function CanteenMenu() {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const MENUS = {
    main: [
      {
        id: "f1",
        name: "Paneer Fried Rice",
        img: "https://images.unsplash.com/photo-1599021454532-a75d4bcc4e5c?auto=format&fit=crop&w=800&q=60",
        tags: "vegetarian   paneer   per ₹75",
      },
    ],
    c1: [
      {
        id: "f2",
        name: "Masala Dosa",
        img: "https://images.unsplash.com/photo-1578916171728-46686eac8d27?auto=format&fit=crop&w=800&q=60",
        tags: "vegetarian   south‑indian   per ₹55",
      },
    ],
    c2: [
      {
        id: "f3",
        name: "Chicken Biryani",
        img: "https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=60",
        tags: "non‑veg   basmati   per ₹120",
      },
    ],
    c3: [
      {
        id: "f4",
        name: "Veg Noodles",
        img: "https://images.unsplash.com/photo-1613145991947-9d90cfb7f4b7?auto=format&fit=crop&w=800&q=60",
        tags: "vegetarian   wok   per ₹70",
      },
    ],
  };

  const canteenMenus = MENUS[id] || [];

 
  const canteenNames = {
    main: "Main canteen",
    c1: "Canteen 1",
    c2: "Canteen 2",
    c3: "Canteen 3",
  };

  const name = canteenNames[id] || "Canteen";

  return (
    <main className="menu-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ←
      </button>

      {/* Banner */}
      <div className="menu-banner" style={{ backgroundImage: `url(${canteenMenus[0]?.img})` }}>
        <h2>{name}</h2>
        <span>Available now</span>
      </div>

      <section className="menu-intro">
        <h3>
          What's Cooking? <span>(Pick Before It's Gone!)</span>
        </h3>
        <p>Select your cravings & secure your meal!</p>
      </section>

      <h4 className="section-title">Hot picks!</h4>
      <section className="food-list">
        {canteenMenus.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}

function FoodCard({ item }) {
  return (
    <article className="food-card" style={{ backgroundImage: `url(${item.img})` }}>
      <div className="food-label">✔ Label</div>
      <div className="food-overlay">
        <h5>{item.name}</h5>
        <p>{item.tags}</p>
      </div>
    </article>
  );
}
