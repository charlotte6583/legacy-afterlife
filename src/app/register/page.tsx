"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Basic email pattern validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailError(isValid ? "" : "That email format doesn’t look right.");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: add submit logic here
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: "#CCAE88" }}
    >
      <h1 className="text-white text-4xl font-bold tracking-wide mb-6 text-center w-full">
        Legacy Afterlife
      </h1>

      <div className="bg-white/90 p-6 rounded-md shadow w-full max-w-sm">
        <h2 className="text-base font-semibold text-center mb-4 text-gray-900">
          Register
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-[11px] font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && (
              <p className="text-[10px] text-red-600 mt-1">{emailError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-[11px] font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-3 py-2 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-[11px] font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 w-full px-3 py-2 border rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-emerald-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 text-xs rounded-md hover:bg-emerald-600 transition"
          >
            Create Account
          </button>

          <p className="mt-3 text-[10px] text-center text-gray-600">
            Your information is private and secure. As we grow, additional security features like email verification and multi-factor authentication will be added to protect your legacy.
          </p>
        </form>

        <p className="mt-3 text-[11px] text-center text-gray-700">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-emerald-600 font-medium hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}