"use client";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: "#CCAE88" }}
    >
      {/* App title */}
      <h1 className="text-white text-3xl font-bold tracking-wide mb-6">
        Legacy Afterlife
      </h1>

      {/* Sign In panel */}
      <div className="bg-white/90 p-6 rounded-md shadow w-full max-w-sm">
        <h2 className="text-base font-semibold text-center mb-4 text-gray-900">
          Sign In
        </h2>

        <form className="space-y-3">
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 text-xs rounded-md hover:bg-emerald-600 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-3 text-[11px] text-center text-gray-700">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-emerald-600 font-medium hover:underline"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;