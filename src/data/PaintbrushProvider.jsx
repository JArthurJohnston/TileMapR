import { createContext, useState } from "react"
import useStorage from "../hooks/useStorage";

export const PaintbrushContext = createContext()

export default function PaintbrushProvider({children}) {
  const [color, setColor] = useStorage('paintbrush-color');

  return (
    <PaintbrushContext.Provider value={{setColor, color}}>
      {children}
    </PaintbrushContext.Provider>
  )
}
