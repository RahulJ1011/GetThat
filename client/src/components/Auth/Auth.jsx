import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; 

export default function Auth() {
  const navigate = useNavigate();


  const [mode, setMode] = useState("login"); 

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL =  "http://localhost:8000";

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setForm({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const endpoint = mode === "login" ? "/auth/login" : "/auth/register";
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(
          mode === "login"
            ? { emailOrPhone: form.email || form.phone, password: form.password }
            : {
                name: form.name,
                email: form.email,
                phone: form.phone,
                password: form.password,
                confirmPassword: form.confirmPassword,
              }
        ),
      });

      if (!res.ok) throw new Error((await res.json()).message || "Something went wrong");

      await res.json();
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-header">Get That</h1>

       
        <div className="auth-toggle">
          <button
            type="button"
            className={mode === "login" ? "active" : ""}
            onClick={() => switchMode("login")}
          >
            Login
          </button>
          <button
            type="button"
            className={mode === "register" ? "active" : ""}
            onClick={() => switchMode("register")}
          >
            Register
          </button>
        </div>

       
        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <input
              className="auth-input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          )}

          <input
            className="auth-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          {mode === "register" && (
            <input
              className="auth-input"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (10‑digit)"
              pattern="[0-9]{10}"
            />
          )}

          <input
            className="auth-input"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />

          {mode === "register" && (
            <input
              className="auth-input"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          )}

          {error && <p className="auth-error">{error}</p>}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Please wait…" : mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="auth-footnote">
          By continuing, you agree to our
          <span> Terms of Service </span>
          and
          <span> Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
