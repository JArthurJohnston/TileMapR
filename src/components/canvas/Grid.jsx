import React from "react"
import { SettingsContext } from "../../data";
import Draw from "../../drawing";
import { CanvasContext } from "./CanvasProvider"

export default function Grid() {
  const { size, scale } = React.useContext(CanvasContext)
  const { showGrid } = React.useContext(SettingsContext)
  const canvasRef = React.useRef()

  const gridStyle = {
    width: size.width,
    height: size.height,
    position: 'absolute',
    visibility: showGrid ? 'visible' : 'hidden'
  }

  React.useEffect(() => {
    const context = canvasRef.current.getContext('2d')
    context.imageSmoothingEnabled = false
    canvasRef.current.width = size.width
    canvasRef.current.height = size.height
    drawGrid()
  }, [])

  const drawGrid = () => {
    const context = canvasRef.current.getContext('2d')
    const {width, height} = size
    for (let w = scale; w < width; w += scale) {
      Draw.Line()
        .color('#808080')
        .starting(w, 0)
        .ending(w, height)
        .color('blue')
        .on(context)
    }

    for (let h = scale; h < height; h += scale) {
      Draw.Line()
        .color('darkgrey')
        .starting(0, h)
        .ending(width, h)
        .on(context)
    }
  }

  return (<canvas ref={canvasRef} style={gridStyle}/>)
}

// makes a cool shape
// for (let h = pixelSize; h < height; h+=pixelSize) {
//   Line()
//   .on(context)
//   // .color('darkgrey')
//   .starting(0, h)
//   .ending(h, width)
//   .draw()
// }