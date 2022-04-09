import React from 'react'
import useStorage from '../hooks/useStorage';

export const SettingsContext = React.createContext()

export default function SettingsProvider({children}) {
  const [showGrid, setShowGrid] = useStorage('show-grid', false);
  const [backgroundColor, setBackgroundColor] = useStorage('background-color', '#FFFFFF')

  return (
    <SettingsContext.Provider value={
      {showGrid, setShowGrid, backgroundColor, setBackgroundColor}
    }>
      {children}
    </SettingsContext.Provider>
  )
}
