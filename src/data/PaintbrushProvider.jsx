import { createContext, useState } from "react"

export const PaintbrushContext = createContext()

export default function PaintbrushProvider({children}) {
  const [color, setColor] = useState(null);

  return (
    <PaintbrushContext.Provider value={{setColor, color}}>
      {children}
    </PaintbrushContext.Provider>
  )
}
