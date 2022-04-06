export default class MouseListener {
  constructor(){
    this.listeners = []
  }
  
  initialize(width, height, resolution, canvasRef) {
    this.width = width
    this.height = height
    this.resolution = resolution
    this.canvasRef = canvasRef
  }

  addMouseListener(listener) {
    this.listeners.push(listener)
  }

  onMouseMove = (mouseEvent) => {
    this.listeners.forEach(listener => {    
      const pixelSize = this.width / this.resolution.x;
      const canvasX = mouseEvent.clientX - this.canvasRef.offsetLeft
      const canvasY = mouseEvent.clientY - this.canvasRef.offsetTop
      const pixelX = Math.floor(canvasX / pixelSize)
      const pixelY = Math.floor(canvasY / pixelSize)
      listener(canvasX, canvasY, pixelX, pixelY)
    });
  }
}
