import { useContext, useEffect } from "react"
import { SettingsContext } from "../../data";
import { Line } from "../../drawing/shapes";
import { CanvasContext } from "./CanvasProvider"

export default function Grid() {
  const {resolution, size, draw} = useContext(CanvasContext)
  const {showGrid} = useContext(SettingsContext)
  
    if(showGrid){
      draw((context) => {
        const {width, height} = size;
        const {x, y} = resolution;
        const pixelSize = width / x;
        
        for (let w = pixelSize; w < width; w += pixelSize) {
          Line()
          .color('#808080')
          .starting(w, 0)
          .ending(w, height)
          .color('blue')
          .on(context)
        }
    
        for (let h = pixelSize; h < height; h+=pixelSize) {
          Line()
          .color('darkgrey')
          .starting(0, h)
          .ending(width, h)
          .on(context)
        }
      })
    } else {
      draw()
    }

  return (<></>)
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