import React from 'react'
import { SettingsContext } from '../../data'
import ColorPicker from './ColorPicker'

export default function BackgroundColorPicker() {
  const { backgroundColor, setBackgroundColor } = React.useContext(SettingsContext)
  return (
    <ColorPicker
      startingColor={backgroundColor}
      onChange={setBackgroundColor}
      buttonText='Background Color'
    />
  )
}
