import React from 'react'
import { PaintbrushContext } from '../../data'
import { CanvasContext } from './CanvasProvider'
import CanvasEngine from './engine/CanvasEngine'

export default function DrawingArea() {
  const { color } = React.useContext(PaintbrushContext)
  const { size, canvasRef } = React.useContext(CanvasContext)
  const [isPainting, setIsPainting] = React.useState(false)

  const style = { width: size.width, height: size.height, position: 'absolute', zIndex: 2 }

  const coordsFromMouseEvent = (mouseEvent) => {
    const canvasX = mouseEvent.clientX - canvasRef.offsetLeft
    const canvasY = mouseEvent.clientY - canvasRef.offsetTop
    const pixelX = Math.floor(canvasX / CanvasEngine.pixelSize)
    const pixelY = Math.floor(canvasY / CanvasEngine.pixelSize)
    return { canvasX, canvasY, pixelX, pixelY }
  }

  const drawSection = (mouseEvent) => {
    if (isPainting) {
      drawPixel(mouseEvent)
      // redraw()
    }
  }

  const redraw = () => {
    CanvasEngine.clear()
    CanvasEngine.draw()
  }

  const drawPixel = mouseEvent => {
    const { pixelX, pixelY } = coordsFromMouseEvent(mouseEvent)
    CanvasEngine.paintPixel(pixelX, pixelY, color)
  }

  const handleMouseDown = mouseEvent => {
    drawPixel(mouseEvent)
    setIsPainting(true)
  }

  const handleMouseUp = (mouseEvent) => {
    drawPixel(mouseEvent)
    setIsPainting(false)
  }

  return (
    <div style={style}
      onMouseMove={drawSection}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  )
}