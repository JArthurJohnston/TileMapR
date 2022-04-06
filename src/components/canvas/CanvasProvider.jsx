import React from "react"
import CanvasEngine from "./engine/CanvasEngine"

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  canvas: {
    width: '100%',
    height: '100%',
    cursor: 'crosshair'
  }
}

export const CanvasContext = React.createContext()

export function CanvasProvider({ children, resolution }) {
  const [canvasStyle, setCanvasStyle] = React.useState({})
  const [size, setSize] = React.useState({width: 0, height: 0})
  const [canvasIsReady, setCanvasIsReady] = React.useState(false)
  const canvasRef = React.useRef()
  const containerRef = React.useRef()
  const [scale, setScale] = React.useState(1)

  React.useEffect(() => {
    CanvasEngine.initialize(
      canvasRef.current, 
      resolution, 
      containerRef.current.offsetWidth, 
      containerRef.current.offsetHeight
    ).then(size => {
      setCanvasStyle(size)
      setSize(size)
      setScale(size.width / resolution.x) //pixelSize == scale or zoom
      setCanvasIsReady(true)
    })
  }, [])

  return (
    <CanvasContext.Provider value={{ resolution, size, scale }}>
      <div ref={containerRef} style={styles.container}>
        <canvas id='the-canvas' ref={canvasRef} style={canvasStyle} onMouseMove={CanvasEngine.MouseListener.onMouseMove}>
        </canvas>
          {canvasIsReady && children}
      </div>
    </CanvasContext.Provider>
  )
}
