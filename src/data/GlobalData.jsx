import React from 'react'
import { SettingsProvider, PaintbrushProvider, ImageProvider } from '.'
import { DialogProvider } from '../components/modal/DialogProvider'

export default function GlobalData({ children }) {
  return (
    <SettingsProvider>
      <DialogProvider>
        <ImageProvider>
          <PaintbrushProvider>
            {children}
          </PaintbrushProvider>
        </ImageProvider>
      </DialogProvider>
    </SettingsProvider>
  )
}