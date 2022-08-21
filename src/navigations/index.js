import React from 'react';
import Routes from './Routes';
import { AuthProvider } from '../auth/AuthProvider';
import { CartProvider } from '../cart/CartProvider';
export default function Providers() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  );
}