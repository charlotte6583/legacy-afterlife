'use client';

import { useState } from 'react';
import './signin.css'; // lowercase import to match your setup

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="signin-page">
      {/* 🌸 Header */}
      <div className="signin-header">
        <h1>Legacy Afterlife</h1>
        <p>Your memories live here — secure, private, and always yours.</p>
      </div>

      {/* 📦 Card Wrapper to control spacing */}
      <div className="signin-card-wrapper">
        <div className="signin-card">
          <h2>Step into your story</h2>

          <form className="signin-form">
            <div className="field-block">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@remembered.com"
                required
              />
            </div>

            <div className="field-block">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit">Enter MemorySpace</button>
          </form>

          <p className="signup-text">
            Don’t have an account? <a href="/register">Create one</a>
          </p>

          <p className="quote">
            “Memories are the threads that hold us together.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;