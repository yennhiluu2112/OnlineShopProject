import React from 'react';
import Routes from './Routes';
import { AuthProvider } from '../auth/AuthProvider';
export default function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}