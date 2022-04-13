import React from 'react'
import useStorage from '../hooks/useStorage';
import { Data } from './Storage';

export const SettingsContext = React.createContext()

export default function SettingsProvider({children}) {
  const [showGrid, setShowGrid] = useStorage(Data.SHOW_GRID, false);
  const [backgroundColor, setBackgroundColor] = useStorage(Data.BACKGROUND_COLOR, '#FFFFFF')

  return (
    <SettingsContext.Provider value={
      {showGrid, setShowGrid, backgroundColor, setBackgroundColor}
    }>
      {children}
    </SettingsContext.Provider>
  )
}
