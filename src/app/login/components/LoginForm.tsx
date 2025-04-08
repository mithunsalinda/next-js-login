'use client';
import React from 'react';
import { Images } from '../../../assets/Images';
import Image from 'next/image';
import { FormButton, TextInput } from '@/components';
export default function LoginForm() {
  return (
    <form className="space-y-6">
      <div className="flex items-center gap-2 mb-8">
        <div className=" rounded-md">
          <Image src={Images.logo} alt="Google" width={30} height={30} className="w-8 h-8" />
        </div>
        <span className="font-semibold text-xs">ROOM.ME</span>
      </div>
      <h1 className="text-3xl font-bold">Welcome back to Room.me!</h1>
      <p className="text-sm text-gray-400">
        Room.me is an innovative video conference product that revolutionizes virtual meetings.
      </p>
      <div>
        <TextInput
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          name="email"
          required
          //value={email}
          //onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          required
          //value={email}
          //onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <FormButton
        type="submit"
        variant="primary"
        // loading={false}
      >
        Sign In
      </FormButton>
      <FormButton
        type="button"
        variant="secondary"
        icon={<Image src={Images.googleIcon} alt="Google" width={20} height={20} />}
      >
        Sign in with Google
      </FormButton>
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
