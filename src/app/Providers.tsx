'use client'

import { BusProvider } from '@/context/BusContext'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <BusProvider>{children}</BusProvider>
    </NextUIProvider>
  )
}