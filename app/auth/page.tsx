"use client";
import React from "react"
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from "axios";
import "./auth.css";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/authContext";

interface AuthFormData {
  username?: string;
  email: string;
  password: string;
  password_confirmation?: string;
}

const AuthPage = () => {
  const [view, setView] = useState<"login" | "signup">("login");
  const [formData, setFormData] = useState<AuthFormData>({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="creator-page">
      <header className="creator-header">
        <h1>Anecdote</h1>
        <p>Come on and earn from new ideas</p>

        <div className="creator-toggle-assistance">
          <button className={view === "login" ? "active" : "inactive"}
            onClick={() => setView("login")}>
            Login
          </button>
          <button
            className={view === "signup" ? "active" : "inactive"}
            onClick={() => setView("signup")}
          >
            Sign Up
          </button>
        </div>
      </header>

      <section className="creator-card">
        {view === "signup" ? (
          <p>Register</p>
        ):(
          <p>Login</p>
        )}
        <form className="checkin">
          {view === 'signup' && (
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required={view === 'signup'}
              />
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {view === 'signup' && (
            <div>
              <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  required={view === 'signup'}
              />
            </div>
          )}
          <button type="submit">{view === 'signup' ? 'Signup' : 'Login'}</button>
        </form>
      </section>
    </div>
  );
}

export default AuthPage;
