import React from 'react'
import { SettingsProvider, PaintbrushProvider } from '.'
import { DialogProvider } from '../components/modal/DialogProvider'

export default function GlobalData({ children }) {
  return (
    <SettingsProvider>
      <DialogProvider>
        <PaintbrushProvider>
          {children}
        </PaintbrushProvider>
      </DialogProvider>
    </SettingsProvider>
  )
}