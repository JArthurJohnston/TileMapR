const EventTypes = {
  MOVED: 'mousemove',
  DOWN: 'mousedown',
  UP: 'mouseup'
}
export default class MouseListener {
  constructor(){
    this.listeners = {
      [EventTypes.MOVED]: [],
      [EventTypes.DOWN]: [],
      [EventTypes.UP]: []
    }
  }
  
  initialize(width, height, resolution, canvasRef) {
    this.width = width
    this.height = height
    this.resolution = resolution
    this.canvasRef = canvasRef
    this.pixelSize = width / resolution.width;
  }

  addMouseListener(listener, eventType) {
    this.listeners[eventType].push(listener)
  }

  coordsFromMouseEvent = (mouseEvent) => {
    const canvasX = mouseEvent.clientX - this.canvasRef.offsetLeft
    const canvasY = mouseEvent.clientY - this.canvasRef.offsetTop
    const pixelX = Math.floor(canvasX / this.pixelSize)
    const pixelY = Math.floor(canvasY / this.pixelSize)
    return {canvasX, canvasY, pixelX, pixelY}
  }

  handleMouseEvent = (mouseEvent) => {
    this.listeners[mouseEvent.type].forEach(listener => {
      const {canvasX, canvasY, pixelX, pixelY} = this.coordsFromMouseEvent(mouseEvent)
      listener(canvasX, canvasY, pixelX, pixelY)
    });
  }
}
