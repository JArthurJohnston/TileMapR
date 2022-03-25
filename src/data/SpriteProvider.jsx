import { createContext, useState } from "react"

export const SpriteContext = createContext()

export default function SpriteProvider({children}) {
  const [size, setSize] = useState(20);

  return (
    <SpriteContext.Provider value={{size}}>
      {children}
    </SpriteContext.Provider>
  )
}
