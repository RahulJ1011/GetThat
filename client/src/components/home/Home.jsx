import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";


export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
    
      <section className="hero">
        <h1 className="hero-title">
          Welcome to <span>Get&nbsp;That</span>
        </h1>
        <p className="hero-subtitle">
          The easiest way to find, order and get what you need—fast.
        </p>
        <button className="cta-button" onClick={() => navigate("/auth")}>Get Started</button>
      </section>

      
      <section className="features">
        <h2>Why Get&nbsp;That?</h2>
        <ul>
          <li>⚡ Lightning‑fast deliveries at your doorstep.</li>
          <li>🛒 Huge catalogue of products & services.</li>
          <li>💰 Transparent pricing with real‑time tracking.</li>
          <li>🔒 Secure payments & 24×7 support.</li>
        </ul>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Get&nbsp;That. All rights reserved.
      </footer>
    </main>
  );
}
