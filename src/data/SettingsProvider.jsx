import React from 'react'

export const SettingsContext = React.createContext()

export default function SettingsProvider({children}) {
  const [showGrid, setShowGrid] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = React.useState()

  return (
    <SettingsContext.Provider value={
      {showGrid, setShowGrid, backgroundColor, setBackgroundColor}
    }>
      {children}
    </SettingsContext.Provider>
  )
}
