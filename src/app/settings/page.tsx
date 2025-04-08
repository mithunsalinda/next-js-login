import ProtectedRoute from '@/components/ProtectedRoute';
import React from 'react';

export default function Settings() {
  return (
    <ProtectedRoute>
      <div>Settings</div>
    </ProtectedRoute>
  );
}
