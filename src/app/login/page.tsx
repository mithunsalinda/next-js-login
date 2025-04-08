import React from 'react';
import LoginForm from './components/LoginForm';
import ImageSlider from './components/ImageSlider';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-5xl bg-[#0F0F0F] rounded-xl overflow-hidden flex shadow-lg">
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <LoginForm />
        </div>
        <div className="hidden md:flex w-1/2 relative">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
