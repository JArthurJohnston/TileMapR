import { createContext, useState } from "react"

export const ImageContext = createContext()

export function ImageProvider({ children }) {
  const [resolution, setResolution] = useState({ width: 50, height: 50 });

  return (
    <ImageContext.Provider value={{ resolution, setResolution }}>
      {children}
    </ImageContext.Provider>
  )
}
