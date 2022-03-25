import { createContext, useState } from "react"

export const SettingsContext = createContext()

export default function SettingsProvider({children}) {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <SettingsContext.Provider value={{showGrid, setShowGrid}}>
      {children}
    </SettingsContext.Provider>
  )
}
