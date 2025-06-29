import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./canteen.css";


export function CanteenSelection() {
  const navigate = useNavigate();


  const canteens = [
    {
      id: "main",
      name: "Main canteen",
      banner: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=60",
      openNow: true,
    },
    {
      id: "c1",
      name: "Canteen 1",
      banner: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=60",
      openNow: true,
    },
    {
      id: "c2",
      name: "Canteen 2",
      banner: "https://images.unsplash.com/photo-1568051243853-d5a7dbe0c162?auto=format&fit=crop&w=800&q=60",
      openNow: false,
    },
    {
      id: "c3",
      name: "Canteen 3",
      banner: "https://images.unsplash.com/photo-1576402187870-5de31a07e6ef?auto=format&fit=crop&w=800&q=60",
      openNow: true,
    },
  ];

  return (
    <main className="canteen-select-page">
      <header className="greeting">
        <div>
          <h2>Hey John,</h2>
          <p>Good morning</p>
        </div>
        <div className="header-icons">
          <span role="img" aria-label="bell">
            🔔
          </span>
        </div>
      </header>

      
      <section>
        <CanteenCard
          canteen={canteens[0]}
          large
          onClick={() => navigate(`/canteens/${canteens[0].id}`)}
        />
      </section>

      <h3 className="choose-title">
        Where's the <span>magic</span> happening?
      </h3>
      <p className="choose-sub">Choose your canteen</p>

      <section className="canteen-list">
        {canteens.slice(1).map((c) => (
          <CanteenCard
            key={c.id}
            canteen={c}
            onClick={() => navigate(`/canteens/${c.id}`)}
          />
        ))}
      </section>

      
      <div style={{ height: "70px" }} />
    </main>
  );
}

function CanteenCard({ canteen, large = false, onClick }) {
  return (
    <article
      className={`canteen-card ${large ? "large" : ""}`}
      style={{ backgroundImage: `url(${canteen.banner})` }}
      onClick={onClick}
    >
      <div className="overlay">
        <h4>{canteen.name}</h4>
        <p>{canteen.openNow ? "Open now" : "Closed"}</p>
      </div>
    </article>
  );
}