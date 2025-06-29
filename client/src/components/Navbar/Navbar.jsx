import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";


export default function NavBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
      setQuery("");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
       
        <Link to="/" className="logo">
          Get<span>That</span>
        </Link>

        
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
            <li>
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/canteens">Canteens</Link>
          </li>
        
        </ul>

        
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            aria-label="Search"
          />
          <button type="submit">🔍</button>
        </form>
      </div>
    </nav>
  );
}
