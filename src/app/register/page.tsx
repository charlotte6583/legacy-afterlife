'use client';

import { useState } from 'react';
import '../signin/signin.css'; // reusing shared styles from sign-in page

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(isValid ? '' : 'That email format doesn’t look right.');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future submission logic goes here
  };

  return (
    <div className="signin-page">
      {/* 🌸 Header */}
      <div className="signin-header">
        <h1>Legacy Afterlife</h1>
        <p>Your memories live here — secure, private, and always yours.</p>
      </div>

      {/* 📦 Register Form Card */}
      <div className="signin-card-wrapper">
        <div className="signin-card">
          <h2>Register</h2>

          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="field-block">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {emailError && (
                <p className="signup-text" style={{ color: '#dc2626', marginTop: '0.3rem' }}>
                  {emailError}
                </p>
              )}
            </div>

            <div className="field-block">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="field-block">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Create Account</button>

            <p className="signup-text" style={{ fontSize: '0.6875rem', marginTop: '1rem' }}>
              Your information is private and secure. As we grow, additional security features like
              email verification and multi-factor authentication will be added to protect your
              legacy.
            </p>
          </form>

          <p className="signup-text" style={{ marginTop: '1rem' }}>
            Already have an account?{' '}
            <a href="/signin">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}