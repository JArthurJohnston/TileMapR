import Draw from "../../../drawing"
import calculateWindowSize from "../calculateWindowSize"
import MouseListener from "./MouseListener"

function setupContext(canvasRef) {
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
    const { width, height } = calculateWindowSize(resolution.x, resolution.y, maxWidth, maxHeight)
    this.mouseListener.initialize(width, height, resolution, canvasRef)
    this.initPixels(resolution)
    this.context = setupContext(canvasRef, width, height)
    this.pixelSize = width / resolution.x;
    this.canvasRef = canvasRef
    this.resolution = resolution
    this.width = width
    this.height = height
    canvasRef.width = width
    canvasRef.height = height
    return new Promise((resolve) => {
      resolve({ width, height })
    })
  }

  initPixels = (resolution) => {
    const storedPixels = localStorage.getItem('pixels')
    if(storedPixels) {
      this.pixels = JSON.parse(storedPixels)
    } else {
      this.pixels = Array(resolution.x).fill().map(() => Array(resolution.y));
    }
  }

  get MouseListener() {
    return this.mouseListener
  }

  clear() {
    // this.context.clearRect(0, 0, this.width, this.height)
  }

  drawPixel(x, y, color) {
    this.pixels[x][y] = color
    Draw.Rectangle()
      .starting(x * this.pixelSize, y * this.pixelSize)
      .size(this.pixelSize, this.pixelSize)
      .color(color)
      .on(this.context)
  }

  updateCache = () => {
    localStorage.setItem('pixels', JSON.stringify(this.pixels))
  }

  draw() {
    for (let y = 0; y < this.resolution.y; y++) {
      for (let x = 0; x < this.resolution.x; x++) {
        const color = this.pixels[x][y]
        if (color) {
          this.drawPixel(x, y, color)
        }
      }
    }
  }

  paintPixel(x, y, color) {
    this.drawPixel(x, y, color)
    this.updateCache()
  }

  paint() {
    this.draw()
    this.updateCache()
  }

  addLayer(canvasRef) {
    canvasRef.width = this.width
    canvasRef.height = this.height
  }
}

const CanvasEngine = new CanvasEngineClass()
export default CanvasEngine
// a little singleton pattern magic
