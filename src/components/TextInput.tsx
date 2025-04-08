'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type TextInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
};

export default function TextInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required,
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="relative">
      <label className="block text-sm mb-1">{label}</label>
      <input
        type={isPassword && showPassword ? 'text' : type}
        placeholder={placeholder}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 pr-10 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-600"
      />
      {isPassword && (
        <button
          type="button"
          className="absolute bottom-2.5 right-3 text-gray-400 hover:text-gray-200"
          onClick={() => setShowPassword(!showPassword)}
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}
