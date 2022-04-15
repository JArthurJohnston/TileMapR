import React from 'react'
import { SettingsProvider, PaintbrushProvider, ImageProvider } from '.'

export default function GlobalData({ children }) {
  return (
    <SettingsProvider>
      <ImageProvider>
        <PaintbrushProvider>
          {children}
        </PaintbrushProvider>
      </ImageProvider>
    </SettingsProvider>
  )
}