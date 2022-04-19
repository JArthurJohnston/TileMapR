import { createContext, useState } from "react"

export const ImageContext = createContext()

export function ImageProvider({ children }) {
  const [resolution, setResolution] = useState({ width: 20, height: 20 });

  return (
    <ImageContext.Provider value={{ resolution, setResolution }}>
      {children}
    </ImageContext.Provider>
  )
}
