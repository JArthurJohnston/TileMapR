import React, { useCallback } from 'react'
import { PaintbrushContext } from '../../data'
import { CanvasContext } from './CanvasProvider'
import CanvasEngine from './engine/CanvasEngine'

export default function DrawingArea() {
  const { color, tool } = React.useContext(PaintbrushContext)
  const { size, canvasRef } = React.useContext(CanvasContext)
  const [isPainting, setIsPainting] = React.useState(false)

  function coordsFromMouseEvent(mouseEvent) {
    const canvasX = mouseEvent.clientX - canvasRef.offsetLeft
    const canvasY = mouseEvent.clientY - canvasRef.offsetTop
    const pixelX = Math.floor(canvasX / CanvasEngine.pixelSize)
    const pixelY = Math.floor(canvasY / CanvasEngine.pixelSize)
    return { pixelX, pixelY }
  }

  const style = { width: size.width, height: size.height, position: 'absolute', zIndex: 2 }

  const drawSection = (mouseEvent) => {
    if (isPainting) {
      drawPixel(mouseEvent)
    }
  }

  const drawPixel = useCallback(mouseEvent => {
    const { pixelX, pixelY } = coordsFromMouseEvent(mouseEvent)
    tool.action(pixelX, pixelY, color)
  }, [tool])

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