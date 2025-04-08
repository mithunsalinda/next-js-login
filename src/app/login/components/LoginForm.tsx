'use client';
import React from 'react';

export default function LoginForm() {
  return (
    <form className="space-y-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="bg-white p-1 rounded-md">
          <img src="/logo.svg" alt="Room.me Logo" className="w-6 h-6" />
        </div>
        <span className="font-semibold text-lg">ROOM.ME</span>
      </div>
      <h1 className="text-3xl font-bold">Welcome back to Room.me!</h1>
      <p className="text-sm text-gray-400">
        Room.me is an innovative video conference product that revolutionizes virtual meetings.
      </p>
      <div>
        <label className="block text-sm mb-1">Email address</label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-violet-600 text-white font-semibold py-2 rounded-md hover:bg-violet-700 transition"
      >
        Sign In
      </button>
      <button
        type="button"
        className="w-full border border-gray-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition"
      >
        <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
        Sign in with Google
      </button>
      <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox" />
          Remember for 30 days
        </label>
        <a href="#" className="text-violet-500 hover:underline">
          Forgot password
        </a>
      </div>
      <p className="text-sm text-center text-gray-500 mt-4">
        Doesn’t have account?{' '}
        <a href="#" className="text-violet-500 hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
}
