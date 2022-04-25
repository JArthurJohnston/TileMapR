import React from "react"
import Layers from "./layers.json"
import Background from "./Background"
import CanvasEngine from "./engine/CanvasEngine"

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    cursor: 'crosshair',
  },
  canvas: {
    zIndex: Layers.CANVAS
  }
}

export const CanvasContext = React.createContext()

export function CanvasProvider({ children }) {
  const [canvasStyle, setCanvasStyle] = React.useState({})
  const [size, setSize] = React.useState({ width: 0, height: 0 })
  const [canvasIsReady, setCanvasIsReady] = React.useState(false)
  const canvasRef = React.useRef()
  const containerRef = React.useRef()
  const [scale, setScale] = React.useState(1)

  React.useEffect(() => {
    const resolution = { width: 50, height: 50 }
    CanvasEngine.initialize(
      canvasRef.current,
      resolution,
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight
    ).then(size => {
      setCanvasStyle({ ...size, ...styles.canvas })
      setSize(size)
      setScale(size.width / resolution.width) //pixelSize == scale or zoom
      setCanvasIsReady(true)
    })
  }, [])

  return (
    <CanvasContext.Provider value={{ size, scale, canvasRef: canvasRef.current }}>
      <div ref={containerRef} style={styles.container}>
        <Background />
        <canvas id='the-canvas'
          ref={canvasRef}
          style={canvasStyle}
        >
        </canvas>
        {canvasIsReady && children}
      </div>
    </CanvasContext.Provider>
  )
}
