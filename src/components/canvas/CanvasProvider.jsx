import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { createContext, useCallback, useEffect, useRef, useState } from "react"
import { Rectangle } from "../../drawing/shapes"
import calculateWindowSize from "./calculateWindowSize"

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

export const CanvasContext = createContext()

export function CanvasProvider({ children, resolution }) {
  const [context, setContext] = useState(null)
  const [canvasStyle, setCanvasStyle] = useState(styles.canvas)
  const [size, setSize] = useState()
  const canvasRef = useRef()
  const containerRef = useRef()
  const [drawings, setDrawings] = useState([])

  const clear = useCallback(() => {
    if(size) {
      const {width, height} = size
      Rectangle()
        .starting(0, 0)
        .size(width, height)
        .on(context)
    }
  }, [context, size])

  const onDraw = useCallback((drawFn) => {
      setDrawings([...drawings, drawFn])
  })

  const draw = useCallback((drawFn=() => {}) => {
    clear()
    drawFn(context)
  }, [context])
  
  useEffect(() => {
    clear()
    drawings.forEach(drawFn => {
      drawFn(context)
    });
  }, [drawings, context])


  useEffect(() => {
    if (resolution) {
      const { x, y } = resolution
      const containerWidth = containerRef.current.offsetWidth
      const containerHeight = containerRef.current.offsetHeight
      const { width, height } = calculateWindowSize(x, y, containerWidth, containerHeight)

      canvasRef.current.width = width;
      canvasRef.current.height = height;

      const newStyle = {
        ...styles.canvas,
        width: `${width}px`,
        height: `${height}px`
      }
      setCanvasStyle(newStyle)
      setSize({width, height})
    }
  }, [resolution])

  useEffect(() => {
    const drawingContext = canvasRef.current.getContext('2d')
    drawingContext.imageSmoothingEnabled = false

    setContext(drawingContext)
  }, [])

  const isCanvasReady = useCallback(() => {
    return context && canvasRef && size && resolution
  }, [context, canvasRef, size, resolution])

  return (
    <CanvasContext.Provider value={{ context, canvasRef, resolution, size, onDraw, draw }}>
      <div ref={containerRef} style={styles.container}>
        <canvas id='the-canvas' ref={canvasRef} style={canvasStyle}>
          {isCanvasReady() && children}
        </canvas>
      </div>
    </CanvasContext.Provider>
  )
}
