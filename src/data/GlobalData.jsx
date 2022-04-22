import React from 'react'
import { SettingsProvider, PaintbrushProvider, ImageProvider } from '.'
import { DialogProvider } from '../components/modal/DialogProvider'

export default function GlobalData({ children }) {
  return (
    <DialogProvider>
      <SettingsProvider>
        <ImageProvider>
          <PaintbrushProvider>
            {children}
          </PaintbrushProvider>
        </ImageProvider>
      </SettingsProvider>
    </DialogProvider>
  )
}