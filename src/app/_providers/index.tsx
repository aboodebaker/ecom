'use client'

import React from 'react'

import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
import { ThemeProvider } from './Theme'
<<<<<<< HEAD
=======
import { FilterProvider } from './Filter'
>>>>>>> 162a78f (finished)

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
<<<<<<< HEAD
        <CartProvider>{children}</CartProvider>
=======
        <FilterProvider>
        <CartProvider>{children}</CartProvider>
        </FilterProvider>
>>>>>>> 162a78f (finished)
      </AuthProvider>
    </ThemeProvider>
  )
}
