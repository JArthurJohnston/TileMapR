import calculateWindowSize from "../calculateWindowSize"
import MouseListener from "./MouseListener"

function setupContext(canvasRef, width, height) {
  const context = canvasRef.getContext('2d')
  context.imageSmoothingEnabled = false //keep things pixelated
  return context
}

class CanvasEngineClass {

  constructor() {
    this.mouseListener = new MouseListener()
    this.layers = []
  }

  initialize(canvasRef, resolution, maxWidth, maxHeight) {
    const {width, height} = calculateWindowSize(resolution.x, resolution.y, maxWidth, maxHeight)
    this.mouseListener.initialize(width, height, resolution, canvasRef)
    this.context = setupContext(canvasRef, width, height)
    this.canvasRef = canvasRef
    this.resolution = resolution
    this.width = width
    this.height = height
    canvasRef.width = width
    canvasRef.height = height
    return new Promise((resolve)=> {
      resolve({width, height})
    })
  }

  get MouseListener() {
    return this.mouseListener
  }

  clear() {
    // Draw.Rectangle()
    // .starting(0, 0)
    // .size(this.width, this.height)
    // .on(this.context)
    this.context.clearRect(0,0,this.width, this.height)
  }

  paint(drawing){
    drawing(this.context)
  }

  addLayer(canvasRef) {
    canvasRef.width = this.width
    canvasRef.height = this.height
  }

}

const CanvasEngine = new CanvasEngineClass()
export default CanvasEngine
// a little singleton pattern magic
